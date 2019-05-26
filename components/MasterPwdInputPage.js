import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

export default class MasterPwdInputPage extends Component {
	constructor(props) {
		super(props);
		this.state = { pwd: '' };
	}

	render() {
		return (
			<View style={styles.container}>
			<Text style={styles.welcome}>Enter master password</Text>
			<TextInput 
				secureTextEntry={true} 
				style={styles.pwdInput}
				onChangeText={(pwd) => this.setState({pwd})}
				value={this.state.pwd}
			/>
			<Button title="Enter App" onPress={this._verifyPwd.bind(this)}/>
			</View>
		);
	}

	_verifyPwd() {
		Alert.alert(this.state.pwd);
	}
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#F5FCFF',
	},
	welcome: {
	  fontSize: 20,
	  textAlign: 'center',
	  margin: 10,
	},
	pwdInput: {
	  borderColor: 'gray', 
	  borderWidth: 1,
	  width: 200,
	},
  });