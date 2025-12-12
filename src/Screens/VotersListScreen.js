import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image
} from "react-native";

import Back from '../../assets/back.png';
import Dot from '../../assets/dots.png';
import SearchIcon from '../../assets/search.png';
import FilterIcon from '../../assets/sort.png';
import Location from '../../assets/placeholder.png';

import AddCard from '../../assets/iconamoon_profile.png'
import SelectVoter from '../../assets/lucide_circle-check.png'
import Language from '../../assets/lucide_languages.png'

import { useNavigation } from "@react-navigation/native";


export default function VotersListScreen() {

    const [menuVisible, setMenuVisible] = useState(false);
    const [selectMode, setSelectMode] = useState(false);
    const [selected, setSelected] = useState({});


    const voters = [
        {
            id: "1",
            name: "Shrikant Narayan Dalavi",
            gender: "Male",
            age: 52,
            code: "TML4602645",
            tag: "Local",
        },
        {
            id: "2",
            name: "Sachin Shashikant Pawar",
            gender: "Male",
            age: 42,
            code: "TML4602819",
            tag: "Local",
        },
        {
            id: "3",
            name: "Gouri Nilesh Mane",
            gender: "Female",
            age: 36,
            code: "TML4605044",
            tag: "Local",
        },
        {
            id: "4",
            name: "Sachin Shashikant Pawar",
            gender: "Male",
            age: 42,
            code: "TML4602819",
            tag: "Local",
        },
        {
            id: "5",
            name: "Shekhar Shashikant Pawar",
            gender: "Male",
            age: 40,
            code: "TML4602819",
            tag: "Local",
        },
    ];

    const navigation = useNavigation()

    const renderItem = ({ item }) => (
        <View style={styles.card}>

            {/* Left profile circle */}
            <View style={styles.profileCircle}>
                <Text style={styles.profileText}>
                    {item.name.split(" ")[0][0]}
                    {item.name.split(" ")[1][0]}
                </Text>
            </View>

            {/* Middle */}
            <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.code}>{item.code}</Text>
                <Text style={styles.name}>{item.name}</Text>

                {/* Location */}
                <View style={styles.locationRow}>
                    <Image source={Location} style={{ width: 14, height: 14 }} />
                    <Text style={styles.locationText}>{item.tag}</Text>
                </View>

                {/* Details */}
                <View style={styles.detailsRow}>
                    <Text style={styles.sub}>
                        Gender: <Text style={styles.ageText}>{item.gender}</Text>
                    </Text>

                    <Text style={styles.sub}>
                        Age: <Text style={styles.ageText}>{item.age}</Text>
                    </Text>
                </View>

            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View>
                <View style={styles.headerContainer}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.headerLeft} onPress={() => navigation.goBack()}>
                            <Image source={Back} style={{ width: 17, height: 22, color: "#fff", tintColor: "white" }} />
                            <Text style={styles.backText}>Back</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
                            <Image source={Dot} style={{ width: 20, height: 20, color: "#fff", tintColor: "white" }} />
                        </TouchableOpacity>

                    </View>


                    <View>
                        <Text style={styles.title}>Voters List</Text>
                    </View>
                </View>

                {/* Search */}
                <View style={styles.searchContainer}>
                    <TextInput placeholder="Search" style={styles.searchInput} />
                    <Image source={SearchIcon} style={{ width: 18, height: 18 }} />
                </View>

                {/* Filter */}
                <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 15, marginBottom: 10, justifyContent: "flex-end" }}>
                    <Text style={styles.filterText}>Filter</Text>
                    <TouchableOpacity style={styles.filterBox}>

                        <Image source={FilterIcon} style={{ width: 18, height: 18, tintColor: "rgba(100, 116, 139, 1)" }} />
                    </TouchableOpacity>
                </View>

                <FlatList data={voters} renderItem={renderItem} keyExtractor={(item) => item.id} />
            </View>
            {menuVisible && (
                <View style={styles.menuBox}>

                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => {
                            setMenuVisible(false);
                            setSelectMode(true);
                        }}
                    >
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={styles.menuText}>Select Voters</Text>
                            <Image source={SelectVoter} style={{ width: 18, height: 18, }} />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.menuDivider} />

                    <TouchableOpacity
                        onPress={() => {
                            setMenuVisible(false);
                            navigation.navigate("AddNewVoterScreen");
                        }}
                        style={styles.menuItem}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={styles.menuText}>Add New Voter</Text>
                            <Image source={AddCard} style={{ width: 18, height: 18, }} />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.menuDivider} />

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={styles.menuText}>Language</Text>
                            <Image source={Language} style={{ width: 18, height: 18, }} />

                        </View>
                    </TouchableOpacity>

                </View>
            )}
        </View>


    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },

    headerContainer: {
        backgroundColor: "#d2691e",
        paddingTop: 45,
        paddingHorizontal: 15,
        paddingBottom: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    headerLeft: { flexDirection: "row", alignItems: "center" },

    backText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "400",
        marginLeft: 10
    },

    title: {
        fontSize: 34,
        fontWeight: "700",
        marginTop: 8,
        color: "#fff",
    },

    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor: "#f3f3f3",
        margin: 15,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: "rgba(217, 217, 217, 1)",
        borderRadius: 30,
    },

    searchInput: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 16,
    },

    filterBox: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    filterText: { fontSize: 14, fontWeight: "600", marginRight: 4, color: "rgba(100, 116, 139, 1)" },

    card: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: 17,
        padding: 15,
        marginHorizontal: 15,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "rgba(255, 125, 0, 0.2)",
        elevation: 1,
    },

    profileCircle: {
        width: 58,
        height: 58,
        borderRadius: 25,
        background: "rgba(248, 248, 248, 1)",

        justifyContent: "center",
        alignItems: "center",
    },

    profileText: { fontSize: 15, fontWeight: "400", color: "rgba(151, 151, 151, 1)" },

    code: { fontSize: 12, fontWeight: "700", color: "#666", marginBottom: 2 },

    name: { fontSize: 14, fontWeight: "700", marginBottom: 2, color: "rgba(46, 46, 46, 1)" },

    locationRow: { flexDirection: "row", alignItems: "center", marginTop: 4 },

    locationText: { marginLeft: 4, color: "red", fontWeight: "600" },

    sub: { fontStyle: 12, color: "rgba(100, 116, 139, 1)", marginTop: 2 },

    ageText: { color: "rgba(46, 46, 46, 1)", fontWeight: "600" },

    detailsRow: { flexDirection: "row", alignItems: "center", marginTop: 12, justifyContent: "space-between" },

    rightContainer: { alignItems: "flex-end" },

    badge: {
        backgroundColor: "#FFA500",
        paddingHorizontal: 6,
        borderRadius: 4,
        marginBottom: 6,
    },

    badgeText: { color: "#fff", fontSize: 12, fontWeight: "600" },

    iconBtn: {
        backgroundColor: "#fff",
        padding: 6,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#ddd",
        marginBottom: 6,
    },

    icon: { width: 22, height: 22 },

    dotBtn: { marginBottom: 6 },
    menuBox: {
        position: "absolute",
        top: 85,
        right: 15,
        backgroundColor: "#FFFFFF",
        width: 190,
        borderRadius: 16,

        paddingVertical: 6,

        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },

        elevation: 8,

        overflow: "hidden",
    },

    menuItem: {
        paddingVertical: 14,
        paddingHorizontal: 16,
    },

    menuText: {
        fontSize: 15,
        color: "#111",
        fontWeight: "500",
    },

    menuDivider: {
        height: 1,
        backgroundColor: "rgba(0,0,0,0.08)",
        width: "100%",
    },

});
