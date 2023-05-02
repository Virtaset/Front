import { Text, View, StyleSheet, Image} from 'react-native';
import styles from '../styles/styleSheet.js';

//Simple headers for the app, unused for now
export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <Image source={require('../assets/Virta_logo8.png')} style={styles.virtaLogo} />
        </View>
    )
}