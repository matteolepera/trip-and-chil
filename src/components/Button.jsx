import React, { useState } from 'react';

export default function Button({ children, onClick }) {
    const [isHovered, setIsHovered] = useState(false);

    const baseStyle = {
        borderRadius: '20px',
        background: 'linear-gradient(135deg, #FFB5A5 0%, #FF9580 100%)',
        color: '#fff',
        border: 'none',
        padding: '14px 28px',
        fontSize: '0.95rem',
        fontWeight: '500',
        letterSpacing: '-0.02em',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
    };

    const hoverStyle = isHovered ? {
        boxShadow: '0 4px 16px rgba(255, 149, 128, 0.35)',
        transform: 'translateY(-2px)'
    } : {};

    return (
        <button
            className="btn"
            onClick={onClick}
            style={{ ...baseStyle, ...hoverStyle }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </button>
    );
}