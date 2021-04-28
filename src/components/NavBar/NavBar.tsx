import React from 'react'

import { Platform } from 'react-native'
import { Appbar } from 'react-native-paper'

import { primary } from 'utils/colors'

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical'

type INavBar = {
  title: string
}

const NavBar = (props: INavBar) => (
  <Appbar.Header style={{ backgroundColor: primary }}>
    <Appbar.Content title={props.title}  />    
    <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
  </Appbar.Header>
)


export default NavBar