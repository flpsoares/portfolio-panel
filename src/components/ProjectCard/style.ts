import styled from 'styled-components'

interface ButtonProps {
  backgroundColor: string
}

export const Container = styled.div`
  background: var(--dark-secondary);
  width: 70%;
  min-height: 120px;

  padding: 0 24px;

  border-radius: 8px;
  box-shadow: 10px 20px 20px 2px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`

export const Title = styled.p`
  font-size: 26px;
  font-weight: 600;

  max-width: 400px;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  right: 20px;

  width: 200px;
`

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.backgroundColor};
  width: 45px;
  height: 45px;
  border-radius: 6px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`
