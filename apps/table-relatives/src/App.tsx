import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import "@repo/ui/styles.css";
import { useState } from "react";
import "./App.css";
import SelectRelative from "./components/SelectRelative";
function App() {
  const [count, setCount] = useState(0);

  const RELATIVES = [
    {
      name: "Davis Townsend",
      id: 1,
      relationship: "Madre",
    },
    {
      name: "Katelyn Calderon",
      id: 2,
      relationship: "Padre",
    },
    {
      name: "Alma Bates",
      id: 3,
      relationship: "Hijo/a",
    },
    {
      name: "Tucker Stokes",
      id: 4,
      relationship: "Tio/a",
    },
    {
      name: "Isadora Heath",
      id: 5,
      relationship: "Sobrino/a",
    },
    {
      name: "Lee Gardner",
      id: 6,
      relationship: "Hermano/a",
    },
    {
      name: "Fatima Noel",
      id: 7,
      relationship: "Madre",
    },
    {
      name: "Myles Witt",
      id: 8,
      relationship: "Padre",
    },
    {
      name: "Kathleen Perkins",
      id: 9,
      relationship: "Hijo/a",
    },
    {
      name: "Callum Savage",
      id: 10,
      relationship: "Tio/a",
    },
  ];
  return (
    <>
      <Button variant={"ghost"}>Crazy</Button>
      <Button>Primary</Button>
      <Button variant="secondary">Amazing</Button>
      <Button variant="destructive">Borrar</Button>
      <h1 className="hover:bg-slate-700">
        Vite + React + Tailwind = fuking cool
      </h1>
      <SelectRelative parentezcos={[{ id: 1, description: "Padre" }]} />
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        <div className="grid mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {RELATIVES.map(({ id, name, relationship }) => (
            <Card href="#" key={id} title={name}>
              {relationship}
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
