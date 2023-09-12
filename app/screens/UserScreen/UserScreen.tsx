import { Badge, BadgeIcon, BadgeText, Button, ButtonText, Center, FlatList, GlobeIcon, Spinner, Text, TrashIcon, View } from '@gluestack-ui/themed'
import React, { useEffect, useState } from 'react'
import {ListRenderItem} from 'react-native';
import { getUsers } from '../../API/ServiceUser'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { finishLoading, startLoading } from '../../store/slices/controlSlice'
import { User, UserList } from '../../INTERFACES/USER_INTERFACES'
import { CardUser } from '../../components/CardUser'

type MyItem = {
  id: string; 
 
};




export const UserScreen : React.FC = () =>  {
  const dispatch = useDispatch();
  const loadindData = useSelector((state: RootState) => state.loading)
  const [dataResponse, setdataResponse] = useState<User[]>([])

const getDataLoad = async () => {
    dispatch(startLoading());
  
   const Users = await getUsers();
   if(Users.success){
    setdataResponse(Users.data)
   }
   setTimeout(() => {
    dispatch(finishLoading());
  }, 2000);
}

const renderItem: ListRenderItem<User> = ({item}) => <CardUser data={item} />;

useEffect(() => {
  getDataLoad();
}, [])

  
  return (
    <Center marginVertical={0} w={'$full'} h={'$full'}>
     {loadindData ? <Spinner size={'large'} color="$emerald600" />
     
    : dataResponse.length>0 ?

    <FlatList
    w={'$80'}
    data={dataResponse}
    renderItem={renderItem}
    keyExtractor={(item:User) => item.id}
  />
    :
    <Badge size="lg" variant="solid" borderRadius="$none" action="error">
    <BadgeText>No hay Datos para mostrar </BadgeText>
    <BadgeIcon as={TrashIcon} size='lg' />
  </Badge>

    }
  </Center>
  )
}
