import styled from 'styled-components';

const StyledHeaders = styled.div.attrs({
  className: 'row',
})`
  border: 2px solid ${(props) => props.borderColor};
  margin: 4px;
  background: linear-gradient(
    to right,
    ${(props) => props.bgColor},
    rgba(0, 0, 0, 0)
  );
`;

export default StyledHeaders;
