import { FeedbackTypes } from "../widgetForm";

interface FeedbackSentProps {
	feedbackType: FeedbackTypes;
	comment: string;
	screenshot?: string;
}

export function FeedbackSent({
	feedbackType,
	comment,
	screenshot,
}: FeedbackSentProps) {
	return (
		<>
			<header className="text-xl text-text-primary-100 dark:text-text-primary-500 leading-6 px-4 flex gap-1 items-center">
				<img src={feedbackType.image.source} alt={feedbackType.image.alt} />
				<span>{feedbackType.title}</span>
			</header>
			<span className=" w-full max-w-fit min-w-full mx-4 px-4 min-h-[112px] h-full text-sm text-left placeholder-text-secondary-100 dark:text-text-primary-500 dark:placeholder-text-secondary-500 text-text-primary-100 border-[1px] rounded-md border-stroke-100 dark:border-stroke-500 bg-transparent focus:border-brand-500 focus:outline-none focus:ring-brand-500 focus:ring-1">
				{comment}
			</span>
			{screenshot && (
				<img
					src={screenshot}
					alt="Foto da tela do feedback"
					className="h-32 w-32"
				/>
			)}
		</>
	);
}
