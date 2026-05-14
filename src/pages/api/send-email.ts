import type { APIRoute } from 'astro';
import { Resend } from 'resend';


function escapeHtml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

export const POST: APIRoute = async ({ request }) => {
    try {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            return new Response(JSON.stringify({ error: 'RESEND_API_KEY non configurée' }), {
                status: 503, headers: { 'Content-Type': 'application/json' },
            });
        }
        const resend = new Resend(apiKey);
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: "Champs manquants" }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
            return new Response(JSON.stringify({ error: "Types invalides" }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        if (name.length > 100 || email.length > 254 || message.length > 5000) {
            return new Response(JSON.stringify({ error: "Champs trop longs" }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

        // Envoi de l'email via Resend
        const data = await resend.emails.send({
            from: 'Contact <onboarding@resend.dev>', // Modifiez avec votre domaine vérifié
            to: ['votre@email.com'], // Remplacez par votre email de réception
            subject: `Nouveau message de ${safeName} (Site Vitrine)`,
            html: `
                <h3>Nouveau message reçu depuis le site</h3>
                <p><strong>Nom :</strong> ${safeName}</p>
                <p><strong>Email :</strong> ${safeEmail}</p>
                <p><strong>Message :</strong></p>
                <p>${safeMessage}</p>
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
