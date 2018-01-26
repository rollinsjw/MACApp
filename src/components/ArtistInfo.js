import React from 'react';
import {View, Text} from 'react-native';

const ArtistInfo = ({medium, location, name}) =>{
  const {row, column} = styles;

  return (
    <View style= {column}>
      <Text>
        {name}
      </Text>
      <View style = {row}>
        <View style = {column}>
          <Text>
            {medium}
          </Text>
          <Text>
            {location}
          </Text>
        </View>
      </View>

    </View>

  )
}
const styles = {
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  }
}
export default ArtistInfo
