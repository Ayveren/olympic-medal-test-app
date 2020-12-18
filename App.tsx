import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import HomeScreen from 'src/screens/home';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const App = () => (
    <SafeAreaView style={styles.container}>
        <HomeScreen/>
        <StatusBar style='auto'/>
    </SafeAreaView>
);

export default App;

