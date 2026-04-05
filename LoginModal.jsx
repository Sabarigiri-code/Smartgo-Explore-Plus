import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';

const LoginModal = ({ isOpen, onClose }) => {
  const [identifier, setIdentifier] = useState('');
  const [fullName, setFullName] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverOtp, setServerOtp] = useState(null);

  const SERVICE_ID = "service_84pn4ro";
  const TEMPLATE_ID = "template_k474i5j";
  const PUBLIC_KEY = "_OJV2s22-Zr3kVGxD";

  const isEmail = (input) => /\S+@\S+\.\S+/.test(input);

  const handleReceiveOTP = async () => {
    if (!fullName || !isEmail(identifier)) {
      alert("Please enter a valid Full Name and Email Address! 📧");
      return;
    }

    const generatedOtp = Math.floor(100000 + Math.random() * 900000);
    setServerOtp(generatedOtp);
    setLoading(true);

    try {
      if (isEmail(identifier)) {
        // --- EMAIL LOGIC (EmailJS) ---
        const templateParams = {
          fullName: fullName,
          to_email: identifier,
          otp_code: generatedOtp,
          from_name: "Smartgo Explore Plus"
        };
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        alert("Success! OTP sent to your Email! ✅");
      }

      setOtpSent(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP: " + error.message + " ❌");
    } finally {
      setLoading(false);
    }
  };

  // 2. VERIFY OTP FUNCTION
  const handleVerifyOTP = () => {
    if (otp === serverOtp.toString()) {
      alert("Login Successful! Welcome to Smartgo Explore Plus! 🎉");
      onClose();
    } else {
      alert("Invalid OTP! Please check and try again. ⚠️");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4 font-sans">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row max-w-4xl w-full overflow-hidden"
      >
        {/* Left Sidebar */}
        <div className="md:w-1/3 bg-gradient-to-b from-blue-700 to-blue-900 p-8 text-white hidden md:block">
          <h2 className="text-3xl font-bold mb-4 italic">Smartgo Explore Plus</h2>
          <p className="opacity-80 mb-8 text-sm leading-relaxed">Access your Orders, Wishlist and Personalized Recommendations</p>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold bg-white/10 p-3 rounded-lg border border-white/20">🛡️ 100% SAFE & SECURE</div>
            <div className="flex items-center gap-2 text-xs font-semibold bg-white/10 p-3 rounded-lg border border-white/20">🚚 FAST & FREE DELIVERY</div>
          </div>
        </div>

        {/* Right Form */}
        <div className="flex-1 p-10 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-black bg-gray-100 hover:bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full transition-all"
          >✕</button>

          <div className="space-y-6 mt-4">
            <h3 className="text-2xl font-bold text-gray-800 tracking-tight text-center">Login / Signup</h3>

            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Full Name</label>
              <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full border-b border-gray-200 py-2 outline-none focus:border-blue-600 transition-colors bg-transparent" placeholder="Enter Full Name" />
            </div>

            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Email Address</label>
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full border-b border-gray-200 py-2 outline-none focus:border-blue-600 transition-colors bg-transparent"
                placeholder="Enter Email Address"
              />
            </div>

            <AnimatePresence>
              {otpSent && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-inner">
                  <p className="text-[10px] text-blue-600 font-bold mb-3 text-center uppercase tracking-widest">
                    Verification code sent to email
                  </p>
                  <input type="text" maxLength="6" value={otp} onChange={(e) => setOtp(e.target.value)} className="w-full text-center text-3xl font-black tracking-[8px] border-2 border-dashed border-blue-200 p-3 rounded-lg bg-white outline-none focus:border-blue-400 text-blue-900" placeholder="000000" />
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={otpSent ? handleVerifyOTP : handleReceiveOTP}
              disabled={loading}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black py-4 rounded-xl shadow-lg transform active:scale-95 transition-all uppercase tracking-widest text-sm disabled:bg-gray-300"
            >
              {loading ? "Sending..." : otpSent ? "Verify OTP Now" : "Continue"}
            </button>
          </div>

          <p className="text-center text-[10px] text-gray-400 mt-10 leading-relaxed px-4">
            By continuing, you agree to Smartgo's <span className="text-blue-600 cursor-pointer font-bold underline">Terms</span> and <span className="text-blue-600 cursor-pointer font-bold underline">Privacy Policy</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginModal;