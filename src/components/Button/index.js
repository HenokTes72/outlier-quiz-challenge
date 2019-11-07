import styled from 'styled-components'

export default styled.div`
  width: 200px;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  color: ${props => (props.isActive ? 'white' : 'black')}
  opacity: ${props => (props.isAnswered && !props.isActive ? 0.5 : 1)}
  background-color: ${props =>
    props.isAnswered ? (props.isActive ? 'black' : '#ccc') : '#ececec'}
  padding: 3px;

  &:hover {
    background-color: ${props => (props.isAnswered ? 'default' : 'black')};
    color: ${props => (props.isAnswered ? 'default' : 'white')};
    cursor: ${props =>
    props.isAnswered ? 'not-allowed !important' : 'pointer'};
  }
`
