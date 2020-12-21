import React from 'react'
import { getObjectDetector, detect } from './objectDetector'
import { CanvasCamera } from './CanvasCamera'

function App() {
	const onReady = async () => {
		return await getObjectDetector()
	}

	const onDraw = async (
		video: HTMLVideoElement,
		ctx: CanvasRenderingContext2D,
		width: number,
		height: number,
    detector?: any
	) => {
		const results = await detect(detector, video)
		console.log(results);
	}

	return (
		<div className="App">
			<header className="App-header">
				<CanvasCamera width={400} height={300} onReady={onReady} onDraw={onDraw} />
			</header>
		</div>
	)
}

export default App
