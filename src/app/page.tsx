"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  MessageCircle, 
  MapPin, 
  MonitorPlay, 
  Home as HomeIcon, 
  Award, 
  ArrowRight,
  BookOpen,
  Users
} from "lucide-react";

export default function Home() {
  const whatsappNumber = "5493854430235"; 
  const message = "Hola Martin! Me gustaría saber más sobre las clases de inglés.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#1a2f24] text-[#fdfdfd] chalk-bg">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md chalk-border bg-white/5 mb-8 text-sm font-medium text-white shadow-xl"
        >
          <Award className="w-5 h-5" />
          <span className="font-bold tracking-wide">Certificación Internacional Nivel B2</span>
        </motion.div>

        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
        >
          Domina el Inglés <br className="hidden md:block" />
          con <span className="underline decoration-wavy decoration-white/50 underline-offset-8">Confianza</span>
        </motion.h1>

        <motion.p 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium"
        >
           Ayudando a estudiantes a romper la barrera del idioma con clases personalizadas y dinámicas.
        </motion.p>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#E5F9E0] text-[#1a2f24] px-8 py-4 rounded-xl font-bold text-lg hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-[4px_4px_0px_rgba(255,255,255,0.2)]"
          >
            <MessageCircle className="w-6 h-6" />
            Escribime por WhatsApp
          </a>
          <a 
            href="#modalidades"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg chalk-border hover:bg-white/10 transition-all duration-300 text-white"
          >
            Ver Modalidades
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center bg-[#243e30] p-8 md:p-12 rounded-2xl shadow-2xl chalk-border">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b-2 border-dashed border-white/20 pb-4">
              Martin Soba, English Teacher
            </h2>
            <p className="text-gray-100 text-lg leading-relaxed font-medium">
              Con nivel de certificación internacional B2, ofrezco un espacio dedicado al aprendizaje efectivo del idioma inglés.
            </p>
            <ul className="space-y-5 mt-8">
              {[
                "Atención personalizada exhaustiva",
                "Metodología práctica, activa y conversacional",
                "Preparación integral para exámenes",
                "Seguimiento continuo del progreso"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white font-medium text-lg">
                  <div className="mt-1">
                    <BookOpen className="w-5 h-5 text-white/80" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative h-[450px] rounded-xl overflow-hidden glass border-4 border-white/20 shadow-2xl"
          >
            <Image 
              src="/martin_retouched.png"
              alt="Martin Soba"
              fill
              priority
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f24] via-[#1a2f24]/20 to-transparent z-10" />
            <div className="relative z-20 h-full flex flex-col justify-end p-6">
              <div className="inline-flex p-3 rounded-lg bg-[#243e30]/80 backdrop-blur-md mb-2 border border-white/20">
                <Award className="w-6 h-6 text-yellow-300" />
              </div>
              <h3 className="text-2xl font-bold text-white shadow-sm">Profesor Certificado B2</h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modalities Section */}
      <section id="modalidades" className="py-24 px-6 relative z-10 bg-[#16291e] border-y-4 border-dashed border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white chalk-text">Modalidades de Cursado</h2>
            <div className="w-32 h-1 bg-white/40 mx-auto rounded-full mb-6"></div>
            <p className="text-white/80 text-xl max-w-2xl mx-auto font-medium">Tres formas de aprender adaptadas a tus necesidades.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: MapPin,
                title: "Presencial",
                desc: "En mi espacio dedicado en Lavalle 385. Un ambiente tipo aula, preparado para el estudio.",
              },
              {
                icon: HomeIcon,
                title: "A Domicilio",
                desc: "Voy a tu casa para que aprendas en la comodidad de tu hogar con atención 100% exclusiva.",
              },
              {
                icon: MonitorPlay,
                title: "Online",
                desc: "Clases virtuales interactivas con la misma exigencia, usando herramientas digitales.",
              }
            ].map((modality, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="bg-[#243e30] p-8 rounded-xl chalk-border hover:-translate-y-2 transition-transform duration-300 shadow-xl"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white border border-white/30">
                  <modality.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{modality.title}</h3>
                <p className="text-white/80 leading-relaxed font-medium text-lg">{modality.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location / CTA Bottom */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-[#243e30] p-10 md:p-16 rounded-2xl relative overflow-hidden shadow-2xl chalk-border"
        >
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">¿Dónde nos encontramos?</h2>
            
            <div className="flex flex-col items-center justify-center mb-12">
              <div className="flex items-center gap-4 bg-[#1a2f24] px-8 py-5 rounded-xl border border-white/20 mb-8 inline-block shadow-lg">
                <MapPin className="text-white w-8 h-8" />
                <div className="text-left">
                  <p className="text-white/70 font-medium">Ubicación</p>
                  <p className="font-bold text-xl text-white">Lavalle 385, Sgo Del Estero</p>
                </div>
              </div>
              
              <div className="w-full max-w-3xl h-[400px] rounded-xl overflow-hidden border-4 border-white/10 shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.6995091261956!2d-64.25915502453188!3d-27.803580131014552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943b4df7a55f17f5%3A0xe987b95c3c5485c2!2sLavalle%20385%2C%20G4202%20Santiago%20del%20Estero!5e1!3m2!1ses-419!2sar!4v1773515208656!5m2!1ses-419!2sar" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Clases de Inglés Martin Soba"
                ></iframe>
              </div>
            </div>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center justify-center group mt-8"
            >
              <div className="flex items-center gap-3 bg-white text-[#1a2f24] px-12 py-6 rounded-xl font-black text-2xl hover:scale-105 transition-transform duration-300 mb-3 shadow-[8px_8px_0px_rgba(255,255,255,0.2)]">
                <MessageCircle className="w-8 h-8 text-[#25D366]" />
                Contactar a Martin
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
              <span className="text-white/90 font-bold tracking-wider">¡Asegurá tu lugar hoy!</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-white/50 text-sm font-medium border-t-2 border-dashed border-white/10 bg-[#16291e]">
        <p>© {new Date().getFullYear()} Martin Soba English Classes. Todos los derechos reservados.</p>
      </footer>

      {/* Sticky FAB */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group border-4 border-white/20"
      >
        <MessageCircle className="w-8 h-8 relative z-10" />
      </motion.a>
    </main>
  );
}
