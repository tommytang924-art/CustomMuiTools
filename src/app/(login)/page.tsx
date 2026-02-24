import { redirect } from 'next/navigation';

export default async function LocalePage() {
  // Redirect to home page for the locale
  redirect(`/home`);
}