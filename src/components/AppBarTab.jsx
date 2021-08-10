import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';

const styles = StyleSheet.create({
	text: {
		paddingTop: 15,
		paddingBottom: 20,
		paddingLeft: 15,
	},
});

const AppBarTab = ({ title, link }) => {
	return (
		<Pressable>
			<Link to={link}>
				<Text color='white' fontSize='heading' style={styles.text}>
					{title}
				</Text>
			</Link>
		</Pressable>
	);
};

export default AppBarTab;
