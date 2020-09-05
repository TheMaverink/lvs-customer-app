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

import RegisterContainer from 'containers/Register'

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




const Step1 = (props) => {
  const { sendSmsRequest, handleSubmit, onSubmit } = props;
  // console.log(props)
  console.log('end of props step 1')
  return (
    <View style={{backgroundColor: '#121314', flex: 1, justifyContent: 'center'}}>
      <AuthQuestion question="Please enter your mobile number to continue." />
      {/* <Field name="phoneNumber" component={ TextInputField } props={ { placeholder: 'Mobile number...' } } onChange={test}/> */}
      <Field
        name="phoneNumber"
        component={TextInputField}
        props={{ placeholder: 'Mobile number...' }}
      />
      <TouchableOpacity onPress={handleSubmit((values)=> sendSmsRequest(values.phoneNumber))}>
        <Image source={CheckCircle} />
      </TouchableOpacity>
    </View>
  );
};





export default compose(
  reduxForm({ form:'sendSmsForm'}),
  RegisterContainer)(Step1)
  