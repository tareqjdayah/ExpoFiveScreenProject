import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import PatientsListScreen from './screens/PatientsListScreen';
import PatientDetailScreen from './screens/PatientDetailScreen';
import CriticalConditionScreen from './screens/CriticalConditionScreen';
import ProfileScreen from './screens/ProfileScreen';

// Use the function you've imported

function App() {
  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="PatientsListScreen" component={PatientsListScreen} />
        <Stack.Screen name="PatientDetailScreen" component={PatientDetailScreen} />
        <Stack.Screen name="CriticalConditionScreen" component={CriticalConditionScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        {/* You can add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
