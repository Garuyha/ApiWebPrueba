import Link from 'next/link'

export default function Navbar() {
    return (

        <nav>
            <h1>Barra de navegacion</h1>
            <ul>
                <li>
                    <Link href="/home">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/recursos">Recursos</Link>
                </li>
            </ul>
        </nav>
    )
}