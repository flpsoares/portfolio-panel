import { ChangeEvent, useRef, useState, useContext, ErrorInfo } from 'react'
import { ImagePreview } from '../components/ImagePreview'
import { Title } from '../components/Title'
import {
  Container,
  Input,
  InputWrapper,
  Label,
  TextArea,
  Wrapper,
  InputFile,
  ImageWrapper,
  FormButton,
  SwitchLabel,
  WrapperHeader,
  TechnologiesButton
} from './styles/create'

import Switch from 'react-switch'

import { ModalTechnology } from '../components/ModalTechnology'
import { ModalContext } from '../contexts/ModalContext'
import { AnimatePresence } from 'framer-motion'
import { ProjectContext } from '../contexts/ProjectContext'
import ProjectApi from '../services/api/ProjectApi'

export const Create: React.FC = () => {
  const { modalTechnologyIsOpen, openModalTechnology, openAlert } =
    useContext(ModalContext)
  const { choosedTechnologies } = useContext(ProjectContext)

  const nameRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)
  const linkRef = useRef<HTMLInputElement>(null)

  const [imagesChoosen, setImagesChoosen] = useState<any>(0)
  const [srcImage, setSrcImage] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const [checked, setChecked] = useState(true)

  const fileRef = useRef<HTMLInputElement>(null)
  const handleChecked = (checked: boolean) => {
    setChecked(!checked)
  }

  const verifyFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && fileRef.current?.files) {
      setFiles(Array.from(fileRef.current.files))
      setImagesChoosen(fileRef.current.files.length)
    }
  }

  const listImages = (e: ChangeEvent<HTMLInputElement>) => {
    return console.log(e.target.files)
  }

  const handleOnChanged = (e: ChangeEvent<HTMLInputElement>) => {
    listImages(e)
    verifyFile(e)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    console.log(nameRef.current?.value)

    if (checked === true && linkRef.current?.value === '') {
      return openAlert('Link cannot be null')
    }

    // if (!checked) {
    //   ProjectApi.createWithImage(dataWithImage)
    // }

    ProjectApi.createWithLink({
      name: nameRef.current?.value,
      description: descriptionRef.current?.value,
      link: linkRef.current?.value,
      technologies: choosedTechnologies
    })
      .then(() => openAlert('Project registered', true))
      .catch((e) => openAlert(e.response.data.errors[0].message))
  }

  return (
    <Container>
      <AnimatePresence>
        {modalTechnologyIsOpen && <ModalTechnology />}
      </AnimatePresence>
      <Title>Create</Title>
      <Wrapper>
        <WrapperHeader>
          <TechnologiesButton type="button" onClick={openModalTechnology}>
            Choose technologies
          </TechnologiesButton>
          <SwitchLabel>
            <span>Is the site online?</span>
            <Switch
              onColor="#417A95"
              onChange={() => handleChecked(checked)}
              checked={checked}
              className="switch"
            />
          </SwitchLabel>
        </WrapperHeader>
        <InputWrapper>
          <Label htmlFor="name">Name</Label>
          <Input ref={nameRef} id="name" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="description">Description</Label>
          <TextArea ref={descriptionRef} id="description" />
        </InputWrapper>
        {checked ? (
          <InputWrapper>
            <Label htmlFor="link">Link</Label>
            <Input ref={linkRef} id="link" />
          </InputWrapper>
        ) : (
          <>
            <InputFile>
              <label htmlFor="file">CHOOSE IMAGES</label>
              <p>
                {imagesChoosen} {imagesChoosen === 1 ? 'file' : 'files'} choosen
              </p>
              <input
                onChange={handleOnChanged}
                ref={fileRef}
                id="file"
                type="file"
                multiple
                accept="image/png, image/jpg, image/jpeg"
              />
            </InputFile>
            <ImageWrapper>
              {files.map((file, index) => {
                return (
                  <ImagePreview
                    key={index}
                    name={file.name}
                    size={file.size}
                    file={file}
                  />
                )
              })}
            </ImageWrapper>
          </>
        )}
        <FormButton onClick={handleSubmit}>Create</FormButton>
      </Wrapper>
    </Container>
  )
}
