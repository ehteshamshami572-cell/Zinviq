import { ContactFormData } from '@/lib/validations/contact-schema';

export async function sendNotificationEmail(data: ContactFormData): Promise<{ success: boolean; id?: string }> {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (resendApiKey) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'Zinviq Growth Leads <leads@zinviq.com>',
          to: [process.env.CONTACT_RECEIVER_EMAIL || 'growth@zinviq.com'],
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
        console.error('[MAIL_SERVICE_ERROR]', await response.text());
        return { success: false };
      }

      const result = await response.json();
      return { success: true, id: result.id };
    } catch (err) {
      console.error('[MAIL_SERVICE_EXCEPTION]', err);
      return { success: false };
    }
  }

  // Development fallback
  console.log('----------------------------------------------------');
  console.log('[ZINVIQ LEAD CAPTURED - LOCAL DEVELOPMENT MODE]');
  console.log(JSON.stringify(data, null, 2));
  console.log('----------------------------------------------------');
  return { success: true, id: 'dev-lead-mock' };
}
