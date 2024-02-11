import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 30px;
`

export const Title = styled.h2`
font-size: 28px;
margin-bottom: 25px;
cursor: pointer;
`

export const Preview = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 20px;
`
