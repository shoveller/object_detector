import { IDetectResult } from './objectDetector';

export const draw = (width: number, height: number, ctx: CanvasRenderingContext2D, video: HTMLVideoElement, objects?: IDetectResult[]) => {
	if (!objects?.length) return

	// Clear part of the canvas
	ctx.fillStyle = "#000000"
	ctx.fillRect(0,0, width, height);

	ctx.drawImage(video, 0, 0, width, height);

	for (let i = 0; i < objects.length; i += 1) {
		ctx.font = "16px Arial";
		ctx.fillStyle = "green";
		ctx.fillText(`${objects[i].label} ${(objects[i].confidence * 100).toFixed(0)}%`, objects[i].x + 4, objects[i].y + 16);

		ctx.beginPath();
		ctx.rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
		ctx.strokeStyle = "green";
		ctx.stroke();
		ctx.closePath();
	}
}
