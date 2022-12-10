import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();

//pantallas
import homeScreen from "./Screens/homeScreen";
import scrumScreen from "./Screens/scrumScreen";
import stackScreen from "./Screens/AddWorks";
import Tapiz1 from './Screens/Tapiz1';

//import { TabBarIOSItem } from "react-native";

//icons
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();


function MyTabs() {
    return(
        <Tab.Navigator
        intialRouteName= "home"
        screenOptions = {{
            tabBarActiveTintColor:"blue"
        }} 
        >

            <Tab.Screen 
            name = "home" 
            component= {homeScreen}  
            options = {{
                tabBarLabel: "Hogar",
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="home" color ={color} size ={30} />
                    ),
                //tabBarBadge:
                headerShown: false,
            }} 
            />

            <Tab.Screen
            name = "scrum" 
            component= {scrumScreen} 
            options = {{
                tabBarLabel: "scrum",
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="layers-outline" color ={color} size ={30} />
                    ),
                //tabBarBadge:
                headerShown: false,
            }} 
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Tapiz1' >
                <Stack.Screen name='Tapiz1' component={Tapiz1} options={{headerShown: false}}/>
                <Stack.Screen name='home' component={homeScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
    
}
/*
const homeScreen = () => {
    return(
        <View>
            <Text
            style = {{
                fontSize: 30,
                textAlign: "center",
                marginTop: "20%"
            }}>HOME SCREEN</Text>
        </View>
    )
}
export default homeScreen;*/