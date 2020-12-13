import React, { forwardRef, RefObject, useEffect } from 'react'
import styled from 'styled-components'

interface IWebCam {
	width: number,
	height: number
}

const Video = styled.video`
  background-color: #666;
`

export const WebCam = forwardRef<HTMLVideoElement, IWebCam>((props, ref) => {
	useEffect(() => {
		const loadCamera = async () => {
			if (navigator.mediaDevices.getUserMedia && ref) {
				try {
					const stream = await navigator.mediaDevices.getUserMedia({ video: true })
					// @ts-ignore
					ref.current.srcObject = stream;
				} catch(e) {
					console.log("Something went wrong!", e);
				}
			}
		}

		loadCamera()
	}, [ref])

  return <Video autoPlay={true} ref={ref} />;
});
