'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData } from '@/lib/validations/contact-schema';
import { useApiMutation } from './use-api';
import { useToast } from '@/components/ui/toast';

interface ApiResponse {
  success: boolean;
  message: string;
  inquiryId?: string;
}

function getDefaultValues(): ContactFormData {
  return {
    name: '',
    email: '',
    websiteUrl: '',
    serviceRequired: 'shopify-development',
    monthlyBudget: '10K_TO_25K',
    currentStage: 'SCALING_EXISTING_BRAND',
    message: '',
    company: '',
    formLoadedAt: Date.now(),
  };
}

export function useContactForm() {
  const { addToast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: getDefaultValues(),
    mode: 'onTouched',
  });

  const { mutate, isLoading, isSuccess, isError, error, reset } = useApiMutation<
    ApiResponse,
    ContactFormData
  >(
    async (formData, signal) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal,
      });

      const json = await response.json();
      if (!response.ok) {
        throw new Error(json.message || 'Submission failed. Please try again.');
      }
      return json;
    },
    {
      onSuccess: (data) => {
        form.reset(getDefaultValues());
        addToast({
          type: 'success',
          title: 'Audit Request Received',
          description: data.message,
        });
      },
      onError: (errMsg) => {
        addToast({
          type: 'error',
          title: 'Submission Issue',
          description: errMsg,
        });
      },
    }
  );

  const onSubmit = form.handleSubmit(async (data) => {
    await mutate(data);
  });

  return {
    form,
    onSubmit,
    isLoading,
    isSuccess,
    isError,
    error,
    resetSubmission: reset,
  };
}
