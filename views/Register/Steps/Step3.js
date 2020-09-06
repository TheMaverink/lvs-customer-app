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
import BaseButton from "components/BaseButton"
import {compose} from 'recompose'
import CheckCircle from 'assets/Icons/check-circle.png';

import UpdateCustomerContainer from 'containers/UpdateCustomer'



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
    </View>
  );
  {
  }
};




const Step3 = (props) => {
  const {  handleSubmit, onSubmit,updateCustomerRequest,phoneNumber } = props;
  // console.log(props)
  // console.log('end of props step 3')
  return (
    <View style={{backgroundColor: '#121314', flex: 1, justifyContent: 'center'}}>
      <AuthQuestion question="Your one step closer to becoming a private member?" 
      notes="We don’t do spam, promise."/>
      {/* <Field name="phoneNumber" component={ TextInputField } props={ { placeholder: 'Mobile number...' } } onChange={test}/> */}
      <Field
        name="name"
        component={TextInputField}
        props={{ placeholder: 'Name...' }}
      />
          <Field
        name="email"
        component={TextInputField}
        props={{ placeholder: 'Email address...' }}
      />
     <BaseButton
        title="Proceed"
        bgColor="grey"
        textColor="black"
        action={handleSubmit((values) =>
          updateCustomerRequest(phoneNumber,values.name, values.email)
        )}
      />
    </View>
  );
};





export default compose(
  reduxForm({ form:'addDetailsForm'}),
  UpdateCustomerContainer)(Step3)
  