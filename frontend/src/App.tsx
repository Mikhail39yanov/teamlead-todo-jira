import React from 'react'
import ReactDOM from 'react-dom'
import SectionMessage from '@atlaskit/section-message'
import styled from 'styled-components'

const ContainerWrapper = styled.div`
  min-width: 780px;
  max-width: 780px;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: block;
`

export default function App() {
  return (
    <ContainerWrapper>
      <SectionMessage title='TodoList Tasks'>
        <div>qwerty</div>
      </SectionMessage>
    </ContainerWrapper>
  )
}

window.addEventListener('load', () => {
  ReactDOM.render(<App />, document.getElementById('root'))
})
