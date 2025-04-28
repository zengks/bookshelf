import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    async function login({ email, password }) {
        try {
        } catch (error) {
            console.error("Login error:", error);
        }
    }

    async function register({ email, password }) {
        try {
        } catch (error) {
            console.error("Login error:", error);
        }
    }

    async function logout() {
        try {
        } catch (error) {
            console.error("Login error:", error);
        }
    }

    return (
        <UserContext.Provider value={{ user, login, register, logout }}>
            {children}
        </UserContext.Provider>
    );
}
