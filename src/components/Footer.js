import { StyleSheet, Text, Pressable, SafeAreaView} from 'react-native'
import { useFonts } from 'expo-font'

export default function Footer({
    countOfTasks,
    changeModalVisibility, 
}) {

	const [ fontsLoaded ] = useFonts({
		'RalewayRegular': require('../../assets/fonts/Raleway-Regular.ttf'),
	})
	if (!fontsLoaded) return null

	return (
		<SafeAreaView
			style={ styles.main }
		>
			<Text
				style={[ {fontSize: 20}, styles.text ]}
			>
				Всего задач: { countOfTasks }
			</Text>
			<Pressable
				style = { styles.addButton }
				onPress = { changeModalVisibility }
			>
				<Text
					style={[ {fontSize: 18}, styles.text ]}
				>
					Добавить задачу
				</Text>
			</Pressable>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		flexDirection: 'row',
		position: 'absolute',
		backgroundColor: '#F5EBE0',
		height: 80,
		width: '100%',
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	addButton: {
		borderRadius: 20,
		padding: 10,
		width: 200,
		borderWidth: 3,
		backgroundColor: '#F5EBE0',
		borderWidth: 3,
		borderColor: '#F0DBDB',
		textAlign: 'center',
		elevation: 3,
	},
	text: {
		fontFamily: 'RalewayRegular',
		color: '#DBA39A',
		textAlign: 'center',
	},
})
