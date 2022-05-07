import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { ClosingButton } from "../../closingButton";
import { ScreenshotButton } from "../screenshotButton";
import { feedbackTypes, FeedbackType } from "../widgetForm";
import { api } from "../../../lib/api";
import { Loading } from "../../loading/loading";

interface FeedbackContentStepType {
	feedbackType: FeedbackType;
	resetFeedback: () => void;
	onFeedBackSent: (type: boolean) => void;
}
export function FeedbackContentStep({
	feedbackType,
	resetFeedback,
	onFeedBackSent,
}: FeedbackContentStepType) {
	const [screenshot, setScreenshot] = useState<string | null>(null);
	const [comment, setComment] = useState("");
	const [isSendingFeedback, setIsSendingFeedback] = useState(false);

	async function handleSubmitFeedback(e: FormEvent) {
		e.preventDefault();
		setIsSendingFeedback(true);
		await api.post("/feedbacks", {
			type: feedbackType,
			comment,
			screenshot,
		});
		setIsSendingFeedback(false);
		onFeedBackSent(true);
	}

	const selectedFeedbackType = feedbackTypes[feedbackType];

	return (
		<>
			<header className="h-auto">
				<button
					onClick={resetFeedback}
					title="Voltar"
					className="w-4 h-4 top-5 left-5 absolute text-text-secondary hover:text-text-primary"
				>
					<ArrowLeft weight="bold" />
				</button>
				<ClosingButton />
				<span className="text-xl text-text-primary leading-6 px-4 flex gap-1 items-center">
					<img
						src={selectedFeedbackType.image.source}
						alt={selectedFeedbackType.image.alt}
						className="w-6 h-6"
					/>
					<span>{selectedFeedbackType.title}</span>
				</span>
			</header>
			<form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
				<textarea
					className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-text-secondary text-text-primary border-[1px] rounded-md border-stroke bg-transparent focus:border-brand-500 focus:outline-none focus:ring-brand-500 focus:ring-1 resize-none scrollbar-thumb-stroke scrollbar-track-transparent scrollbar-thin"
					placeholder={selectedFeedbackType.placeholder}
					onChange={(event) => setComment(event.target.value)}
				/>

				<footer className="flex gap-2 mt-2">
					<ScreenshotButton
						onScreenshotTook={setScreenshot}
						screenshot={screenshot}
					/>
					<button
						type="submit"
						className="p-2 bg-brand-500 rounded-[4px] border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface-primary focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
						disabled={comment.length === 0 || isSendingFeedback}
					>
						{isSendingFeedback ? <Loading /> : "Enviar feedback"}
					</button>
				</footer>
			</form>
		</>
	);
}
