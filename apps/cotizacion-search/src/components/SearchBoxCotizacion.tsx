import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import { KeyboardEvent, useEffect, useState } from "react";
import useSearhCotizacionStore from "../store/store";
const SearchBoxCotizacion = () => {
	const [setCotizacion, showDialog, fetchCotizacionFilter] =
		useSearhCotizacionStore((state) => [
			state.setCotizacion,
			state.showDialog,
			state.fetchCotizacionFilter,
		]);
	const [input, setInput] = useState("");
	const handleSearch = () => {
		showDialog();
		setCotizacion(NaN);
		fetchCotizacionFilter();
	};
	const onEnterKeyCapture = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			setCotizacion(Number.parseInt(input));
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
useEffect(() => {
	const down = (e: globalThis.KeyboardEvent) => {
		if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			showDialog();
		}
	};

	document.addEventListener("keydown", down);
	return () => document.removeEventListener("keydown", down);
});

	return (
		<div className="flex w-full max-w-sm items-center space-x-2">
			<Input
				type="number"
				placeholder="Buscar"
				onKeyUp={onEnterKeyCapture}
				onChange={(e) => setInput(e.target.value)}
			/>
			<Button variant="outline" onClick={handleSearch}>
				<MagnifyingGlassIcon />
			</Button>
		</div>
	);
};

export default SearchBoxCotizacion;
