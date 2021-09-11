import { useState, useEffect } from 'react'

import { Project } from '../components/Project'
import { Title } from '../components/Title'
import { api } from '../services/api'
import { Container, Wrapper } from './styles/home'

export const Home: React.FC = () => {
  const [projects, setProjects] = useState<App.Project[]>([])

  useEffect(() => {
    api.get('projects').then((res) => setProjects(res.data))
  }, [])

  return (
    <Container>
      <Title>Home</Title>
      <Wrapper>
        {projects.map((project: App.Project) => {
          return (
            <Project
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
