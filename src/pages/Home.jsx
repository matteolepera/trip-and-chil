import { useState } from "react"

// array
import viaggiInitial from "../data/viaggi.js"

// componenti
import TravelCard from "../components/TravelCard.jsx"
import SelectBar from "../components/SelectBar.jsx"
import Button from "../components/Button.jsx"
import FormViaggi from "../components/FormViaggi.jsx"



export default function Home() {
    const [viaggi, setViaggi] = useState(viaggiInitial);
    const [selectedMonth, setSelectedMonth] = useState("");
    const [showFormViaggio, setShowFormViaggio] = useState(false);

    function addViaggio(nuovoViaggio) {
        const creazioneViaggio = {
            ...nuovoViaggio,
            id: viaggi.length + 1
        }
        setViaggi([...viaggi, creazioneViaggio])
    }


    const filteredMonth = selectedMonth ? viaggi.filter(viaggio => viaggio.dataInizio.split('-')[1] === selectedMonth) : viaggi

    return (
        <div className="py-5 container">

            {/* FILTRO MESI */}
            <div className="row justify-content-center align-items-center g-2 mb-4 mt-4">
                <div className="col-8 col-md-8 col-lg-6">
                    <SelectBar viaggi={viaggi} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
                </div>
                <div className="col-auto">
                    <Button onClick={() => setShowFormViaggio(true)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <i className="bi bi-bookmark-plus-fill"></i>
                    </Button>

                    {showFormViaggio && (
                        <div className="modal show d-block" tabIndex="-1" onClick={() => setShowFormViaggio(false)}>
                            <div className="modal-dialog modal-dialog-centered" onClick={(event) => event.stopPropagation()}>
                                <div className="modal-content border-0" style={{
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 24px rgba(0,0,0,0.12)'
                                }}>
                                    <div className="modal-header border-0" style={{
                                        background: 'linear-gradient(135deg, #FFB5A5 0%, #FF9580 100%)',
                                        padding: '24px'
                                    }}>
                                        <h1 className="modal-title mb-0" style={{
                                            color: '#fff',
                                            fontWeight: '500',
                                            fontSize: '1.3rem',
                                            letterSpacing: '-0.02em'
                                        }}>
                                            Nuovo viaggio
                                        </h1>
                                    </div>
                                    <div className="modal-body" style={{ padding: '24px' }}>
                                        <FormViaggi addViaggio={addViaggio} />
                                    </div>
                                    <div className="modal-footer border-0" style={{
                                        padding: '16px 24px 24px 24px',
                                        background: 'transparent'
                                    }}>
                                        <Button onClick={() => setShowFormViaggio(false)}>
                                            Chiudi
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* CARDS */}
            <div className="row g-3">
                {filteredMonth.map((viaggio) => (
                    <TravelCard key={viaggio.id} viaggi={viaggio} />
                ))}
            </div>

        </div>
    )
}