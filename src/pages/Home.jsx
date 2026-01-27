import { useState } from "react"

// array
import viaggi from "../data/viaggi.js"

// componenti
import TravelCard from "../components/TravelCard.jsx"
import SelectBar from "../components/SelectBar.jsx"
import Button from "../components/Button.jsx"



export default function Home() {
    const [selectedMonth, setSelectedMonth] = useState("");


    const filteredMonth = selectedMonth ? viaggi.filter(viaggio => viaggio.dataInizio.split('-')[1] === selectedMonth) : viaggi

    return (
        <div className="py-5 container">
            <div className="row justify-content-center align-items-center g-2 mb-4 mt-4">
                <div className="col-8 col-md-8 col-lg-6">
                    <SelectBar viaggi={viaggi} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
                </div>
                <div className="col-auto">
                    <Button onClick={() => setShowEmergency(true)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <i className="bi bi-bookmark-plus-fill"></i>
                    </Button>
                </div>
            </div>

            <div className="row g-3">
                {filteredMonth.map((viaggio) => (
                    <TravelCard key={viaggio.id} viaggi={viaggio} />
                ))}
            </div>

        </div>
    )
}