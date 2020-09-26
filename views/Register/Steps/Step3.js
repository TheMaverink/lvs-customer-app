import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { Field, formValueSelector, reduxForm } from 'redux-form';

import AuthQuestion from 'components/AuthQuestion';
import BaseButton from 'components/BaseButton';
import { compose } from 'recompose';
import CheckCircle from 'assets/icons/check-circle.png';

import UpdateCustomerContainer from 'containers/UpdateCustomer';
import TextInputField from '../../../components/TextInputField';
import SwithAuth from '../../../components/SwitchAuth';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1B1C',
    height: deviceHeight,
    width: deviceWidth,
    position: 'relative',
  },
  field: {
    position: 'absolute',
    top: '40%',
    left: '5%',
    width: '85%',
  },
  button: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
});

const Step3 = (props) => {
  const { handleSubmit, onSubmit, updateCustomerRequest, phoneNumber } = props;

  return (
    <View style={styles.container}>
      <AuthQuestion
        question="Your one step closer to becoming a private member?"
        notes="We don’t do spam, promise."
      />
      <View style={styles.field}>
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

        <View style={{ marginTop: 30 }}>
          <BaseButton
            title="Proceed"
            bgColor="grey"
            textColor="black"
            action={handleSubmit((values) =>
              updateCustomerRequest(phoneNumber, values.name, values.email)
            )}
          />

          <SwithAuth swithTo="login" />
        </View>
      </View>
    </View>
  );
};

export default compose(
  reduxForm({ form: 'addDetailsForm' }),
  UpdateCustomerContainer
)(Step3);
