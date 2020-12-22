import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import React from 'react';
import GenerateQR from '../screens/GenerateQR';

const GenerateQRNavigator = createStackNavigator();

export function GenerateQRNavigatorScreen() {
    return (
        <GenerateQRNavigator.Navigator initialRouteName='GenerateQR'
            screenOptions={{
                headerStyle: { backgroundColor: '#7cc' },
                headerTintColor: '#fff',
                headerTitleStyle: { color: '#fff' }
            }}>
            <GenerateQRNavigator.Screen name='GenerateQR' component={GenerateQR}
                options={({ navigation }) => ({
                    headerTitle: 'GenerateQR',
                    headerLeft: () => (<Icon name='menu' size={36} color='#fff' onPress={() => navigation.toggleDrawer()} />)
                })} />
        </GenerateQRNavigator.Navigator>
    );
}