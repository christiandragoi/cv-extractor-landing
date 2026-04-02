import { redirect } from 'next/navigation';

export default function SignupPage() {
  // Directly redirect to the Streamlit Dashboard where the real secure authentication lives
  redirect('https://app.cvextractor.app');
}
