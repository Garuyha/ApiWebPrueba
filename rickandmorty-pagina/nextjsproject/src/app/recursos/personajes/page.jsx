
async function loadPersonajes() {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const data = await res.json()
    return data;
}

export default async function Personajes() {

    const personajes = await loadPersonajes();
    console.log(personajes); // Para verificar que los datos se cargan correctamente

    return (
        <div>
            {
                personajes.results.map((personaje) => (
                    <div key={personaje.id}>
                        <h2>{personaje.name}</h2>
                        <img src={personaje.image} alt={personaje.name} />
                    </div>))
            }
        </div>
    );
}
//este componente se encarga de cargar los personajes desde la API de Rick and Morty y mostrarlos en la página de forma asíncrona.