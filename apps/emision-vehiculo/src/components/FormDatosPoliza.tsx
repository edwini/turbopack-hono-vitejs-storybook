import { Input } from "@repo/ui/input";
import { Label } from "@repo/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@repo/ui/select"

const FormDatosPoliza = () => {
    return (
        <>
            <p className="mb-6">Formulario de datos de poliza</p>
            <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-10">
                <Label className="mb-2" htmlFor="vigenciaDesde">Vigencia desde</Label>
                <Input className="mb-2" type="text" id="vigenciaDesde" placeholder="" />
                <Label className="mb-2" htmlFor="vigenciaHasta">Vigencia Hasta</Label>
                <Input className="mb-2" type="text" id="vigenciaHasta" placeholder="" />
                <Label className="mb-2" htmlFor="moneda">Moneda</Label>
                <Input className="mb-2" type="text" id="moneda" placeholder="" />
                <Label className="mb-2" htmlFor="plan">Plan</Label>
                <Input className="mb-2" type="text" id="plan" placeholder="" />
                <Label className="mb-2" htmlFor="cantidadCuotas">Cantidad Cuotas</Label>
                <Input className="mb-2" type="text" id="cantidadCuotas" placeholder="" />
                <Label className="mb-2" htmlFor="valorPrimeraCuota">Valor Primera Cuota</Label>
                <Input className="mb-2" type="text" id="valorPrimeraCuota" placeholder="" />
                <Label className="mb-2" htmlFor="valorCuotasRestante">Valor Cuotas Restantes</Label>
                <Input className="mb-2" type="text" id="valorCuotasRestante" placeholder="" />
                <Label className="mb-2" htmlFor="fechaPrimerPago">Fecha Primer Pago</Label>
                <Input className="mb-2" type="text" id="fechaPrimerPago" placeholder="" />
                <Label className="mb-2" htmlFor="sumaAsegurada">Suma Asegurada</Label>
                <Input className="mb-2" type="text" id="sumaAsegurada" placeholder="" />
                <Label className="mb-2" htmlFor="primaTotal">Prima Total</Label>
                <Input className="mb-2" type="text" id="primaTotal" placeholder="" />
                <div className="col-span-2 mb-2">
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Modalidad" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">Light</SelectItem>
                            <SelectItem value="2">Dark</SelectItem>
                            <SelectItem value="3">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="col-span-2">
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Clases" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">Light</SelectItem>
                            <SelectItem value="2">Dark</SelectItem>
                            <SelectItem value="3">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </>
    );
}

export default FormDatosPoliza;