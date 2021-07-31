import { Container } from './style'

import { Link } from 'react-router-dom'

export const SideBar: React.FC = () => {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/create">Criar</Link>
      <Link to="/edit">Editar</Link>
      <Link to="/remove">Remover</Link>
    </Container>
  )
}
