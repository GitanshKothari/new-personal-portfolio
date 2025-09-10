import { Building2, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Sora } from "next/font/google"
import ContactForm from "./ContactForm"

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })

export default function Contact() {
  return (
    <div className={`min-h-screen relative overflow-hidden ${sora.className}`}>

      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-white text-balance">Get in touch</h1>
              <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                Whether you’d like to collaborate, discuss a project, or just say hello —
                I’d love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <Building2 className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0 group-hover:text-indigo-500 transition-colors" />
                <div className="text-slate-300">
                  <div>395, Bloor Street East</div>
                  <div>Toronto, ON M4W! 0B4</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <Phone className="w-5 h-5 text-slate-400 flex-shrink-0 group-hover:text-indigo-500 transition-colors" />
                <div className="text-slate-300">+1 (647) 451-8076</div>
              </div>

              <div className="flex items-center gap-4 group">
                <Mail className="w-5 h-5 text-slate-400 flex-shrink-0 group-hover:text-indigo-500 transition-colors" />
                <div className="text-slate-300">gitanshkothari2002@gmail.com</div>
              </div>
            </div>
          </div>

          
          <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
