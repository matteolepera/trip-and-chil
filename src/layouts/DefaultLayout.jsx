import Header from "../components/Header"
import { Outlet } from "react-router-dom"

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <main className="py-5">
                <Outlet />
            </main>
        </>
    )
}