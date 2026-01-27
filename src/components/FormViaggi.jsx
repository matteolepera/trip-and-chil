import { useState } from "react";

export default function FormViaggi() {
    const [citta, setCitta] = useState('');
    const [nazione, setNazione] = useState('');
    const [inizio, setInizio] = useState('');
    const [fine, setFine] = useState('');
    const [tipo, setTipo] = useState('');

    const initialData = [
        {
            citta: '',
            nazione: '',
            inizio: '',
            fine: '',
            tipo: 'Soft',
        }
    ];

    const [viaggio, setViaggio] = useState(initialData);

    function handlerSubmit(event) {
        event.preventDefault();

        if (citta.trim() && inizio.trim() && fine.trim()) {
            setViaggio([...viaggio, { citta, nazione, inizio, fine, tipo }]);
            // sostituire nuovo viaggio con l'array dei viaggi
            setCitta('');
            setNazione('');
            setInizio('');
            setFine('');
            setTipo('Soft')
        } else {
            alert('Compila tutti i campi!');
        }
    }


    return (
        <>
            <form action={handlerSubmit}>

                {/* citta */}
                <label htmlFor="citta">citta?</label>
                <input
                    id="citta"
                    type="text"
                    value={citta}
                    onChange={(event) => {
                        setCitta(event.target.value)
                    }}
                />
                {/* nazione */}
                <label htmlFor="nazione">nazione?</label>
                <input
                    id="nazione"
                    type="text"
                    value={nazione}
                    onChange={(event) => {
                        setNazione(event.target.value)
                    }}
                />

                {/* inizio */}
                <label htmlFor="inizio">Quando inizia?</label>
                <input
                    id="inizio"
                    type="text"
                    value={inizio}
                    onChange={(event) => {
                        setInizio(event.target.value)
                    }}
                />

                {/* fine */}
                <label htmlFor="fine">Qunado finisce?</label>
                <input
                    id="fine"
                    type="text"
                    value={fine}
                    onChange={(event) => {
                        setFine(event.target.value)
                    }}
                />

                {/* tipo */}

                {/* correggere, deve scegliere tra 2 valori */}
                <label htmlFor="tipo">tipo?</label>
                <input
                    id="tipo"
                    type="text"
                    value={tipo}
                    onChange={(event) => {
                        setTipo(event.target.value)
                    }}
                />



                <button type="submit">invia</button>
            </form>
        </>
    );
}