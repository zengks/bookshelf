import { StyleSheet } from "react-native";
import { Link } from "expo-router";

// themed components
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";

const Index = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedLogo />
            <Spacer />

            <ThemedText style={styles.title} title={true}>
                The Number 1
            </ThemedText>

            <Spacer height={10} />
            <ThemedText style={{ marginTop: 10, marginBottom: 30 }}>
                Reading List App
            </ThemedText>

            <Spacer />
            <Link href="/login" style={styles.link}>
                <ThemedText>Login</ThemedText>
            </Link>
            <Link href="/register" style={styles.link}>
                <ThemedText>Register</ThemedText>
            </Link>
            <Link href="/profile" style={styles.link}>
                <ThemedText>Profile</ThemedText>
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

    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    },
});
