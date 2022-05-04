import { MailService, SendMailData } from "../mailService";
import nodemailer from "nodemailer";
const transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "9617bb20ce5672",
		pass: "1a58d52f25ffcc",
	},
});
export class NodemailerMailService implements MailService {
	async sendMail({ subject, body }: SendMailData) {
		await transport.sendMail({
			from: "Equipe feedget <oi@feedget.com>",
			to: "Chefe Aninha <felipedonisilva@gmail.com>",
			subject,
			html: body,
		});
	}
}
