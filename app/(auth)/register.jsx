import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

// themed components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";

const register = () => {
    return (
        <ThemedView style={styles.container}>
            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Register for a New Account
            </ThemedText>

            <Spacer height={100} />
            <Link href="/login">
                <ThemedText style={{ textAlign: "center" }}>
                    Login Instead
                </ThemedText>
            </Link>
        </ThemedView>
    );
};

export default register;

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
