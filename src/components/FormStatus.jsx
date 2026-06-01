import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function FormStatus({ status, successMessage }) {
  if (status.type === 'idle') return null;

  const isSuccess = status.type === 'success';
  const Icon = isSuccess ? CheckCircle2 : AlertCircle;

  return (
    <div
      className={`flex gap-3 rounded-sm border px-4 py-3 text-sm leading-6 ${
        isSuccess
          ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-100'
          : 'border-red-400/30 bg-red-400/10 text-red-100'
      }`}
      role={isSuccess ? 'status' : 'alert'}
      aria-live="polite"
    >
      <Icon className="mt-0.5 h-5 w-5 shrink-0" />
      <p>{isSuccess ? successMessage : status.message}</p>
    </div>
  );
}
