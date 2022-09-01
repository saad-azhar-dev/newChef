import React, { FC } from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Splash from '../views/splash';
import NeedLocation from '../views/needLocation';
import AuthView from '../views/authView';
import ForgotPassword from '../views/forgoPassword';
import VerifyAccount from '../views/verifyAccount';
import Login from '../views/login';
import SignUp from '../views/signUp';
import Home from '../views/Home';
import FoodProduct from '../views/FoodProduct';
import OrderPlaced from '../views/orderPlaced';
import MyProfile from '../views/myProfile';
import EditProfile from '../views/editProfile';
import MyOrders from '../views/myOrder';
import ChatList from '../views/chatList';
import ChatView from '../views/chatView';
import MyCart from '../views/myCart';
import YourCards from '../views/yourCard';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { darkBlue, grey } from '../constantValues/colors';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function SplashStack() {
  return (
    <Stack.Navigator initialRouteName={"Splash"} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'Splash'} component={Splash} />
    </Stack.Navigator>
  )
}

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName={"Auth"} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'Auth'} component={AuthView} />
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'SignUp'} component={SignUp} />
      <Stack.Screen name={'ForgotPassword'} component={ForgotPassword} />
      <Stack.Screen name={'VerifyAccount'} component={VerifyAccount} />
    </Stack.Navigator>
  )
}

function LocationStack() {
  return (
    <Stack.Navigator initialRouteName={"Location"} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'Location'} component={NeedLocation} />
    </Stack.Navigator>
  )
}

// function HomeStack() {
//   return (
//     <Stack.Navigator initialRouteName={"FoodProduct"} screenOptions={{ headerShown: false }}>
//       <Stack.Screen name={'FoodProduct'} component={FoodProduct} />
//       <Stack.Screen name={'OrderPlaced'} component={OrderPlaced} />
//       <Stack.Screen name={'EditProfile'} component={EditProfile} />
//       <Stack.Screen name={'ChatView'} component={ChatView} />
//       <Stack.Screen name={'YourCards'} component={YourCards} />
//     </Stack.Navigator>
//   )
// }

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home}
        options={{tabBarShowLabel:false, tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name={'home'} type='entypo'
             iconStyle={{fontSize:20,color:focused ?darkBlue:grey }}
            />)}}
       />
       <Tab.Screen name="ChatList" component={ChatList}
        options={{tabBarShowLabel:false, tabBarLabel:'Chat',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name={'chatbubbles'} type='ionicon'
             iconStyle={{fontSize:20,color:focused ?darkBlue:grey }}
            />)}}
       />
        <Tab.Screen name="MyCart" component={MyCart}
        options={{tabBarShowLabel:false, tabBarLabel:'Cart',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name={'shopping-cart'} type='entypo'
             iconStyle={{fontSize:20,color:focused ?darkBlue:grey }}
            />)}}
       />
        <Tab.Screen name="MyOrders" component={MyOrders}
        options={{tabBarShowLabel:false, tabBarLabel:'Order',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name={'file-text'} type='font-awesome'
             iconStyle={{fontSize:20,color:focused ?darkBlue:grey }}
            />)}}
       />
        <Tab.Screen name="MyProfile" component={MyProfile}
        options={{ tabBarShowLabel:false, tabBarLabel:'Profile',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name={'user'} type='antdesign'
             iconStyle={{fontSize:20,color:focused ?darkBlue:grey }}
            />)}}
       />
    </Tab.Navigator>
  );
}


function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashStack" screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'SplashScreen'} component={SplashStack} />
        <Stack.Screen name={'LocationScreen'} component={LocationStack} />
        <Stack.Screen name={'AuthScreen'} component={AuthStack} />
        <Stack.Screen name={'BottomTabs'} component={BottomTabs} />
        <Stack.Screen name={'FoodProduct'} component={FoodProduct} />
        <Stack.Screen name={'ChatView'} component={ChatView} />
       <Stack.Screen name={'YourCards'} component={YourCards} />
       <Stack.Screen name={'OrderPlaced'} component={OrderPlaced} />
       <Stack.Screen name={'EditProfile'} component={EditProfile} />

        {/* <Stack.Screen name={'HomeStack'} component={HomeStack}/> */}

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer