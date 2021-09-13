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
  background: var(--dark-secondary);

  display: flex;
  flex-direction: column;

  gap: 24px;

  width: 50%;

  padding: 26px;

  border-radius: 6px;
  box-shadow: 10px 20px 20px 2px rgba(0, 0, 0, 0.2);

  position: relative;
  z-index: 25;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 3px;
  right: 3px;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  transition: filter 0.2s background 0.2s;
  &:hover {
    filter: brightness(0.8);
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
  }
`
