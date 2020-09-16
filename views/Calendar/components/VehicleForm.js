import React, { useState }  from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { compose } from 'recompose';

const styles = StyleSheet.create({
  container: {},
  formTitle: {
    color: 'white',
    textTransform: 'uppercase',
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

let VehicleForm = (props) => {
  const { vehicleMake, vehicleReg } = props;
  console.log(props);
  return (
    <View>
      <Text style={styles.formTitle}>Add booking information</Text>
   
      <Field
        name="vehicleMake"
        component={TextInputField}
        props={{ placeholder: 'Vehicle Make' }}
      />
      <Field
        name="vehicleReg"
        component={TextInputField}
        props={{ placeholder: 'Vehicle Reg' }}
      />
    </View>
  );
};

VehicleForm = reduxForm({ form: 'vehicleForm' })(VehicleForm);

const selector = formValueSelector('vehicleForm'); // <-- same as form name

export default connect((state) => selector(state, 'vehicleMake', 'vehicleReg'))(
  VehicleForm
);
