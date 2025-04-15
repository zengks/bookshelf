import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About Page</Text>
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
