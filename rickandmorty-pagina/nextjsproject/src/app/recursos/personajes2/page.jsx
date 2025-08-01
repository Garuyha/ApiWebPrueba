import Link from "next/link";

async function loadPersonajes(page = 1) {
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const data = await res.json();
    return data;
}

export default async function Personajes({ searchParams }) {
    const page = Number(searchParams?.page) || 1;
    const personajes = await loadPersonajes(page);

    return (
        <div>
            <h1>Personajes</h1>
            {personajes.results.map((personaje) => (
                <div key={personaje.id}>
                    <h2>{personaje.name}</h2>
                    <img src={personaje.image} alt={personaje.name} />
                </div>
            ))}
            <div style={{ marginTop: "2rem" }}>
                {page > 1 && (
                    <Link href={`?page=${page - 1}`}>Anterior</Link>
                )}
                {personajes.info.next && (
                    <Link href={`?page=${page + 1}`} style={{ marginLeft: "1rem" }}>Siguiente</Link>
                )}
            </div>
        </div>
    );
}