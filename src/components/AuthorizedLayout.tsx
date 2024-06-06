import React from "react"
import Container from "./Container"
import { useNavigate } from "react-router-dom"

function AuthorizedLayout({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate()
    return (
        <>
            <nav className="bg-white shadow px-4">
                <div className="font-semibold text-xl flex items-center h-full justify-between px-2 py-4">
                    <h1>TODO APPS</h1>
                    <button className="text-2xl" onClick={() => navigate("/login")}>
                        <i className="i-ri-logout-circle-r-line" />
                    </button>
                </div>
            </nav>
            <Container>
                {children}
            </Container>
        </>
    )
}

export default AuthorizedLayout