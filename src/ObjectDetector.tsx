import React, { ReactElement, useContext, useEffect } from 'react'
import { CanvasCameraContext, ICanvasCameraContext } from "./CanvasCamera";
const ml5 = require('ml5')

export interface IDetectResult {
	label: string
	x: number
	y: number
	width: number
	height: number
}

interface IObjectDetector {
  children?: ReactElement
}

const getObjectDetector = async () => await ml5.objectDetector('cocossd', () => console.log('start'))

export const ObjectDetector = (props: IObjectDetector) => {
  const { video } = useContext<ICanvasCameraContext>(CanvasCameraContext)

  useEffect(() => {
    let timer = 0
    const buildDetector = async () => {
      const detector = await getObjectDetector()
      const detect = (video: HTMLVideoElement | undefined, detector: any) => {
        if (!video) return
        if (!detector) return
        if (!detector.detect) return

        detector.detect(video, (err: string, results: IDetectResult[]) => {
          if (err) {
            console.error(err);
          }
          console.log(results);
          // setObjects(objects)
        })
      }

      timer = setInterval(() => {
        detect(video, detector)
      }, 1000 /30)
    }

    buildDetector()

    return () => clearInterval(timer)
  }, [video])

  return <>{props.children}</>;
};
