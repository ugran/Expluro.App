import React from 'react';
import {View, StyleSheet, Text, KeyboardAvoidingView, ActivityIndicator, Image } from 'react-native';
import { connect } from 'react-redux';
 
class LoginScreen extends React.Component {
    state = {}

    render() {

        return (
            <KeyboardAvoidingView style={styles.loginWrapper} behavior="padding">
                <Image source={require('../assets/logo.png')} />
                <Text style={styles.appName}>Expluro</Text>
            </KeyboardAvoidingView>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (token) => dispatch(login(token))
    }
};

export default connect(null, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
    loginWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    appName: {
        fontSize: 24,
        marginBottom: 30,
        fontWeight: 'bold'
    }
});