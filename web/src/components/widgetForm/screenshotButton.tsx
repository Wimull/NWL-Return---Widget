import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../loading/loading";

interface ScreenshotButtonType {
	onScreenshotTook: (screenshot: string | null) => void;
	screenshot: string | null;
}

export function ScreenshotButton({
	onScreenshotTook,
	screenshot,
}: ScreenshotButtonType) {
	const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);
	async function handleTakeScreenshot() {
		setIsTakingScreenshot(true);
		const canvas = await html2canvas(document.querySelector("html")!);
		const base64Image = canvas.toDataURL("image/png");

		onScreenshotTook(base64Image);
		setIsTakingScreenshot(false);
	}

	if (screenshot)
		return (
			<button
				type="button"
				className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-text-secondary-100 dark:text-text-secondary-500 dark:hover:text-text-primary-500 hover:text-text-primary-100 transition-colors"
				style={{
					backgroundImage: `url(${screenshot})`,
					backgroundPosition: "right bottom",
					backgroundSize: 180,
				}}
				onClick={() => onScreenshotTook(null)}
			>
				<Trash weight="fill" />
			</button>
		);

	return (
		<button
			type="button"
			className="p-2 bg-surface-secondary-100 dark:bg-surface-secondary-500 rounded-[4px] text-text-primary-100 dark:text-text-primary-500 hover:text-text-secondary-100 dark:hover:text-text-secondary-500 border-transparent hover:bg-surface-secondary-hover-100 dark:hover:bg-surface-secondary-hover-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface-primary-100 dark:focus:ring-offset-surface-primary-500 focus:ring-brand-500"
			onClick={handleTakeScreenshot}
		>
			{isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6 " />}
		</button>
	);
}
