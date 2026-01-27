import viaggi from "../data/viaggi.js"
import TravelCard from "../components/TravelCard.jsx"
import SelectBar from "../components/SelectBar.jsx"
import { useState } from "react"

export default function Home() {
    const [selectedMonth, setSelectedMonth] = useState("")

    const filteredMonth = selectedMonth ? viaggi.filter(viaggio => viaggio.dataInizio.split('-')[1] === selectedMonth) :
        viaggi;

    return (
        <>
            <div className="py-5 container">
                <div className="row g-3 mt-4">
                    <SelectBar viaggi={viaggi} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
                    {filteredMonth.map((viaggio) => (
                        <TravelCard key={viaggio.id} viaggi={viaggio} />
                    ))}
                </div>
            </div>

        </>
    )
}
