import React from 'react';
import { StyleSheet, Text, View, Button, Alert, AppRegistry, Image, TouchableOpacity, Dimensions } from 'react-native';

export default class MyApp extends React.Component {
  
	state = {
		bgImg: null
	}
	
	handleImageTouch=()=>{
//		alert("Change BG");
		this.setState({
			bgImg:"BlaBlaBla"
		})
	}
	
	handleClick=()=>{
		Alert.alert(
			'Welcome to my App',
			'This App is just a prototype LMAO',
			[
				{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
				{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
				{text: 'OK', onPress: () => console.log('OK Pressed')},
			],
			{ cancelable: false }
		)
	}
	
	render() {
		
    var varcomp = null;
		
		if(this.state.bgImg !== null){
			varcomp = <Image
									style={{
										position: "absolute", 
										top: 0, 
										left: 0, 
										width: Dimensions.get('window').width,
										height: Dimensions.get('window').height}}
									resizeMode="cover"
									source={require('mobileapp/img/img_1.jpg')}
									/>
		}
		
		return (
      <View style={styles.container}>
				{varcomp}
        <TouchableOpacity onPress={this.handleImageTouch}>
					<Image
						style={styles.imgStyle}
						resizeMode="cover"
						source={require('mobileapp/img/img_1.jpg')}
					/>
				</TouchableOpacity>
				<Text>Hi, Welcome to my App!</Text>
				<View style={styles.butBox}>
					<View style={[styles.butBack, {flex: 2, borderRadius: 5}]}>
						<Button 
							onPress={this.handleClick}
							title="Enter" 
							/>
					</View>
					<View style={styles.butBack}>
						<Button 
							onPress={this.handleClick}
							title="Enter" 
							/>
					</View>
					<View style={styles.butBack}>
						<Button 
							onPress={this.handleClick}
							title="Enter" 
							/>
					</View>	
				</View>
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
  },
	butBox: {
		flexDirection: "row"
	},
	butBack: {
		backgroundColor: 'rgb(225,225,225)',
		borderRadius: 10,
		margin: 5
	},
	imgStyle: {
		width: 200,
		height: 200,
		borderRadius: 100,
		margin: 20
	}
});
