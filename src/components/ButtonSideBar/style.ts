import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  a {
    color: var(--text-primary);
    text-decoration: none;
    width: 100%;

    display: flex;
    align-items: center;

    padding: 14px;
    gap: 6px;
  }
`

export const Primary = styled.div`
  border-bottom-right-radius: 10px;

  background: var(--dark-secondary);

  position: relative;
  height: 10px;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--dark-secondary);
    z-index: 4;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--primary);
    z-index: 5;
    border-bottom-right-radius: 10px;
  }
`
export const Secondary = styled.div`
  background: var(--dark-secondary);

  display: flex;
  align-items: center;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`

export const Tertiary = styled.div`
  background: var(--primary);

  position: relative;
  height: 10px;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--dark-secondary);
    z-index: 4;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--primary);
    z-index: 5;
    border-top-right-radius: 10px;
  }
`
