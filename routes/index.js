import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/Home';
import MenuScreen from '../screens/Menu';

const StackNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Menu: {
            screen: MenuScreen,
        },
    },
    {
        initialRouteName: 'Home',
        // initialRouteName: 'Menu',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'coral',
            },
            headerTintColor: '#fff',
        }
    },
);

export default createAppContainer(StackNavigator);