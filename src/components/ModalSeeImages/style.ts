import styled from 'styled-components'

import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 30;
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
  z-index: 35;
`

export const OverlayBody = styled(Overlay)`
  overflow-y: auto;
  z-index: 40;
`

export const Box = styled(motion.div)`
  width: 1000px;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  padding: 32px;
  position: relative;
  z-index: 45;
  overflow-y: auto;

  position: relative;
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
