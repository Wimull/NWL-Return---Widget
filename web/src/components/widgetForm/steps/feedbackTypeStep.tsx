import { ClosingButton } from "../../closingButton";
import { feedbackTypes, FeedbackType } from "../widgetForm";
interface FeedbackTypeStepProps {
	onFeedbackTypeChange: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({
	onFeedbackTypeChange,
}: FeedbackTypeStepProps) {
	return (
		<>
			<header className="flex align-middle max-w-full items-center">
				<span className="w-full text-xl text-text-primary-100 dark:text-text-primary-500 leading-6 px-4 text-center ">
					Deixe seu Feedback
				</span>
				<ClosingButton />
			</header>
			<div className="flex py-8 gap-2 w-full">
				{Object.entries(feedbackTypes).map(([key, value]) => {
					return (
						<button
							className="bg-surface-secondary-100 dark:bg-surface-secondary-500 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none  "
							onClick={() => onFeedbackTypeChange(key as FeedbackType)}
							type="button"
							key={key}
						>
							<img src={value.image.source} alt={value.image.alt} />
							<span>{value.title}</span>
						</button>
					);
				})}
			</div>
		</>
	);
}
