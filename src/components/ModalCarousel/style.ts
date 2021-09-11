import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);

  z-index: 5;

  position: fixed;
  top: 0;
  left: 0;
`

export const Overlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  padding: 0 60px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const OverlayBackdrop = styled(Overlay)`
  background: rgba(0, 0, 0, 0.7);
  z-index: 6;
`

export const OverlayBody = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  z-index: 6;

  img {
    object-fit: cover;
    width: 100%;
    height: 90vh;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 100px;
  right: 125px;
  color: var(--text-primary);
  z-index: 7;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
`
