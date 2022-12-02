import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//pantallas
import homeScreen from "./Screens/homeScreen";
import scrumScreen from "./Screens/scrumScreen";
import stackScreen from "./Screens/stacktScreen";

//import { TabBarIOSItem } from "react-native";

//icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"



const Tab = createBottomTabNavigator();

function MyTabs() {
    return(
        <Tab.Navigator
        intialRouteName= "home"
        screenOptions = {{
            tabBarActiveTintColor:"blue"
        }} 
        >

            <Tab.Screens 
            name = "home" 
            component= {homeScreen}  
            options = {{
                tabBarLabel: "hogar",
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="hogar" color ={color} size ={30} />
                    ),
                //tabBarBadge:
                headerShouwn: false,
            }} 
            />

            <Tab.Screens 
            name = "scrum" 
            component= {scrumScreen} 
            options = {{
                tabBarLabel: "scrum",
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="///////" color ={color} size ={30} />
                    ),
                //tabBarBadge:
                headerShouwn: false,
            }} 
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs/>
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