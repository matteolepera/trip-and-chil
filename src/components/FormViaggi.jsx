import { useState } from "react";

const initialData = {
    citta: '',
    nazione: '',
    dataInizio: '',
    dataFine: '',
    tipologia: 'Soft',
};

export default function FormViaggi() {
    const [formData, setFormData] = useState(initialData);

    function updateFormData(event) {
        const { value, name } = event.target;
        setFormData({ ...formData, [name]: value });
    }


    // handler submit
    function handlerSubmit(event) {
        event.preventDefault();

        if (
            formData.citta.trim() &&
            formData.nazione.trim() &&
            formData.dataInizio.trim() &&
            formData.dataFine.trim()
        ) {

            // const ultimoId = addViaggio[addViaggio.length - 1].addViaggio.id;

            // const nuovoViaggio = {
            //     ...formData,
            //     id: ultimoId + 1,
            // };

            addViaggio(formData)
            setFormData(initialData);

        } else {
            alert('Compila tutti i campi!');
        }
    }



    return (
        <>
            <section className="container py-3">
                <h1>Aggiungi un nuovo viaggio</h1>
                <form onSubmit={handlerSubmit}>

                    {/* citta */}
                    <label htmlFor="citta">Nome destinazione</label>
                    <input
                        id="citta"
                        name="citta"
                        type="text"
                        value={formData.citta}
                        onChange={updateFormData}
                        required
                    />
                    {/* nazione */}
                    <label htmlFor="nazione">Nazione destinazione</label>
                    <input
                        id="nazione"
                        name="nazione"
                        type="text"
                        value={formData.nazione}
                        onChange={updateFormData}
                        required
                    />

                    {/* inizio */}
                    <label htmlFor="dataInizio">Partenza</label>
                    <input
                        id="dataInizio"
                        name="dataInizio"
                        type="date"
                        value={formData.dataInizio}
                        onChange={updateFormData}
                        min="2026-01-28"
                        required
                    />

                    {/* fine */}
                    <label htmlFor="dataFine">Ritorno</label>
                    <input
                        id="dataFine"
                        name="dataFine"
                        type="date"
                        value={formData.dataFine}
                        onChange={updateFormData}
                        min="2026-01-28"
                        required
                    />

                    {/* tipo */}

                    <label htmlFor="tipoS">Soft</label>
                    <input
                        id="tipoS"
                        name="tipologia"
                        type="radio"
                        value="Soft"
                        checked={formData.tipologia === 'Soft'}
                        onChange={updateFormData}
                        required
                    />
                    <label htmlFor="tipoW">Wild</label>
                    <input
                        id="tipoW"
                        name="tipologia"
                        type="radio"
                        value="Wild"
                        checked={formData.tipologia === 'Wild'}
                        onChange={updateFormData}
                        required
                    />



                    <button type="submit">invia</button>
                </form>
            </section>
        </>
    );
}