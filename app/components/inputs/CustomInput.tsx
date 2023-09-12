import { Input } from 'native-base';
import React from 'react'
import { Control, Controller } from "react-hook-form"

type Props = {
    control: any;
    placeholder: string;
    name: string;
}


export const CustomInput = ({control, placeholder, name}:Props) => {
  return (
    <Controller
    control={control}
    rules={{
      required: true,
      maxLength: 100,
    }}
    render={({ field: { onChange, onBlur, value } }) => (
        <Input
        variant="outline"
        w="80%"
        onChangeText={onChange} value={value} placeholder={placeholder}
      />

       
     
    )}
    name={name}
  />
  )
}
