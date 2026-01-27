import { useState } from "react";

export default function FormViaggi() {
    const [dove, setDove] = useState('');
    const [inizio, setInizio] = useState('');
    const [fine, setFine] = useState('');

    const [nuovoViaggio, setNuovoViaggio] = useState([]);

    function handlerSubmit(event) {
        event.preventDefault();
        if (dove.trim() && inizio.trim() && fine.trim()) {
            setNuovoViaggio([...nuovoViaggio, { dove, inizio, fine }]);
            // sostituire nuovo viaggio con l'array dei viaggi
            setDove('');
            setInizio('');
            setFine('');
        } else {
            alert('Compila tutti i campi!');
        }
    }


    return (
        <>
            <form action="">
                <label htmlFor="dove">Dove?</label>
                <input
                    id="dove"
                    type="text"
                    value={dove}
                    onChange={(event) => {
                        setDove(event.target.value)
                    }}
                />
                <label htmlFor="inizio">Quando inizia?</label>
                <input
                    id="inizio"
                    type="text"
                    value={inizio}
                    onChange={(event) => {
                        setInizio(event.target.value)
                    }}
                />
                <label htmlFor="fine">Qunado finisce?</label>
                <input
                    id="fine"
                    type="text"
                    value={fine}
                    onChange={(event) => {
                        setFine(event.target.value)
                    }}
                />

                <button type="submit">invia</button>
            </form>
        </>
    );
}