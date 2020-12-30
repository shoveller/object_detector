import { DetectedObject } from "@tensorflow-models/coco-ssd";

export const draw = (width: number, height: number, ctx: CanvasRenderingContext2D, video: HTMLVideoElement, objects?: DetectedObject[]) => {
	if (!objects?.length) return

	// Clear part of the canvas
	ctx.fillStyle = "#000000"
	ctx.fillRect(0,0, width, height);

	ctx.drawImage(video, 0, 0, width, height);

	for (let i = 0; i < objects.length; i += 1) {
		ctx.font = "16px Arial";
		ctx.fillStyle = "green";
		const [x, y, width, height] = objects[i].bbox
		ctx.fillText(`${objects[i].class} ${(objects[i].score * 100).toFixed(0)}%`, x + 4, y + 16);

		ctx.beginPath();
		ctx.rect(x, y, width, height);
		ctx.strokeStyle = "green";
		ctx.stroke();
		ctx.closePath();
	}
}
