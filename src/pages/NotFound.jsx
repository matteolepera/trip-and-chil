import Button from "../components/Button.jsx"
import { useNavigate } from "react-router-dom"

export default function Notfound() {
    const navigate = useNavigate();
    return (
        <>
            <div className="container py-5">
                <div className="text-center mt-3">
                    <i className="bi bi-emoji-frown-fill" style={{ fontSize: '3rem', color: '#FFB5A5' }}></i>
                    <h3 className="mt-3">Error 404</h3>
                    <p className="text-muted">Page not found.</p>
                    <Button onClick={() => navigate("/")} className="mt-3">
                        <i className="bi bi-house-fill me-2"></i>
                        Torna alla pagina principale
                    </Button>
                </div>
            </div>
        </>
    )
}