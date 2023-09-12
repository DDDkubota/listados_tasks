import { Input, InputField } from '@gluestack-ui/themed';
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
        size="lg"
      >

        <InputField onChangeText={onChange} value={value} placeholder={placeholder} />
      </Input>
    )}
    name={name}
  />
  )
}
