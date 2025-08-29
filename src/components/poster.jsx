import React from 'react';

const Poster = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex flex-col items-center px-8 py-12 font-sans">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-3xl w-full text-center shadow-xl mb-8">
        <h1 className="text-3xl font-bold mb-2">🚀 Creative Web Design Challenge 2025</h1>
        <div className="text-cyan-300 font-semibold mb-4">Design. Code. Inspire.</div>

        <div className="text-left space-y-2">
          <p><strong>📅 Duration:</strong> 3 Days</p>
          <p><strong>📍 Venue:</strong> National University of Management</p>
          <p><strong>💡 Theme:</strong> Design a real-world website using HTML, CSS, and JavaScript</p>
          <p><strong>👥 Team:</strong> 2–3 members</p>
          <p><strong>🎁 Awards:</strong> Best Design, Innovation & UX!</p>
        </div>

        <div className="mt-8">
          <a
            href="/formRegister"
            className="bg-cyan-300 text-black font-bold px-6 py-3 rounded-lg inline-block"
          >
            Register Now
          </a>
        </div>

        <div className="mt-8 text-sm text-gray-300">
          Organized by: Faculty of IT <br />
          Contact: chhayphang@num.edu.kh
        </div>
      </div>
    </div>
  );
};

export default Poster;
