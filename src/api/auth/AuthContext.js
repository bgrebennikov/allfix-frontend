import React, {createContext, useContext, useEffect, useState} from "react";
import {client} from "../ApiClientInstance";
import {useNavigate} from "react-router-dom";


const AuthContext = createContext("");

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState();
    const [isLoading, setIsLoading] = useState(true)

    const [isAuthenticated, setIsAuthenticated] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            if (!currentUser) {
                client.post("/users/getMe").then((r) => {
                    if (r.status === 200) {
                        setCurrentUser(r.data)
                        setIsAuthenticated(true)
                    }
                })
                    .catch((err) => {
                        if (err.response.status === 401) {
                            setCurrentUser(null)
                            setIsAuthenticated(false)
                        }
                    })
                    .finally(() => {
                        setIsLoading(false)
                        console.log(currentUser)
                    })
            }
        }
    }, [currentUser, isAuthenticated, navigate])

    const login = (login, password, nextUrl = "/eee") => {

        console.log(isAuthenticated)

        client.post("/login", {
            username: login,
            password: password
        }).then(r => {
                localStorage.setItem("access_token", r.data["access_token"])
                localStorage.setItem("refresh_token", r.data["refresh_token"])

                // navigate(nextUrl);

                setIsAuthenticated(true)

            }
        )
    }

    const logout = () => {
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")

        navigate("/login");
    }


    return (
        <AuthContext.Provider value={{currentUser, login, logout, isAuthenticated, isLoading}}>
            {!isLoading && children}
        </AuthContext.Provider>
    )
}