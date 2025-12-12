import React, { useRef, useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function VerifyAccountScreen() {
    const navigation = useNavigation();

    const [otp, setOtp] = useState(["", "", "", ""]);

    const inputRefs = [
        useRef(),
        useRef(),
        useRef(),
        useRef()
    ];

    const handleOtpChange = (text, index) => {
        if (text.length > 1) return;

        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < 3) {
            inputRefs[index + 1].current.focus();
        }
    };

 const verifyAccount = () => {
    const enteredOtp = otp.join("");     
    const correctOtp = "2177";        

    if (enteredOtp === correctOtp) {
     Toast.show({
                    type: 'success',
                    text1: 'Login Successful',
                    position: "top",
                    visibilityTime: 1500,
                    autoHide: true,
                })
    
                setTimeout(() => {
                    navigation.navigate("LoginScreen");
                }, 1200);
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'Invalid Mobile Number or Password',
                    position: "top",
                    visibilityTime: 2000,
                    autoHide: true,
                })
    }

    setOtp(["", "", "", ""]); 
};


    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView contentContainerStyle={styles.container}>

                <Text style={styles.title}>Verify Account</Text>

                <Text style={styles.subtitle}>
                    Code has been sent to <Text style={{ fontWeight: "700" }}>9876543210</Text>{"\n"}
                    Enter the code to verify your account.
                </Text>

                <Text style={styles.label}>Enter 4 digit code</Text>

                {/* OTP Boxes */}
                <View style={styles.otpContainer}>
                    {otp.map((item, index) => (
                        <TextInput
                            key={index}
                            ref={inputRefs[index]}
                            value={item}
                            onChangeText={(text) => handleOtpChange(text, index)}
                            keyboardType="numeric"
                            maxLength={1}
                            style={styles.otpInput}
                        />
                    ))}
                </View>

            </ScrollView>

            {/* Bottom Button */}
            <View style={styles.bottomArea}>
                <TouchableOpacity style={styles.button} onPress={verifyAccount}>
                    <Text style={styles.buttonText}>Verify Account</Text>
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
        marginBottom: 10,
    },

    otpContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 30,
    },

    otpInput: {
        width: 55,
        height: 55,
        borderWidth: 1,
        borderColor: "#f5c99b",
        borderRadius: 8,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "600",
    },

    bottomArea: {
        paddingHorizontal: 20,
        paddingBottom: 60,
    },

    button: {
        backgroundColor: "#d2691e",
        paddingVertical: 14,
        borderRadius: 25,
        alignItems: "center",
    },

    buttonText: {
        color: "#fff",
        fontSize: 16,
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
