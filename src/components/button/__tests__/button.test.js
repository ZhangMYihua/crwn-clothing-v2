import { render, screen } from '@testing-library/react';
import Button, { BUTTON_TYPE_CLASSES } from '../button.component';

describe('button tests', () => {
  test('should render base button when nothing is passed', () => {
    render(<Button>Test</Button>);

    expect(screen.getByRole('button')).toHaveStyle('background-color: black');
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  test('should be disabled if isLoading is true', () => {
    render(<Button isLoading={true}>Test</Button>);

    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('should render google button when passed google type', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google}>Test</Button>);

    expect(screen.getByRole('button')).toHaveStyle('background-color: #4285f4');
  });

  test('should render inverted button when passed inverted type', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Test</Button>);

    expect(screen.getByRole('button')).toHaveStyle('background-color: white');
  });
});
