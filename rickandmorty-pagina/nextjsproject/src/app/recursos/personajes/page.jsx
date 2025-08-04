import Link from "next/link";
import PersonajeFicha from '@/components/PersonajeFicha';

async function loadPersonajes(page = 1) {
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const data = await res.json()
    return data;
}

// renderizado del componente
export default async function Personajes({ searchParams }) {
    const params = await searchParams;
    //console.log(params); // Para verificar que los parámetros de búsqueda se reciben correctamente
    const page = Number(params?.page) || 1;
    const personajes = await loadPersonajes(page);
    console.log(personajes); // Para verificar que los datos se cargan correctamente

    return (
        <div>
            {
                personajes.results.map((personaje) => (
                    <PersonajeFicha key={personaje.id} personaje={personaje} currentPage={page} />
                ))
            }
            <div>
                {page > 1 && (
                    <Link href={`?page=${page - 1}`}>
                        <button>Anterior</button>
                    </Link>
                )}
                {personajes.info.next && (
                    <Link href={`?page=${page + 1}`} style={{ marginLeft: "1rem" }}>
                        <button>Siguiente</button>
                    </Link>
                )}
            </div>
        </div>
    );
}
//este componente se encarga de cargar los personajes desde la API de Rick and Morty y mostrarlos en la página de forma asíncrona.