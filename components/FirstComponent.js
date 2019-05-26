import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import MasterPwdInputPage from './MasterPwdInputPage';

export default class FirstComponent extends Component {
	constructor(props){
        super(props);
        this.state = {firstLaunch: null};
	}

	componentDidMount() {
		AsyncStorage.getItem('@alreadyLaunched')
			.then(value => {
				if (value) {
					this.setState({firstLaunch: false});
				} else {
					AsyncStorage.setItem('@alreadyLaunched', 'true');
                 	this.setState({firstLaunch: true});
				}
			})
	}
	
	render() {
		if (this.state.firstLaunch === null) {
			return null;
		} else if (this.state.firstLaunch) {
			return (
				<MasterPwdInputPage />
			);
		} else {
			return (
				<View>
					<Text>Welcome</Text>
				</View>
			);
		}
	}
}
