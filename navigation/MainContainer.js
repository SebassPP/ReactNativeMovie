import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons  from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import Favorites from './screens/Favorites';
import AddMovie from './screens/AddMovie';

const Homename = 'Home';
const Favoritesname = 'LoadedMovies';
const AddMoviename = 'AddMovie';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName={Homename}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === Homename) {
            iconName = focused ? 'home' : 'home-outline';
          }else if (rn === Favoritesname) {
            iconName = focused ? 'list' : 'list-outline';
          }else if (rn === AddMoviename) {
            iconName = focused ? 'add' : 'add-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        labelStyle: {paddingBottom: 10, fontSize: 10},
        style: {padding: 10, height: 70},
      }}
      >
        <Tab.Screen name={Homename} component={HomeScreen} />
        <Tab.Screen name={Favoritesname} component={Favorites} />
        <Tab.Screen name={AddMoviename} component={AddMovie} />


      </Tab.Navigator>

    </NavigationContainer>
  );
}
