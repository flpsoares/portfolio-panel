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

import { ModalCarousel } from '../components/ModalCarousel'
import { ModalContext } from '../contexts/ModalContext'

import { AnimatePresence } from 'framer-motion'

export const Project: React.FC = () => {
  const {
    projectName,
    projectDescription,
    projectTechnologies,
    projectImages,
    projectLink
  } = useContext(ProjectContext)

  const { modalCarouselIsOpen, openModalCarousel } = useContext(ModalContext)

  return (
    <Container>
      <AnimatePresence>{modalCarouselIsOpen && <ModalCarousel />}</AnimatePresence>
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
            {projectImages?.map((image, index) => {
              return (
                <Image
                  onClick={() => openModalCarousel(index)}
                  key={image.id}
                  src={image.url}
                  alt={image.filename}
                />
              )
            })}
          </Images>
        )}
      </Wrapper>
    </Container>
  )
}
