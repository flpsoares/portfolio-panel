import styled from 'styled-components'

import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.3);

  z-index: 10;

  position: fixed;

  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Overlay = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const OverlayBackdrop = styled(Overlay)`
  background: rgba(0, 0, 0, 0.7);
  z-index: 15;
`

export const OverlayBody = styled(Overlay)`
  overflow-y: auto;
  z-index: 20;
`

export const Box = styled(motion.div)`
  width: 700px;
  height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: rgba(0, 0, 0, 0.9);

  padding: 32px;

  position: relative;

  z-index: 25;
`

export const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 90%;
`

export const NewTechnology = styled.form`
  width: 100%;
  height: 48px;

  display: flex;
  justify-content: space-between;

  input {
    width: 85%;
    height: 100%;

    padding: 0 12px;
    font-size: 20px;

    border: 1px solid var(--primary);
    border-radius: 4px;

    ::placeholder {
      filter: brightness(0.6);
    }
  }

  button {
    font-size: 20px;
    font-weight: 500;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 3px;
  right: 3px;
  transition: filter 0.2s background 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;

  color: red;

  &:hover {
    filter: brightness(0.8);
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
  }
`
