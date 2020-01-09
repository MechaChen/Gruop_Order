import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 40,
    },
    infoText: {
        paddingVertical: 5,
        fontSize: 14,
        color: '#333',
    },
    itemTitle: {
        marginTop: 30,
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'coral',
        borderRadius: 5,
    },
    titleText: {
        color: '#fff',
        fontSize: 20,
    },
    items: {
        height: 380
    },
    itemContainer: {
        marginVertical: 10,
        // paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    itemText: {
        fontSize: 16,
    },
    status: {
        paddingTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statusText: {
        textAlign: 'center',
        paddingBottom: 10,
        fontSize: 16,
    },
    statusNumber: {
        fontSize: 24,
    }
});