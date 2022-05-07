"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const prismaFeedbacksRepositories_1 = require("./repositories/prisma/prismaFeedbacksRepositories");
const nodemailerMailService_1 = require("./services/nodemailer/nodemailerMailService");
const submitFeedbackUseCase_1 = require("./useCases/submitFeedbackUseCase");
exports.routes = express_1.default.Router();
exports.routes.post("/feedbacks", async (req, res) => {
    const { type, comment, screenshot } = req.body;
    const prismaFeedbacksRepository = new prismaFeedbacksRepositories_1.PrismaFeedbacksRepository();
    const nodemailerMailService = new nodemailerMailService_1.NodemailerMailService();
    const submitFeedbackUseCase = new submitFeedbackUseCase_1.SubmitFeedbackUseCase(prismaFeedbacksRepository, nodemailerMailService);
    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    });
    return res.status(201).send();
});
