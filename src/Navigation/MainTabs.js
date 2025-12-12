import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image, Text } from "react-native";

import VotersListScreen from "../Screens/VotersListScreen";
import NotificationsScreen from "../Screens/NotificationsScreen";
import AllocationScreen from "../Screens/AllocationScreen";
import ProfileScreen from "../Screens/ProfileScreen";

import HomeIcon from "../../assets/home.png";
import BellIcon from "../../assets/bell.png";
import AllocateIcon from "../../assets/add-user.png";
import ProfileIcon from "../../assets/Icon.png";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 60,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarActiveTintColor: "rgba(217, 98, 14, 1)",  
        tabBarInactiveTintColor: "#777",                
      }}
    >
      {/* HOME */}
      <Tab.Screen
        name="Home"
        component={VotersListScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                padding: 8,
                borderRadius: 12,
              }}
            >
              <Image
                source={HomeIcon}
                style={{
                  width: 22,
                  height: 22,
                  tintColor: focused ? "rgba(217, 98, 14, 1)" : "#777",
                }}
              />
            </View>
          ),
        }}
      />

      {/* Notifications */}
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                padding: 8,
                borderRadius: 12,
               
              }}
            >
              <Image
                source={BellIcon}
                style={{
                  width: 22,
                  height: 22,
                  tintColor: focused ? "rgba(217, 98, 14, 1)" : "#777",
                }}
              />
            </View>
          ),
        }}
      />

      {/* Allocation */}
      <Tab.Screen
        name="Allocation"
        component={AllocationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                padding: 8,
                borderRadius: 12,
             
              }}
            >
              <Image
                source={AllocateIcon}
                style={{
                  width: 22,
                  height: 22,
                  tintColor: focused ? "rgba(217, 98, 14, 1)" : "#777",
                }}
              />
            </View>
          ),
        }}
      />

      {/* Profile */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                padding: 8,
                borderRadius: 12,
              
              }}
            >
              <Image
                source={ProfileIcon}
                style={{
                 
                  tintColor: focused ? "rgba(217, 98, 14, 1)" : "#777",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
