import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Onboarding() {
  const navigation = useNavigation();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    // Fade-in + zoom animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // After animation → redirect
      setTimeout(() => {
        navigation.replace("LoginScreen"); 
      }, 500);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../assets/MicrosoftTeams-video 1.png")}
        style={[
          styles.logo,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 350,
    height: 550,
    resizeMode: "contain",
  },
});
