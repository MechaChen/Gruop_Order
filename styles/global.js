import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 30,
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
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'coral',
        borderRadius: 5,
    },
    titleText: {
        // borderWidth: 1,
        // borderColor: '#00f',
        flex: 1,
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
    },
    checkbox: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: '#0f0',
    },
    items: {
        height: 380,
    },
    itemContainer: {
        // borderWidth: 1,
        // borderColor: '#00f',
        marginVertical: 10,
        // paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    itemText: {
        // borderWidth: 1,
        // borderColor: '#f00',
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
    },
    itemMain: {
        flex: 1.5,
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