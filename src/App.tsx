import React, { createContext, Dispatch, SetStateAction, ReactNode, useState } from 'react'
import { Detector } from "./Detector";

interface IObject {
	label: string,
	x: number,
	y: number,
	width: number,
	height: number
}

interface IObjectsContext {
	objects: IObject[],
	setObjects: Dispatch<SetStateAction<IObject[]>>
}

const ObjectsContext = createContext<IObjectsContext | null>(null)
const ObjectsContextProvider = ({ children }: { children: ReactNode }) => {
	const [objects, setObjects] = useState<IObject[]>([])

	return <ObjectsContext.Provider value={{ objects, setObjects }}>{children}</ObjectsContext.Provider>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
	      <ObjectsContextProvider>
	        <Detector />
	      </ObjectsContextProvider>
      </header>
    </div>
  );
}

export default App;
