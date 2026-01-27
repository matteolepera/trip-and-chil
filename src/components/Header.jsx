import { useState } from "react";
import Logo from "../assets/image/logo.png"
import { Link } from "react-router-dom"
import Button from "./Button"

import numeriEmergenza from "../data/emergenza"

export default function Header() {
    const [showEmergency, setShowEmergency] = useState(false);
    return (
        <>
            <header className="fixed-top">
                <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={"/"}>
                            <img
                                src={Logo}
                                alt="Logo"
                                className="d-inline-block align-text-top"
                                style={{ height: '80px', maxWidth: '150px', objectFit: 'contain' }}
                            />
                        </Link>
                        <Button onClick={() => setShowEmergency(true)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <i className="bi bi-exclamation-triangle-fill"></i>
                        </Button>

                        {showEmergency && (
                            <div className="modal show d-block" tabIndex="-1" onClick={() => setShowEmergency(false)}>
                                <div className="modal-dialog modal-dialog-scrollable" onClick={(event) => event.stopPropagation()}>
                                    <div className="modal-content border-0" style={{
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 24px rgba(0,0,0,0.12)'
                                    }}>
                                        <div className="modal-header border-0" style={{
                                            background: 'linear-gradient(135deg, #FFB5A5 0%, #FF9580 100%)',
                                            padding: '24px',
                                            position: 'relative'
                                        }}>
                                            <h1 className="modal-title mb-0" style={{
                                                color: '#fff',
                                                fontWeight: '500',
                                                fontSize: '1.3rem',
                                                letterSpacing: '-0.02em'
                                            }}>
                                                Numeri di emergenza
                                            </h1>
                                        </div>
                                        <div className="modal-body" style={{ padding: '24px' }}>
                                            {numeriEmergenza.map((emergenza) => (
                                                <div key={emergenza.id} className="mb-3 d-flex align-items-center">
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

                                                            {emergenza.nome}
                                                        </div>


                                                        <Link

                                                            to={`tel:${emergenza.numero}`}
                                                            className="text-decoration-none"
                                                            style={{
                                                                fontSize: '0.95rem',
                                                                color: '#2d2d2d',
                                                                fontWeight: '400'
                                                            }}>
                                                            {emergenza.numero}
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="modal-footer border-0" style={{
                                            padding: '16px 24px 24px 24px',
                                            background: 'transparent'
                                        }}>
                                            <Button onClick={() => setShowEmergency(false)}>
                                                Chiudi
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </header>
        </>
    )
}