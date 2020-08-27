import React from 'react'
import { SafeAreaView, Platform } from 'react-native'
import styled from 'styled-components/native'

import { COLORS } from 'consts'

const AppBg = styled.View`
    background: #121314;
    flex: 1;
    
    ${ (props) => props.forceTopPadding && `
        padding-top: 24px;
    ` }
`

const AppView = styled(SafeAreaView)`
    background: #121314;
    flex: 1;
`

export default ({ children }) => {
  const isAndroid = Platform.OS === 'android'

  return (
    <AppBg { ...{ forceTopPadding: isAndroid } }>
      <AppView>
        {children}
      </AppView>
    </AppBg>
  )
}
