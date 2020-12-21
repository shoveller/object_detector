// import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'
// import { Detector } from "./Detector";
// import { DetectorLoader } from "./DetectorLoader";
// import { Rectangles } from "./Rectangles";
// import { WebCam } from "./WebCam";
//
//
//
// const dummyObject: IObject = {
// 	label: '준비중...',
// 	x: 0,
// 	y: 0,
// 	width: 75,
// 	height: 25
// }
//
// export const ODContext = createContext<IODContext | null>(null)
// const ODContextProvider = ({children}: { children: ReactNode }) => {
// 	const [ objects, setObjects ] = useState<IObject[]>([ dummyObject ])
// 	const [ canvas, setCanvas ] = useState<HTMLCanvasElement>()
// 	const [ video, setVideo ] = useState<HTMLVideoElement>()
// 	const [ detector, setDetector ] = useState()
// 	const viewport = {
// 		width: 800,
// 		height: 600
// 	}
//
// 	return <ODContext.Provider
// 		value={{detector, setDetector, viewport, objects, setObjects, canvas, setCanvas, video, setVideo}}>{children}</ODContext.Provider>
// }
//
// export const ObjectDetector2 = () => {
// 	return (
// 		<ODContextProvider>
// 			<WebCam/>
// 			<Rectangles/>
// 			<DetectorLoader />
// 			<Detector />
// 		</ODContextProvider>
// 	);
// };

import React from 'react'

export const ObjectDetector2 = () => {
  return <></>;
};
