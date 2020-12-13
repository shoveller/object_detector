import React, { createContext, Dispatch, SetStateAction, ReactNode, useState } from 'react'
import { ObjectDetector } from "./ObjectDetector";


function App () {
	return (
		<div className="App">
			<header className="App-header">
				<ObjectDetector/>
			</header>
		</div>
	);
}

export default App;
