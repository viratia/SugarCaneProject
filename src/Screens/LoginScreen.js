import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    ScrollView,
    Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Image } from "react-native"
import EyeOff from '../../assets/fi_eye-off.png'
import Eye from '../../assets/EyeView.png'
import Toast from "react-native-toast-message";

export default function LoginScreen() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    const [mobileError, setMobileError] = useState("");
    const [passwordError, setPasswordError] = useState("");


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

    const validatePassword = () => {
        if (password.trim() === "") {
            setPasswordError("Please enter password");
            return false;
        }

        const strongPasswordRegex =
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!strongPasswordRegex.test(password)) {
            setPasswordError("Password must include: 8 chars, uppercase, lowercase, number & special char");
            return false;
        }

        setPasswordError("");
        return true;
    };


    const login = () => {
        const isMobileValid = validateMobile();
        const isPasswordValid = validatePassword();

        if (!isMobileValid || !isPasswordValid) {
            return;
        }


        if (mobile === "9762010287" && password === "Ajinkya@2177") {
            setMobile("");
            setPassword("");

            Toast.show({
                type: 'success',
                text1: 'Login Successful',
                position: "top",
                visibilityTime: 1500,
                autoHide: true,
            })

            setTimeout(() => {
                navigation.navigate("MainTabs");
            }, 1000);
        } else {
            Toast.show({
                type: 'error',
                text1: 'Invalid Mobile Number or Password',
                position: "top",
                visibilityTime: 2000,
                autoHide: true,
            })

        }
    };




    return (
        <View style={styles.mainContainer}>

            {/* Content */}
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Login</Text>


                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.label}>Mobile Number</Text>
                    <View style={[styles.inputContainer,
                    mobileError ? { borderColor: "red" } : null
                    ]}>
                        <TextInput
                            value={mobile}
                            onChangeText={(text) => {
                                setMobile(text);
                                setMobileError("");
                            }}
                            placeholder="Enter Mobile Number"
                            keyboardType="numeric"
                            style={styles.mobileinput}
                        />
                    </View>

                    {mobileError ? (
                        <Text style={styles.errorText}>{mobileError}</Text>
                    ) : null}
                </View>

                {/* Password */}
                <Text style={styles.label}>
                    Password
                    <Text style={{ color: "red" }}>*</Text>
                </Text>

                <View style={[styles.passwordContainer,
                passwordError ? { borderColor: "red" } : null
                ]}>
                    <TextInput
                        value={password}
                        onChangeText={(text) => {
                            setPassword(text);
                            setPasswordError("");
                        }}
                        placeholder="Enter Password"
                        secureTextEntry={!passwordVisible}
                        style={styles.passwordInput}
                    />

                    <TouchableOpacity
                        onPress={() => setPasswordVisible(!passwordVisible)}
                        style={styles.eyeIcon}
                    >
                        <Image
                            source={passwordVisible ? EyeOff : Eye}
                            style={{ width: 22, height: 22, tintColor: "#777" }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>

                {
                    passwordError ? (
                        <Text style={styles.errorText}>{passwordError}</Text>
                    ) : null

                }

                <TouchableOpacity onPress={() => navigation.navigate("ForgotPasswordScreen")} style={styles.forgotBtn}>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>


            </ScrollView>

            {/* Login Button Fixed at Bottom */}
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity onPress={login} style={styles.loginButton}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                {/* Bottom Text */}
                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
                    <Text style={styles.bottomText}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
                        <Text style={styles.registerText}>Register Now!</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#fff",
    },

    contentContainer: {
        paddingHorizontal: 20,
        paddingTop: 80,
        paddingBottom: 20,
    },

    title: {
        fontSize: 30,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 40,

    },

    label: {
        fontWeight: "400",
        fontSize: 14,
        color: "rgba(30,41,59,1)",
        marginBottom: 5,
    },

    input: {
        borderWidth: 1,
        borderColor: "rgba(255, 197, 132, 1)",
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
    },
    mobileinput: {
        flex: 1,
        padding: 12,

    },
    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "rgba(255, 197, 132, 1)",
        borderRadius: 8,
        paddingRight: 12,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "rgba(255, 197, 132, 1)",
        borderRadius: 8,
        paddingRight: 12,

    },


    passwordInput: {
        flex: 1,
        padding: 12,
    },

    eyeIcon: {
        paddingLeft: 10,
    },

    forgotBtn: {
        alignSelf: "flex-end",
        marginTop: 5,
        marginBottom: 50,
    },

    forgotText: {
        color: "rgba(217, 98, 14, 1)",
        fontWeight: "600",
        textDecorationLine: "underline",
    },

    bottomText: {
        textAlign: "center",
        fontSize: 14,

    },

    registerText: {
        color: "rgba(217, 98, 14, 1)",
        fontWeight: "600",
        textDecorationLine: "underline",
    },

    bottomButtonContainer: {
        paddingHorizontal: 20,
        paddingBottom: 60,
    },

    loginButton: {
        backgroundColor: "rgba(217, 98, 14, 1)",
        paddingVertical: 14,
        borderRadius: 25,
        alignItems: "center",
    },

    loginText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
    },
    errorText: {
        color: "red",
        fontSize: 13,
        marginBottom: 10,
    },


});
