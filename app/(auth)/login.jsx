import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

// themed components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";

const login = () => {
    return (
        <ThemedView style={styles.container}>
            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Login to Your Account
            </ThemedText>

            <Spacer height={100} />
            <Link href="/register">
                <ThemedText style={{ textAlign: "center" }}>
                    Register Instead
                </ThemedText>
            </Link>
        </ThemedView>
    );
};

export default login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30,
    },
});
