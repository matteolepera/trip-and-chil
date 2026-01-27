import { useState } from "react";
import { Link } from "react-router-dom";


export default function GuestCard({ partecipante }) {
    const [openAccordion, setOpenAccordion] = useState(0);

    function toggleAccordion(key) {
        if (openAccordion === key) {
            setOpenAccordion(null);
        } else {
            setOpenAccordion(key);
        }
    }

    return (
        <>
            {/* <div className="accordion" id="accordionPanelsStayOpenExample">

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button ${openAccordion !== partecipante.id ? 'collapsed' : ''}`}
                            type="button"
                            onClick={() => toggleAccordion(partecipante.id)}
                        >
                            {partecipante.nome} {partecipante.cognome}
                        </button>
                    </h2>
                    <div
                        className={`accordion-collapse collapse ${openAccordion !== partecipante.id ? 'show' : ''}`}
                    >
                        <div className="accordion-body">
                            <div>E-mail: {partecipante.email}</div>
                            <div>Telefono: {partecipante.telefono}</div>
                            <div>Codice Fiscale: {partecipante.codiceFiscale}</div>
                        </div>
                    </div>
                </div>

            </div> */}


            {/* ACCORDION_TEST */}
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item mb-3 border-0"
                    style={{
                        borderRadius: '20px',
                        backgroundColor: '#fff',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                        overflow: 'hidden'
                    }}>
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button ${openAccordion !== partecipante.id ? 'collapsed' : ''}`}
                            type="button"
                            onClick={() => toggleAccordion(partecipante.id)}
                            style={{
                                background: openAccordion === partecipante.id
                                    ? 'linear-gradient(135deg, #FFB5A5 0%, #FF9580 100%)'
                                    : 'linear-gradient(135deg, #FFB5A5 0%, #FF9580 100%)',
                                color: '#fff',
                                fontWeight: '500',
                                fontSize: '1.1rem',
                                letterSpacing: '-0.02em',
                                border: 'none',
                                padding: '20px',
                                borderRadius: '20px'
                            }}
                        >
                            {partecipante.nome} {partecipante.cognome}
                        </button>
                    </h2>
                    <div
                        className={`accordion-collapse collapse ${openAccordion === partecipante.id ? 'show' : ''}`}
                    >
                        <div className="accordion-body" style={{ padding: '24px' }}>
                            <div className="mb-3 d-flex align-items-center">
                                <div style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(135deg, #FFB5A5 0%, #FF9580 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '12px'
                                }}>
                                    <i className="bi bi-envelope-fill" style={{ color: '#fff', fontSize: '1rem' }}></i>
                                </div>
                                <div>
                                    <div style={{
                                        fontSize: '0.75rem',
                                        color: '#FF9580',
                                        fontWeight: '500',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        marginBottom: '2px'
                                    }}>
                                        E-mail
                                    </div>
                                    <Link
                                        to={`mailto:${partecipante.email}`}
                                        className="text-decoration-none"
                                        style={{
                                            fontSize: '0.95rem',
                                            color: '#2d2d2d',
                                            fontWeight: '400'
                                        }}
                                    >
                                        {partecipante.email}
                                    </Link>
                                </div>
                            </div>

                            <div className="mb-3 d-flex align-items-center">
                                <div style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(135deg, #FFB5A5 0%, #FF9580 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '12px'
                                }}>
                                    <i className="bi bi-telephone-fill" style={{ color: '#fff', fontSize: '1rem' }}></i>
                                </div>
                                <div>
                                    <div style={{
                                        fontSize: '0.75rem',
                                        color: '#FF9580',
                                        fontWeight: '500',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        marginBottom: '2px'
                                    }}>
                                        Telefono
                                    </div>
                                    <Link
                                        to={`tel:${partecipante.telefono}`}
                                        className="text-decoration-none"
                                        style={{
                                            fontSize: '0.95rem',
                                            color: '#2d2d2d',
                                            fontWeight: '400'
                                        }}
                                    >
                                        {partecipante.telefono}
                                    </Link>
                                </div>
                            </div>

                            <div className="d-flex align-items-center">
                                <div style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(135deg, #FFB5A5 0%, #FF9580 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '12px'
                                }}>
                                    <i className="bi bi-credit-card-fill" style={{ color: '#fff', fontSize: '1rem' }}></i>
                                </div>
                                <div>
                                    <div style={{
                                        fontSize: '0.75rem',
                                        color: '#FF9580',
                                        fontWeight: '500',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        marginBottom: '2px'
                                    }}>
                                        Codice Fiscale
                                    </div>
                                    <div style={{
                                        fontSize: '0.95rem',
                                        color: '#2d2d2d',
                                        fontWeight: '400'
                                    }}>
                                        {partecipante.codiceFiscale}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}