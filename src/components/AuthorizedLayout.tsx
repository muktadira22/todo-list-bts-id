import React from "react"
import Container from "./Container"

function AuthorizedLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <nav className="bg-white shadow h-14 px-4">
                <div className="font-semibold text-xl flex items-center h-full">TODO APPS</div>
            </nav>
            <Container>
                {children}
            </Container>
        </>
    )
}

export default AuthorizedLayout