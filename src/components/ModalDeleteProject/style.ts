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
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #f44336;
  border-radius: 8px;

  padding: 32px;

  position: relative;

  z-index: 25;
`

export const Title = styled.p`
  font-size: 28px;
  font-weight: 500;

  span {
    font-weight: 800;
  }
`

export const Wrapper = styled.div`
  margin-top: 22px;

  display: flex;
  gap: 12px;

  button {
    border: 2px solid var(--text-primary);
    border-radius: 4px;
    font-size: 20px;
    font-weight: 500;
    padding: 6px;
    width: 120px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
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
