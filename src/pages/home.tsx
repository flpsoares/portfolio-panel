import { useState, useEffect } from 'react'

import { Project } from '../components/Project'
import { Title } from '../components/Title'
import { api } from '../services/api'
import { Container, Wrapper } from './styles/home'

interface ProjectProps {
  id: number
  name: string
}

export const Home: React.FC = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([])

  useEffect(() => {
    api.get('projects').then((res) => setProjects(res.data))
  }, [])

  return (
    <Container>
      <Title>Home</Title>
      <Wrapper>
        {projects.map((project) => {
          return <Project key={project.id} title={project.name} />
        })}
      </Wrapper>
    </Container>
  )
}
