import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { Fontisto } from '@expo/vector-icons'
import { useFonts } from "expo-font"

export default function ListItem({
	element,
	deleteHandler,
	saveData
}) {

	const [ fontsLoaded ] = useFonts({
		'RalewayBold': require('../../assets/fonts/Raleway-Bold.ttf'),
	})
	if (!fontsLoaded) return null

	return (
		<TouchableHighlight>
			<View
				style={ styles.taskCard }
			>
			<Text
				style = {{
					fontFamily: 'RalewayBold',
					color: '#DBA39A',
					fontSize: 18,
				}}
			>
				{element.text}
			</Text>
			<Fontisto
				name = "close"
				onPress = { () => { deleteHandler(element.key); saveData(); } }
				size = { 24 } color="#DBA39A"
				style = { styles.closeIcon }
			/>
			</View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	taskCard: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: "space-between",
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 10,
		paddingVertical: 10,
		paddingHorizontal: 20,
		width: '90%',
		backgroundColor: '#F5EBE0',
		borderWidth: 3,
		borderColor: '#F0DBDB',
		borderRadius: 20,
		elevation: 3,
	}
})
