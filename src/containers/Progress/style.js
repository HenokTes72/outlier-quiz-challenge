import styled from 'styled-components'

export const ProgressBarStyle = styled.div`
  height: 15px;
  width: ${props => props.progressPercent}%;
  background-color: #a9aaa9;
  position: absolute;
  top: 0;
  left: 0;
`
