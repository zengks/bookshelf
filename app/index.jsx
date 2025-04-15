import { StyleSheet, Text, View, Image } from "react-native";

import Logo from "../assets/img/logo_light.png";

const index = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.img} />
            <Text style={styles.title}>The Number 1</Text>
            <Text style={{ marginTop: 10, marginBottom: 30 }}>
                Reading List App
            </Text>
        </View>
    );
};

export default index;

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
});
