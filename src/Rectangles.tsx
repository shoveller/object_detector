// import React, { createRef, useContext, useEffect } from 'react'
// import { IODContext, ODContext, IObject } from "./ObjectDetector";
//
// const draw = (canvas: HTMLCanvasElement, video: HTMLVideoElement, objects: IObject[] | undefined) => {
// 	if (!objects?.length) return
//
// 	const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
//
// 	// Clear part of the canvas
// 	ctx.fillStyle = "#000000"
// 	ctx.fillRect(0,0, 500, 300);
//
// 	ctx.drawImage(video, 0, 0);
//
// 	for (let i = 0; i < objects.length; i += 1) {
// 		ctx.font = "16px Arial";
// 		ctx.fillStyle = "green";
// 		ctx.fillText(objects[i].label, objects[i].x + 4, objects[i].y + 16);
//
// 		ctx.beginPath();
// 		ctx.rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
// 		ctx.strokeStyle = "green";
// 		ctx.stroke();
// 		ctx.closePath();
// 	}
// }
//
// export const Rectangles = () => {
// 	const ref = createRef<HTMLCanvasElement>()
// 	const context = useContext(ODContext)
// 	const { video, setCanvas, viewport, objects } = context as IODContext
//
// 	useEffect(() => {
// 		if (!ref) return
// 		if (!video) return
//
// 		// @ts-ignore
// 		const canvas = ref.current as HTMLCanvasElement
// 		setCanvas(canvas)
// 		draw(canvas, video, objects)
// 	}, [ref, setCanvas, video, objects?.length])
//
//   return <canvas width={viewport.width} height={viewport.height} ref={ref} />;
// };

import React from 'react'

export const Rectangles = () => {
  return <></>;
};

