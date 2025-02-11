'use client';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
            Fedezze fel a 
              <span className="block text-[#007AFF] mt-2">természet </span>
            nyugalmát
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
            Pihenjen és töltődjön fel egy lenyűgöző környezetben, ahol a kényelem és a nyugalom találkozik.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <button className="bg-[#007AFF] text-white px-8 py-4 rounded-xl hover:bg-[#007AFF]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#007AFF]/20">
                Foglaljon most
              </button>
            </div>
          </motion.div>

          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative">
              
              <div className="absolute -inset-4 bg-gradient-to-r from-[#007AFF]/20 to-purple-500/20 rounded-[2rem] blur-2xl" />
              
              
              <div className="relative">
                <div className="bg-white p-4 rounded-[2rem] shadow-xl">
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <img 
                      src="/rab-bg.jpg" 
                      alt="Luxury Villa" 
                      className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#007AFF] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold">Kiváló választás</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}