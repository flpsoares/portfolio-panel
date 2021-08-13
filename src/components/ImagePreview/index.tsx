import { Container, Wrapper, CloseButton } from './style'

import { MdClose } from 'react-icons/md'
import { niceBytes } from '../../utils/converterBytes'

interface ImageProps {
  name: string
  size: number
  file: File
}

export const ImagePreview: React.FC<ImageProps> = ({ name, size, file }) => {
  return (
    <Container>
      <img src={URL.createObjectURL(file)} />
      <Wrapper>
        <div>
          <p>{name}</p>
          <p>{niceBytes(size)}</p>
        </div>
        <CloseButton type="button">
          <MdClose size={22} />
        </CloseButton>
      </Wrapper>
    </Container>
  )
}
