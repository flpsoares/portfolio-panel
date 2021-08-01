import { Container, Primary, Secondary, Tertiary } from './style'

import { Link } from 'react-router-dom'
import { ReactNode } from 'react'

interface LinkProps {
  title: string
  path: string
  icon: ReactNode
}

export const ButtonSideBar: React.FC<LinkProps> = ({ title, path, icon }) => {
  return (
    <Container>
      <Primary></Primary>
      <Secondary>
        <Link to={path}>
          {icon}
          {title}
        </Link>
      </Secondary>
      <Tertiary></Tertiary>
    </Container>
  )
}
