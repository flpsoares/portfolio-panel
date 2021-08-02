import { Container, Title, Button } from './style'

import { HiPlus } from 'react-icons/hi'

interface ProjectProps {
  title: string
}

export const Project: React.FC<ProjectProps> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Button>
        <HiPlus size={24} />
      </Button>
    </Container>
  )
}
