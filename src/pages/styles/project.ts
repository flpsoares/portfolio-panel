import styled from 'styled-components'

export const Container = styled.div`
  padding: 32px;

  overflow-y: auto;
  position: relative;
`

export const Wrapper = styled.div`
  min-height: 94%;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 28px 0;

  position: relative;
`

export const Technologies = styled.div`
  position: absolute;

  left: 6%;
  top: 50%;
  transform: translate(-50%, -50%);

  z-index: 1;
`

export const Technology = styled.div`
  font-weight: 500;
  line-height: 38px;
  font-size: 20px;
`

export const Title = styled.h1`
  text-align: center;
  color: var(--secondary);
`

export const Description = styled.span`
  font-size: 18px;
  font-weight: 500;
  max-width: 1000px;

  margin-bottom: 50px;
`

export const Link = styled.a`
  text-decoration: none;
  font-size: 28px;
  font-weight: 600;
  color: var(--dark-primary);
  position: absolute;

  bottom: 0;

  background: var(--secondary);

  width: 90%;
  padding: 12px;
  text-align: center;

  border-radius: 4px;
  border: 1px solid var(--secondary);

  transition: background 0.4s, color 0.4s;

  &:hover {
    background: transparent;
    color: var(--secondary);
  }
`

export const Images = styled.div`
  width: 1000px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
`

export const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 4px;
`
