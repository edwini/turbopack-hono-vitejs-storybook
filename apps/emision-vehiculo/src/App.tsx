import "@repo/ui/styles.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/tabs";
import FormDatosGenerales from "./components/FormDatosGenerales";
import FormDatosPoliza from "./components/FormDatosPoliza";
import { Button } from "@repo/ui/button";
import DialogSearchBoxCotizacion from "cotizacion-search/DialogSearchBoxCotizacion";
import SearchBoxCotizacion from "cotizacion-search/SearchBoxCotizacion";
import useSearhCotizacionStore from "cotizacion-search/useSearhCotizacionStore";
import "./App.css";
function App() {

	const [cotizacionId] = useSearhCotizacionStore((state) => [state.cotizacionId]);

	return (
		<div className="p-4">
			<h1 className="text-slate-700 text-4xl">
				Registro de polizas de vehiculos
			</h1>
			<div className="grid grid-cols-2 gap-2">
				<div>
					<p className="text-slate-500 text-lg ">
						Ingresar un id de cotización para realizar el registro de la poliza o
						utiliza el boton de buscar para consultar una lista de cotizaciones
						disponibles
					</p>
					<SearchBoxCotizacion />
					<DialogSearchBoxCotizacion />
					<Tabs defaultValue="client" className="pt-4 ">
						<TabsList>
							<TabsTrigger value="client">Datos personales</TabsTrigger>
							<TabsTrigger value="poliza">Datos poliza</TabsTrigger>
							<TabsTrigger value="cert">Certificados</TabsTrigger>
							<TabsTrigger value="attach">Adjunto</TabsTrigger>
						</TabsList>
						<TabsContent value="client" className="pt-2">
							<FormDatosGenerales></FormDatosGenerales>
							<div className="col-span-1"><Button className="mt-6" variant="secondary">Guardar</Button></div>
						</TabsContent>
						<TabsContent value="poliza">
							<FormDatosPoliza></FormDatosPoliza>
						</TabsContent>
						<TabsContent value="cert">Formulario de certificados</TabsContent>
						<TabsContent value="attach">Documentos adjuntos</TabsContent>
					</Tabs >
				</div >

			</div >
		</div >
	);
}

export default App;
