import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@repo/ui/command";
import useSearhCotizacionStore, { Cotizacion } from "../store/store";

const DialogSearchBoxCotizacion = () => {
	const [dialogVisible, cotizaciones, hideDialog, setCotizacion] =
		useSearhCotizacionStore((state) => [
			state.dialogVisible,
			state.cotizaciones,
			state.hideDialog,
			state.setCotizacion,
		]);	 

	const handleSelectCotizacion = (item: Cotizacion) => () => {
		console.log("click", item);
		setCotizacion(item.cotizacionID);
		hideDialog();
	};
	return (
		<CommandDialog open={dialogVisible} onOpenChange={hideDialog}>
			<CommandInput placeholder="Escriba un nombre o DNI..." />
			<CommandList>
				<CommandEmpty>No se encontraron cotizaciones.</CommandEmpty>
				<CommandGroup heading="Cotizaciones Vehiculos">
					{cotizaciones.map((c) => (
						<CommandItem
							key={c.cotizacionID}
							onClickCapture={handleSelectCotizacion(c)}
							className="flex-col items-baseline"
						>
							<div className="text-sm font-large">
								<h1 className="text-lg">{c.codigoCloiente}</h1>
								<p>{c.nombreCliente}</p>
								<p>Suma asegurada: {c.sumaAsegurada}</p>
								<p>Prima:{c.prima}</p>
							</div>
						</CommandItem>
					))}
				</CommandGroup>
			</CommandList>
		</CommandDialog>
	);
};

export default DialogSearchBoxCotizacion;