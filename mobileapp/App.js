import React from 'react';
import { StyleSheet, Text, View, Button, Alert, AppRegistry, Image } from 'react-native';
import MyApp from "./comps/MyApp";

export default class App extends React.Component {
  
	render() {
		console.log("Hi Render");
    return (
      <View style={styles.container}>
        <MyApp />
				<MyApp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
