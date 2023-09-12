import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Modal from "react-native-modal";
import { 
  Button,  FormControl, Center, HStack, Box } from 'native-base'
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
      
        <Center bg='white' >
        
          <Box w='4/5' justifyContent='space-around' mb='1.5'>
          <FormControl
        isDisabled={false}
        isInvalid={errors.title ? true : false}
        isReadOnly={false}
        isRequired={false} 
        >
    <FormControl.Label mb="1">
      Nueva Task
    </FormControl.Label>
    <CustomInput
        control={control}
        placeholder="Titulo de Task"
        name="title"
        />
    <FormControl.HelperText>
      
        Maximo 100 caracteres
      
    </FormControl.HelperText>
    <FormControl.ErrorMessage>
      
    
        Este Campo es requerido
      
    </FormControl.ErrorMessage>
  </FormControl>
    
          </Box>
          <HStack space="md" reversed={false}>
            <Button
              variant="outline"
              onPress={() => {
                setShowModal(false)
              }}
            >
              Cancelar
            </Button>
            <Button
            
             
              borderWidth="0"
              onPress={handleSubmit(onSubmit)}
            >
              Agregar
            </Button>
          </HStack>
        </Center>
        </Modal>
  )
}
