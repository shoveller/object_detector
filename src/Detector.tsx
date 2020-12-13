import React, { createRef } from 'react'
import { WebCam } from "./WebCam";

export interface IDetectorProps {
}

export const Detector = (props: IDetectorProps) => {
	const width = 400
	const height = 300
	const webCamRef = createRef<HTMLVideoElement>()

  return (
    <>
	    <WebCam width={width} height={height} ref={webCamRef} />
    </>
  );
};
