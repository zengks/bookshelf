import {
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import React, { useState } from "react";

import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import ThemedTextInput from "../../components/ThemedTextInput";
import ThemedButton from "../../components/ThemedButton";

import { useBook } from "../../hooks/useBook";
import { useRouter } from "expo-router";

const create = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const { createBook } = useBook();
    const router = useRouter();

    const handleSubmit = async () => {
        if (!title.trim() || !author.trim() || !description.trim()) return;

        setLoading(true);

        await createBook({
            title,
            author,
            description,
        });

        setTitle("");
        setAuthor("");
        setDescription("");

        router.replace("/books");

        setLoading(false);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                <ThemedText title={true} style={styles.heading}>
                    Add a New Book
                </ThemedText>
                <Spacer />

                <ThemedTextInput
                    style={styles.input}
                    placeholder="Book Title"
                    value={title}
                    onChangeText={setTitle}
                />
                <Spacer />

                <ThemedTextInput
                    style={styles.input}
                    placeholder="Author"
                    value={author}
                    onChangeText={setAuthor}
                />
                <Spacer />

                <ThemedTextInput
                    style={styles.multiline}
                    placeholder="Book Description"
                    value={description}
                    onChangeText={setDescription}
                    multiline={true}
                />
                <Spacer />

                <ThemedButton onPress={handleSubmit} disabled={loading}>
                    <Text style={{ color: "#fff" }}>
                        {loading ? "Saving..." : "Create Book"}
                    </Text>
                </ThemedButton>
            </ThemedView>
        </TouchableWithoutFeedback>
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
    input: {
        padding: 20,
        borderRadius: 6,
        alignSelf: "stretch",
        marginHorizontal: 40,
    },
    multiline: {
        padding: 20,
        borderRadius: 6,
        minHeight: 100,
        alignSelf: "stretch",
        marginHorizontal: 40,
    },
});
