import React from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Back from "../../assets/back.png";

import colorOutline from "../../assets/heroicons-outline_color-swatch.png";
import downArrow from "../../assets/Group.png";

export default function AddNewVoterScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            
            {/* HEADER */}
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    style={styles.headerLeft}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={Back}
                        style={{ width: 17, height: 22, tintColor: "white" }}
                    />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Add New Voter</Text>
                <Text style={styles.headerTitle}>Add New Machine</Text>
            </View>

            {/* FORM BODY */}
            <ScrollView contentContainerStyle={styles.form}>
                <Text style={styles.sectionTitle}>Name & Voter ID</Text>

                <Text style={styles.label}>First Name</Text>
                <TextInput 
                style={styles.input}
                placeholder="Enter First Name"
                />

                <Text style={styles.label}>Middle Name</Text>
                <TextInput
                 style={styles.input}
                 placeholder="Enter Middle Name"
                 />

                <Text style={styles.label}>Last Name</Text>
                <TextInput 
                style={styles.input}
                placeholder="Enter Last Name"
                />

                <Text style={styles.label}>Gender</Text>
                <View style={styles.genderRow}>
                    <TouchableOpacity style={styles.radio}></TouchableOpacity>
                    <Text style={styles.genderText}>Male</Text>

                    <TouchableOpacity style={styles.radio}></TouchableOpacity>
                    <Text style={styles.genderText}>Female</Text>

                    <TouchableOpacity style={styles.radio}></TouchableOpacity>
                    <Text style={styles.genderText}>Other</Text>
                </View>

                <Text style={styles.label}>Voter ID</Text>
                <TextInput style={styles.input}
                placeholder="Enter Voter ID"
                 />

                {/* COLOR TAG */}
                <Text style={styles.sectionTitle}>Colour Category Tag</Text>

                <Text style={styles.label}>Colour Tag</Text>
                <View style={styles.dropdown}>
                   <View style={{ flexDirection: "row", alignItems: "center",gap: 10 }}>
                     <Image source={colorOutline} style={{ width: 20, height: 20 }} />
                    <Text style={{ color: "#777" }}>Colour Tag</Text>
                   </View>
                    <Image source={downArrow} style={{ width: 20, height: 20 }} />
                </View>

                {/* CONTACT INFO */}
                <Text style={styles.sectionTitle}>Contact Information</Text>

                <Text style={styles.label}>Primary Number</Text>
                <TextInput style={styles.input} />
            </ScrollView>

            {/* SAVE BUTTON FIXED */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("VotersListScreen")}
            >
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#d2691e",
        paddingTop: 45,
        paddingBottom: 15,
        paddingHorizontal: 15,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    headerLeft: {
        flexDirection: "row",
        alignItems: "center",
    },

    backText: {
        color: "#fff",
        fontSize: 17,
        marginLeft: 10,
        fontWeight: "400",
    },

    headerTitle: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "600",
        marginTop: 10,
    },

    form: {
        padding: 20,
        paddingBottom: 120,
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: "500",
        marginTop: 15,
        marginBottom: 8,
        color: "rgba(0, 0, 0, 1)",
    },

    label: {
        fontSize: 14,
        fontWeight: "400",
        color: "rgba(75, 85, 99, 1)",
        marginBottom: 5,
        marginTop: 10,
    },

    input: {
        borderWidth: 1,
        borderColor: "rgba(255, 232, 206, 1)",
        borderRadius: 9,
        padding: 12,
        fontSize: 14,
    },

    genderRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        gap: 15,
    },

    genderText: {
        fontSize: 14,
        color: "rgba(156, 163, 175, 1)",
    },

    radio: {
        width: 22,
        height: 22,
        borderWidth: 1,
        borderColor: "#777",
        borderRadius: 20,
    },

    dropdown: {
        borderWidth: 1,
        borderColor: "rgba(217,125,0,0.3)",
        borderRadius: 8,
        padding: 12,
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    button: {
        backgroundColor: "#d2691e",
        paddingVertical: 16,
        borderRadius: 10,
        alignItems: "center",
        margin: 20,
        marginBottom: 30,
    },

    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
    },
});
