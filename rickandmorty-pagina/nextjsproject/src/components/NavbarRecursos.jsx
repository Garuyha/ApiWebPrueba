import Link from 'next/link'

export default function NavbarRecursos() {
    return (
        <nav>
            <h2>Recursos de la API de RnM</h2>
            <ul>
                <li>
                    <Link href={`/recursos/personajes?page=${1}`}>Personajes</Link>
                </li>
                <li>Lugares</li>
                <li>Episodios</li>
            </ul>
        </nav>
    )
}