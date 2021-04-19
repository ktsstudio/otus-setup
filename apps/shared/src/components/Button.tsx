import * as React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 8px 16px;
  border: 1px solid gray;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
`;

const Button: React.FC = () => {
  return <StyledButton>Кнопка</StyledButton>;
};

export default Button;
