import React from 'react';
import {View, StyleSheet, Text, KeyboardAvoidingView, ActivityIndicator, Image } from 'react-native';
import { connect } from 'react-redux';
 
class LoginScreen extends React.Component {
    state = {}

    render() {

        return (
            <View>

            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (token) => dispatch(login(token))
    }
};

export default connect(null, mapDispatchToProps)(LoginComponent);

const styles = StyleSheet.create({

});