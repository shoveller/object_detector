import '@tensorflow/tfjs-backend-cpu'
import '@tensorflow/tfjs-backend-webgl'
import { ObjectDetection, load } from '@tensorflow-models/coco-ssd'

export const detect = async (detector: ObjectDetection, video: HTMLVideoElement) => {
  try {
    return detector.detect(video)
  } catch (e) {
    throw e
  }
}

export const getObjectDetector = async (onReady?: Function) => await load()
