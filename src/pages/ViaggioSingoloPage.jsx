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
    const ricercaPartecipante = partecipanti.filter(partecipante => `${partecipante.nome} ${partecipante.cognome}`.toLowerCase().includes(searchGuest.toLowerCase()))
    return (
        <>
            <div className="py-5 container">
                <SearchBar value={searchGuest} onChange={setSearchGuest} />
                <Button onClick={() => navigate(-1)}>Torna indietro</Button>
                <div className="row g-3 mt-4">
                    {ricercaPartecipante.map(p => (
                        <GuestCard key={p.id} partecipante={p} />
                    ))}
                </div>
            </div >
        </>
    )
}