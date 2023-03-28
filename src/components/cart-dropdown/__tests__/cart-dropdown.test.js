import { screen, fireEvent } from '@testing-library/react';

import CartDropdown from '../cart-dropdown.component';
import { renderWithProviders } from '../../../utils/test-utils';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Cart Dropdown tests', () => {
  test('It should render empty message if no products are present', () => {
    renderWithProviders(<CartDropdown />, {
      preloadedState: {
        cart: {
          cartItems: [],
        },
      },
    });

    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });

  test('It should render items in dropdown if items are present', () => {
    const initialCartItems = [
      { id: 1, name: 'Item A', imageUrl: 'test', price: 10, quantity: 1 },
      { id: 2, name: 'Item B', imageUrl: 'test', price: 20, quantity: 2 },
    ];

    renderWithProviders(<CartDropdown />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItems,
        },
      },
    });

    expect(screen.queryByText('Your cart is empty')).toBeNull();
    expect(screen.getByText('Item A')).toBeInTheDocument();
    expect(screen.getByText('Item B')).toBeInTheDocument();
  });

  test('Go to checkout button should navigate to checkout page', () => {
    renderWithProviders(<CartDropdown />, {
      preloadedState: {
        cart: {
          cartItems: [],
        },
      },
    });

    const button = screen.queryByRole('button');
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith('/checkout');
  });
});
