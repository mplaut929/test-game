import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';


const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default class FetchExample extends React.Component {

  state = {
    isLoading: true
  }




  render(){
    return (
      <View style={styles.view}>
        <Text style={styles.text}>Hello</Text>
      </View>
    )
  }
}
