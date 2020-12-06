import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useField} from 'formik';
import theme from '../theme';

import NativeTextInput from './TextInput';
import NativeText from './Text';

const styles= StyleSheet.create({
    errorText:{
        marginRight:'50%',
        color: theme.colors.errorColor
    },
    inputBox:{
        width: '90%',
        height: '20%',
        borderRadius: 10,
        borderStyle:'solid',
        borderWidth: 1,
        borderColor: theme.colors.textSecondary
    },
    inputText:{
        marginVertical:'auto',
        marginLeft: 20
    }
});

const FormikTextInput=({name,...props})=>{
    const [field,meta,helpers] = useField(name);
    const showError=meta.touched && meta.error;

    return(
        <>
        <View style={showError?[styles.inputBox,{borderColor: theme.colors.errorColor}]:styles.inputBox}>
            <NativeTextInput style={styles.inputText}
            onChangeText={value=> helpers.setValue(value)}
            onBlur={()=>helpers.setTouched(true)}
            value={field.value}
            error={showError}
            {...props}
            />
        </View>
        {showError && <NativeText style={styles.errorText}>{meta.error}</NativeText>}
        </>
    );
};

export default FormikTextInput;

