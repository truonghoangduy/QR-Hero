import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


import { HomeNavigatorScreen } from './HomeRoute'
import { Icon } from 'react-native-elements';

import { connect } from 'react-redux';
import Home from '../screens/Home';
import { View, Text, Linking } from 'react-native';
import { GenerateQRNavigatorScreen } from './CreateQRRoute';
import HomeV2 from '../screens/HomeV2';
import Posts from '../screens/Post';
import Detail from '../screens/Detail'

function CustomDrawerContent(props: any) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ backgroundColor: '#7cc', height: 80, alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 2 }}>
                    <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold' }}>SonKK & Friends</Text>
                </View>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem label='Help'
                icon={({ focused, color, size }) => <Icon name='help' size={size} color={focused ? '#7cc' : '#ccc'} />}
                onPress={() => Linking.openURL('https://reactnavigation.org/docs/getting-started')} />
        </DrawerContentScrollView>
    );
}
const MainNavigator = createDrawerNavigator();
function MainNavigatorScreen() {
    return (
        <MainNavigator.Navigator initialRouteName='GenerateQR' drawerContent={props => <CustomDrawerContent {...props} />}>
            <MainNavigator.Screen name='Home' component={HomeNavigatorScreen}
                options={{
                    headerShown: false,
                    drawerIcon: ({ focused, size }) => (<Icon name='home' size={size} color={focused ? '#7cc' : '#ccc'} />)
                }} />
            <MainNavigator.Screen name='GenerateQR' component={GenerateQRNavigatorScreen}
                options={{
                    headerShown: false,
                    drawerIcon: ({ focused, size }) => (<Icon name='home' size={size} color={focused ? '#7cc' : '#ccc'} />)
                }} />
        </MainNavigator.Navigator>
    );
}


const MainStackNavigator = createStackNavigator();

function MainNavigatorScreenV2() {
    return (
        <MainStackNavigator.Navigator>
            <MainStackNavigator.Screen options={{ headerShown: false }}
                name='Home' component={HomeV2}
            />
            <MainStackNavigator.Screen options={{ headerShown: false }}
                name='Detail' component={Detail}
            />
            <MainStackNavigator.Screen name="Post" component={Posts}></MainStackNavigator.Screen>
        </MainStackNavigator.Navigator>
    );

}

export class Main extends Component {
    render() {
        return (
            <NavigationContainer>
                <MainNavigatorScreenV2></MainNavigatorScreenV2>
            </NavigationContainer>
        );
    }
}