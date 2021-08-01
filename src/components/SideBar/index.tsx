import { Container, Logo, Wrapper } from './style'

import { ButtonSideBar } from '../ButtonSideBar'

import { IoCreateOutline } from 'react-icons/io5'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { AiOutlineEdit, AiOutlineHome } from 'react-icons/ai'

export const SideBar: React.FC = () => {
  return (
    <Container>
      <Logo>
        <span>Control Panel</span>
      </Logo>
      <Wrapper>
        <ButtonSideBar icon={<AiOutlineHome size={20} />} path="/" title="Home" />
        <ButtonSideBar
          icon={<IoCreateOutline size={20} />}
          path="/create"
          title="Criar"
        />
        <ButtonSideBar
          icon={<AiOutlineEdit size={20} />}
          path="/edit"
          title="Editar"
        />
        <ButtonSideBar
          icon={<IoMdRemoveCircleOutline size={20} />}
          path="/remove"
          title="Remover"
        />
      </Wrapper>
    </Container>
  )
}
