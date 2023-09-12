import { Button } from 'native-base';
import React from 'react'


type Props = {
    onPress: () => void;
    title: string;
}


export const ButtonPrimary = ({onPress,title}:Props) => {
  return (
    <Button
    onPress={() => {
        onPress()
    }}
    style={{ margin: 10 }}
  >
     
      {title}
      
    
  </Button>
  )
}
