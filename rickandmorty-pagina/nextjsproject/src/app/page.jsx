import Users from "../components/Users";

export const metadata = {
    title: "Pagina web RnM - DevJujuy",
    description: "Pagina web para ver un listado de personajes consumiendo de una api publica."
}//componente de servidor, no se puede usar useState, useEffect, etc.

export default function LandingPage() {
    return (
        <section>
            <h1>Landing page</h1>

            {/*componente de cliente*/}
            <Users />
        </section>
    );
}