import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Full name must contain at least 2 characters' })
    .max(80, { message: 'Name cannot exceed 80 characters' }),
  email: z
    .string()
    .email({ message: 'Please provide a valid business email address' })
    .max(160, { message: 'Email cannot exceed 160 characters' }),
  websiteUrl: z
    .string()
    .url({ message: 'Please provide a valid website URL' })
    .max(200, { message: 'Website URL cannot exceed 200 characters' })
    .optional()
    .or(z.literal('')),
  serviceRequired: z.enum(
    [
      'shopify-development',
      'wordpress-development',
      'seo-ranking',
      'digital-marketing',
      'full-growth-stack',
    ],
    { error: 'Please select a core service' }
  ),
  monthlyBudget: z.enum(
    ['5K_TO_10K', '10K_TO_25K', '25K_TO_50K', 'ABOVE_50K'],
    { error: 'Please select an estimated budget tier' }
  ),
  currentStage: z.enum(
    [
      'SCALING_EXISTING_BRAND',
      'LAUNCHING_NEW_STORE',
      'MIGRATION_OR_REDESIGN',
      'NEED_MORE_TRAFFIC_SALES',
    ],
    { error: 'Please select your current business stage' }
  ),
  message: z
    .string()
    .min(10, { message: 'Please share a brief description of your goals (min 10 characters)' })
    .max(2500, { message: 'Message cannot exceed 2500 characters' }),
  company: z.string().max(100).optional(),
  formLoadedAt: z.number().int().positive(),
  captchaToken: z.string().max(4096).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
