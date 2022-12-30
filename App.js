import React, { useState, useEffect } from 'react'
import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native'
import Header from './src/components/Header'
import Footer from './src/components/Footer'
import ListItem from './src/components/ListItem'
import ModalAddTask from './src/components/ModalAddTask'
import { StatusBar } from 'expo-status-bar'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {

	const [listOfTasks, setListOfTasks] = useState([])

	const [isVisible, setVisible] = useState(false)
	const setModalVisible = () => {
		setVisible(true)
	}
	const setModalHide = () => {
		setVisible(false)
	}

	const addHandler = (text) => {
		setListOfTasks((list) => {
			return [
				{ text: text, key: Math.random().toString(36).substring(7) },
				...list
			]
		})
	}

	const deleteHandler = (key) => {
		setListOfTasks((list) => {
			return list.filter(listOfTasks => listOfTasks.key != key)
		})
	}

	
	const saveData = async () => {
		try {
			await AsyncStorage.setItem("Tasks", JSON.stringify(listOfTasks))
			console.log("saved   ", listOfTasks)
		}
		catch (err) {
			alert(err)
		}
	}

	const loadData = async () => {
		try {
			let jsonListOfTasks = await AsyncStorage.getItem("Tasks")
			if (jsonListOfTasks !== null) {
				setListOfTasks(JSON.parse(jsonListOfTasks))
				console.log("loaded   ", listOfTasks)
			}
		}
		catch (err) {
			alert(err)
		}
	}
	useEffect(() => {
		loadData()
	}, [])

	useEffect(() => {
		saveData()
	}, [listOfTasks])
	

	return (
		<SafeAreaView
			style = { styles.main }
		>
			<Header />
			<View>
				<FlatList
					data = { listOfTasks }
					renderItem = { ({ item }) => (
						<ListItem
							element = { item }
							deleteHandler = { deleteHandler }
							saveData = { saveData }
						/>
				)}
				/>
			</View>
			<ModalAddTask
				isVisible = { isVisible }
				changeModalVisibility = { setModalHide }
				addHandler = { addHandler }
				saveData = { saveData }
			/>
			<Footer
				countOfTasks = {listOfTasks.length }
				changeModalVisibility = { setModalVisible }
			/>
			<StatusBar
				style="dark"
				backgroundColor='#F5EBE0'
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	main: {
		backgroundColor: '#FEFCF3',
		height: '100%',
	}
})
