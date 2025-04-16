import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

import Spacer from "../components/Spacer";

// themed components
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import ThemedCard from "../components/ThemedCard";

const Index = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedLogo style={styles.img} />
            <Text style={styles.title}>The Number 1</Text>
            <Spacer height={10} />
            <Text style={{ marginTop: 10, marginBottom: 30 }}>
                Reading List App
            </Text>
            <Spacer />
            <Link href="/about" style={styles.link}>
                About Page
            </Link>
            <Link href="/contact" style={styles.link}>
                Contact Page
            </Link>
        </ThemedView>
    );
};

export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
    img: {
        marginVertical: 20,
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    },
});
