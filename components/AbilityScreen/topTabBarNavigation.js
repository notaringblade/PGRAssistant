import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CombatTab from './tabView/combatTab';
import MemoryTab from './tabView/memoryTab';
import WeaponTab from './tabView/weaponsTab';



const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: '#121212', borderRadius: 20, minHeight: 30},
        tabBarIndicatorStyle: {backgroundColor: 'white'}
      }}
    >
      <Tab.Screen
        name="CombatTab"
        component={CombatTab}
        options={{ tabBarLabel: 'Combat' }}
      />
      <Tab.Screen
        name="MemoryTab"
        component={MemoryTab}
        options={{ tabBarLabel: 'Memories' }}
      />
      <Tab.Screen
        name="WeaponTab"
        component={WeaponTab}
        options={{ tabBarLabel: 'Weapon' }}
      />
      
      
      
    </Tab.Navigator>
  );
}

export default MyTabs;