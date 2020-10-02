import React, { useState }  from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TextInput,Dimensions } from 'react-native';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { compose } from 'recompose';
import TextInputField from './TextInputField'

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginTop:150,
    marginBottom:20,
    paddingHorizontal: '5%',
    // height: height * 0.12
  },
  formTitle: {
    color: 'white',
    opacity:.6,
    textTransform: 'uppercase',
    fontSize:12,
    fontFamily:'DMSans-Regular',
    marginBottom:20
   
  },
  formField:{
    color: 'white',
    opacity:.6,
    textTransform: 'uppercase',
    fontSize:12,
    fontFamily:'DMSans-Regular',
    
  }
});



let VehicleForm = (props) => {
 
  console.log(props);
  return (
    <View style={styles.container}>
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

export default VehicleForm

// VehicleForm = reduxForm({ form: 'vehicleForm' })(VehicleForm);

// const selector = formValueSelector('vehicleForm'); // <-- same as form name

// export default connect((state) => selector(state, 'vehicleMake', 'vehicleReg'))(
//   VehicleForm
// );
