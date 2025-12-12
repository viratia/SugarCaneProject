import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from "../Screens/Onboarding";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import VotersListScreen from "../Screens/VotersListScreen"
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen";
import VerifyAccountScreen from "../Screens/VerifyAccountScreen";
import MainTabs from "./MainTabs";
import AddNewVoterScreen from "../Screens/AddNewVoterScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="VotersListScreen" component={VotersListScreen} />
                <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
                <Stack.Screen name="VerifyAccountScreen" component={VerifyAccountScreen} />
               <Stack.Screen name="MainTabs" component={MainTabs} />

               <Stack.Screen name="AddNewVoterScreen" component={AddNewVoterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
