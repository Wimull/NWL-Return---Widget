"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerMailService = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "9617bb20ce5672",
        pass: "1a58d52f25ffcc",
    },
});
class NodemailerMailService {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: "Equipe feedget <oi@feedget.com>",
            to: "Chefe Aninha <felipedonisilva@gmail.com>",
            subject,
            html: body,
        });
    }
}
exports.NodemailerMailService = NodemailerMailService;
