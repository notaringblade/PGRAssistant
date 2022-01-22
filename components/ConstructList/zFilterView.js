import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { lazy } from 'react';
import index from './index';
import rankAFilter from './rankAFilter';
import rankSFilter from './rankSFilter';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    

  return (
    <Tab.Navigator mode="modal"
      screenOptions={{
        tabBarActiveTintColor: '#D9D9D9',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: '#121212', minHeight: 30, },
        tabBarIndicatorStyle: {backgroundColor: '#D9D9D9'},
        
      }}
    >
      <Tab.Screen
        name="All"
        component={index}
        options={{ tabBarLabel: 'All' }}
      />
      <Tab.Screen
        name="ranksAFilter"
        component={rankAFilter}
        options={{ tabBarLabel: 'A' }}
      />
      <Tab.Screen
        name="WeaponTab"
        component={rankSFilter}
        options={{ tabBarLabel: 'S' }}
      />
      
      
    </Tab.Navigator>
  );
}

export default MyTabs;