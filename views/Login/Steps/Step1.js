import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Field, formValueSelector,  reduxForm  } from 'redux-form';

import AuthQuestion from 'components/AuthQuestion';
import {compose} from 'recompose'
import CheckCircle from 'assets/Icons/check-circle.png';

import LoginContainer from 'containers/Login'

const TextInputField = ({ placeholder, input: { onChange, ...restInput } }) => {
  return (
    <View>
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#ffffff',
          color: '#ffffff',
        }}
        onChangeText={onChange}
        placeholderTextColor="#ffffff"
        selectionColor="#ffffff"
        placeholder={placeholder}
      ></TextInput>
      {/* <Image source={CheckCircle} onPress={()=>console.log('licked')} /> */}
    </View>
  );
  {
  }
};




const Step1 = (props) => {
  const { loginSendSmsRequest, handleSubmit, onSubmit } = props;
 
  return (
    <View style={{backgroundColor: '#121314', flex: 1, justifyContent: 'center'}}>
      <AuthQuestion question="Please enter your mobile number to continue." />
      {/* <Field name="phoneNumber" component={ TextInputField } props={ { placeholder: 'Mobile number...' } } onChange={test}/> */}
      <Field
        name="phoneNumber"
        component={TextInputField}
        props={{ placeholder: 'Mobile number...' }}
      />
      <TouchableOpacity onPress={handleSubmit((values)=> loginSendSmsRequest(values.phoneNumber))}>
        <Image source={CheckCircle} />
      </TouchableOpacity>
    </View>
  );
};





export default compose(
  reduxForm({ form:'sendSmsForm'}),
  LoginContainer)(Step1)
  