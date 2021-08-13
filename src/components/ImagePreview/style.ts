import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  background: var(--dark-primary);

  padding: 10px;

  border-radius: 6px;

  width: 100%;

  img {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
`
export const Wrapper = styled.div`
  p:nth-child(2) {
    color: rgba(255, 255, 255, 0.3);
  }

  width: 80%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CloseButton = styled.button`
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`
