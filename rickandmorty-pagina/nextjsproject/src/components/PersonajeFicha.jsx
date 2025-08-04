"use client";
import Link from 'next/link'

export default function PersonajesFicha({ personaje, currentPage }) {
    return (
        <div>
            <h2>{personaje.name}</h2>
            <img src={personaje.image} alt={personaje.name} />
            <Link href={`/recursos/personajes/${personaje.id}?page=${currentPage}`}>
                <button>Detalles</button>
            </Link>
        </div>);
}