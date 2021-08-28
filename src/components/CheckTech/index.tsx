import { useEffect, useContext, useState } from 'react'

import { ProjectContext } from '../../contexts/ProjectContext'
import { Container, Input, Label } from './style'

interface CheckTechProps {
  num: number
}

export const CheckTech: React.FC<CheckTechProps> = ({ children, num }) => {
  const { getChoosedTechnologies, choosedTechnologies } = useContext(ProjectContext)

  const [checked, setChecked] = useState(false)

  const handleChecked = () => {
    setChecked(!checked)
    if (choosedTechnologies?.includes(num)) {
      removeIndex(num)
    } else {
      getChoosedTechnologies(num)
    }
  }

  const removeIndex = (number: number) => {
    if (choosedTechnologies !== undefined) {
      choosedTechnologies.splice(choosedTechnologies.indexOf(number), 1)
    }
  }

  useEffect(() => {
    if (choosedTechnologies?.includes(num)) {
      setChecked(true)
    }
  }, [])

  return (
    <Container>
      <Input
        onChange={handleChecked}
        id={`checkbox-${num}`}
        checked={checked}
        type="checkbox"
      />
      <Label htmlFor={`checkbox-${num}`}>{children}</Label>
    </Container>
  )
}
