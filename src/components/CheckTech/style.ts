import styled from 'styled-components'

export const Container = styled.div``

export const Input = styled.input`
  display: none;

  &:checked + label {
    background: var(--secondary);
    border: 1px solid var(--secondary);
  }
`

export const Label = styled.label`
  font-size: 22px;

  user-select: none;

  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 5px;
  border-radius: 12px;
  cursor: pointer;

  transition: background 0.2s, border 0.2s;
`
