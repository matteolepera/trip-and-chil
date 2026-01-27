export default function SearchBar({ value, onChange }) {
    return (

        <>

            {/* <div className="container my-4">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-8 col-lg-6">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Cerca partecipante..."
                        />
                    </div>
                </div>
            </div> */}

            {/* SEARCH_TEST */}

            <div className="container my-4">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-8 col-lg-6">
                        <div style={{ position: 'relative' }}>
                            <input
                                type="search"
                                className="form-control border-0"
                                placeholder="Cerca partecipante..."
                                value={value}
                                onChange={(event) => onChange(event.target.value)}
                                style={{
                                    borderRadius: '20px',
                                    backgroundColor: '#fff',
                                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                                    padding: '16px 50px 16px 20px',
                                    fontSize: '0.95rem',
                                    color: '#2d2d2d',
                                    outline: 'none'
                                }}
                                onFocus={(e) => {
                                    e.target.style.boxShadow = '0 4px 16px rgba(255, 149, 128, 0.25)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                right: '15px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '36px',
                                height: '36px',
                                borderRadius: '10px',
                                background: 'linear-gradient(135deg, #FFB5A5 0%, #FF9580 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                pointerEvents: 'none'
                            }}>
                                <i className="bi bi-search" style={{ color: '#fff', fontSize: '1rem' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}