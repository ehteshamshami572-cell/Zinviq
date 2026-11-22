'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData } from '@/lib/validations/contact-schema';
import { useApiMutation } from './use-api';
import { useAppDispatch } from '@/store/hooks';
import { addToast } from '@/store/slices/ui-slice';

interface ApiResponse {
  success: boolean;
  message: string;
  inquiryId?: string;
}

export function useContactForm() {
  const dispatch = useAppDispatch();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      websiteUrl: '',
      serviceRequired: 'shopify-development',
      monthlyBudget: '10K_TO_25K',
      currentStage: 'SCALING_EXISTING_BRAND',
      message: '',
    },
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
        form.reset();
        dispatch(
          addToast({
            type: 'success',
            title: 'Growth Proposal Request Received',
            description: data.message,
          })
        );
      },
      onError: (errMsg) => {
        dispatch(
          addToast({
            type: 'error',
            title: 'Submission Issue',
            description: errMsg,
          })
        );
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
