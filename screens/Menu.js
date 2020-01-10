import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Menu() {
    return (
        <View style={globalStyles.container}>
            <Text>Menu Page</Text>
        </View>
    );
}

Menu.navigationOptions = {
    title: 'Menu',
};
