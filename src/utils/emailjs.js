const destinationEmail = 'prajjwalmishra227@gmail.com';

function getEmailConfig() {
  return {
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  };
}

export async function sendEmail(templateParams) {
  const config = getEmailConfig();

  if (!config.publicKey || !config.serviceId || !config.templateId) {
    throw new Error('EmailJS is not configured. Please add the required environment variables.');
  }

  const { default: emailjs } = await import('@emailjs/browser');

  return emailjs.send(
    config.serviceId,
    config.templateId,
    {
      ...templateParams,
      to_email: destinationEmail,
      submitted_at: new Date().toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'Asia/Kolkata',
      }),
    },
    {
      publicKey: config.publicKey,
      blockHeadless: true,
      limitRate: {
        id: 'maa-durga-public-forms',
        throttle: 10000,
      },
    },
  );
}
