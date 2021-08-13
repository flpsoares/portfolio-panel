import { ChangeEvent, useRef, useState } from 'react'
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
  FormButton
} from './styles/create'
export const Create: React.FC = () => {
  const [imagesChoosen, setImagesChoosen] = useState<any>(0)
  const [srcImage, setSrcImage] = useState('')
  const [files, setFiles] = useState<File[]>([])

  const fileRef = useRef<HTMLInputElement>(null)

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

  return (
    <Container>
      <Title>Create</Title>
      <Wrapper>
        <InputWrapper>
          <Label htmlFor="name">Name</Label>
          <Input id="name" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="description">Description</Label>
          <TextArea id="description" />
        </InputWrapper>
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
        <FormButton>Create</FormButton>
      </Wrapper>
    </Container>
  )
}
