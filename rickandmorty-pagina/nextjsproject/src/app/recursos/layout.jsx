import NavbarRecursos from "@/components/NavbarRecursos";

export default function RecursosLayout({ children }) {
    return <>
        <NavbarRecursos/>
        {children}
    </>;
}