import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

export default function Home() {
    const [shop, setShop] = useState('大方雞腿王');
    const [date, setDate] = useState('1/7');
    const [order, setOrder] = useState([
        { key: '1', paid: false, name: '俊偉', item: '香滷大雞腿', price: 80 },
        { key: '2', paid: false, name: 'FM', item: '蜜汁大雞腿', price: 80 },
        { key: '3', paid: false, name: 'CY', item: '蜜汁大雞腿', price: 80 },
        { key: '4', paid: false, name: '余光', item: '香滷大雞腿', price: 80 },
        { key: '5', paid: false, name: '敬岳', item: '蜜汁大排骨', price: 80 },
        { key: '6', paid: false, name: '貴麟', item: '宮保雞丁', price: 70 },
        { key: '7', paid: false, name: 'Link', item: '酥炸大排骨', price: 80 },
        { key: '8', paid: false, name: '柏緯', item: '酥炸大排骨', price: 80 },
    ]);

    const checkItem = (key) => {
        setOrder(order.map((item) => item.key === key ? { ...item, paid: !item.paid } : item ));
    }

    const total = order.reduce((accum, cur) => {
        return accum + cur.price
    }, 0);

    const paidTotal = order.reduce((accum, cur) => {
        return accum + (cur.paid ? cur.price : 0);
    }, 0);

    const people = order.reduce((accum, cur) => {
        return accum + 1;
    }, 0);

    const paidPeople = order.reduce((accum, cur) => {
        return accum + (cur.paid ? 1 : 0);
    }, 0);

    const sortedOrder = () => {
        const paidItems = [];
        const unPaidItems = [];
        order.forEach((item) => {
            item.paid ? paidItems.push(item) : unPaidItems.push(item);
        })
        return [...unPaidItems, ...paidItems];
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.infoText}>店家：{shop}</Text>
            <Text style={globalStyles.infoText}>日期：{date}</Text>
            <View style={globalStyles.itemTitle}>
                <Text style={globalStyles.titleText}>Paid</Text>
                <Text style={globalStyles.titleText}>Name</Text>
                <Text style={[globalStyles.titleText, globalStyles.itemMain]}>Item</Text>
                <Text style={globalStyles.titleText}>Price</Text>
            </View>
            <FlatList
                style={globalStyles.items}
                data={sortedOrder()}
                renderItem={({ item }) => (
                    <View style={globalStyles.itemContainer}>
                        <View style={globalStyles.checkbox}>
                            <CheckBox
                                onPress={() => checkItem(item.key)}
                                checked={item.paid}
                                checkedColor="coral"
                            />
                        </View>
                        <Text style={globalStyles.itemText}>{item.name}</Text>
                        <Text style={[globalStyles.itemText, globalStyles.itemMain]}>{item.item}</Text>
                        <Text style={globalStyles.itemText}>{item.price}</Text>
                    </View>
                ) }
            />
            <View style={globalStyles.status}>
                <View>
                    <Text style={globalStyles.statusText}>已付金額 / 總金額</Text>
                    <Text style={[globalStyles.statusText, globalStyles.statusNumber]}>{paidTotal} / {total}</Text>
                </View>
                <View>
                    <Text style={globalStyles.statusText}>已付款人數 / 總人數</Text>
                    <Text style={[globalStyles.statusText, globalStyles.statusNumber]}>{paidPeople} / {people}</Text>
                </View>
            </View>
        </View>
    );
}

Home.navigationOptions = ({ navigation }) => {
    return {
        title: '叫外送囉~',
        headerRight: () => (
            <View style={globalStyles.menuIcon}>
                <MaterialCommunityIcons
                    name="square-edit-outline"
                    onPress={() => navigation.navigate('Menu')}
                    size={30}
                    color="#fff"
                    style={globalStyles.menuIcon}
                />
            </View>
        ),
    };
};
