import { Text, View, StyleSheet } from 'react-native';

//Simple headers for the app
export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.boldHeader}>Sähkösovellus</Text>
            <Text style={styles.lightHeader}>Virtaset™</Text>
        </View>
    )
}

//Styles for the headers
const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginHorizontal: 20,
    },
    boldHeader: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    lightHeader: {
        fontSize: 20,
    }
})