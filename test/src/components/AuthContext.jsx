import { createContext, useState } from "react";

export const AuthContext = createContext(null);
export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    console.log("context has changed");
    return (
        <AuthContext.Provider
         value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );

}


