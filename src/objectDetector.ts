const ml5 = require('ml5')

interface IObject {
	label: string
	x: number
	y: number
	width: number
	height: number
}

export interface IDetectResult extends IObject {
	confidence: number
	normalized: IObject
}

export const detect = (detector: any, video: HTMLVideoElement) => {
	return new Promise<IDetectResult[]>((resolve, reject) => {
		detector.detect(video, (err: string, results: IDetectResult[]) => {
			if (err) {
				reject(err)
			}
			resolve(results)
		})
	})
}

export const getObjectDetector = async (onReady?: Function) => await ml5.objectDetector('cocossd', onReady)
