import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";

const create = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText title={true} style={styles.heading}>
                Add a New Book
            </ThemedText>
            <Spacer />
        </ThemedView>
    );
};

export default create;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
});
