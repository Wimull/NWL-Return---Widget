import { FeedbacksRepository } from "../repositories/feedbacksRepository";
import { MailService } from "../services/mailService";

interface SubmitFeedbackUseCaseRequest {
	type: string;
	comment: string;
	screenshot?: string;
}

export class SubmitFeedbackUseCase {
	constructor(
		private feedbacksRepository: FeedbacksRepository,
		private mailService: MailService
	) {}
	async execute(request: SubmitFeedbackUseCaseRequest) {
		const { type, comment, screenshot } = request;

		if (!type) throw new Error("Type is required.");
		if (!comment) throw new Error("Comment is required.");
		if (screenshot && !screenshot.startsWith("data:image/png;base64"))
			throw new Error("Invalid screenshot format.");

		await this.feedbacksRepository.create({
			type,
			comment,
			screenshot,
		});
		await this.mailService.sendMail({
			subject: "Novo feedback",
			body: [
				`<div styles="font-family: sans-serif; font-size: 16px; color: #111;" `,
				`<p>Tipo do feedback: ${type}</p>`,
				`<p>Comentário: ${comment}</p>`,
				!screenshot ? "" : `<img src="${screenshot}" alt="Captura de tela"> `,
				"</div>",
			].join(""),
		});
	}
}
