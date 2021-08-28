import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

import GlobalStyle from './styles/global'
import { ModalContextProvider } from './contexts/ModalContext'

import { BrowserRouter } from 'react-router-dom'
import { ProjectProvider } from './contexts/ProjectContext'

ReactDOM.render(
  <React.StrictMode>
    <ProjectProvider>
      <ModalContextProvider>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </ModalContextProvider>
    </ProjectProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
