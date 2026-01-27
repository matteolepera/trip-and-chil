const partecipanti = [
    // Viaggio 1: Roma
    { id: 1, viaggioId: 1, nome: "Marco", cognome: "Rossi", email: "marco.rossi@email.com", telefono: "+39 333 1234567", codiceFiscale: "RSSMRC80A01H501X" },
    { id: 2, viaggioId: 1, nome: "Anna", cognome: "Bianchi", email: "anna.bianchi@email.com", telefono: "+39 328 2345678", codiceFiscale: "BNCNNA85B22D612Y" },
    { id: 3, viaggioId: 1, nome: "Luca", cognome: "Verdi", email: "luca.verdi@email.com", telefono: "+39 347 3456789", codiceFiscale: "VRDLUC90C15E344Z" },
    { id: 4, viaggioId: 1, nome: "Giulia", cognome: "Neri", email: "giulia.neri@email.com", telefono: "+39 339 4567890", codiceFiscale: "NRIGLI88D27H611A" },
    { id: 5, viaggioId: 1, nome: "Paolo", cognome: "Russo", email: "paolo.russo@email.com", telefono: "+39 340 5678901", codiceFiscale: "RSSPAL92E05C767B" },
    { id: 6, viaggioId: 1, nome: "Paolo", cognome: "Neri", email: "paolo.neri@email.com", telefono: "+39 340 112901", codiceFiscale: "RSSPAL92E05C767B" },
    { id: 7, viaggioId: 1, nome: "Paolo", cognome: "Russo", email: "paolo.russo22@email.com", telefono: "+39 340 5748901", codiceFiscale: "RSSPAL92E05C767B" },


    // Viaggio 2: Parigi
    { id: 6, viaggioId: 2, nome: "Sara", cognome: "Conti", email: "sara.conti@email.com", telefono: "+39 331 6789012", codiceFiscale: "CNTSRA87F18B764C" },
    { id: 7, viaggioId: 2, nome: "Daniele", cognome: "Ferrari", email: "daniele.ferrari@email.com", telefono: "+39 335 7890123", codiceFiscale: "FRRDNL93G31D644D" },
    { id: 8, viaggioId: 2, nome: "Elena", cognome: "Moretti", email: "elena.moretti@email.com", telefono: "+39 348 8901234", codiceFiscale: "MRTLEL89H22E855E" },
    { id: 9, viaggioId: 2, nome: "Carlo", cognome: "Leone", email: "carlo.leone@email.com", telefono: "+39 329 9012345", codiceFiscale: "LNLCRL91I11F956F" },
    { id: 10, viaggioId: 2, nome: "Marta", cognome: "Giordani", email: "marta.giordani@email.com", telefono: "+39 333 0123456", codiceFiscale: "GRDMRT84L26C542G" },

    // Viaggio 3: New York
    { id: 11, viaggioId: 3, nome: "Tommaso", cognome: "Ricci", email: "tommaso.ricci@email.com", telefono: "+39 346 1234567", codiceFiscale: "RCCMMT90M03D854H" },
    { id: 12, viaggioId: 3, nome: "Simona", cognome: "Marini", email: "simona.marini@email.com", telefono: "+39 338 2345678", codiceFiscale: "MRNSMN86N29F963I" },
    { id: 13, viaggioId: 3, nome: "Federico", cognome: "Costa", email: "federico.costa@email.com", telefono: "+39 342 3456789", codiceFiscale: "CSTFRC88O14A012J" },
    { id: 14, viaggioId: 3, nome: "Valentina", cognome: "Galli", email: "valentina.galli@email.com", telefono: "+39 334 4567890", codiceFiscale: "GLLVLT91P23B445K" },
    { id: 15, viaggioId: 3, nome: "Alessandro", cognome: "Pini", email: "alessandro.pini@email.com", telefono: "+39 349 5678901", codiceFiscale: "PNIALS94Q05C556L" },

    // Viaggio 4: Tokyo
    { id: 16, viaggioId: 4, nome: "Beatrice", cognome: "Sordi", email: "beatrice.sordi@email.com", telefono: "+39 330 6789012", codiceFiscale: "SRDBTR85R28D667M" },
    { id: 17, viaggioId: 4, nome: "Giovanni", cognome: "Zani", email: "giovanni.zani@email.com", telefono: "+39 336 7890123", codiceFiscale: "ZNIGVV92S11E778N" },
    { id: 18, viaggioId: 4, nome: "Chiara", cognome: "Lombardi", email: "chiara.lombardi@email.com", telefono: "+39 345 8901234", codiceFiscale: "LMBCHR89T22F889O" },
    { id: 19, viaggioId: 4, nome: "Riccardo", cognome: "Mazza", email: "riccardo.mazza@email.com", telefono: "+39 327 9012345", codiceFiscale: "MZZRCR90U03G990P" },
    { id: 20, viaggioId: 4, nome: "Francesca", cognome: "De Luca", email: "francesca.deluca@email.com", telefono: "+39 333 0123457", codiceFiscale: "DLCFNC87V14H001Q" },

    // Viaggio 5: Barcellona
    { id: 21, viaggioId: 5, nome: "Matteo", cognome: "Esposito", email: "matteo.esposito@email.com", telefono: "+39 347 1234568", codiceFiscale: "SPTMTE93W05I112R" },
    { id: 22, viaggioId: 5, nome: "Laura", cognome: "Romano", email: "laura.romano@email.com", telefono: "+39 339 2345679", codiceFiscale: "RMNLRA88X16J223S" },
    { id: 23, viaggioId: 5, nome: "Antonio", cognome: "Greco", email: "antonio.greco@email.com", telefono: "+39 340 3456780", codiceFiscale: "GRCTNT91Y27K334T" },
    { id: 24, viaggioId: 5, nome: "Sofia", cognome: "Gentile", email: "sofia.gentile@email.com", telefono: "+39 331 4567891", codiceFiscale: "GNTSSF84Z08L445U" },
    { id: 25, viaggioId: 5, nome: "Davide", cognome: "Bruno", email: "davide.bruno@email.com", telefono: "+39 335 5678902", codiceFiscale: "BRNDVD92A19M556V" },

    // Viaggio 6: Sydney
    { id: 26, viaggioId: 6, nome: "Camilla", cognome: "Barbieri", email: "camilla.barbieri@email.com", telefono: "+39 348 6789013", codiceFiscale: "BRBCML87B20N667W" },
    { id: 27, viaggioId: 6, nome: "Stefano", cognome: "Pagano", email: "stefano.pagano@email.com", telefono: "+39 329 7890124", codiceFiscale: "PGNSTF90C11O778X" },
    { id: 28, viaggioId: 6, nome: "Irene", cognome: "Sorrentino", email: "irene.sorrentino@email.com", telefono: "+39 346 8901235", codiceFiscale: "SRNRN89D22P889Y" },
    { id: 29, viaggioId: 6, nome: "Fabio", cognome: "Caruso", email: "fabio.caruso@email.com", telefono: "+39 338 9012346", codiceFiscale: "CRSFB93E03Q990Z" },
    { id: 30, viaggioId: 6, nome: "Nicoletta", cognome: "Vitiello", email: "nicoletta.vitiello@email.com", telefono: "+39 342 0123457", codiceFiscale: "VTLNCL86F14R001A" },

    // Viaggio 7: Londra
    { id: 31, viaggioId: 7, nome: "Emanuele", cognome: "De Santis", email: "emanuele.desantis@email.com", telefono: "+39 334 1234568", codiceFiscale: "DNTEML94G05S112B" },
    { id: 32, viaggioId: 7, nome: "Roberta", cognome: "Maioli", email: "roberta.maioli@email.com", telefono: "+39 349 2345679", codiceFiscale: "MLIRBT91H16T223C" },
    { id: 33, viaggioId: 7, nome: "Massimo", cognome: "Pellegrini", email: "massimo.pellegrini@email.com", telefono: "+39 330 3456780", codiceFiscale: "PLLMSS89I27U334D" },
    { id: 34, viaggioId: 7, nome: "Claudia", cognome: "Rinaldi", email: "claudia.rinaldi@email.com", telefono: "+39 336 4567891", codiceFiscale: "RNLCDL92J08V445E" },
    { id: 35, viaggioId: 7, nome: "Giuseppe", cognome: "Mancini", email: "giuseppe.mancini@email.com", telefono: "+39 345 5678902", codiceFiscale: "MNCGPP87K19W556F" },

    // Viaggio 8: Rio
    { id: 36, viaggioId: 8, nome: "Cristina", cognome: "Santoro", email: "cristina.santoro@email.com", telefono: "+39 327 6789013", codiceFiscale: "SNTCST85L20X667G" },
    { id: 37, viaggioId: 8, nome: "Andrea", cognome: "Vitale", email: "andrea.vitale@email.com", telefono: "+39 333 7890124", codiceFiscale: "VTLNDR90M11Y778H" },
    { id: 38, viaggioId: 8, nome: "Monica", cognome: "Cattaneo", email: "monica.cattaneo@email.com", telefono: "+39 347 8901235", codiceFiscale: "CTTMNC89N22Z889I" },
    { id: 39, viaggioId: 8, nome: "Lorenzo", cognome: "Bellini", email: "lorenzo.bellini@email.com", telefono: "+39 339 9012346", codiceFiscale: "BLNLNZ93O03A990J" },
    { id: 40, viaggioId: 8, nome: "Patrizia", cognome: "D'Angelo", email: "patrizia.dangelo@email.com", telefono: "+39 340 0123457", codiceFiscale: "DNGPTR86P14B001K" },

    // Viaggio 9: Dubai
    { id: 41, viaggioId: 9, nome: "Raffaele", cognome: "Serra", email: "raffaele.serra@email.com", telefono: "+39 331 1234569", codiceFiscale: "SRRRFL94Q05C112L" },
    { id: 42, viaggioId: 9, nome: "Barbara", cognome: "Lupi", email: "barbara.lupi@email.com", telefono: "+39 335 2345670", codiceFiscale: "LPBBBR91R16D223M" },
    { id: 43, viaggioId: 9, nome: "Sergio", cognome: "Parisi", email: "sergio.parisi@email.com", telefono: "+39 348 3456781", codiceFiscale: "PRSSRG89S27E334N" },
    { id: 44, viaggioId: 9, nome: "Teresa", cognome: "Vallone", email: "teresa.vallone@email.com", telefono: "+39 329 4567892", codiceFiscale: "VLLTRS92T08F445O" },
    { id: 45, viaggioId: 9, nome: "Vincenzo", cognome: "Orlando", email: "vincenzo.orlando@email.com", telefono: "+39 346 5678903", codiceFiscale: "ORLVNZ87U19G556P" },

    // Viaggio 10: Amsterdam
    { id: 46, viaggioId: 10, nome: "Marianna", cognome: "Pugliese", email: "marianna.pugliese@email.com", telefono: "+39 338 6789014", codiceFiscale: "PGLMRN85V20H667Q" },
    { id: 47, viaggioId: 10, nome: "Salvatore", cognome: "Coppola", email: "salvatore.coppola@email.com", telefono: "+39 342 7890125", codiceFiscale: "CPPSTR90W11I778R" },
    { id: 48, viaggioId: 10, nome: "Angelica", cognome: "Ferrara", email: "angelica.ferrara@email.com", telefono: "+39 334 8901236", codiceFiscale: "FRRAGL89X22J889S" },
    { id: 49, viaggioId: 10, nome: "Umberto", cognome: "Vitale", email: "umberto.vitale@email.com", telefono: "+39 349 9012347", codiceFiscale: "VTLMBT93Y03K990T" },
    { id: 50, viaggioId: 10, nome: "Rosaria", cognome: "Basile", email: "rosaria.basile@email.com", telefono: "+39 330 0123458", codiceFiscale: "BSLRSR86Z14L001U" }
];

export default partecipanti;