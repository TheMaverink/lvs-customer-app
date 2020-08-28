import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Field, formValueSelector } from 'redux-form'

import AuthQuestion from 'components/AuthQuestion';

import CheckCircle from 'assets/Icons/check-circle.png';

// const renderInput = ({ input: { onChange} }) => (
//   <TextInput style={{flex:1, borderBottomWidth:1,borderBottomColor:'grey'}}
//     placeholderTextColor='#ffffff'
//     onChangeText={ onChange }

//     selectionColor='#ffffff'

//   />
// )

const styles = StyleSheet.create({
  absoluteView: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});

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

// const CheckCircleButton = (action) => {
//   return (

//   );
// };



const clickit = (stepNumber, phoneNumber) => {
  console.log(stepNumber);
  console.log(phoneNumber);
};
const Step1 = (props) => {
  // console.log(props);
  // console.log('props');
  const { sendSmsRequest, handleSubmit } = props;
  return (
    <View>
      <AuthQuestion question="Please enter your mobile number to continue." />
      {/* <Field name="phoneNumber" component={ TextInputField } props={ { placeholder: 'Mobile number...' } } onChange={test}/> */}
      <Field
        name="phoneNumber"
        component={TextInputField}
        props={{ placeholder: 'Mobile number...' }}
      />
      <TouchableOpacity onPress={()=>console.log(props)}>
        <Image source={CheckCircle} />
      </TouchableOpacity>
    </View>
  );
};

export default Step1;
