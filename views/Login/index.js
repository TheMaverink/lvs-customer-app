import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import BaseButton from 'components/BaseButton';
import {compose} from 'recompose'

import Step1 from "./Steps/Step1"
import Step2 from "./Steps/Step2"




class LoginView extends React.Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1,
    }
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
   
    return (
      <View style={{backgroundColor: '#121314', flex: 1, justifyContent: 'center'}}>

        {page === 1 && <Step1 { ...this.props } goToNext={ this.nextPage } />}
        {page === 2 && (
          <Step2
            { ...this.props }
            goToPrevious={ this.previousPage }
            goToNext={ this.nextPage }
          />
        )}
      
        
      </View>
    )
  }
}

export default LoginView

// export default compose(RegisterContainer)(RegisterView);
