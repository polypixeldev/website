import nodemailer from 'nodemailer';

import type { APIContext } from 'astro';

export async function post(context: APIContext) {
	const transporter = nodemailer.createTransport(import.meta.env.EMAIL_URL);
	const params = new URLSearchParams(await context.request.text());

	return transporter.sendMail({
		from: import.meta.env.EMAIL_FROM,
		to: import.meta.env.PUBLIC_EMAIL_TO,
		subject: `Message from ${params.get('name')} (${params.get('email')})`,
		text: params.get('message') as string
	})
	.then(() => {
		return Response.redirect(`${import.meta.env.APP_URL}/contactSuccess`, 303);
	})
	.catch(() => {
		return Response.redirect(`${import.meta.env.APP_URL}/contactError`, 303);
	});
}