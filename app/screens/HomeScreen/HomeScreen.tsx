import { Button, ButtonText, Text, View } from '@gluestack-ui/themed'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { RootStackParamList } from '../../INTERFACES/NAVEGATION_INTERFACES';
import { ButtonPrimary } from '../../components/ButtonPrimary';


type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
type Props = {
  navigation: HomeScreenNavigationProp;
};

export const HomeScreen : React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home Screen</Text>
    <ButtonPrimary
        onPress={() => {
            navigation.navigate('Tasks');
          }}
        title="Tasks"
        
    /> 
  <ButtonPrimary
        onPress={() => {
            navigation.navigate('User');
          }}
        title="Users"
        
    /> 
  </View>
  )
}
