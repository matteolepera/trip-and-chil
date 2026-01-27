import viaggi from "../data/viaggi.js"
import TravelCard from "../components/TravelCard.jsx"

export default function Home() {
    return (
        <>
            <div className="py-5 container">
                <div className="row g-3 mt-4">
                    {viaggi.map((viaggio) => (
                        <TravelCard key={viaggio.id} viaggi={viaggio} />
                    ))}
                </div>
            </div>

        </>
    )
}
