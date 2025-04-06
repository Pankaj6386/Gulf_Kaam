import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IntroPages, Login, Splash,Language} from '../screens/Index';

const RootStack = createNativeStackNavigator({
  screens: {
    Splash: {
      screen: Splash,
      options: {
        headerShown: false,
      },
    },
    IntroScreen: {
      screen: IntroPages,
      options: {
        headerShown: false,
      },
    },
    Login: {
      screen: Login,
      options: {
        headerShown: false,
      },
    },
    Language: {
      screen: Language,
      options: {
        headerShown: false,
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

const Routes = () => {
  return <Navigation />;
};

export default Routes;

const styles = StyleSheet.create({});

// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {createStaticNavigation, useNavigation} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';

// function HomeScreen() {
//   const navigation = useNavigation();
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text
//         onPress={() => {
//           navigation.navigate('Login');
//         }}>
//         Home Screen
//       </Text>
//     </View>
//   );
// }

// function LoginScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Login Screen</Text>
//     </View>
//   );
// }

// const MyTabs = createBottomTabNavigator({
//   screens: {
//     Home: HomeScreen,
//     Profile: LoginScreen,
//   },
// });

// const RootStack = createNativeStackNavigator({
//   screens: {
//     Home: {
//       screen: HomeScreen,
//       options: {
//         headerShown: false,
//       },
//     },

//     Login: LoginScreen,
//   },
// });

// const Navigation = createStaticNavigation(MyDrawer);

// const App = () => {
//   console.log('hello react-native ');
//   return <Navigation />;
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// // import * as React from 'react';
// // import {Text, View} from 'react-native';
// // import {createStaticNavigation, useNavigation} from '@react-navigation/native';
// // import {Button} from '@react-navigation/elements';
// // import {createDrawerNavigator} from '@react-navigation/drawer';

// // function HomeScreen() {
// //   const navigation = useNavigation();

// //   return (
// //     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
// //       <Text>Home Screen</Text>
// //       <Button onPress={() => navigation.navigate('Profile')}>
// //         Go to Profile
// //       </Button>
// //     </View>
// //   );
// // }

// // function ProfileScreen() {
// //   const navigation = useNavigation();

// //   return (
// //     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
// //       <Text>Profile Screen</Text>
// //       <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
// //     </View>
// //   );
// // }

// // const MyDrawer = createDrawerNavigator({
// //   screens: {
// //     Home: HomeScreen,
// //     Profile: ProfileScreen,
// //   },
// // });

// // const Navigation = createStaticNavigation(MyDrawer);

// // export default function App() {
// //   return <Navigation />;
// // }
