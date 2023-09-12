import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { render, fireEvent } from '@testing-library/react-native';
import {it, describe, expect, jest} from '@jest/globals';
// Importa el componente que deseas probar
import { HomeScreen } from '../app/screens/HomeScreen/HomeScreen';
import renderer from 'react-test-renderer';
// Define un mock para la navegación
const mockNavigate = jest.fn();
const navigation: NativeStackNavigationProp<any> = {
  navigate: mockNavigate,
};

const renderComponent = () => {
  return   renderer.create(<HomeScreen navigation={navigation} />);
};

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const { getByText } = renderComponent();
    const homeText = getByText('Home Screen');
    expect(homeText).toBeDefined();
  });

  it('navigates to TasksScreen when "Tasks" button is pressed', () => {
    const { getByText } = renderComponent();
    const tasksButton = getByText('Tasks');
    fireEvent.press(tasksButton);
    expect(mockNavigate).toHaveBeenCalledWith('Tasks');
  });

  it('navigates to UserScreen when "Users" button is pressed', () => {
    const { getByText } = renderComponent();
    const usersButton = getByText('Users');
    fireEvent.press(usersButton);
    expect(mockNavigate).toHaveBeenCalledWith('User');
  });
});