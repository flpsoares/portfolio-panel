import { Container, Primary, Secondary, Tertiary } from './style'

import { Link } from 'react-router-dom'
import { ReactNode } from 'react'

interface LinkProps {
  title: string
  path: string
  icon: ReactNode
  isActive?: boolean
}

export const ButtonSideBar: React.FC<LinkProps> = ({
  title,
  path,
  icon,
  isActive
}) => {
  return (
    <Container>
      <Primary isActive={!!isActive}></Primary>
      <Secondary isActive={!!isActive}>
        <Link to={path}>
          {icon}
          {title}
        </Link>
      </Secondary>
      <Tertiary isActive={!!isActive}></Tertiary>
    </Container>
  )
}
