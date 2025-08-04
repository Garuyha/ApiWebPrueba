export default function DetallesFicha({ personaje }) {
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
        </div>
    );
}