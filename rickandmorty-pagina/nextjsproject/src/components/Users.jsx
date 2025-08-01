"use client";//permite frontend rendering
//importante para usar hooks como useState, useEffect, etc.

import { useEffect } from 'react';

export default function Users() {

    useEffect(() => {
        alert("Carga completa del componente Users");
    }, []); // Solo se ejecuta una vez al montar el componente
    
    return (
        <div>Users</div>
    )
}
// revisar la documentación de Next.js para más detalles sobre el uso de componentes de cliente y servidor.
// https://nextjs.org/docs/app/building-your-application/rendering/server-components#client