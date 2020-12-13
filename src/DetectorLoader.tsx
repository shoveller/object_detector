import React, { useContext, useEffect } from 'react'
import { IODContext, ODContext } from "./ObjectDetector";

const ml5 = require('ml5')

export const DetectorLoader = () => {
	const context = useContext(ODContext)
	const {setDetector} = context as IODContext

	useEffect(() => {
		const load = async () => {
			const objectDetector = await ml5.objectDetector('cocossd', () => console.log('start'))
			setDetector(objectDetector)
		}

		load()
	}, [ setDetector ])

	return <></>;
};
