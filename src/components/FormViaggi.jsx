import { useState } from "react";

const initialData = {
    citta: '',
    nazione: '',
    dataInizio: '',
    dataFine: '',
    tipologia: 'Soft',
};

export default function FormViaggi({ addViaggio }) {
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

            addViaggio(formData);
            setFormData(initialData);

        } else {
            alert('Compila tutti i campi!');
        }
    }



    return (
        <>
            <section className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card border-0" style={{
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.12)'
                        }}>

                            <div className="card-header border-0" style={{
                                background: 'linear-gradient(135deg, #FFB5A5 0%, #FF9580 100%)',
                                padding: '24px'
                            }}>
                                <h1 className="mb-0" style={{
                                    color: '#fff',
                                    fontWeight: '500',
                                    fontSize: '1.3rem',
                                    letterSpacing: '-0.02em'
                                }}>
                                    Aggiungi un nuovo viaggio
                                </h1>
                            </div>

                            <div className="card-body" style={{ padding: '24px' }}>
                                <form onSubmit={handlerSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="citta" className="form-label" style={{
                                            fontSize: '0.75rem',
                                            color: '#FF9580',
                                            fontWeight: '500',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                            marginBottom: '8px'
                                        }}>
                                            Nome destinazione
                                        </label>
                                        <input
                                            id="citta"
                                            name="citta"
                                            type="text"
                                            className="form-control"
                                            value={formData.citta}
                                            onChange={updateFormData}
                                            required
                                            style={{
                                                borderRadius: '10px',
                                                border: '1px solid #e0e0e0',
                                                padding: '12px 16px',
                                                fontSize: '0.95rem',
                                                color: '#2d2d2d'
                                            }}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="nazione" className="form-label" style={{
                                            fontSize: '0.75rem',
                                            color: '#FF9580',
                                            fontWeight: '500',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                            marginBottom: '8px'
                                        }}>
                                            Nazione destinazione
                                        </label>
                                        <input
                                            id="nazione"
                                            name="nazione"
                                            type="text"
                                            className="form-control"
                                            value={formData.nazione}
                                            onChange={updateFormData}
                                            required
                                            style={{
                                                borderRadius: '10px',
                                                border: '1px solid #e0e0e0',
                                                padding: '12px 16px',
                                                fontSize: '0.95rem',
                                                color: '#2d2d2d'
                                            }}
                                        />
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-md-6 mb-3 mb-md-0">
                                            <label htmlFor="dataInizio" className="form-label" style={{
                                                fontSize: '0.75rem',
                                                color: '#FF9580',
                                                fontWeight: '500',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px',
                                                marginBottom: '8px'
                                            }}>
                                                Partenza
                                            </label>
                                            <input
                                                id="dataInizio"
                                                name="dataInizio"
                                                type="date"
                                                className="form-control"
                                                value={formData.dataInizio}
                                                onChange={updateFormData}
                                                min="2026-01-28"
                                                required
                                                style={{
                                                    borderRadius: '10px',
                                                    border: '1px solid #e0e0e0',
                                                    padding: '12px 16px',
                                                    fontSize: '0.95rem',
                                                    color: '#2d2d2d'
                                                }}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="dataFine" className="form-label" style={{
                                                fontSize: '0.75rem',
                                                color: '#FF9580',
                                                fontWeight: '500',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px',
                                                marginBottom: '8px'
                                            }}>
                                                Ritorno
                                            </label>
                                            <input
                                                id="dataFine"
                                                name="dataFine"
                                                type="date"
                                                className="form-control"
                                                value={formData.dataFine}
                                                onChange={updateFormData}
                                                min="2026-01-28"
                                                required
                                                style={{
                                                    borderRadius: '10px',
                                                    border: '1px solid #e0e0e0',
                                                    padding: '12px 16px',
                                                    fontSize: '0.95rem',
                                                    color: '#2d2d2d'
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label d-block" style={{
                                            fontSize: '0.75rem',
                                            color: '#FF9580',
                                            fontWeight: '500',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                            marginBottom: '12px'
                                        }}>
                                            Tipologia
                                        </label>
                                        <div className="d-flex gap-3">
                                            <div className="form-check" style={{
                                                background: formData.tipologia === 'Soft' ? 'linear-gradient(135deg, #FFB5A5 0%, #FF9580 100%)' : '#f5f5f5',
                                                borderRadius: '10px',
                                                padding: '12px 20px',
                                                flex: 1,
                                                cursor: 'pointer',
                                                border: formData.tipologia === 'Soft' ? 'none' : '1px solid #e0e0e0',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                <input
                                                    id="tipoS"
                                                    name="tipologia"
                                                    type="radio"
                                                    className="form-check-input"
                                                    value="Soft"
                                                    checked={formData.tipologia === 'Soft'}
                                                    onChange={updateFormData}
                                                    required
                                                    style={{ display: 'none' }}
                                                />
                                                <label htmlFor="tipoS" className="form-check-label w-100" style={{
                                                    fontSize: '0.95rem',
                                                    color: formData.tipologia === 'Soft' ? '#fff' : '#2d2d2d',
                                                    fontWeight: '500',
                                                    cursor: 'pointer',
                                                    textAlign: 'center'
                                                }}>
                                                    Soft
                                                </label>
                                            </div>
                                            <div className="form-check" style={{
                                                background: formData.tipologia === 'Wild' ? 'linear-gradient(135deg, #FFB5A5 0%, #FF9580 100%)' : '#f5f5f5',
                                                borderRadius: '10px',
                                                padding: '12px 20px',
                                                flex: 1,
                                                cursor: 'pointer',
                                                border: formData.tipologia === 'Wild' ? 'none' : '1px solid #e0e0e0',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                <input
                                                    id="tipoW"
                                                    name="tipologia"
                                                    type="radio"
                                                    className="form-check-input"
                                                    value="Wild"
                                                    checked={formData.tipologia === 'Wild'}
                                                    onChange={updateFormData}
                                                    required
                                                    style={{ display: 'none' }}
                                                />
                                                <label htmlFor="tipoW" className="form-check-label w-100" style={{
                                                    fontSize: '0.95rem',
                                                    color: formData.tipologia === 'Wild' ? '#fff' : '#2d2d2d',
                                                    fontWeight: '500',
                                                    cursor: 'pointer',
                                                    textAlign: 'center'
                                                }}>
                                                    Wild
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-grid">
                                        <button type="submit" style={{
                                            background: 'linear-gradient(135deg, #FFB5A5 0%, #FF9580 100%)',
                                            border: 'none',
                                            borderRadius: '10px',
                                            padding: '12px',
                                            color: '#fff',
                                            fontWeight: '500',
                                            fontSize: '0.95rem',
                                            letterSpacing: '-0.02em'
                                        }}>
                                            Aggiungi viaggio
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}