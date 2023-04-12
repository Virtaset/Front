import { Text, View, StyleSheet } from 'react-native';
import styles from '../styles/styleSheet.js';

//Simple headers for the app, unused for now
export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.boldHeader}>Sähkösovellus</Text>
            <Text style={styles.lightHeader}>Virtaset™</Text>
        </View>
    )
}