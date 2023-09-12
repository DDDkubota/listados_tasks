import { Box, CheckIcon, Checkbox } from 'native-base';
import React from 'react'



type Props = {
    id: string;
    title: string;
    check: boolean;
}

export const CardTask = ({id, title, check}:Props) => {
  return (
    <Box  backgroundColor='emerald.600' h='8' justifyContent='center'>
        <Checkbox size="md" isReadOnly value='check' isChecked={check}>

  {title}
</Checkbox>
    </Box>
  )
}
