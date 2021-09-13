import { useState, useEffect, useContext } from 'react'

import { ProjectCard } from '../components/ProjectCard'
import { Title } from '../components/Title'
import { api } from '../services/api'
import { Container, Wrapper } from './styles/home'

import { ModalDeleteProject } from '../components/ModalDeleteProject'
import { ModalContext } from '../contexts/ModalContext'

import { AnimatePresence } from 'framer-motion'
import { ProjectContext } from '../contexts/ProjectContext'
import { ModalEditProject } from '../components/ModalEditProject'
import ProjectApi from '../services/api/ProjectApi'

export const Home: React.FC = () => {
  const { modalDeleteProjectIsOpen, modalEditProjectIsOpen } =
    useContext(ModalContext)
  const { updateList } = useContext(ProjectContext)

  const [projects, setProjects] = useState<App.Project[]>([])

  useEffect(() => {
    ProjectApi.listProjects().then((res) => setProjects(res))
  }, [updateList])

  return (
    <Container>
      <AnimatePresence>
        {modalDeleteProjectIsOpen && <ModalDeleteProject />}
        {modalEditProjectIsOpen && <ModalEditProject />}
      </AnimatePresence>
      <Title>Home</Title>
      <Wrapper>
        {projects.map((project: App.Project) => {
          return (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              images={project.images}
              link={project.link}
            />
          )
        })}
      </Wrapper>
    </Container>
  )
}
