import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {ModalForm} from '../app/components/ModalForm';
import { addTask } from '../app/store/slices/taskSlice';
import {it, describe, expect, jest} from '@jest/globals';
const mockStore = configureStore(); 

describe('ModalForm', () => {
  it('debe enviar una acción a Redux cuando se agrega una tarea', () => {
    const initialState = {}; 
    const store = mockStore(initialState);
    
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <ModalForm showModal={true} setShowModal={() => {}} setSuccess={() => {}} />
      </Provider>
    );

  
    const titleInput = getByPlaceholderText('Titulo de Task');
    fireEvent.changeText(titleInput, 'Nueva tarea');


    const addButton = getByText('Agregar');
    fireEvent.press(addButton);

   
    const expectedAction = addTask({
      id: expect.any(String),
      check: true,
      title: 'Nueva tarea',
    });
    
    expect(store.getActions()).toContainEqual(expectedAction);
  });
});