import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import { compose } from 'recompose';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import RegisterContainer from 'containers/Register';
import AuthQuestion from 'components/AuthQuestion';
import BaseButton from 'components/BaseButton';
import TextInputField from '../../../components/TextInputField';
import { codeValidation } from 'utils/validations';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

import ResendCode from '../../../components/ResendCode';

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
  fieldContainer: {
    position: 'absolute',
    width: '90%',
    top: '30%',
    position: 'relative',
    justifyContent: 'center',
    alignSelf: 'center',
    // transform: [{ translateY: deviceHeight * 0.3 }],
  },
  buttomContainer: {
    // marginTop:20,
    // marginBottom:10
  },
  button: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
});

class Step2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // verificationCode: ' ',
      codeStatus: 'wrong',
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        // verificationCode: this.props.verificationCodeValues,
        codeStatus: codeValidation(this.props.verificationCodeValues),
      });
    }
  }

  render() {
    const { handleSubmit, verifyCodeRequest, phoneNumberToVerify } = this.props;

    return (
      <View style={styles.container}>
        <AuthQuestion
          question={'Next, enter your 6 digit \nverification code.'}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <View style={styles.fieldContainer}>
            <Field
              name="verificationCode"
              component={TextInputField}
              props={{
                placeholder: '6 digit verification...',
                keyboardType: 'phone-pad',
              }}
            />

            <View style={styles.buttomContainer}>
              <BaseButton
                title="Verify"
                bgColor={
                  this.state.codeStatus === 'wrong'
                    ? 'rgba(216,216,216,.6)'
                    : 'rgba(216,216,216,1)'
                }
                textColor="black"
                margin={10}
                action={handleSubmit((values) =>
                  verifyCodeRequest(
                    phoneNumberToVerify,
                    values.verificationCode
                  )
                )}
              />
            </View>
            <ResendCode />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default compose(
  reduxForm({ form: 'registerVerify' }),
  RegisterContainer
)(Step2);
