import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from "../Screens/Onboarding";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import HomeScreen from "../Screens/HomeScreen";
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen";
import VerifyAccountScreen from "../Screens/VerifyAccountScreen";
import MainTabs from "./MainTabs";


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: true }}>
                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
                <Stack.Screen name="VerifyAccountScreen" component={VerifyAccountScreen} />
               <Stack.Screen name="MainTabs" component={MainTabs} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
