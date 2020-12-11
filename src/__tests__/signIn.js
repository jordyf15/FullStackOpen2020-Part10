import SignInForm from '../components/SignInForm';
import React from 'react';
import {render,fireEvent, act,waitFor} from '@testing-library/react-native';

describe("testing sign in form",()=>{
    it('filling the sign in form\'s username and password fields and pressing the submit button will call the onSubmit handler with correct arguments',async()=>{
        const handleSignIn=jest.fn();
        
        const {getByTestId}=render(<SignInForm handleLogin={handleSignIn}/>);
            fireEvent.changeText(getByTestId('username'),'testName');
            fireEvent.changeText(getByTestId('password'),'testPass');
            fireEvent.press(getByTestId("submit"));
        await waitFor(()=>{
            expect(handleSignIn).toHaveBeenCalledTimes(1);
            expect(handleSignIn.mock.calls[0][0]).toStrictEqual({"password": "testPass", "username": "testName"});            
        });
    });
});