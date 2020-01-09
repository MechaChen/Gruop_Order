import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home() {
    return (
        <View style={globalStyles.container}>
            <Text>Home page</Text>
        </View>
    );
}

Home.navigationOptions = {
    title: '叫外送囉~',
};
