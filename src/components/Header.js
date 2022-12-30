import { StyleSheet, Text, SafeAreaView } from "react-native"
import { useFonts } from "expo-font"

export default function Header() {

    const [ fontsLoaded ] = useFonts({
		'RalewayBold': require('../../assets/fonts/Raleway-Bold.ttf'),
	})
	if (!fontsLoaded) return null

    return (
        <SafeAreaView
			style={ styles.main }
		>
			<Text
                style={ styles.text }
            >
                Мои задачи
            </Text>
		</SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 40,
        paddingBottom: 20,
        backgroundColor: '#F5EBE0',
        elevation: 3,
    },
    text: {
        textAlign: 'center',
        fontFamily: 'RalewayBold',
        fontSize: 30,
        width: '100%',
        color: '#DBA39A',
    }
})