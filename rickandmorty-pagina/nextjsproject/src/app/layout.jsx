import Navbar from "@/components/Navbar"
import { Roboto } from 'next/font/google'

export const metadata = {
    title: "Pagina web RnM - DevJujuy",
    description: "Pagina web para ver un listado de personajes consumiendo de una api publica."
}

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    style: ["italic", "normal"],
    subsets: ["latin"],
})

export default function RootLayout({ children }) {
    return (
        <html>
            <body className={roboto.className}>
                <Navbar />
                {children}
            </body>
        </html>
    )
}