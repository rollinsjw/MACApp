import { TouchableHighlight, View, Image } from 'react-native';
import React from 'react';

export const CustomIcon = ({image, onPress, iconStyle}) =>
{
  return (
  <TouchableHighlight
    onPress={()=>onPress}
    style={iconStyle}
  >
    <Image
      style={{flex: 1, resizeMode: 'contain'}}
      source={require(image)}
    />
  </TouchableHighlight>
)
}
