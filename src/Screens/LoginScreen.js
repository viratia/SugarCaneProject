import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    ScrollView,
    Alert,
    ImageBackground
} from "react-native";
import { loginApi } from '../api/authApi'

import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { validateLogin } from '../validations/authValidation'

import { Image } from "react-native"
import EyeOff from '../../assets/fi_eye-off.png'
import Eye from '../../assets/EyeView.png'
import Toast from "react-native-toast-message";
import userIcon from '../../assets/user.png'
import padlock from '../../assets/padlock.png'

export default function LoginScreen() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [username, setUsername] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const navigation = useNavigation();



    // const login = () => {

    //     if (username === "Rushi" && password === "Rushi@123") {
    //         setUsername("");
    //         setPassword("");

    //         Toast.show({
    //             type: 'success',
    //             text1: 'Login Successful',
    //             position: "top",
    //             visibilityTime: 1500,
    //             autoHide: true,
    //         })

    //         setTimeout(() => {
    //             navigation.navigate("MainTabs");
    //         }, 1000);
    //     } else {
    //         Toast.show({
    //             type: 'error',
    //             text1: 'Invalid Username or Password',
    //             position: "top",
    //             visibilityTime: 2000,
    //             autoHide: true,
    //         })

    //     }
    // };


    // const login = async () => {
    //     if (!username) {
    //         setMobileError("Username is required");
    //         return;
    //     }

    //     if (!password) {
    //         setPasswordError("Password is required");
    //         return;
    //     }

    //     try {
    //         const response = await fetch("http://10.0.2.2:8080/user/login", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 username: username,
    //                 password: password,
    //             }),
    //         });

    //         const data = await response.json();

    //         if (response.ok) {
    //             // success
    //             Toast.show({
    //                 type: "success",
    //                 text1: "Login Successful",
    //                 position: "top",
    //                 visibilityTime: 1500,
    //                 autoHide: true,
    //             });

    //             setUsername("");
    //             setPassword("");

    //             setTimeout(() => {
    //                 navigation.navigate("MainTabs");
    //             }, 1000);

    //         } else {
    //             // backend error
    //             Toast.show({
    //                 type: "error",
    //                 text1: data.message || "Invalid Username or Password",
    //                 position: "top",
    //                 visibilityTime: 2000,
    //                 autoHide: true,
    //             });
    //         }

    //     } catch (error) {
    //         console.log(error);
    //         Toast.show({
    //             type: "error",
    //             text1: "Server error. Try again later",
    //             position: "top",
    //             visibilityTime: 2000,
    //             autoHide: true,
    //         });
    //     }
    // };

    const login = async () => {

        const { isValid, errors } = validateLogin({ username, password });

        if (!isValid) {
            if (errors.username) setUsernameError(errors.username);
            if (errors.password) setPasswordError(errors.password);
            return;
        }

        const payload = { username, password };

        console.log("Payload sent to API:", payload);

        const response = await loginApi(payload);

        console.log("API response:", response);

        if (response.success && response.data?.token) {

            console.log("Token found, login success");

            Toast.show({
                type: "success",
                text1: "Login Successful",
                position: "top",
                visibilityTime: 1500,
            });

            setUsername("");
            setPassword("");

            setTimeout(() => {
                navigation.navigate("MainTabs");
            }, 1000);

        } else {

            console.log("Token missing, login blocked");

            Toast.show({
                type: "error",
                text1: response.data?.message || "Invalid Username or Password",
                position: "top",
                visibilityTime: 2000,
            });
        }
    };




    return (
        <View style={styles.mainContainer}>
            {/* <ImageBackground
                source={require("../../assets/sugarcane-5525004_1280.jpg")} 
                style={{ flex: 1 }}
                resizeMode="cover"
            > */}
                {/* Content */}
                <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>

                    {/* Logo */}
                    <View style={styles.logoContainer}>
                        <View style={styles.logoCircle}>
                            <Image
                                source={require("../../assets/LeafImage.jpg")}
                                style={styles.logo}
                            />
                        </View>
                    </View>
                    <Text style={styles.title}>Welcome Back </Text>
                    <Text style={styles.subHeading}>
                        Log in to your account to access the factory dashboard.
                    </Text>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.label}>Username</Text>
                        <View style={[styles.inputContainer,
                        usernameError ? { borderColor: "red" } : null
                        ]}>
                            <Image
                                source={userIcon}
                                style={{ width: 22, height: 22, marginLeft: 10, tintColor: "#3a9147ff" }}
                                resizeMode="contain"
                            />
                            <TextInput
                                value={username}
                                onChangeText={(text) => {
                                    setUsername(text);
                                    setUsernameError("");
                                }}
                                placeholder="Enter Username"
                                keyboardType="text"
                                style={styles.mobileinput}
                            />
                        </View>

                        {usernameError ? (
                            <Text style={styles.errorText}>{usernameError}</Text>
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
                        <Image
                            source={padlock}
                            style={{ width: 22, height: 22, marginLeft: 10, tintColor: "#3a9147ff" }}
                            resizeMode="contain"
                        />
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

            {/* </ImageBackground> */}
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
        fontSize: 28,
        fontWeight: "700",
        textAlign: "center",
        color: "#0A2E14",

    },
    subHeading: {
        textAlign: "center",
        fontSize: 14,
        color: "#3a9147ff",
        marginBottom: 15,
        marginTop: 8,
        padding: 10
    },
    logoContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    logoCircle: {
        width: 110,
        height: 110,
        borderRadius: 55,
        backgroundColor: "#E6FFE6",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 110,
        height: 110,
        resizeMode: "contain",
    },
    label: {
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 6,
        color: "#0A2E14",
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
        borderColor: "#C8E6C9",
        borderRadius: 8,
        paddingRight: 12,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#C8E6C9",
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
        color: "#0A2E14",
        fontWeight: "600",
        textDecorationLine: "underline",
    },

    bottomText: {
        color: "#3a9147ff",
        textAlign: "center",
        fontSize: 14,

    },

    registerText: {
        color: "#0A2E14",
        fontWeight: "600",
        textDecorationLine: "underline",
    },

    bottomButtonContainer: {
        paddingHorizontal: 20,
        paddingBottom: 60,

    },

    loginButton: {
        backgroundColor: "#25E600",
        paddingVertical: 14,
        borderRadius: 25,
        alignItems: "center",
    },

    loginText: {
        color: "#0A2E14",
        fontSize: 14,
        fontWeight: "600",
    },
    errorText: {
        color: "red",
        fontSize: 13,
        marginBottom: 10,
    },


});
