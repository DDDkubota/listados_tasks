import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Modal from "react-native-modal";
import { 
  ModalHeader, Button, ButtonText, FormControl, FormControlLabel, FormControlLabelText, FormControlHelper, FormControlHelperText, FormControlError, FormControlErrorText, Center, HStack, Box } from '@gluestack-ui/themed'
import { CustomInput } from './inputs/CustomInput';
import { FormData } from '../INTERFACES/TASK_INTERFACES';
import { addTask } from '../store/slices/taskSlice';




type Props = {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
    setSuccess: (value: boolean) => void;
}



export const ModalForm = ({showModal,
  setShowModal, setSuccess}:Props) => {
    const {
      handleSubmit,
      formState: { errors },
      control,
    } = useForm<FormData>({
      defaultValues: {
        title: "",
      },
    })
    const dispatch = useDispatch();

    

    const onSubmit = (data:FormData) => {
      const newTask ={
        id:uuidv4(),
        check: true,
        ...data
      }
      dispatch(addTask(newTask));
      console.log(newTask);
      setSuccess(true);
      setShowModal(false);
    }
  useEffect(() => {
    setSuccess(false);
  }, [])
  
    return (
    <Modal
    isVisible={showModal}
      
      > 
      
        <Center bg='$white' >
          <ModalHeader>
      
          </ModalHeader>
          <Box w='$4/5' justifyContent='space-around' mb='$1.5'>
          <FormControl
        size="lg"
        isDisabled={false}
        isInvalid={errors.title ? true : false}
        isReadOnly={false}
        isRequired={false} 
        >
    <FormControlLabel mb="$1">
      <FormControlLabelText>Nueva Task</FormControlLabelText>
    </FormControlLabel>
    <CustomInput
        control={control}
        placeholder="Titulo de Task"
        name="title"
        />
    <FormControlHelper>
      <FormControlHelperText>
        Maximo 100 caracteres
      </FormControlHelperText>
    </FormControlHelper>
    <FormControlError>
      
      <FormControlErrorText>
        Este Campo es requerido
      </FormControlErrorText>
    </FormControlError>
  </FormControl>
    
          </Box>
          <HStack space="md" reversed={false}>
            <Button
              variant="outline"
              action="secondary"
              onPress={() => {
                setShowModal(false)
              }}
            >
              <ButtonText>Cancelar</ButtonText>
            </Button>
            <Button
            
              action="positive"
              borderWidth="$0"
              onPress={handleSubmit(onSubmit)}
            >
              <ButtonText>Agregar</ButtonText>
            </Button>
          </HStack>
        </Center>
        </Modal>
  )
}
