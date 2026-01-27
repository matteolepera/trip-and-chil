import { useNavigate, useParams } from "react-router-dom"
import GuestCard from "../components/GuestCard"
import SearchBar from "../components/SearchBar.jsx"
import partecipantiArray from "../data/partecipanti.js"
import Button from "../components/Button.jsx"
import { useState } from "react"

export default function ViaggioSingoloPage() {
    const { id } = useParams()
    const viaggioId = parseInt(id)
    const navigate = useNavigate();
    const [searchGuest, setSearchGuest] = useState("")

    const partecipanti = partecipantiArray.filter(partecipante => partecipante.viaggioId === viaggioId);
    if (partecipanti.length === 0) {
        return (
            <div className="container py-5">
                <div className="text-center mt-3">
                    <i className="bi bi-person-x" style={{ fontSize: '3rem', color: '#FFB5A5' }}></i>
                    <h3 className="mt-3">Nessun partecipante trovato</h3>
                    <p className="text-muted">Non ci sono partecipanti registrati per questo viaggio.</p>
                    <Button onClick={() => navigate(-1)} className="mt-3">
                        <i className="bi bi-arrow-left-circle-fill me-2"></i>
                        Torna indietro
                    </Button>
                </div>
            </div>
        );
    }

    const ricercaPartecipante = partecipanti.filter(partecipante => `${partecipante.nome} ${partecipante.cognome}`.toLowerCase().includes(searchGuest.toLowerCase()))
    return (
        <>
            <div className="py-5 container">
                <SearchBar value={searchGuest} onChange={setSearchGuest} />
                <div className="d-flex justify-content-between gap-2">
                    <Button onClick={() => navigate(-1)} ><i className="bi bi-arrow-left-circle-fill me-2"></i>Torna indietro</Button>
                    <Button onClick={() => setShowEmergency(true)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <i className="bi bi-person-fill-add"></i>
                    </Button>
                </div>
                <div className="row g-3 mt-4">
                    {ricercaPartecipante.map(p => (
                        <GuestCard key={p.id} partecipante={p} />
                    ))}
                </div>
            </div >
        </>
    )
}