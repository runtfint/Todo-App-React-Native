import { useState } from 'react'
import { StyleSheet, Text, SafeAreaView, View, TextInput, Pressable} from 'react-native'
import { useFonts } from 'expo-font'
import Modal from 'react-native-modal'
import { Fontisto } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'; 

export default function ModalAddTask({
    isVisible,
    changeModalVisibility,
	addHandler,
	saveData,
}) {

  	const [text, setTaskText] = useState('')
	const changeTaskText = (text) => {
		setTaskText(text)
	}

	const addTask = (text) => {
		addHandler(text)
		changeModalVisibility()
		saveData()
	}

	const [ fontsLoaded ] = useFonts({
		'RalewayRegular': require('../../assets/fonts/Raleway-Regular.ttf'),
		'RalewayBold': require('../../assets/fonts/Raleway-Bold.ttf'),
	})
	if (!fontsLoaded) return null

  	return (
		<SafeAreaView>
			<Modal
				isVisible = { isVisible }
				backdropOpacity = { 0.5 }
				onBackdropPress = { changeModalVisibility }
			>
				<View
					style = { styles.modalView }
				>
					<Text
						style = { styles.header }
					>
						Что нужно сделать?
					</Text>
					<View
						style = { styles.inputView }
					>
						<TextInput
							multiline
							placeholder='Я хочу...'
							style = { styles.inputTask }
							onChangeText = { changeTaskText }
						/>
					</View>
					<View
						style = { styles.icons }
					>
						<Fontisto
							name = "close"
							onPress = { changeModalVisibility }
							size = { 50 }
							color="#DBA39A"
							style = { styles.closeIcon }
						/>
						<MaterialIcons
							onPress = { () => addTask(text) }
							name="add-task"
							size={ 50 }
							color="#DBA39A"
						/>
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
    modalView: {
        marginTop: 120,
        alignSelf: 'center',
        backgroundColor: '#fefcf3',
        width: '90%',
        borderRadius: 20,
		padding: 20,
    },
	icons:{
		flexDirection: 'row',
		alignContent: 'center',
		justifyContent: 'space-around',
	},
	closeIcon: {
		
	},
	addIcon: {

	},
	header: {
		fontFamily: 'RalewayBold',
		textAlign: 'center',
		fontSize: 25,
		color: '#DBA39A',
		textAlign: 'center',
		marginBottom: 20,
	},
	text: {
		textAlign: 'center',
		fontSize: 20,
		color: '#DBA39A',
	},
	inputTask: {
		fontFamily: 'RalewayRegular',
		fontSize: 16,
		color: '#DBA39A',
	},
	inputView: {
		borderRadius: 20,
		paddingHorizontal: 20,
		paddingVertical: 5,
		borderRadius: 20,
		borderWidth: 3,
		backgroundColor: '#F5EBE0',
		borderColor: '#f0dbdb',
		elevation: 3,
		marginBottom: 20,
	},
})
