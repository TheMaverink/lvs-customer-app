import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
} from 'react-native';

import { Field, formValueSelector, reduxForm } from 'redux-form';

import FormIcon from '../components/FormIcon';
import { phoneNumberValidation } from 'utils/validations';

import AuthQuestion from 'components/AuthQuestion';
import { compose } from 'recompose';

import LoginContainer from 'containers/Login';
import TextInputField from '../../../components/TextInputField';

import BaseButton from 'components/BaseButton';

import FormWarningMessage from 'components/FormWarningMessage';

import SwitchAuth from '../../../components/SwitchAuth';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

import { create, PREDEF_RES } from 'react-native-pixel-perfect';

const perfectSize = create(PREDEF_RES.iphoneX.dp);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1B1C',
    height: '100%',
    width: '100%',
    // position: 'relative',
  },
  fieldContainer: {
    position: 'absolute',
    width: '90%',

    top: '25%',
    // top:perfectSize(0),
    position: 'relative',
    justifyContent: 'center',
    alignSelf: 'center',
    // borderColor:'green',
    // borderWidth:4
    // transform: [{ translateY: deviceHeight * 0.3 }],
  },
  test: {},
  field: {
    backgroundColor: 'red',
    position: 'absolute',
  },
});

class Step1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // phoneNumberValue: '',
      phoneNumberStatus: 'pending',
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        // phoneNumberValue: this.props.sendSmsFormValues,
        phoneNumberStatus: phoneNumberValidation(this.props.sendSmsFormValues),
      });
    }
  }

  render() {
    const { loginSendSmsRequest, handleSubmit, onSubmit } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.test}></View>
        <AuthQuestion
          question={'Please enter your mobile \nnumber to continue.'}
        />

        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <View style={styles.fieldContainer}>
            {/* <Text style={{color:'white'}}>{perfectSize(220)}</Text> */}
            {/* <Text style={{ color: 'white' }}>
            {phoneNumberValidation(this.state.phoneNumberValue)}
          </Text> */}
            <Field
              style={styles.field}
              name="phoneNumber"
              component={TextInputField}
              props={{
                placeholder: 'Mobile number...',
                keyboardType: 'phone-pad',
              }}
            />

            <FormIcon
              // validation={phoneNumberValidation(this.state.phoneNumberValue)}
              validation={this.state.phoneNumberStatus}
              action={handleSubmit((values) =>
                loginSendSmsRequest(values.phoneNumber)
              )}
            />

            <View style={styles.buttomContainer}>
              {this.state.phoneNumberStatus === 'valid' ? (
                <BaseButton
                  title="Verify"
                  bgColor={
                    this.state.phoneNumberStatus === 'valid'
                      ? 'rgba(216,216,216,1)'
                      : 'rgba(216,216,216,.6)'
                  }
                  textColor="black"
                  margin={10}
                  action={handleSubmit((values) =>
                    loginSendSmsRequest(values.phoneNumber)
                  )}
                />
              ) : (
                <BaseButton
                  title="Verify"
                  bgColor={
                    this.state.phoneNumberStatus === 'valid'
                      ? 'rgba(216,216,216,1)'
                      : 'rgba(216,216,216,.6)'
                  }
                  textColor="black"
                  margin={10}
                  action={()=>console.log('not allowed')}
                />
              )}
{/* 
              <BaseButton
                title="Send otp"
                bgColor={
                  this.state.phoneNumberStatus === 'valid'
                    ? 'rgba(216,216,216,1)'
                    : 'rgba(216,216,216,.6)'
                }
                textColor="black"
                margin={10}
                action={handleSubmit((values) =>
                  loginSendSmsRequest(values.phoneNumber)
                )}
              /> */}
            </View>

            {this.state.phoneNumberStatus === 'wrong' ? (
              <FormWarningMessage />
            ) : (
              <SwitchAuth marginV={10} switchTo="register" />
            )}
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default compose(
  reduxForm({ form: 'sendSmsForm' }),

  LoginContainer
)(Step1);
