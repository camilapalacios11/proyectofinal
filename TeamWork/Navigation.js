import React, {useState} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { getAuth } from "firebase/auth";
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();

//pantallas
import HomeScreen from "./Screens/HomeScreen";
import ScrumScreen from "./Screens/ScrumScreen";
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
            component= {HomeScreen}  
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
            component= {ScrumScreen} 
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
    const auth = getAuth();
    const [user] = useState(auth.currentUser);

    return (
        <NavigationContainer>
            {
                user ? (
                    <MyTabs/>
                ) : (
                    <Stack.Navigator initialRouteName="Tapiz1">
                        <Stack.Screen name = "Tapiz1" component = {Tapiz1} options = {{headerShown: false}}/>
                        <Stack.Screen name = "home" component = {MyTabs} options = {{headerShown: false}}/>
                    </Stack.Navigator>
                )
            }
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