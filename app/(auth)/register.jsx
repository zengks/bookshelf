import { StyleSheet, Text } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { TouchableWithoutFeedback } from "react-native-web";

// themed components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";

const register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = () => {
        console.log("Register button pressed", email, password);
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                <Spacer />
                <ThemedText title={true} style={styles.title}>
                    Register for a New Account
                </ThemedText>

                <ThemedTextInput
                    placeholder="Email"
                    style={{ width: "80%", marginBottom: 20 }}
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    value={email}
                />
                <ThemedTextInput
                    placeholder="Password"
                    style={{ width: "80%", marginBottom: 20 }}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />

                <ThemedButton onPress={handleSubmit}>
                    <Text style={{ color: "#f2f2f2" }}>Register</Text>
                </ThemedButton>

                <Spacer height={100} />
                <Link href="/login">
                    <ThemedText style={{ textAlign: "center" }}>
                        Login Instead
                    </ThemedText>
                </Link>
            </ThemedView>
        </TouchableWithoutFeedback>
    );
};

export default register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30,
    },
});
