import React from 'react';
import styled from 'styled-components'

const ExampleComponent = () => {
  // props.children
  return (
    <StyledExample>
      <p>这是一个带有styled-components的样式</p>
    </StyledExample>
  )
}
// css in js 解决了样式的隔离问题
const StyledExample = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  p {
    color: red;
  }
`;

export default ExampleComponent;