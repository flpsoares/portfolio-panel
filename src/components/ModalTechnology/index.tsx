import {
  Box,
  BoxWrapper,
  CloseButton,
  Container,
  NewTechnology,
  OverlayBackdrop,
  OverlayBody
} from './style'

import { MdClose } from 'react-icons/md'
import { CheckTech } from '../CheckTech'
import { FormEvent, useContext, useEffect, useRef, useState } from 'react'

import { ProjectContext } from '../../contexts/ProjectContext'
import { ModalContext } from '../../contexts/ModalContext'
import ProjectApi from '../../services/api/ProjectApi'

export const ModalTechnology: React.FC = () => {
  const { closeModalTechnology } = useContext(ModalContext)
  const {
    technologies,
    technologyWasAdded,
    listTechnologies,
    addedTechnology,
    setTechnologyWasAdded
  } = useContext(ProjectContext)
  const nameRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setTechnologyWasAdded(false)
    listTechnologies()
  }, [technologyWasAdded])

  function closeModalClickingInOverlay(e: any) {
    if (e.currentTarget === e.target) {
      closeModalTechnology()
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    ProjectApi.createTechnology({ name: nameRef.current?.value }).then(() => {
      if (nameRef.current !== null) {
        nameRef.current.value = ''
        addedTechnology()
      }
    })
  }

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <OverlayBackdrop />
      <OverlayBody onClick={closeModalClickingInOverlay} />
      <Box initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ opacity: 0 }}>
        <BoxWrapper>
          {technologies
            ?.map((tech) => {
              return <CheckTech key={tech.id} num={tech.id} children={tech.name} />
            })
            .reverse()}
        </BoxWrapper>
        <NewTechnology onSubmit={handleSubmit}>
          <input
            ref={nameRef}
            autoFocus
            type="text"
            placeholder="Add new technology"
          />
          <button type="submit">Create</button>
        </NewTechnology>
        <CloseButton onClick={closeModalTechnology} type="button">
          <MdClose size={26} />
        </CloseButton>
      </Box>
    </Container>
  )
}
