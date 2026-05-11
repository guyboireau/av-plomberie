import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// Configurez votre clé API Resend dans .env
const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789');

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: "Champs manquants" }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Envoi de l'email via Resend
        const data = await resend.emails.send({
            from: 'Contact <onboarding@resend.dev>', // Modifiez avec votre domaine vérifié
            to: ['votre@email.com'], // Remplacez par votre email de réception
            subject: `Nouveau message de ${name} (Site Vitrine)`,
            html: `
                <h3>Nouveau message reçu depuis le site</h3>
                <p><strong>Nom :</strong> ${name}</p>
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Message :</strong></p>
                <p>${message}</p>
            `
        });

        return new Response(JSON.stringify({ success: true, data }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Erreur serveur" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
