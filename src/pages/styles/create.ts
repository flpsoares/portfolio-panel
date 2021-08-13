import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 80px 40px 80px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;
`

export const Wrapper = styled.form`
  background: var(--dark-secondary);

  display: flex;
  flex-direction: column;

  gap: 24px;

  width: 80%;

  padding: 26px;

  border-radius: 6px;
  box-shadow: 10px 20px 20px 2px rgba(0, 0, 0, 0.2);

  padding-bottom: 12px;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 24px;
  font-weight: 500;

  margin-bottom: 2px;
`

export const Input = styled.input`
  border: 2px solid var(--primary);
  font-size: 22px;

  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.2);

  padding: 6px;

  border-radius: 6px;
`

export const TextArea = styled.textarea`
  border: 2px solid var(--primary);
  font-size: 22px;

  background: 0;
  resize: none;

  height: 200px;

  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.2);

  padding: 6px;

  border-radius: 6px;
`

export const InputFile = styled.div`
  display: flex;
  align-items: center;
  input[type='file'] {
    display: none;
  }
  label {
    cursor: pointer;
    border: 2px solid var(--primary);
    border-radius: 4px;
    font-size: 18px;
    padding: 6px;
  }
  p {
    margin-left: 6px;
  }
`

export const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`

export const FormButton = styled.button`
  font-size: 22px;
  font-weight: 500;

  padding: 6px;

  background: var(--primary);

  border-radius: 4px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`
