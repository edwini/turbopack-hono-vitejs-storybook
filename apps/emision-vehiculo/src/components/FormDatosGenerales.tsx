import { Input } from "@repo/ui/input";
import { Label } from "@repo/ui/label";

const FormDatosGenerales = () => {
    return (
        <>
            <p className="mb-6">Revisar los datos generales del cliente</p>
            <div className="grid gap-2 grid-cols-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input type="text" id="nombre" placeholder="" />
                <Label htmlFor="zona">Zona</Label>
                <Input type="text" id="zona" placeholder="" />
                <Label htmlFor="oficialNegocio">Oficial de Negocio</Label>
                <Input type="text" id="oficialNegocio" placeholder="" />
                <Label htmlFor="corredor">Corredor</Label>
                <Input type="text" id="corredor" placeholder="" />
                <Label htmlFor="% comision">Comision</Label>
                <Input type="number" id="comision" placeholder="" />
            </div>
        </>
    );
}

export default FormDatosGenerales;