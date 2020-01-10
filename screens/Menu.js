import React, { useState } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, FlatList, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

export default function Menu() {
    const [shopName, setShopName] = useState('');
    const [date, setDate] = useState(new Date('2020-06-12'));
    const [items, setItems] = useState([
        { key: '1', name: '香滷大雞腿', price: 80 },
        { key: '2', name: '蜜汁大雞腿', price: 80 },
        { key: '3', name: '蜜汁大排骨', price: 80 },
        { key: '4', name: '宮保雞丁', price: 70 },
        { key: '5', name: '酥炸大排骨', price: 80 },
    ]);

    const addItem = (item) => {
        setItem((prev) => [...prev, item]);
    }

    const alert = () => {
        Alert.alert(
            'Alert Title',
            'lorem ipsum dolor sit amot',
            [
                { text: 'OK', onPress: () => console.log('OK clicked')},
                { text: 'Cancel', onPress: () => console.log('Cancel clicked')},
            ]
        )
    }

    const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };

    return (
        <TouchableWithoutFeedback style={globalStyles.clickOutSide} onPress={Keyboard.dismiss}>
            <View style={globalStyles.container}>
                <TextInput
                    style={globalStyles.shopName}
                    placeholder="請輸入店名"
                    onChangeText={(val) => setShopName(val)}
                />
                <DateTimePicker
                    value={date}
                    mode="date"
                    onChange={(event, date) => setDate(date)}
                    locale="zh-tw"
                />
                <View style={globalStyles.addItem}>
                    <Text style={globalStyles.addText}>新增餐點</Text>
                    <MaterialIcons
                        style={globalStyles.addIcon}
                        name="add-circle"
                        color="coral"
                    />
                </View>
                <FlatList
                    data={items}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.name}{item.price}</Text>
                        </View>
                    )}
                />
                <Button
                    title="確認"
                    raised={true}
                    containerStyle={globalStyles.buttonContainer}
                    buttonStyle={globalStyles.button}
                    onPress={alert}
                />
                <Text style={globalStyles.date}>{date.toLocaleDateString('chinese', options)}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

Menu.navigationOptions = {
    title: '今日餐點',
};
