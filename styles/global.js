import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 30,
        flex: 1,
    },
    // Home
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
    },
    menuIcon: {
        paddingRight: 5,
    },
    // Menu
    shopName: {
        marginTop: 10,
        marginBottom: 30,
        paddingVertical: 20,
        paddingHorizontal: 20,
        textAlign: 'center',
        borderTopWidth: 1,
        borderColor: 'coral',
        borderBottomWidth: 1,
        fontSize: 20,
    },
    buttonContainer: {
        marginTop: 80,
        marginHorizontal: 100,
    },
    button: {
        paddingVertical: 10,
        backgroundColor: 'coral',
        borderRadius: 5,
    },
    date: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 16,
    },
    addItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // borderTopColor: '#f99991',
        // borderTopWidth: 1,
        // borderBottomColor: '#f99991',
        // borderBottomWidth: 1,
    },
    addText: {
        fontSize: 20,
    },
    addIcon: {
        fontSize: 60,
        marginLeft: 20,
        // shadowColor: "#aaa",
        // shadowOffset: { width: 0, height: 4 },
        // shadowOpacity: 0.3,
        // shadowRadius: 4.65,
        // elevation: 1,
    }
});