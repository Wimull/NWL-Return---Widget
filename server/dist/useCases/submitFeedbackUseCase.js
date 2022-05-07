"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitFeedbackUseCase = void 0;
class SubmitFeedbackUseCase {
    constructor(feedbacksRepository, mailService) {
        this.feedbacksRepository = feedbacksRepository;
        this.mailService = mailService;
    }
    async execute(request) {
        const { type, comment, screenshot } = request;
        if (!type)
            throw new Error("Type is required.");
        if (!comment)
            throw new Error("Comment is required.");
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
exports.SubmitFeedbackUseCase = SubmitFeedbackUseCase;
