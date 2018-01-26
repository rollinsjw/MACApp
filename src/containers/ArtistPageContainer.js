import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native';
import Communications from 'react-native-communications';
import { Button } from 'react-native-elements';
import { screen } from '../config/Metrics';



export default class ArtistPageContainer extends React.Component{

  renderIf(condition, content) {
    if(condition) {
      return content;
    }else {
      return null;
    }
  }
  render(){

    const param = this.props.navigation.state.params
    var img = param.artistInfo["Img"]
    const {linktextStyle, textStyle, artistImageStyle, iconStyle, backgroundImageStyle, containerStyle, columnStyle, rowStyle} = styles;
    return(
      <View style = {containerStyle}>
        <Image style = {backgroundImageStyle}
          source = {require('../assets/images/backgrounds/individualbackground.jpg')}>
          <View style = {{...columnStyle, flex: 2}}>
          <Image
            source = {param.artistInfo["Img"]}
            style = {{height: 130, width: 130, resizeMode: 'contain'}}></Image>
          <Text
            style = {{fontFamily: 'FrancophilSans', fontSize: 24, fontWeight: "400", color: 'white', backgroundColor: 'transparent'}}> {param.artistInfo["First Name"]} {param.artistInfo["Last Name"]} - #{param.artistInfo["STUDIO#"]}</Text>
          </View>
          <View style = {{...columnStyle, alignItems: 'flex-start', flex: 3, width: screen.width, justifyContent: 'space-between'}}>


            <View>
              <View>
                <TouchableOpacity
                  style={{...rowStyle, alignItems: 'flex-start'}}
                  onPress ={() => this.props.navigation.navigate('Map', {artistInfo: param.artistInfo})}
                  >
                    <Image style = {{height:30, resizeMode:'contain', marginTop: 5}}
                      source = {require('../assets/images/socialMedia/GPSicon.png')}/>
                      <View style={{paddingLeft: 15, flex: 1}}>
                          <Text style = {linktextStyle}>{param.artistInfo["STUDIO Address"]}</Text>
                          <Text style = {{...linktextStyle, paddingTop: 10}}>{param.artistInfo["STUDIO City, State, Zip"]}</Text>
                          <Button
                            buttonStyle={{backgroundColor: 'rgb(177, 201, 192)', borderRadius: 5, width: 100, height: 20, marginTop: 5, marginLeft: -15}}
                            textStyle={{textAlign: 'center', fontFamily: 'FrancophilSans'}}
                            raised
                            title='directions'
                            onPress={() => Linking.openURL('https://www.google.com/maps/search/?api=1&query='+param.artistInfo["Lat"]+','+param.artistInfo["Lng"])}
                          />
                      </View>

                </TouchableOpacity>



              </View>
              <View style={{width: screen.width, alignItems: 'flex-start', marginTop: 10}}>
                
            </View>

          {this.renderIf(param.artistInfo["STUDIO phone number"] != "",
            <View>
             <TouchableOpacity
               style={rowStyle}
               onPress = {() => Communications.phonecall(param.artistInfo["STUDIO phone number"], true)}>
               <Image style = {{height:30, resizeMode:'contain', paddingRight: 81}}
                 source = {require('../assets/images/socialMedia/phoneicon.png')}></Image>
               <Text style = {{fontSize:18, color:"white", fontFamily: 'FrancophilSans',  backgroundColor: 'transparent'}}> {param.artistInfo["STUDIO phone number"]}</Text>
             </TouchableOpacity>
           </View>
         )}
         <View>
            <TouchableOpacity
              style={rowStyle}
              onPress = {()=> Linking.openURL('mailto:'+param.artistInfo["Email Address"])}>
              <Image style = {{height:30, resizeMode:'contain'}}
                source = {require('../assets/images/socialMedia/at.png')}></Image>

              <Text style = {{marginLeft: 2, fontSize:18, flex: 1, color:"white", fontFamily: 'FrancophilSans',  backgroundColor: 'transparent'}}> {param.artistInfo["Email Address"]}</Text>
            </TouchableOpacity>
          </View>
          <View>
            {this.renderIf(param.artistInfo["Website Address"] != "",
            <TouchableOpacity
              style={rowStyle}
              onPress = {() => Linking.openURL("http://" + param.artistInfo["Website Address"])}>
            <Image style = {{height:30, resizeMode:'contain'}}
              source = {require('../assets/images/socialMedia/Globeicon.png')}></Image>
                <Text style = {{fontSize:18, color:"white", fontFamily: 'FrancophilSans', flex: 1, backgroundColor: 'transparent'}}> {param.artistInfo["Website Address"]}</Text>
            </TouchableOpacity>
          )}
          </View>

        </View>
          <View style={{...rowStyle, width: screen.width, alignItems: 'center', justifyContent: 'space-between', height: 60}}>
            <View style={{...rowStyle, paddingBottom: 20, flex: 4}}>
              <Image style = {{height:30, resizeMode: 'contain'}} source={require('../assets/images/socialMedia/Painticon.png')}/>
              <Text style={{fontSize:16, color:"white", fontFamily: 'FrancophilSans', backgroundColor: 'transparent', flex: 1}}>{param.artistInfo["medium"].toLowerCase()}</Text>
            </View>
              {this.renderIf(param.artistInfo["W/chair Accessible?"] === "Yes",
                <Image style={{height: 30, resizeMode: 'contain', flex: 1}}
                  source={require('../assets/images/socialMedia/handicapicon.png')}/>
              )}
          </View>
          </View>
        </Image>
      </View>
    )
  }
  }
  const styles = {
    iconStyle:{
      height: 30,
      width: null,
      resizeMode: 'contain'
    },
    linktextStyle:{
      fontFamily: 'FrancophilSans',
      fontSize:18,
      fontWeight: "400",
      color: 'white',

      backgroundColor: 'transparent'

    },
    textStyle:{
      fontFamily: 'FrancophilSans',
      fontSize: 16,
      fontWeight: "400",
      color: 'white'
    },
    artistImageStyle:{
      width:50,
      height:50,
      backgroundColor: 'powderblue',

    },
    iconStyle: {
      backgroundColor: 'transparent'

    },
    backgroundImageStyle: {
      resizeMode: 'cover',
      width: null,
      height: null,
      flex: 1,
      alignItems: 'center'
    },
    containerStyle: {
        flexDirection: 'column',
        flex: 1,
    },
    columnStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      flex: 1,
      alignItems: 'center',

    },
    rowStyle: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      // height: 0,
      paddingTop: 15,

      // paddingBottom: 20,
      // padding: 50
    },

  }
