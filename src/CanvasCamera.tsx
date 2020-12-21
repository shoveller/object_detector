import React, {
	createContext,
	createRef,
	Dispatch,
	ReactElement,
	RefObject,
	SetStateAction,
	useEffect,
	useState,
} from 'react'

interface ICanvasCameraProps {
	width: number
	height: number
	onReady?: () => Promise<any>
	onDraw?: (
		video: HTMLVideoElement,
		ctx: CanvasRenderingContext2D,
		width: number,
		height: number,
		modelRunner?: any,
	) => Promise<any>
	children?: ReactElement
}

export interface ICanvasCameraContext {
	ctx?: CanvasRenderingContext2D
	setCtx?: Dispatch<SetStateAction<CanvasRenderingContext2D | undefined>>
	video?: HTMLVideoElement
	setVideo?: Dispatch<SetStateAction<HTMLVideoElement | undefined>>
}

interface ICanvasCameraContextProvider {
	ctx?: CanvasRenderingContext2D
	video?: HTMLVideoElement
	children?: ReactElement
}

const get2Dctx = (ref: RefObject<HTMLCanvasElement>) => {
	const canvas = ref.current
	if (!canvas) {
		return
	}
	const ctx = canvas.getContext('2d')
	if (ctx) {
		return ctx
	}
	return
}

const flameRate = 1000 / 30

const drawFrame = (
	video: HTMLVideoElement,
	ctx: CanvasRenderingContext2D,
	width: number,
	height: number,
  modelRunner?: any,
  onDraw?: (
    video: HTMLVideoElement,
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    modelRunner?: any,
  ) => Promise<any>,
) => {
	if (video.paused) return
	if (video.ended) return

	ctx.drawImage(video, 0, 0, width, height)
	if (onDraw) {
		onDraw(video, ctx, width, height, modelRunner)
	}
	setTimeout(() => drawFrame(video, ctx, width, height, modelRunner, onDraw), flameRate)
}

const createVideo = () => document.createElement('video')

const getCameraStream = async () =>
	await navigator.mediaDevices.getUserMedia({ video: true })

const setup = async (
	ctx: CanvasRenderingContext2D,
	video: HTMLVideoElement,
	width: number,
	height: number,
	onReady?: () => Promise<any>,
	onDraw?: (
		video: HTMLVideoElement,
		ctx: CanvasRenderingContext2D,
		width: number,
		height: number,
		modelRunner?: any,
	) => Promise<any>,
) => {
  let modelRunner: any
  if (onReady) {
    modelRunner = await onReady()
  }
	video.srcObject = await getCameraStream()
	video.addEventListener('loadeddata', function () {
		video.play()
		setTimeout(() => drawFrame(video, ctx, width, height, modelRunner, onDraw), flameRate)
	})
}

export const CanvasCameraContext = createContext<ICanvasCameraContext>({
	ctx: undefined,
	setCtx: undefined,
	video: undefined,
	setVideo: undefined,
})

const CanvasCameraContextProvider = (props: ICanvasCameraContextProvider) => {
	const [ctx, setCtx] = useState<CanvasRenderingContext2D | undefined>(
		props.ctx,
	)
	const [video, setVideo] = useState<HTMLVideoElement | undefined>(props.video)

	return (
		<CanvasCameraContext.Provider value={{ ctx, setCtx, video, setVideo }}>
			{props.children}
		</CanvasCameraContext.Provider>
	)
}

export const CanvasCamera = (props: ICanvasCameraProps) => {
	const ref = createRef<HTMLCanvasElement>()
	const video = createVideo()
	const { width, height, children, onReady, onDraw } = props
	useEffect(() => {
		const ctx = get2Dctx(ref)
		if (!ctx) {
			return
		}

		setup(ctx, video, width, height, onReady, onDraw)
	}, [ref, video, width, height, onDraw])
	const ctx = get2Dctx(ref)

	return (
		<canvas ref={ref} width={width} height={height}>
			<CanvasCameraContextProvider ctx={ctx} video={video}>
				{children}
			</CanvasCameraContextProvider>
		</canvas>
	)
}
