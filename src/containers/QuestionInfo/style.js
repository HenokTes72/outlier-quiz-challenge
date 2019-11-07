import styled from 'styled-components'

export const RateStyle = styled.img`
  height: 10px;
  width: 10px;
  opacity: ${props => (props.disabled ? 0.2 : 1)};
`
