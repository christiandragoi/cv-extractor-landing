import { redirect } from 'next/navigation';

export default function SignupPage() {
  // Directly redirect to the Streamlit Dashboard where the real secure authentication lives
  redirect('https://cv-extractor-app-app-hmenbqgjvppt3dcyzhnun.streamlit.app');
}
