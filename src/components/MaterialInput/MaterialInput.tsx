import React from 'react'

import { TextInput } from 'react-native-paper'

import { white } from 'utils/colors'

type IInput = {
  label: string,
  value: string,
  onChange: (value: string) => void
}

const MaterialInput = (props: IInput) => (
  <TextInput
    style={{ backgroundColor: white }}
    label={props.label}
    value={props.value}
    onChangeText={text => props.onChange(text)}
  />
)

export default MaterialInput