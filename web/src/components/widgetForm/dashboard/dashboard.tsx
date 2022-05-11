import { ArrowLeft } from "phosphor-react";
import { useLayoutEffect, useState } from "react";
import { ClosingButton } from "../../closingButton";
import { FeedbackType, feedbackTypes } from "../widgetForm";
import { FeedbackSent } from "./feedbackSent";

interface feedbacksSentProps {
	id: string;
	type: FeedbackType;
	comment: string;
	screenshot?: string;
}

interface DashboardProps {
	resetFeedback: (value?: boolean) => void;
	onFeedbackTypeChange: (type: FeedbackType | null) => void;
	setComment: (value: string) => void;
	setScreenshot: (value: string | null) => void;
	onDashboard: (value: boolean) => void;
	onDashboardWindow: (value: boolean) => void;
}

export function Dashboard({
	resetFeedback,
	onFeedbackTypeChange,
	setComment,
	setScreenshot,
	onDashboard,
	onDashboardWindow,
}: DashboardProps) {
	const [feedbacksSent, setFeedbacksSent] = useState([]);
	useLayoutEffect(() => {
		onDashboard(true);
		setFeedbacksSent(JSON.parse(localStorage.getItem("feedbacks") || "[]"));
	}, []);
	function handleSelectingFeedback(
		key: FeedbackType,
		comment: string,
		screenshot: string | null = null
	) {
		setComment(comment);
		setScreenshot(screenshot);
		onFeedbackTypeChange(key);
		onDashboardWindow(false);
	}
	function handleExitDashboard() {
		onDashboard(false);
		resetFeedback(false);
	}

	return (
		<div className=" px-4">
			<header className="flex align-middle max-w-full items-center h-auto">
				<button
					onClick={() => {
						handleExitDashboard();
					}}
					title="Voltar"
					className="w-4 h-4 top-5 left-5 absolute text-text-secondary-100 hover:text-text-primary-100 dark:text-text-secondary-500 dark:hover:text-text-primary-500"
				>
					<ArrowLeft weight="bold" />
				</button>
				<ClosingButton />
				<span className="flex flex-1 text-xl text-text-primary align-middle justify-center leading-6 px-4">
					Feedback Enviados
				</span>
			</header>
			<div className="flex py-8 gap-2 w-full">
				{feedbacksSent.length > 0 ? (
					feedbacksSent.map(({ id, type, comment, screenshot }) => {
						const feedbackType = feedbackTypes[type as FeedbackType];
						return (
							<button
								key={id}
								className="bg-surface-secondary-100 dark:bg-surface-secondary-500 rounded-lg w-52 py-5 px-2 min-w-fit flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none  "
								type="button"
								onClick={() =>
									handleSelectingFeedback(
										type as FeedbackType,
										comment,
										screenshot
									)
								}
							>
								<FeedbackSent
									feedbackType={feedbackType}
									comment={comment}
									screenshot={screenshot}
								/>
							</button>
						);
					})
				) : (
					<span className="text-text-secondary-100 dark:text-text-secondary-500 text-2xl align-middle text-center p-10 py-20">
						Você não enviou nenhum feedback ainda.
					</span>
				)}
			</div>
		</div>
	);
}
