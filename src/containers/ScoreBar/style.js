import styled from 'styled-components'

import { Flex } from 'components'

export const ScoreBarStyle = styled.div`
  border: 1px solid black;
  height: 25px;
  border-radius: 5px;
  position: relative;
`

export const ScoreStatusStyle = styled(Flex)`
  flex-grow: 1;
  margin-bottom: 5px;
`

export const BarStyle = styled.div`
  position: absolute;
  height: 25px;
`

export const BlackStyle = styled(BarStyle)`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: black;
  left: 0;
  width: ${props => props.width}%;
`

export const GrayStyle = styled(BarStyle)`
  border-top-left-radius: ${props => (props.left === 0 ? '5px' : '0px')}
  border-bottom-left-radius: ${props => (props.left === 0 ? '5px' : '0px')}
  left: ${props => props.left}%;
  width: ${props => props.width}%;
  background-color: #717171;
`

export const ScoreTextStyle = styled.p`
  margin: 0px;
`

export const LightGrayStyle = styled(BarStyle)`
  border-top-left-radius: ${props => (props.left === 0 ? '5px' : '0px')}
  border-bottom-left-radius: ${props => (props.left === 0 ? '5px' : '0px')}
  border-top-right-radius: ${props => (props.width === 100 ? '5px' : '0px')}
  border-bottom-right-radius: ${props => (props.width === 100 ? '5px' : '0px')}
  left: ${props => props.left}%;
  width: ${props => props.width}%;
  background-color: #d2d2d2;
`
