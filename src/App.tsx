import React from 'react'

import './App.css'
import styled from '@emotion/styled'
import theme from './themes/theme'

function App() {
  return (
    <div className="App">
      <Text>Hello design token.</Text>
    </div>
  )
}

const Text = styled.div`
  color: ${theme.text.danger.value};
  border-radius: ${theme.borderRadius.lg.value + 'px'};

  width: 140px;
  margin: 0 auto;
  border: 1px solid #eee;
  padding: 20px;
`

export default App
