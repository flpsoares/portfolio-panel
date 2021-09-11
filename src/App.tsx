import { Container } from './styles/app'

import { Switch, Route } from 'react-router-dom'

import { SideBar } from './components/SideBar'
import { Home } from './pages/home'
import { Create } from './pages/create'
import { Project } from './pages/project'

import { Alert } from './components/Alert'
import { useContext } from 'react'
import { ModalContext } from './contexts/ModalContext'
import { AnimatePresence } from 'framer-motion'

export const App: React.FC = () => {
  const { alertIsOpen, alertContent, alertIsSuccess } = useContext(ModalContext)

  return (
    <Container>
      <AnimatePresence>
        {alertIsOpen && <Alert content={alertContent} isSuccess={alertIsSuccess} />}
      </AnimatePresence>
      <SideBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={Create} />
        <Route path="/project" component={Project} />
      </Switch>
    </Container>
  )
}
