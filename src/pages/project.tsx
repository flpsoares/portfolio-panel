import React, { useContext } from 'react'
import { ProjectContext } from '../contexts/ProjectContext'
import {
  Container,
  Description,
  Link,
  Images,
  Image,
  Technologies,
  Technology,
  Title,
  Wrapper
} from './styles/project'

export const Project: React.FC = () => {
  const {
    projectName,
    projectDescription,
    projectTechnologies,
    projectImages,
    projectLink
  } = useContext(ProjectContext)

  return (
    <Container>
      <Title>{projectName}</Title>
      <Technologies>
        {projectTechnologies?.map((technology: App.Technology) => {
          return <Technology key={technology.id}>{technology.name}</Technology>
        })}
      </Technologies>
      <Wrapper>
        <Description>{projectDescription}</Description>
        {projectLink ? (
          <Link target="_blank" href={projectLink}>
            Ir ao site
          </Link>
        ) : (
          <Images>
            {projectImages?.map((image) => {
              return <Image key={image.id} src={image.url} alt={image.filename} />
            })}
          </Images>
        )}
      </Wrapper>
    </Container>
  )
}
