import { Container } from './styles/app'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { SideBar } from './components/SideBar'
import { Home } from './pages/home'
import { Create } from './pages/create'
import { Edit } from './pages/edit'
import { Remove } from './pages/remove'

export const App: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={Create} />
        <Route path="/edit" component={Edit} />
        <Route path="/remove" component={Remove} />
      </Switch>
    </Container>
  )
}
