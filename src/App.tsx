import React from 'react'
import { ObjectDetector } from "./ObjectDetector";
import { CanvasCamera } from './CanvasCamera';


function App () {
	return (
		<div className="App">
			<header className="App-header">
				<CanvasCamera width={400} height={300}>
          <ObjectDetector />
        </CanvasCamera>
			</header>
		</div>
	);
}

export default App;
