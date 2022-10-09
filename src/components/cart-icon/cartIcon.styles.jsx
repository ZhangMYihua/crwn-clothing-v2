import styled from "styled-components";


// export const ShoppingIcon = styled(ShoppingSvg)`
//   width: 24px;
//   height: 24px;
// `

export const IconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg{
    width: 24px;
    height: 24px;
  }
`

export const ItemsCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`
