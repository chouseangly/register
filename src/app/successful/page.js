// app/success/page.jsx
'use client';
import { useRouter } from 'next/navigation';

const SuccessPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full bg-white/5 border border-white/10 backdrop-blur-md shadow-xl rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-cyan-300 mb-4">🎉 Registration Successful!</h1>
        <p className="text-gray-200 mb-6">Thank you for registering. We look forward to seeing your creativity!</p>

        <button
          onClick={() => router.push('/')}
          className="bg-cyan-300 hover:bg-cyan-400 text-black font-bold py-2 px-6 rounded-lg"
        >
          ⬅ Back to Poster
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
