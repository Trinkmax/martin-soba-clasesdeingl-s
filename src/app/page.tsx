"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  MapPin, 
  MonitorPlay, 
  Home as HomeIcon, 
  Award, 
  ArrowRight,
  BookOpen,
  Sparkles,
  GraduationCap,
  Clock,
  Star,
} from "lucide-react";
import ChalkParticles from "./components/ChalkParticles";
import { WhatsAppIcon } from "./components/WhatsAppIcon";
import { 
  ChalkStar, 
  ChalkArrow, 
  ChalkUnderline, 
  ChalkCircle, 
  ChalkExclamation, 
  ChalkABC,
  ChalkSparkles 
} from "./components/ChalkDoodles";
import ChalkEraser from "./components/ChalkEraser";
import ChalkTray from "./components/ChalkTray";

export default function Home() {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Delay loading the heavy Google Maps iframe to keep initial render fast
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

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

  const chalkWrite = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8
      } 
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#1a2f24] text-[#fdfdfd] chalk-bg">

      {/* Chalk Particles Overlay */}
      <ChalkParticles />

      {/* SVG Filter for chalk texture */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="chalk-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="chalk-roughness">
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
        </defs>
      </svg>

      {/* =====================================================
          HERO SECTION 
          ===================================================== */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Doodle decorations */}
        <ChalkStar className="top-20 left-[5%] hidden md:block" color="rgba(253,230,138,0.5)" delay={0.5} />
        <ChalkStar className="top-40 right-[8%] hidden md:block" color="rgba(249,168,212,0.4)" delay={1.2} />
        <ChalkArrow className="top-16 right-[15%] hidden md:block" delay={1.8} />
        <ChalkExclamation className="top-24 left-[12%] hidden md:block" delay={2} />
        <ChalkABC className="bottom-10 left-[8%] hidden md:block" delay={2.5} />
        <ChalkCircle className="bottom-20 right-[10%] hidden md:block" delay={1.5} />

        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md chalk-border bg-white/5 mb-8 text-sm font-medium text-white shadow-xl relative"
        >
          <Award className="w-5 h-5 text-yellow-300" />
          <span className="font-bold tracking-wide chalk-handwritten">Certificación Internacional Nivel B2</span>
          <ChalkSparkles className="w-full h-full top-0 left-0" />
        </motion.div>

        {/* Hero Title with chalk write effect */}
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={chalkWrite}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight chalk-handwritten relative"
        >
          <span className="chalk-text">Domina el Inglés</span> <br className="hidden md:block" />
          <span className="relative inline-block">
            con{" "}
            <span className="chalk-text-yellow relative">
              Confianza
              <ChalkUnderline className="-bottom-3 left-0 w-full" color="rgba(253,230,138,0.5)" delay={1} />
            </span>
          </span>
        </motion.h1>

        <motion.p 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium"
        >
          Ayudando a estudiantes a romper la barrera del idioma con clases personalizadas y dinámicas.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <motion.a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#E5F9E0] text-[#1a2f24] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform shadow-[4px_4px_0px_rgba(255,255,255,0.2)] chalk-glow relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
            <span className="chalk-handwritten">Escribime por WhatsApp</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.a>
          <motion.a 
            href="#modalidades"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg chalk-border hover:bg-white/10 transition-all duration-300 text-white chalk-handwritten chalk-smudge-hover"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver Modalidades
          </motion.a>
        </motion.div>
      </section>

      {/* Chalk divider */}
      <div className="chalk-divider max-w-4xl mx-auto" />

      {/* =====================================================
          ABOUT / TEACHER SECTION
          ===================================================== */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        
        {/* Eraser decoration */}
        <ChalkEraser className="top-8 right-8 hidden md:block" />

        <div className="grid md:grid-cols-2 gap-12 items-center bg-[#243e30] p-8 md:p-12 rounded-2xl shadow-2xl chalk-border relative overflow-hidden">
          
          {/* Subtle chalk dust on the card */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 20% 30%, rgba(255,255,255,0.03) 0%, transparent 50%)",
            }}
          />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-6 relative z-10"
          >
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 chalk-handwritten chalk-text">
                Martin Soba
              </h2>
              <p className="text-xl chalk-text-blue chalk-handwritten mb-8">English Teacher</p>
              <ChalkUnderline className="-bottom-1 left-0" color="rgba(147,197,253,0.4)" delay={0.5} />
            </div>
            
            <p className="text-gray-100 text-lg leading-relaxed font-medium">
              Con nivel de certificación internacional B2, ofrezco un espacio dedicado al aprendizaje efectivo del idioma inglés.
            </p>
            
            <motion.ul 
              className="space-y-5 mt-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { text: "Atención personalizada exhaustiva", icon: Star, color: "text-yellow-300" },
                { text: "Metodología práctica y conversacional", icon: Sparkles, color: "text-blue-300" },
                { text: "Preparación integral para exámenes", icon: GraduationCap, color: "text-pink-300" },
                { text: "Seguimiento continuo del progreso", icon: Clock, color: "text-green-300" }
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  variants={fadeIn}
                  className="flex items-start gap-4 text-white font-medium text-lg group"
                >
                  <motion.div 
                    className={`mt-1 ${item.color}`}
                    whileHover={{ rotate: 20, scale: 1.2 }}
                  >
                    <item.icon className="w-5 h-5" />
                  </motion.div>
                  <span className="group-hover:text-white/90 transition-colors">{item.text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative h-[450px] rounded-xl overflow-hidden border-4 border-white/20 shadow-2xl"
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
              <motion.div 
                className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-[#243e30]/80 backdrop-blur-md border border-white/20"
                animate={{ 
                  boxShadow: [
                    "0 0 0px rgba(253,230,138,0)",
                    "0 0 20px rgba(253,230,138,0.3)",
                    "0 0 0px rgba(253,230,138,0)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Award className="w-6 h-6 text-yellow-300 shrink-0" />
                <h3 className="text-xl font-bold text-white chalk-handwritten">Profesor Certificado B2</h3>
              </motion.div>
            </div>

            {/* Corner doodle */}
            <ChalkStar className="top-4 right-4 z-30" color="rgba(255,255,255,0.3)" delay={1} />
          </motion.div>
        </div>
      </section>

      {/* Chalk Tray */}
      <ChalkTray />

      {/* =====================================================
          MODALITIES SECTION
          ===================================================== */}
      <section id="modalidades" className="py-24 px-6 relative z-10 bg-[#16291e]">
        
        {/* Top chalk line */}
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{
          background: "repeating-linear-gradient(90deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 15px, transparent 15px, transparent 25px)"
        }} />
        
        {/* Bottom chalk line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{
          background: "repeating-linear-gradient(90deg, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 10px, transparent 10px, transparent 20px)"
        }} />

        <div className="max-w-7xl mx-auto relative">
          {/* Doodle decorations */}
          <ChalkArrow className="top-0 right-[5%] hidden md:block" color="rgba(253,230,138,0.4)" delay={0.5} />
          <ChalkExclamation className="top-20 left-[3%] hidden md:block" color="rgba(249,168,212,0.5)" delay={1} />

          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white chalk-handwritten chalk-text"
            >
              Modalidades de Cursado
            </motion.h2>
            <motion.div 
              className="w-32 h-1 mx-auto rounded-full mb-6 overflow-hidden"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ background: "rgba(255,255,255,0.4)" }}
            />
            <p className="text-white/80 text-xl max-w-2xl mx-auto font-medium">
              Tres formas de aprender adaptadas a tus necesidades.
            </p>
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
                color: "chalk-text-yellow",
                borderColor: "rgba(253,230,138,0.3)",
                doodleColor: "rgba(253,230,138,0.4)",
              },
              {
                icon: HomeIcon,
                title: "A Domicilio",
                desc: "Voy a tu casa para que aprendas en la comodidad de tu hogar con atención 100% exclusiva.",
                color: "chalk-text-blue",
                borderColor: "rgba(147,197,253,0.3)",
                doodleColor: "rgba(147,197,253,0.4)",
              },
              {
                icon: MonitorPlay,
                title: "Online",
                desc: "Clases virtuales interactivas con la misma exigencia, usando herramientas digitales.",
                color: "chalk-text-pink",
                borderColor: "rgba(249,168,212,0.3)",
                doodleColor: "rgba(249,168,212,0.4)",
              }
            ].map((modality, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="bg-[#243e30] p-8 rounded-xl transition-all duration-300 shadow-xl relative group chalk-smudge-hover overflow-hidden"
                style={{ border: `2px dashed ${modality.borderColor}` }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* Hover glow */}
                <motion.div 
                  className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(ellipse at center, ${modality.borderColor} 0%, transparent 70%)`,
                    opacity: 0.1
                  }}
                />

                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 border border-white/30 ${modality.color}`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <modality.icon className="w-8 h-8" />
                </motion.div>
                
                <h3 className={`text-2xl font-bold mb-4 chalk-handwritten ${modality.color}`}>
                  {modality.title}
                </h3>
                <p className="text-white/80 leading-relaxed font-medium text-lg">{modality.desc}</p>

                {/* Corner doodle */}
                <ChalkStar 
                  className="bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                  color={modality.doodleColor} 
                  delay={0} 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Chalk divider */}
      <div className="chalk-divider max-w-4xl mx-auto" />

      {/* =====================================================
          AGES SECTION
          ===================================================== */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white chalk-handwritten chalk-text mb-4">
            Edades
          </h2>
          <p className="text-white/80 text-xl font-medium">Para estudiantes de <span className="chalk-text-yellow chalk-handwritten text-2xl">11</span> a <span className="chalk-text-yellow chalk-handwritten text-2xl">19</span> años</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-4"
        >
          {Array.from({ length: 9 }, (_, i) => 11 + i).map((age) => (
            <motion.div
              key={age}
              variants={fadeIn}
              className="w-16 h-16 rounded-full border-2 border-dashed border-white/30 flex items-center justify-center chalk-handwritten text-2xl font-bold chalk-smudge-hover hover:border-yellow-300/50 transition-colors duration-300"
              whileHover={{ scale: 1.15, rotate: 5 }}
            >
              <span className="chalk-text">{age}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Doodle decorations */}
        <ChalkABC className="bottom-4 right-[10%] hidden md:block" delay={1} />
      </section>

      {/* =====================================================
          LOCATION / CTA SECTION
          ===================================================== */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center relative z-10">

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-[#243e30] p-10 md:p-16 rounded-2xl relative overflow-hidden shadow-2xl chalk-border"
        >
          {/* Background chalk dust */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(255,255,255,0.03) 0%, transparent 50%)",
            }}
          />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white chalk-handwritten chalk-text relative inline-block">
              ¿Dónde nos encontramos?
              <ChalkUnderline className="-bottom-3 left-0 w-full" color="rgba(134,239,172,0.4)" delay={0.5} />
            </h2>
            
            <div className="flex flex-col items-center justify-center mb-12 mt-6">
              <motion.div 
                className="flex items-center gap-4 bg-[#1a2f24] px-8 py-5 rounded-xl border border-white/20 mb-8 shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <MapPin className="text-green-300 w-8 h-8" />
                <div className="text-left">
                  <p className="text-white/70 font-medium">Ubicación</p>
                  <p className="font-bold text-xl text-white chalk-handwritten">Lavalle 385, Sgo Del Estero</p>
                </div>
              </motion.div>
              
              <div className="w-full max-w-3xl h-[400px] rounded-xl overflow-hidden border-4 border-white/10 shadow-2xl relative bg-[#1a2f24] flex items-center justify-center">
                {!mapLoaded ? (
                  <div className="flex flex-col items-center justify-center space-y-3 opacity-60">
                    <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white/80 animate-spin" />
                    <span className="chalk-handwritten text-lg text-white">Cargando mapa...</span>
                  </div>
                ) : (
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.6995091261956!2d-64.25915502453188!3d-27.803580131014552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943b4df7a55f17f5%3A0xe987b95c3c5485c2!2sLavalle%20385%2C%20G4202%20Santiago%20del%20Estero!5e1!3m2!1ses-419!2sar!4v1773515208656!5m2!1ses-419!2sar" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Clases de Inglés Martin Soba"
                    className="absolute inset-0"
                  ></iframe>
                )}
              </div>
            </div>

            {/* CTA Button */}
            <motion.a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center justify-center group mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3 bg-white text-[#1a2f24] px-12 py-6 rounded-xl font-black text-2xl transition-transform duration-300 mb-3 shadow-[8px_8px_0px_rgba(255,255,255,0.2)] chalk-glow chalk-handwritten relative overflow-hidden">
                <WhatsAppIcon className="w-8 h-8 text-[#25D366]" />
                Contactar a Martin
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <span className="text-white/90 font-bold tracking-wider chalk-handwritten">¡Asegurá tu lugar hoy!</span>
            </motion.a>
          </div>

          {/* Corner doodles */}
          <ChalkStar className="top-6 right-6 hidden md:block" color="rgba(253,230,138,0.3)" delay={0.5} />
          <ChalkArrow className="bottom-8 left-8 hidden md:block" color="rgba(134,239,172,0.3)" delay={1} />
        </motion.div>
      </section>

      {/* Chalk Tray */}
      <ChalkTray />

      {/* =====================================================
          FOOTER
          ===================================================== */}
      <footer className="py-10 text-center text-white/50 text-sm font-medium bg-[#16291e] relative">
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{
          background: "repeating-linear-gradient(90deg, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 8px, transparent 8px, transparent 16px)"
        }} />
        <p className="chalk-handwritten text-base">
          © {new Date().getFullYear()} Martin Soba English Classes. Todos los derechos reservados.
        </p>
      </footer>

      {/* =====================================================
          FLOATING WHATSAPP FAB
          ===================================================== */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group border-4 border-white/20"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        <WhatsAppIcon className="w-8 h-8 relative z-10" />
        
        {/* Smooth CSS Sonar Pulse */}
        <div className="absolute inset-0 rounded-full border border-white/40 shadow-[0_0_15px_rgba(37,211,102,0.5)] whatsapp-pulse pointer-events-none" />
        <div className="absolute inset-0 rounded-full border border-white/20 shadow-[0_0_20px_rgba(37,211,102,0.3)] whatsapp-pulse-delayed pointer-events-none" />
      </motion.a>
    </main>
  );
}
