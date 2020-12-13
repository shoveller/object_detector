import React, { useCallback, useContext, useEffect } from 'react'
import { IObject, IODContext, ODContext } from "./ObjectDetector";

export const Detector = () => {
	const context = useContext(ODContext)
	const { setObjects, detector, video } = context as IODContext
	const detect = useCallback((video: HTMLVideoElement | undefined, detector: any) => {
		if (!video) return
		if (!detector) return

		detector.detect(video, (err: string, objects: IObject[]) => {
			if (err) {
				console.error(err);
			}
			setObjects(objects)
		})
	}, [detector, video])

	useEffect(() => {
		const timer = setInterval(() => {
			detect(video, detector)
		}, 100)

		return () => clearInterval(timer)
	}, [setObjects, detector, video])

  return <></>;
};
