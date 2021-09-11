import { Container, Logo, Wrapper } from './style'

import { ButtonSideBar } from '../ButtonSideBar'

import { IoCreateOutline } from 'react-icons/io5'
import { AiOutlineHome } from 'react-icons/ai'

export const SideBar: React.FC = () => {
  return (
    <Container>
      <Logo>
        <span>Control Panel</span>
      </Logo>
      <Wrapper>
        <ButtonSideBar
          exact
          icon={<AiOutlineHome size={26} />}
          path="/"
          title="Home"
        />
        <ButtonSideBar
          icon={<IoCreateOutline size={26} />}
          path="/create"
          title="Create"
        />
      </Wrapper>
    </Container>
  )
}
