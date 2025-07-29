// 'use client';
// import { useState } from 'react';


// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     gender: '',
//     year: '1',
//     profile: null,
//   });
//   const [loading, setLoading] = useState(false);
//   const [preview, setPreview] = useState(null);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'profile') {
//       const file = files[0];
//       setFormData({ ...formData, profile: file });
//       if (file) {
//         setPreview(URL.createObjectURL(file));
//       } else {
//         setPreview(null);
//       }
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const data = new FormData();
//     Object.entries(formData).forEach(([key, value]) => data.append(key, value));

//     try {
//       const res = await fetch('/api/register', {
//         method: 'POST',
//         body: data,
//       });

//       if (res.ok) {
//         alert('✅ Registered successfully!');
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           gender: '',
//           year: '1',
//           profile: null,
//         });
//         setPreview(null);
//       } else {
//         alert('❌ Registration failed. Please try again.');
//       }
//     } catch (error) {
//       alert('❌ An error occurred. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-xl space-y-6"
//       noValidate
//     >
//       <h2 className="text-2xl font-semibold text-center mb-4">Register Form</h2>

//       <div>
//         <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
//           Full Name
//         </label>
//         <input
//           id="name"
//           name="name"
//           type="text"
//           placeholder="Your full name"
//           required
//           onChange={handleChange}
//           value={formData.name}
//           className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       <div>
//         <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
//           Email Address
//         </label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           placeholder="example@email.com"
//           required
//           onChange={handleChange}
//           value={formData.email}
//           className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       <div>
//         <label htmlFor="phone" className="block mb-1 font-medium text-gray-700">
//           Phone Number
//         </label>
//         <input
//           id="phone"
//           name="phone"
//           type="tel"
//           placeholder="+1 234 567 8900"
//           required
//           onChange={handleChange}
//           value={formData.phone}
//           className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <label htmlFor="gender" className="block mb-1 font-medium text-gray-700">
//             Gender
//           </label>
//           <select
//             id="gender"
//             name="gender"
//             required
//             onChange={handleChange}
//             value={formData.gender}
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//         </div>

//         <div>
//           <label htmlFor="year" className="block mb-1 font-medium text-gray-700">
//             Academic Year
//           </label>
//           <select
//             id="year"
//             name="year"
//             required
//             onChange={handleChange}
//             value={formData.year}
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="1">Year 1</option>
//             <option value="2">Year 2</option>
//             <option value="3">Year 3</option>
//             <option value="4">Year 4</option>
//           </select>
//         </div>
//       </div>

//       <div>
//         <label htmlFor="profile" className="block mb-1 font-medium text-gray-700">
//           Profile Picture
//         </label>
//         <input
//           id="profile"
//           type="file"
//           name="profile"
//           accept="image/*"
//           required
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         {preview && (
//           <img
//             src={preview}
//             alt="Profile Preview"
//             className="mt-3 w-32 h-32 object-cover rounded-full border-2 border-blue-500"
//           />
//         )}
//       </div>

//       <button
//         type="submit"
//         disabled={loading}
//         className={`w-full py-3 rounded-md text-white font-semibold transition-colors ${
//           loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
//         }`}
//       >
//         {loading ? 'Registering...' : 'Register'}
//       </button>
//     </form>
//   );
// };

// export default RegisterForm;
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    year: '1',
    profile: null,
  });
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profile') {
      const file = files[0];
      setFormData({ ...formData, profile: file });
      setPreview(file ? URL.createObjectURL(file) : null);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        body: data,
      });

      if (res.ok) {
        // alert('✅ Registered successfully!');
        router.push('/successful');
        setFormData({
          name: '',
          email: '',
          phone: '',
          gender: '',
          year: '1',
          profile: null,
        });
        setPreview(null);
      } else {
        alert('❌ Registration failed. Please try again.');
      }
    } catch (error) {
      // alert('❌ An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex items-center justify-center px-6 py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl rounded-2xl p-8 space-y-6"
        noValidate
      >
        <h2 className="text-3xl font-bold text-center text-cyan-300">🎯 Registration Form</h2>

        <div>
          <label htmlFor="name" className="block mb-1 text-cyan-100 font-medium">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            onChange={handleChange}
            value={formData.name}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-cyan-100 font-medium">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="example@email.com"
            onChange={handleChange}
            value={formData.email}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-1 text-cyan-100 font-medium">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+855 12 345 678"
            onChange={handleChange}
            value={formData.phone}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="gender" className="block mb-1 text-cyan-100 font-medium">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              required
              onChange={handleChange}
              value={formData.gender}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div>
            <label htmlFor="year" className="block mb-1 text-cyan-100 font-medium">
              Academic Year
            </label>
            <select
              id="year"
              name="year"
              required
              onChange={handleChange}
              value={formData.year}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              <option value="1">Year 1</option>
              <option value="2">Year 2</option>
              <option value="3">Year 3</option>
              <option value="4">Year 4</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="profile" className="block mb-1 text-cyan-100 font-medium">
            Profile Picture
          </label>
          <input
            id="profile"
            type="file"
            name="profile"
            accept="image/*"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-cyan-300 file:text-black hover:file:bg-cyan-400 cursor-pointer"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-4 w-24 h-24 rounded-full border-2 border-cyan-300 object-cover"
            />
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg text-black font-bold transition-colors ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-cyan-300 hover:bg-cyan-400'
          }`}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
