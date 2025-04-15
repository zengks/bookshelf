import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";

import Logo from "../assets/img/logo_light.png";

const Index = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.img} />
            <Text style={styles.title}>The Number 1</Text>
            <Text style={{ marginTop: 10, marginBottom: 30 }}>
                Reading List App
            </Text>
            <Link href="/about" style={styles.link}>
                About Page
            </Link>
            <Link href="/contact" style={styles.link}>
                Contact Page
            </Link>
        </View>
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
