import { create } from 'zustand'

interface Store {
    cotizacionId: number,
    cotizaciones: Cotizacion[],
    dialogVisible: boolean,
    setCotizacion: (newCotizacion: number) => void,
    showDialog: () => void,
    hideDialog: () => void,
    fetchCotizacionFilter: () => void
}
export type Cotizacion = {
    cotizacionID: number,
    codigoCloiente: string,
    nombreCliente: string,
    sumaAsegurada: number,
    prima: number

}
const useSearhCotizacionStore = create<Store>((set) => ({
    cotizacionId: NaN,
    cotizaciones: [],
    dialogVisible: false,
    setCotizacion: (newCotizacion) => set(({ cotizacionId: newCotizacion })),
    showDialog: () => {
        set(({ dialogVisible: true }))
    },
    hideDialog: () => {
        set(({ dialogVisible: false }))
    },
    fetchCotizacionFilter: async () => {
        const response = await fetch("/api/Catalogo/GetCatalogos?NombreCatalogo=Oficinas", {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
        }).then(data => data.json());
        set(({ cotizaciones: response as Cotizacion[] }))

    }
}))
export default useSearhCotizacionStore