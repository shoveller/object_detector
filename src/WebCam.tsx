// import React, { createRef, useContext, useEffect } from 'react'
// import styled from 'styled-components'
// import { IODContext, ODContext } from "./ObjectDetector";
//
// const Video = styled.video`
//   display: none;
//   width: ${props => props.width};
//   height: ${props => props.height};
//   background-color: #666;
// `
//
// export const WebCam = () => {
// 	const ref = createRef<HTMLVideoElement>()
// 	const context = useContext(ODContext)
// 	const {viewport, setVideo} = context as IODContext
//
// 	useEffect(() => {
// 		const loadCamera = async () => {
// 			if (!ref) return
// 			if (!ref.current) return
// 			if (!navigator.mediaDevices.getUserMedia) return
//
// 			const video = ref.current
//
// 			try {
// 				const stream = await navigator.mediaDevices.getUserMedia({video: true})
// 				video.srcObject = stream;
// 				setVideo(video)
// 				await video.play()
// 			} catch (e) {
// 				console.log("Something went wrong!", e);
// 			}
// 		}
//
// 		loadCamera()
// 	}, [ ref, setVideo ])
//
// 	return <Video autoPlay={true} width={viewport.width} height={viewport.height} ref={ref}/>;
// };

import React from 'react'

export const WebCam = () => {
  return <></>;
};

