import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Link } from "expo-router";

import { Colors } from "../constants/Colors";

const About = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={[styles.title, { color: theme.text }]}>
                About Page
            </Text>
            <Link href="/" style={styles.link}>
                Back Home
            </Link>
        </View>
    );
};

export default About;

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
