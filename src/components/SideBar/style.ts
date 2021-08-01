import styled from 'styled-components'

export const Container = styled.div`
  width: 300px;
  height: 100%;

  display: flex;
  flex-direction: column;

  background: var(--primary);
`

export const Logo = styled.div`
  text-align: center;

  margin-top: 20px;
  span {
    color: var(--text-primary);
    font-size: 36px;
    font-weight: 600;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 35px;

  margin-top: 80px;
`
