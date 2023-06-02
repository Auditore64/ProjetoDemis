import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Tela1 from './telas/Tela1';
import Tela2 from './telas/Tela2';
import Tela3 from './telas/Tela3';
import TelaHome from './telas/TelaHome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/*
é preciso criar um stack navigator para que ele possa acessar as telas
*/
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <View style={styles.homeview}>
      <Text>Home!</Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={styles.homeview}>
      <Text>Settings!</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={TelaHome} />
        <Tab.Screen name="Tela1" component={Tela1} />
        <Tab.Screen name="Tela2" component={Tela2} />
        <Tab.Screen name="Tela3" component={Tela3} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  //container geral
  container: {
    backgroundColor: 'white',
  },
  // texto "produto"
  prodText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 45,
  },
  homeview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});
