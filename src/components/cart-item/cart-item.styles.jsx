import styled from 'styled-components'

export const CartItemsContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`

// .cart-item-container {
//   width: 100%;
//   display: flex;
//   height: 80px;
//   margin-bottom: 15px;

//   img {
//     width: 30%;
//   }

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  .name {
    font-size: 16px;
  }
`

//   .item-details {
//     width: 70%;
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     padding: 10px 20px;

//     .name {
//       font-size: 16px;
//     }
//   }
// }