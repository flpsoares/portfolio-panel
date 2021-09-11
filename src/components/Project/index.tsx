import { Container, Title, Button } from './style'

import { HiPlus } from 'react-icons/hi'

import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { ProjectContext } from '../../contexts/ProjectContext'

export const Project: React.FC<App.Project> = ({
  id,
  name,
  description,
  technologies,
  images,
  link
}) => {
  const history = useHistory()
  const { getProjectInfo } = useContext(ProjectContext)

  const handleClick = () => {
    getProjectInfo({
      id,
      name,
      description,
      technologies,
      images,
      link
    })
    history.push('/project')
  }

  return (
    <Container>
      <Title>{name}</Title>
      <Button onClick={handleClick}>
        <HiPlus size={24} />
      </Button>
    </Container>
  )
}
