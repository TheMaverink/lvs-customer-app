import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { Field, formValueSelector, reduxForm } from 'redux-form';

import AuthQuestion from 'components/AuthQuestion';
import BaseButton from 'components/BaseButton';
import { compose } from 'recompose';

import UpdateCustomerContainer from 'containers/UpdateCustomer';
import TextInputField from '../../../components/TextInputField';
import SwithAuth from '../../../components/SwitchAuth';
import { editUserValidation } from 'utils/validations';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1B1C',
    height: deviceHeight,
    width: deviceWidth,
    position: 'relative',
  },
  fieldContainer: {
    position: 'absolute',
    width: '90%',
    top: '20%',
    position: 'relative',
    justifyContent: 'center',
    alignSelf: 'center',
    // transform: [{ translateY: deviceHeight * 0.3 }],
  },
  // field: {
  //   position: 'absolute',
  //   top: '40%',
  //   left: '5%',
  //   width: '85%',
  // },
  buttomContainer: {
    // marginTop: 20,
    // marginBottom: 10,
  },
  button: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
});

const Step3 = (props) => {
  const {
    handleSubmit,
    userDetailsValues,
    onSubmit,
    updateCustomerRequest,
    phoneNumber,
  } = props;

  const [isValidated, checkIsValidated] = useState(false);

  useEffect(() => {
    checkIsValidated(editUserValidation(userDetailsValues));
  }, [userDetailsValues]);

  return (
    <View style={styles.container}>
      <AuthQuestion
        question={'You are one step closer to\n becoming a private member'}
        notes="We don’t do spam, promise."
      />
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.fieldContainer}>
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

          <View style={styles.buttomContainer}>
            {!isValidated ? (
              <BaseButton
                title="Proceed"
                bgColor={'rgba(216,216,216,.6)'}
                textColor="black"
                margin={10}
                action={() => console.log('not allowed')}
              />
            ) : (
              <BaseButton
                title="Proceed"
                bgColor={'rgba(216,216,216,1)'}
                textColor="black"
                margin={10}
                action={handleSubmit((values) =>
                  updateCustomerRequest(phoneNumber, values.name, values.email)
                )}
              />
            )}

            <SwithAuth marginV={40} switchTo="login" />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default compose(
  reduxForm({ form: 'addDetailsForm' }),
  UpdateCustomerContainer
)(Step3);
