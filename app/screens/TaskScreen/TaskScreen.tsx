import React, { useState,  useEffect } from 'react'

import { Box, Button, Center, Heading, ScrollView, Toast,  VStack, useToast } from 'native-base'

import { ModalForm } from '../../components/ModalForm';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { CardTask } from '../../components/CardTask';




export const TaskScreen : React.FC = () => {
    
const [showModal, setShowModal] = useState(false);
const [success, setSuccess] = useState(false);
const toast = useToast();
const tasksSaved = useSelector((state: RootState) => state.tasks)

useEffect(() => {
  if(success){
    toast.show({
      description: "Nueva Tasks!"
    })
  }
  
}, [success])



  return (
  <Box
    zIndex={1}
  >
     { showModal && (
        <ModalForm
        showModal={showModal}
        setShowModal={setShowModal}
        setSuccess={setSuccess}
        />
     )

    }
      <Center>
    

   <Heading>Listado de Tasks</Heading>
     <Button
     onPress={() => setShowModal(true)}
     size='lg'
     borderRadius='lg'
     >
       
           Agregar Tasks
       
     </Button>
     <ScrollView h="96" w="80">
    <Center mt="3" mb="4">
      <Heading fontSize="2xl">Task Agregadas</Heading>
    </Center>
    <VStack flex={1} space='md'>
      {tasksSaved.tasks.map((task,i) => 
   { return  <CardTask
        key={i}
        title={task.title}
        check={task.check}
        id={task.id}
      />}
      )

      }
    </VStack>
  </ScrollView>
  
 
 </Center>
 
  </Box>
  
  )
}
