import styled from 'styled-components'

export const CheckhoutContainer = styled.div`
width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
    ul{
      list-style: none;
      width: 100%;
      padding: 10px 0;
      display: flex;
      justify-content:space-between;
      border-bottom: 1px solid darkgrey;
    }
    li{
      text-transform: capitalize;
      width: 23%;

      &:last-child {
        width: 8%;
      } 
    }
` 
export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px
`
