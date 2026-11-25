import { ContactFormData } from '@/lib/validations/contact-schema';

interface EmailResult {
  success: boolean;
  id?: string;
}

export async function sendNotificationEmail(data: ContactFormData): Promise<EmailResult> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const receiver = process.env.CONTACT_RECEIVER_EMAIL || 'growth@zinviq.com';
  const from = process.env.EMAIL_FROM || 'Zinviq Growth Leads <leads@zinviq.com>';

  if (!resendApiKey) {
    // Never report fake success in production: that silently loses leads.
    if (process.env.NODE_ENV === 'production') {
      console.error('[MAIL_SERVICE] RESEND_API_KEY is not configured in production.');
      return { success: false };
    }

    console.log('----------------------------------------------------');
    console.log('[ZINVIQ LEAD CAPTURED - LOCAL DEVELOPMENT MODE]');
    console.log(JSON.stringify(data, null, 2));
    console.log('----------------------------------------------------');
    return { success: true, id: 'dev-lead-mock' };
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from,
        to: [receiver],
        reply_to: data.email,
        subject: `[New Lead - ${data.serviceRequired.toUpperCase()}] ${data.name} (${data.websiteUrl || 'No URL'})`,
        text: `
Client: ${data.name}
Email: ${data.email}
Website: ${data.websiteUrl || 'N/A'}
Service Requested: ${data.serviceRequired}
Monthly Budget: ${data.monthlyBudget}
Business Stage: ${data.currentStage}

Project Overview & Growth Goals:
${data.message}
        `.trim(),
      }),
    });

    if (!response.ok) {
      console.error('[MAIL_SERVICE_ERROR] Resend request failed with status', response.status);
      return { success: false };
    }

    const result = (await response.json()) as { id?: string };
    return { success: true, id: result.id };
  } catch (error) {
    console.error('[MAIL_SERVICE_EXCEPTION]', error);
    return { success: false };
  }
}
