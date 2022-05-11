import { ClosingButton } from "../closingButton";
import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import otherImageUrl from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./steps/feedbackTypeStep";
import { FeedbackContentStep } from "./steps/feedbackContentStep";
import { FeedbackSuccessStep } from "./steps/feedbackSuccessStep";
import { Dashboard } from "./dashboard";

export const feedbackTypes = {
	BUG: {
		title: "Problema",
		image: {
			source: bugImageUrl,
			alt: "Imagem de inseto",
		},
		placeholder:
			"Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...",
	},
	IDEA: {
		title: "Ideia",
		image: {
			source: ideaImageUrl,
			alt: "Imagem de uma lâmpada",
		},
		placeholder:
			"Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!",
	},
	OTHER: {
		title: "Outro",
		image: {
			source: otherImageUrl,
			alt: "Imagem de uma nuvem de pensamento",
		},
		placeholder: "Queremos te ouvir. O que você gostaria de nos dizer?",
	},
};
export type FeedbackType = keyof typeof feedbackTypes;
export type FeedbackTypes = typeof feedbackTypes.BUG;

export function WidgetForm() {
	const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
	const [feedbackSent, setFeedbackSent] = useState(false);
	const [isDashboardWindowOpen, setIsDashboardWindowOpen] = useState(false);
	const [isOnDashboard, setIsOnDashboard] = useState(false);
	const [comment, setComment] = useState("");
	const [screenshot, setScreenshot] = useState<string | null>(null);

	function handleResetFeedback(bool = isOnDashboard) {
		setScreenshot(null);
		setComment("");
		setIsDashboardWindowOpen(bool);
		setFeedbackType(null);
		setFeedbackSent(false);
	}

	return (
		<div className="bg-surface-primary-100 dark:bg-surface-primary-500 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto ">
			{isDashboardWindowOpen ? (
				<Dashboard
					resetFeedback={handleResetFeedback}
					onFeedbackTypeChange={setFeedbackType}
					setComment={setComment}
					setScreenshot={setScreenshot}
					onDashboard={setIsOnDashboard}
					onDashboardWindow={setIsDashboardWindowOpen}
				/>
			) : !feedbackType ? (
				<div className="flex flex-col flex-wrap align-middle justify-center ">
					<FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
					<button
						className={
							"p-2 px-4 m-2 max-w-full bg-brand-500 text-text-primary-500 rounded-[4px] border-transparent flex-1 flex justify-center items-center text-lg hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface-primary focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
						}
						onClick={() => setIsDashboardWindowOpen(true)}
					>
						Feedbacks Enviados
					</button>
				</div>
			) : !feedbackSent ? (
				<FeedbackContentStep
					feedbackType={feedbackType}
					resetFeedback={handleResetFeedback}
					onFeedBackSent={setFeedbackSent}
					comment={comment}
					setComment={setComment}
					screenshot={screenshot}
					setScreenshot={setScreenshot}
				/>
			) : (
				<FeedbackSuccessStep resetFeedback={handleResetFeedback} />
			)}
			<footer>
				<span className="text-xs text-text-secondary-100 dark:text-text-secondary-500">
					Feito com ♥
				</span>
			</footer>
		</div>
	);
}
