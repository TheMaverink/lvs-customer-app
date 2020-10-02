import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Field, formValueSelector, reduxForm } from 'redux-form';

import AuthQuestion from 'components/AuthQuestion';
import { compose } from 'recompose';
import CheckCircle from 'assets/icons/check-circle.png';

import LoginContainer from 'containers/Login';
import TextInputField from '../../../components/TextInputField';

import SwitchAuth from '../../../components/SwitchAuth';

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
    position:'absolute',
    width: '90%',
    top:'30%',
    position: 'relative',
    justifyContent: 'center',
    alignSelf: 'center',
      // transform: [{ translateY: deviceHeight * 0.3 }],
  },
  field: {
    // position: 'absolute',
    // top: '40%',
    // left: '5%',
    // width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // left: 0,
    // right: 0,
  },
  button: {
    position: 'absolute',
    right: 5,
    top: 0,
  },
});

const Step1 = (props) => {
  const { loginSendSmsRequest, handleSubmit, onSubmit } = props;

  return (
    <View style={styles.container}>
      <AuthQuestion question={"Please enter your mobile \nnumber to continue."} />
      <View style={styles.fieldContainer}>
        <Field
          style={styles.field}
          name="phoneNumber"
          component={TextInputField}
          props={{ placeholder: 'Mobile number...' }}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit((values) =>
            loginSendSmsRequest(values.phoneNumber)
          )}
        >
          <Image source={CheckCircle} />
        </TouchableOpacity>
        <SwitchAuth marginV={10} switchTo="register" />
      </View>
    </View>
  );
};

export default compose(
  reduxForm({ form: 'sendSmsForm' }),
  LoginContainer
)(Step1);
