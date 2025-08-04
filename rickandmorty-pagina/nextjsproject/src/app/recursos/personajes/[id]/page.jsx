//el nombre [id] es para que sea dinamico, ser dinamico permite que la ruta pueda cambiar segun el id del personaje
//asi podemos tener una pagina por cada personaje
import DetallesFicha from "@/components/PersonajeDetallesFicha";
import Link from "next/link";

export default async function PersonajesDetalles({ params, searchParams }) {
    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;
    const page = resolvedSearchParams?.page || 1; // Obtener el número de página de los parámetros de búsqueda, o 1 si no está definido
    const res = await fetch(`https://rickandmortyapi.com/api/character/${resolvedParams.id}`);
    const personaje = await res.json();

    return (
        <div>
            <DetallesFicha key={personaje.id} personaje={personaje} />
            <Link href={`/recursos/personajes?page=${page}`}>
                <button>Volver a la lista de personajes</button>
            </Link>
        </div>
    );
}