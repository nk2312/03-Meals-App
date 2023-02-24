import React from 'react'
import { Pressable } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

function IconButton({color,size,icon,onPress}) {
  return (
   <Pressable onPress={onPress}>
    <Ionicons color={color} name={icon} size={size}/>
   </Pressable>
  )
}

export default IconButton