import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { compose } from 'recompose';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import RegisterContainer from 'containers/Register';
import AuthQuestion from 'components/AuthQuestion';
import BaseButton from 'components/BaseButton';
import TextInputField from '../../../components/TextInputField';

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
    position:'absolute',
    width: '90%',
    top:'30%',
    position: 'relative',
    justifyContent: 'center',
    alignSelf: 'center',
      // transform: [{ translateY: deviceHeight * 0.3 }],
  },
  buttomContainer:{
    // marginTop:20,
    // marginBottom:10
  
  },
  button: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
});

const Step2 = (props) => {
  const { handleSubmit, verifyCodeRequest, phoneNumberToVerify } = props;

  return (
    <View style={styles.container}>
      <AuthQuestion question={"Next, enter your 6 digit \nverification code."} />
      <View style={styles.fieldContainer}>
        <Field
          name="verificationCode"
          component={TextInputField}
          props={{ placeholder: '6 digit verification...' }}
        />

<View style={styles.buttomContainer}>
          <BaseButton
            title="Verify"
            bgColor="grey"
            textColor="black"
            margin={10}
            action={handleSubmit((values) =>
              verifyCodeRequest(phoneNumberToVerify, values.verificationCode)
            )}
          />
        </View>
        <ResendCode />
      </View>
    </View>
  );
};

export default compose(
  reduxForm({ form: 'registerVerify' }),
  RegisterContainer
)(Step2);
