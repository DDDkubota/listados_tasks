import { Box, CheckIcon, Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from '@gluestack-ui/themed';
import React from 'react'



type Props = {
    id: string;
    title: string;
    check: boolean;
}

export const CardTask = ({id, title, check}:Props) => {
  return (
    <Box  bgColor='$purple900' h='$8' justifyContent='center'>
        <Checkbox size="md" isReadOnly value='check' isChecked={check}>
  <CheckboxIndicator mr="$2">
    <CheckboxIcon as={CheckIcon} />
  </CheckboxIndicator>
  <CheckboxLabel fontSize='$2xl' color='$white'>{title}</CheckboxLabel>
</Checkbox>
    </Box>
  )
}
