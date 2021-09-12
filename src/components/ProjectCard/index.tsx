import { Container, Title, Button, Wrapper } from './style'

import { HiPlus } from 'react-icons/hi'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { AiOutlineEdit } from 'react-icons/ai'

import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { ProjectContext } from '../../contexts/ProjectContext'
import { ModalContext } from '../../contexts/ModalContext'

export const ProjectCard: React.FC<App.Project> = ({
  id,
  name,
  description,
  technologies,
  images,
  link
}) => {
  const { openModalDeleteProject, getDeleteInfo } = useContext(ModalContext)

  const history = useHistory()
  const { getProjectInfo } = useContext(ProjectContext)

  const openInfo = () => {
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

  const removeProject = () => {
    const parseId = id.toString()
    openModalDeleteProject()
    getDeleteInfo(parseId, name)
  }

  return (
    <Container>
      <Title>{name}</Title>
      <Wrapper>
        <Button backgroundColor="var(--primary)" onClick={openInfo}>
          <HiPlus size={24} />
        </Button>
        <Button backgroundColor="var(--primary)">
          <AiOutlineEdit size={24} />
        </Button>
        <Button backgroundColor="#F44336" onClick={removeProject}>
          <IoMdRemoveCircleOutline size={24} />
        </Button>
      </Wrapper>
    </Container>
  )
}
