import { ClosingButton } from "../closingButton";
import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import otherImageUrl from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./steps/feedbackTypeStep";
import { FeedbackContentStep } from "./steps/feedbackContentStep";
import { FeedbackSuccessStep } from "./steps/feedbackSuccessStep";

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

export function WidgetForm() {
	const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
	const [feedbackSent, setFeedbackSent] = useState(false);

	function handleResetFeedback() {
		setFeedbackType(null);
		setFeedbackSent(false);
	}

	return (
		<div className="bg-surface-primary p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto ">
			{!feedbackType ? (
				<FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
			) : !feedbackSent ? (
				<FeedbackContentStep
					feedbackType={feedbackType}
					resetFeedback={handleResetFeedback}
					onFeedBackSent={setFeedbackSent}
				/>
			) : (
				<FeedbackSuccessStep resetFeedback={handleResetFeedback} />
			)}
			<footer>
				<span className="text-xs text-text-secondary">Feito com ♥ </span>
			</footer>
		</div>
	);
}
