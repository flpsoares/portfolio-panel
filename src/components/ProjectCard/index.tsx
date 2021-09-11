import { Container, Title, Button, Wrapper } from './style'

import { HiPlus } from 'react-icons/hi'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { AiOutlineEdit } from 'react-icons/ai'

import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { ProjectContext } from '../../contexts/ProjectContext'

export const ProjectCard: React.FC<App.Project> = ({
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
      <Wrapper>
        <Button backgroundColor="var(--primary)" onClick={handleClick}>
          <HiPlus size={24} />
        </Button>
        <Button backgroundColor="var(--primary)" onClick={handleClick}>
          <AiOutlineEdit size={24} />
        </Button>
        <Button backgroundColor="#F44336" onClick={handleClick}>
          <IoMdRemoveCircleOutline size={24} />
        </Button>
      </Wrapper>
    </Container>
  )
}
