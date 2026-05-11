import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';

export default function ContactForm() {
    return(
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-12">
          {/* Contact Form */}
          <div 
          
            className="lg:col-span-7"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-900 dark:text-zinc-300 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name"
                    className="w-full px-6 py-3 mt-2 rounded-2xl bg-white dark:bg-[#0b1120] border border-zinc-200 dark:border-zinc-800 focus:border-amber-500 outline-none transition-all dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-900 dark:text-zinc-300 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="you@example.com"
                    className="w-full mt-2 px-6 py-3 rounded-2xl bg-white dark:bg-[#0b1120] border border-zinc-200 dark:border-zinc-800 focus:border-amber-500 outline-none transition-all dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-900 dark:text-zinc-300 ml-1">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="(555) 000-0000"
                    className="w-full mt-2 px-6 py-3 rounded-2xl bg-white dark:bg-[#0b1120] border border-zinc-200 dark:border-zinc-800 focus:border-amber-500 outline-none transition-all dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-900 dark:text-zinc-300 ml-1">Service</label>
                  <select className="w-full mt-2 px-6 py-4 rounded-2xl bg-white dark:bg-[#0b1120] border border-zinc-200 dark:border-zinc-800 focus:border-amber-500 outline-none transition-all text-zinc-900 dark:text-white appearance-none cursor-pointer">
                    <option value="">Select a service...</option>
                    <option value="residential">Residential Design</option>
                    <option value="commercial">Commercial Design</option>
                    <option value="hospitality">Hospitality Design</option>
                    <option value="renovation">Renovation Management</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-900 dark:text-zinc-300 ml-1">Message</label>
                <textarea 
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="w-full mt-2 px-6 py-4 rounded-3xl bg-white dark:bg-[#0b1120] border border-zinc-200 dark:border-zinc-800 focus:border-amber-500 outline-none transition-all dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 resize-none"
                />
              </div>

              <button className="px-10 py-5 bg-amber-700 hover:bg-amber-800 text-white rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-3 group shadow-xl shadow-amber-900/20 active:scale-95">
                Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-8">
              {[
                { icon: Phone, label: 'Phone', value: '(555) 284-9103' },
                { icon: Mail, label: 'Email', value: 'hello@atelierstudio.com' },
                { icon: MapPin, label: 'Studio', value: '55 Design District, Miami, FL 33137' }
              ].map((item) => (
                <div className="flex items-center gap-6 group" key={item.label}>
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#0b1120] border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-amber-600 dark:text-amber-500 group-hover:bg-amber-700 group-hover:text-white transition-all duration-300 shadow-sm">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 dark:text-white mb-0.5">{item.label}</p>
                    <p className="text-zinc-600 dark:text-zinc-400 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Studio Hours Card */}
            <div 
             
              className="bg-white dark:bg-[#0b1120] border border-zinc-200 dark:border-zinc-800 p-4 rounded-[15px] shadow-sm dark:shadow-none"
            >
              <div className="flex items-center gap-3 mb-6 text-zinc-900 dark:text-white font-bold text-lg">
                <Clock size={20} className="text-amber-600 dark:text-amber-500" />
                <h4>Studio Hours</h4>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-zinc-100 dark:border-zinc-800/50">
                  <span className="text-zinc-600 dark:text-zinc-400">Monday – Friday</span>
                  <span className="text-zinc-900 dark:text-white font-semibold">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-zinc-100 dark:border-zinc-800/50">
                  <span className="text-zinc-600 dark:text-zinc-400">Saturday</span>
                  <span className="text-zinc-900 dark:text-white font-semibold">10:00 AM – 3:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-600 dark:text-zinc-400">Sunday</span>
                  <span className="text-zinc-500 dark:text-zinc-500 italic">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}