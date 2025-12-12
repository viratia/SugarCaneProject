import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";


export default function RegisterScreen() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedRole, setSelectedRole] = useState("Select Role");
    const navigation = useNavigation();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");

    const [mobileError, setMobileError] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");

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
    }

    const validateFirstName = () => {
        if (firstName.trim() === "") {
            setFirstNameError("Please enter first name");
            return false;
        }

        if (!/^[a-zA-Z]+$/.test(firstName)) {
            setFirstNameError("Enter a valid name");
            return false;
        }
        setFirstNameError("");
        return true;
    }

    const validateLastName = () => {
        if (lastName.trim() === "") {
            setLastNameError("Please enter last name");
            return false;
        }
        if (!/^[a-zA-Z]+$/.test(lastName)) {
            setLastNameError("Enter a valid name");
            return false;
        }
        setLastNameError("");
        return true;
    }




    const createAccount = () => {
        const isMobileValid = validateMobile();
        const isNameValid = validateFirstName();
        const isLastNameValid = validateLastName();

        if (!isMobileValid || !isNameValid || !isLastNameValid) {
            return;
        }

        Toast.show({
            type: 'success',
            text1: 'Registration Successfully',
            position: "top",
            visibilityTime: 1500,
            autoHide: true,
        })

        setTimeout(() => {
            navigation.navigate("LoginScreen");
        }, 1200);

        setFirstName(""),
            setLastName(""),
            setMobile(""),
            setSelectedRole("Select Role")


    };


    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Register</Text>

                {/* Row Inputs */}
                <View style={styles.row}>
                    <View style={{ flex: 1, marginRight: 8 }}>
                        <Text style={styles.label}>First Name</Text>
                        <View style={[styles.inputContainer,
                        firstNameError && { borderColor: "red" }]}>
                            <TextInput
                                style={styles.nameinput}
                                value={firstName}
                                onChangeText={(text) => {
                                    setFirstName(text);
                                    setFirstNameError("");
                                }}
                                placeholder="Enter First Name" />
                        </View>
                        {firstNameError && <Text style={styles.errorMessage}>{firstNameError}</Text>}
                    </View>

                    <View style={{ flex: 1, marginLeft: 8 }}>
                        <Text style={styles.label}>Last Name</Text>
                        <View style={[styles.inputContainer,
                        lastNameError && { borderColor: "red" }]}>
                            <TextInput
                                style={styles.nameinput}
                                value={lastName}
                                onChangeText={(text) => {
                                    setLastName(text);
                                    setLastNameError("");
                                }}
                                placeholder="Enter Last Name" />
                        </View>
                        {lastNameError && <Text style={styles.errorMessage}>{lastNameError}</Text>}
                    </View>
                </View>

                {/* Mobile Number */}
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.label}>Mobile Number</Text>
                    <View style={[styles.inputContainer, mobileError && { borderColor: "red" }]}>
                        <TextInput style={styles.mobileinput}
                            value={mobile}
                            onChangeText={(text) => {
                                setMobile(text);
                                setMobileError("");
                            }}
                            keyboardType="numeric"
                            placeholder="Enter Mobile Number"
                        />
                    </View>
                    {mobileError && <Text style={styles.errorMessage}>{mobileError}</Text>}
                </View>


                {/* Dropdown mockup */}
                <Text style={styles.label}>Select Your Role</Text>

                {/* DROPDOWN CONTAINER */}
                <View style={{ zIndex: 10 }}>
                    <TouchableOpacity
                        style={styles.dropdown}
                        onPress={() => setShowDropdown(!showDropdown)}
                    >
                        <Text style={{ color: "#333" }}>{selectedRole}</Text>
                        <Text style={styles.dropdownArrow}>{showDropdown ? "▲" : "▼"}</Text>
                    </TouchableOpacity>

                    {/* DROPDOWN ITEMS */}
                    {showDropdown && (
                        <View style={styles.dropdownList}>
                            <TouchableOpacity
                                style={styles.dropdownItem}
                                onPress={() => { setSelectedRole("Admin"); setShowDropdown(false); }}
                            >
                                <Text style={styles.dropdownItemText}>Admin</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.dropdownItem}
                                onPress={() => { setSelectedRole("Sub-Admin"); setShowDropdown(false); }}
                            >
                                <Text style={styles.dropdownItemText}>Sub-Admin</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.dropdownItem}
                                onPress={() => { setSelectedRole("Super-Admin"); setShowDropdown(false); }}
                            >
                                <Text style={styles.dropdownItemText}>Super-Admin</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>




            </ScrollView>

            {/* FIXED BOTTOM BUTTON AREA */}
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity onPress={createAccount} style={styles.button}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
                    <Text style={styles.bottomText}>Already have an account? </Text>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("LoginScreen")}
                    >
                        <Text style={styles.loginLink}>Login!</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 70,
        backgroundColor: "#fff",
    },

    title: {
        fontSize: 30,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 40,
    },

    row: {
        flexDirection: "row",
        marginBottom: 15,
    },

    label: {
        fontSize: 14,
        color: "rgba(30,41,59,1)",
        fontWeight: "400",
        marginBottom: 5,
    },

    input: {
        borderWidth: 1,
        borderColor: "rgba(255, 197, 132, 1)",
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
    },

    dropdown: {
        borderWidth: 1,
        borderColor: "rgba(255, 197, 132, 1)",
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    dropdownArrow: {
        fontSize: 16,
        color: "#444",
    },


    button: {
        backgroundColor: "rgba(217, 98, 14, 1)",
        paddingVertical: 14,
        borderRadius: 25,
        alignItems: "center",
        marginTop: 10,
    },

    buttonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
    },

    bottomButtonContainer: {
        paddingHorizontal: 20,
        paddingBottom: 60,
    },

    bottomText: {
        textAlign: "center",
        fontSize: 14,
        color: "#444",
    },

    loginLink: {
        color: "rgba(217, 98, 14, 1)",
        fontWeight: "600",
        textDecorationLine: "underline",
    },
    dropdownList: {
        borderWidth: 1,
        borderColor: "#f5c99b",
        borderRadius: 8,
        backgroundColor: "#fff",
        elevation: 3,

    },

    dropdownItem: {
        paddingVertical: 10,
        paddingHorizontal: 12,
    },

    dropdownItemText: {
        fontSize: 14,
        color: "#333",
    },
    mobileinput: {
        flex: 1,
        padding: 12,
    },
    nameinput: {
        flex: 1,
        padding: 12,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "rgba(255, 197, 132, 1)",
        borderRadius: 8,
        paddingRight: 12,
    },
    errorMessage: {
        color: "red",
        fontSize: 13,

    },
});
