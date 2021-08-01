import styled from 'styled-components'

interface ButtonProps {
  isActive?: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  a {
    color: var(--text-primary);
    text-decoration: none;
    width: 100%;

    display: flex;

    font-size: 24px;
    font-weight: 500;

    padding: 18px;
    gap: 6px;
  }
`

export const Primary = styled.div<ButtonProps>`
  border-bottom-right-radius: 10px;

  background: ${(props) =>
    props.isActive ? 'var(--dark-secondary)' : 'var(--primary)'};

  position: relative;
  height: 10px;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    /* background: var(--dark-secondary); */
    background: ${(props) =>
      props.isActive ? 'var(--dark-secondary)' : 'var(--primary)'};
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
export const Secondary = styled.div<ButtonProps>`
  background: ${(props) =>
    props.isActive ? 'var(--dark-secondary)' : 'var(--primary)'};

  display: flex;
  align-items: center;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`

export const Tertiary = styled.div<ButtonProps>`
  background: var(--primary);

  position: relative;
  height: 10px;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${(props) =>
      props.isActive ? 'var(--dark-secondary)' : 'var(--primary)'};
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
