import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { compose } from 'recompose';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import RegisterContainer from 'containers/Register';
import AuthQuestion from 'components/AuthQuestion';
import BaseButton from 'components/BaseButton';

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
    /* <IconWrapper source={ PencilIcon } /> */
  }
};

const Step2 = (props) => {
  const { handleSubmit, verifyCodeRequest, phoneNumberToVerify } = props;
  
 
  return (
    <View
      style={{ backgroundColor: '#121314', flex: 1, justifyContent: 'center' }}
    >
      <AuthQuestion question="Please enter your 6 digit verification code." />
      <Field
        name="verificationCode"
        component={TextInputField}
        props={{ placeholder: '6 digit verification...' }}
      />
      {/* <TouchableOpacity onPress={handleSubmit((values)=> verifyCodeRequest(values.verificationCode))}>
  
 </TouchableOpacity> */}
      <BaseButton
        title="Verify"
        bgColor="grey"
        textColor="black"
        action={handleSubmit((values) =>
          verifyCodeRequest(phoneNumberToVerify, values.verificationCode)
        )}
      />
    </View>
  );
};

export default compose(
  reduxForm({ form: 'sendVerificationCode' }),
  RegisterContainer
)(Step2);
