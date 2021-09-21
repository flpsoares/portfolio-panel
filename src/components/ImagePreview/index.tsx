import { Container, Wrapper, CloseButton } from './style'

import { MdClose } from 'react-icons/md'
import { niceBytes } from '../../utils/converterBytes'

interface ImageProps {
  name: string
  size: number
  file?: File
  url?: string
  onDelete?: () => void
}

export const ImagePreview: React.FC<ImageProps> = ({
  name,
  size,
  file,
  url,
  onDelete
}) => {
  return (
    <Container>
      {file ? <img src={URL.createObjectURL(file)} /> : <img src={url} />}
      <Wrapper>
        <div>
          <p>{name}</p>
          <p>{niceBytes(size)}</p>
        </div>
        <CloseButton onClick={onDelete} type="button">
          <MdClose size={22} />
        </CloseButton>
      </Wrapper>
    </Container>
  )
}
