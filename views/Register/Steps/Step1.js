import React from 'react';
import {
  View,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Field, formValueSelector, reduxForm } from 'redux-form';

import { phoneNumberValidation } from 'utils/validations';

import AuthQuestion from 'components/AuthQuestion';
import { compose } from 'recompose';
import FormWarningMessage from 'components/FormWarningMessage';
import BaseButton from 'components/BaseButton';

import TextInputField from '../../../components/TextInputField';
import FormIcon from '../components/FormIcon';
import RegisterContainer from 'containers/Register';
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
    position: 'absolute',
    width: '90%',
    top: '30%',
    position: 'relative',
    justifyContent: 'center',
    alignSelf: 'center',
    // transform: [{ translateY: deviceHeight * 0.3 }],
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

class Step1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneNumberStatus: 'pending',
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        phoneNumberStatus: phoneNumberValidation(this.props.sendSmsFormValues),
      });

      console.log(this.props.sendSmsFormValues);
    }
  }

  render() {
    const { sendSmsRequest, handleSubmit, onSubmit } = this.props;
    return (
      <View style={styles.container}>
        <AuthQuestion question="Please enter your mobile number to continue." />

        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <View style={styles.fieldContainer}>
            <Field
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
                sendSmsRequest(values.phoneNumber)
              )}
            />

            {/* <View style={styles.buttomContainer}>
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
                  sendSmsRequest(values.phoneNumber)
                )}
              />
            </View> */}

            <View style={styles.buttomContainer}>
              {this.state.phoneNumberStatus === 'valid' ? (
                <BaseButton
                  title="Send otp"
                  bgColor={'rgba(216,216,216,1)'}
                  textColor="black"
                  margin={10}
                  action={handleSubmit((values) =>
                    sendSmsRequest(values.phoneNumber)
                  )}
                />
              ) : (
                <BaseButton
                  title="Send otp"
                  bgColor={'rgba(216,216,216,.6)'}
                  textColor="black"
                  margin={10}
                  action={() => console.log('not allowed')}
                />
              )}
            </View>
            {this.state.phoneNumberStatus === 'wrong' ? (
              <FormWarningMessage />
            ) : (
              <SwitchAuth marginV={10} switchTo="login" />
            )}
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default compose(
  reduxForm({ form: 'registerSendSmsForm' }),
  RegisterContainer
)(Step1);
