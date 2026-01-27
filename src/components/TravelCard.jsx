import { Link } from "react-router-dom";



export default function TravelCard({ viaggi }) {

    return (
        <>
            {/* <div className='col-sm-12 col-md-6 col-lg-4'>
                <Link to={`/viaggio/${viaggi.id}`} className="text-decoration-none">
                    <div className="card mb-3 h-100">
                        <div className="card-body">
                            <h5 className="card-title">{viaggi.destinazione}</h5>
                            <div className="d-flex justify-content-between">
                                <span>Inizio: {viaggi.dataInizio}</span>
                                <span>Fine: {viaggi.dataFine}</span>
                            </div>
                        </div>
                    </div >
                </Link>
            </div> */}


            {/* CARD-TEST */}


            <div className='col-sm-12 col-md-6 col-lg-4'>
                <Link to={`/viaggio/${viaggi.id}`} className="text-decoration-none">
                    <div className="card mb-3 h-100 border-0"
                        style={{
                            cursor: 'pointer',
                            borderRadius: '20px',
                            backgroundColor: '#fff',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                            overflow: 'hidden'
                        }}>


                        <div style={{
                            background: 'linear-gradient(135deg, #FFB5A5 0%, #FF9580 100%)',
                            padding: '20px',
                            position: 'relative'
                        }}>
                            <h5 className="mb-0" style={{
                                color: '#fff',
                                fontWeight: '500',
                                fontSize: '1.3rem',
                                letterSpacing: '-0.02em'
                            }}>
                                {viaggi.destinazione}
                            </h5>

                        </div>

                        <div className="card-body" style={{ paddingTop: '24px' }}>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="text-start">
                                    <div style={{
                                        fontSize: '0.75rem',
                                        color: '#FF9580',
                                        fontWeight: '500',
                                        marginBottom: '4px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    }}>
                                        Partenza
                                    </div>
                                    <div style={{
                                        fontSize: '0.95rem',
                                        color: '#2d2d2d',
                                        fontWeight: '400'
                                    }}>
                                        {viaggi.dataInizio}
                                    </div>
                                </div>


                                <div style={{
                                    color: '#FFB5A5',
                                    fontSize: '1.2rem',
                                    margin: '0 16px'
                                }}>
                                    ~
                                </div>

                                <div className="text-end">
                                    <div style={{
                                        fontSize: '0.75rem',
                                        color: '#FF9580',
                                        fontWeight: '500',
                                        marginBottom: '4px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    }}>
                                        Ritorno
                                    </div>
                                    <div style={{
                                        fontSize: '0.95rem',
                                        color: '#2d2d2d',
                                        fontWeight: '400'
                                    }}>
                                        {viaggi.dataFine}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </Link >
            </div >



        </>
    );



}