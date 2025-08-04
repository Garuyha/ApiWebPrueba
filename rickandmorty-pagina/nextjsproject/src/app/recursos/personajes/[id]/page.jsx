//el nombre [id] es para que sea dinamico, ser dinamico permite que la ruta pueda cambiar segun el id del personaje
//asi podemos tener una pagina por cada personaje
import Link from "next/link";

export default async function PersonajesDetalles({ params, searchParams }) {
    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;
    const page = resolvedSearchParams?.page || 1; // Obtener el número de página de los parámetros de búsqueda, o 1 si no está definido
    const res = await fetch(`https://rickandmortyapi.com/api/character/${resolvedParams.id}`);
    const personaje = await res.json();

    return (
        <div>
            <h2>{personaje.name}</h2>
            <img src={personaje.image} alt={personaje.name} />
            <ul>
                <li><strong>Status:</strong> {personaje.status}</li>
                <li><strong>Species:</strong> {personaje.species}</li>
                <li><strong>Type:</strong> {personaje.type || "N/A"}</li>
                <li><strong>Gender:</strong> {personaje.gender}</li>
                <li><strong>Origin:</strong> {personaje.origin?.name}</li>
                <li><strong>Location:</strong> {personaje.location?.name}</li>
                <li><strong>Episodes:</strong> {personaje.episode?.length}</li>
                <li><strong>Created:</strong> {new Date(personaje.created).toLocaleDateString()}</li>
                <li><strong>URL:</strong> <a href={personaje.url} target="_blank" rel="noopener noreferrer">{personaje.url}</a></li>
            </ul>
            <Link href={`/recursos/personajes?page=${page}`}>
                <button>Volver a la lista de personajes</button>
            </Link>
        </div>
    );
}