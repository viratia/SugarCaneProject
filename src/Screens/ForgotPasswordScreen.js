import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ForgotPasswordScreen() {
    const [mobile, setMobile] = useState("");
    const [mobileError, setMobileError] = useState("");
    const navigation = useNavigation();

     const validateMobile = () => {
        if (mobile.trim() === "") {
            setMobileError("Please enter mobile number");
            return false;
        }

        if (!/^[0-9]{10}$/.test(mobile)) {
            setMobileError("Enter a valid 10-digit mobile number");
            return false;
        }

        setMobileError("");
        return true;
    };

    const sendOtp = () => {
        if (!validateMobile()) {
            return;
        }

        navigation.navigate("VerifyAccountScreen");
    };


    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView contentContainerStyle={styles.container}>

                <Text style={styles.title}>Forgot Password</Text>

                <Text style={styles.subtitle}>
                    No worries! Enter your email address below and we will{"\n"}
                    send you a code to reset password.
                </Text>

                <Text style={styles.label}>Mobile Number</Text>

               <View>
                 <TextInput
                    style={[styles.input,
                        mobileError ? {borderColor:"red"} : null
                    ]}
                    placeholder="Enter Mobile Number"
                    keyboardType="numeric"
                    value={mobile}
                    onChangeText={(text)=>{
                        setMobile(text);
                        setMobileError('');
                    }}
                />

                {
                    mobileError && <Text style={{color:"red"}}>{mobileError}</Text>
                }
               </View>

            </ScrollView>

            {/* Bottom Button */}
            <View style={styles.bottomArea}>
                <TouchableOpacity style={styles.button} onPress={sendOtp}>
                    <Text style={styles.buttonText}>Send OTP</Text>
                </TouchableOpacity>

                <Text style={styles.bottomText}>
                    Don’t have an account?{" "}
                    <Text
                        style={styles.registerText}
                        onPress={() => navigation.navigate("RegisterScreen")}
                    >
                        Register Now!
                    </Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 70,
    },

    title: {
        fontSize: 26,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 10,
        color: "#1c2a38",
    },

    subtitle: {
        textAlign: "center",
        color: "#555",
        fontSize: 14,
        marginBottom: 40,
        lineHeight: 20,
    },

    label: {
        fontSize: 14,
        color: "#222",
        marginBottom: 5,
    },

    input: {
        borderWidth: 1,
     borderColor: "rgba(255, 197, 132, 1)",
        borderRadius: 8,
        padding: 12,
       
    },

    bottomArea: {
        paddingHorizontal: 20,
        paddingBottom: 60,
    },

    button: {
        backgroundColor: "rgba(217, 98, 14, 1)",
        paddingVertical: 14,
        borderRadius: 25,
        alignItems: "center",
    },

    buttonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
    },

    bottomText: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 14,
        color: "#444",
    },

    registerText: {
        color: "#d2691e",
        fontWeight: "600",
        textDecorationLine: "underline",
    },
});
