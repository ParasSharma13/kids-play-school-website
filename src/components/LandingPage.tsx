import React from 'react';
import { motion } from 'motion/react';
import { Star, Cloud, Play, Globe, Rocket, Moon, Sun, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Clock, Calendar, BookOpen, Music, Menu, X } from 'lucide-react';
import { AnimatePresence } from 'motion/react';

const SCHOOL_ASSETS = {
  logo: "/images/logo.png",
  hero: "/images/hero.png",
  about: "/images/kids playing.png",
  activities: {
    playland: "/images/days.png",
    shapes: "/images/shapes.png",
    colors: "/images/colors.png",
  },
  gallery: [
    "/images/swing.png",
    "/images/slide.png",
    "/images/lunch.png",
    "/images/play.png",
    "/images/study.png",
  ],
  backgrounds: {
    draw1: "https://picsum.photos/seed/kid_draw1/400/400",
    draw2: "https://picsum.photos/seed/kid_draw2/400/400",
  }
};

const FloatingElement = ({ children, delay = 0, duration = 3, className = "" }: { children: React.ReactNode, delay?: number, duration?: number, className?: string }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-15, 15, -15] }}
    transition={{ repeat: Infinity, duration, delay, ease: "easeInOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between wood-log rounded-full px-10 md:px-12 py-3 wood-nail">
        {/* Log End Rings */}
        <div className="log-rings-left" />
        <div className="log-rings-right" />
        
        {/* Ropes to make it look hanging */}
        <div className="rope left-1/4" />
        <div className="rope right-1/4" />

        <div className="flex items-start gap-3 relative z-10">
          <span className="text-lg md:text-xl font-display font-bold text-amber-950 tracking-tight drop-shadow-sm">Cradel Play</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-amber-900 font-bold text-xs uppercase tracking-widest relative z-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-amber-600 transition-all relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 relative z-10">
          <button className="hidden sm:block bg-blue-500 hover:bg-blue-400 text-white px-4 md:px-6 py-2 rounded-full font-bold text-xs md:text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
            Enroll Now
          </button>

          {/* Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-amber-950 p-1 hover:bg-black/5 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 mx-auto max-w-sm wood-log rounded-3xl p-6 wood-nail flex flex-col gap-4 text-center shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-amber-950 font-bold text-lg hover:text-amber-600 transition-colors py-2 border-b border-amber-900/10 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-800 px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md mt-2 border-b-2 border-yellow-600">
              Enroll Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-[85vh] flex items-center pt-24 pb-24 overflow-hidden bg-gradient-to-b from-[#E0F2FE] via-[#F0F9FF] to-[#E0F2FE]">
    {/* Abstract Blobs - More dynamic and layered */}
    <motion.div 
      animate={{ 
        x: [0, 40, 0], 
        y: [0, -30, 0],
        scale: [1, 1.1, 1],
        rotate: [0, 10, 0]
      }}
      transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-pink-100/40 rounded-full blur-[100px] -z-10" 
    />
    <motion.div 
      animate={{ 
        x: [0, -50, 0], 
        y: [0, 40, 0],
        scale: [1, 1.2, 1],
        rotate: [0, -15, 0]
      }}
      transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-[120px] -z-10" 
    />
    <motion.div 
      animate={{ 
        x: [0, 30, 0], 
        y: [0, 50, 0],
        scale: [1, 1.15, 1]
      }}
      transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-100/30 rounded-full blur-[100px] -z-10" 
    />

    {/* Floating Clouds - More of them and varied sizes */}
    <div className="absolute top-20 left-[10%] opacity-60">
      <FloatingElement delay={0} duration={6}>
        <Cloud size={60} className="text-white fill-white drop-shadow-sm" />
      </FloatingElement>
    </div>
    <div className="absolute top-40 right-[15%] opacity-50">
      <FloatingElement delay={2} duration={8}>
        <Cloud size={100} className="text-white fill-white drop-shadow-sm" />
      </FloatingElement>
    </div>
    <div className="absolute bottom-40 left-[5%] opacity-40">
      <FloatingElement delay={1} duration={7}>
        <Cloud size={80} className="text-white fill-white drop-shadow-sm" />
      </FloatingElement>
    </div>
    <div className="absolute top-1/4 right-[5%] opacity-30">
      <FloatingElement delay={3} duration={9}>
        <Cloud size={120} className="text-white fill-white drop-shadow-sm" />
      </FloatingElement>
    </div>

    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-blue-100 text-blue-600 px-5 py-2 rounded-full font-bold text-sm mb-8 shadow-sm"
        >
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          Welcome to Cradel Play
        </motion.div>
        
        <h1 className="text-5xl md:text-8xl font-display font-bold text-slate-800 leading-[1.1] mb-8">
          Nurturing <br />
          <span className="relative inline-block">
            <span className="relative z-10 text-blue-500">Creativity</span>
            <motion.svg 
              viewBox="0 0 200 20" 
              className="absolute -bottom-2 left-0 w-full h-4 text-blue-200 -z-10"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <path d="M5 15 Q 50 5, 100 15 T 195 15" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
            </motion.svg>
          </span> <br />
          & <span className="text-pink-400 italic font-playful">Joyful</span> Learning
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-xl leading-relaxed font-medium">
          A safe and inspiring place where little minds grow, explore, and shine. We believe every child is a star in the making.
        </p>
        
        <div className="flex flex-wrap gap-6 items-center">
          <button className="group relative bg-yellow-400 hover:bg-yellow-500 text-slate-800 px-12 py-5 rounded-full text-xl font-bold transition-all shadow-[0_10px_20px_-5px_rgba(250,204,21,0.4)] hover:shadow-[0_15px_25px_-5px_rgba(250,204,21,0.5)] hover:-translate-y-1">
            Enroll Now
            <motion.span 
              className="absolute -top-2 -right-2 bg-pink-400 text-white text-[10px] px-2 py-1 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              HOT
            </motion.span>
          </button>
          
          <button className="flex items-center gap-3 text-slate-600 font-bold hover:text-blue-500 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <Play className="fill-blue-500 text-blue-500 ml-1" size={20} />
            </div>
            Watch Video
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        animate={{ opacity: 1, scale: 1.1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.2, type: "spring" }}
        className="relative lg:scale-110"
      >
        {/* Main Illustration Container */}
        <div className="relative z-10">
          <FloatingElement duration={5}>
            <div className="relative">
              <motion.img 
                src={SCHOOL_ASSETS.hero} 
                alt="Creative Learning" 
                className="relative z-10 rounded-[40px] shadow-2xl border-8 border-white w-full h-auto"
                referrerPolicy="no-referrer"
                animate={{ 
                  scale: [1, 1.03, 1],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </div>
          </FloatingElement>
        </div>
      </motion.div>
    </div>

    {/* Cloud Section Divider */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        className="relative block w-[calc(100%+1.3px)] h-[120px] text-white fill-current drop-shadow-[0_-5px_10px_rgba(0,0,0,0.03)]"
      >
        <path d="M0,0 C150,90 400,10 600,70 C800,130 1050,30 1200,100 L1200,120 L0,120 Z" className="opacity-20" />
        <path d="M0,30 C200,110 500,20 700,80 C900,140 1100,40 1200,110 L1200,120 L0,120 Z" className="opacity-40" />
        <path d="M0,60 C300,130 600,40 800,100 C1000,160 1150,60 1200,120 L1200,120 L0,120 Z" />
      </svg>
      {/* Extra fluffy bits */}
      <div className="absolute bottom-0 left-[10%] w-32 h-32 bg-white rounded-full -mb-16 blur-sm opacity-60" />
      <div className="absolute bottom-0 left-[30%] w-48 h-48 bg-white rounded-full -mb-24 blur-sm opacity-80" />
      <div className="absolute bottom-0 right-[20%] w-40 h-40 bg-white rounded-full -mb-20 blur-sm opacity-70" />
      <div className="absolute bottom-0 right-[5%] w-24 h-24 bg-white rounded-full -mb-12 blur-sm opacity-50" />
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 bg-white relative overflow-hidden">
    {/* Background Blobs */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-50/50 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

    {/* Floating Clouds */}
    <div className="absolute top-10 left-[15%] opacity-80 pointer-events-none">
      <FloatingElement delay={0.5} duration={7}>
        <Cloud size={60} className="text-blue-200 fill-blue-100" />
      </FloatingElement>
    </div>
    <div className="absolute top-24 right-[20%] opacity-70 pointer-events-none">
      <FloatingElement delay={1.5} duration={9}>
        <Cloud size={100} className="text-blue-200 fill-blue-100" />
      </FloatingElement>
    </div>
    <div className="absolute top-5 left-[40%] opacity-60 pointer-events-none">
      <FloatingElement delay={2.5} duration={11}>
        <Cloud size={50} className="text-blue-200 fill-blue-100" />
      </FloatingElement>
    </div>

    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="relative z-10">
          <FloatingElement duration={6}>
            <div className="relative">
              <img 
                src={SCHOOL_ASSETS.about} 
                alt="Kids playing together" 
                className="w-full aspect-square object-cover [mask-image:radial-gradient(circle,white_50%,transparent_100%)] opacity-90"
                referrerPolicy="no-referrer"
              />
            </div>
          </FloatingElement>
        </div>
        
        {/* Floating Badges */}
        <motion.div 
          className="absolute -bottom-10 -right-10 z-20 bg-white p-6 rounded-[30px] shadow-xl border border-blue-50"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
              <Star className="text-green-500 fill-green-500" size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Experience</p>
              <p className="text-xl font-display font-bold text-slate-800">15+ Years</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full font-bold text-sm mb-6">
          Our Story & Mission
        </div>
        
        <h2 className="text-5xl md:text-6xl font-display font-bold text-slate-800 mb-8 leading-tight">
          A Magical Place To <br />
          <span className="text-blue-500 relative">
            Share, Learn, & Grow
            <svg className="absolute -bottom-2 left-0 w-full h-2 text-blue-100" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
          </span>
        </h2>
        
        <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
          We believe that every child deserves a magical childhood filled with wonder, discovery, and joy. Our school is more than just a place of learning; it's a community where little minds are nurtured with care and creativity.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {[
            { title: "Creative Play", icon: Play, color: "bg-pink-100 text-pink-500" },
            { title: "Active Learning", icon: Globe, color: "bg-blue-100 text-blue-500" },
            { title: "Safe Environment", icon: Moon, color: "bg-purple-100 text-purple-500" },
            { title: "Expert Teachers", icon: Sun, color: "bg-yellow-100 text-yellow-500" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
              <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center`}>
                <item.icon size={24} />
              </div>
              <span className="font-bold text-slate-700">{item.title}</span>
            </div>
          ))}
        </div>
        
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-blue-200 hover:-translate-y-1">
          Learn More About Us
        </button>
      </motion.div>
    </div>
  </section>
);

const Activities = () => {
  const activities = [
    {
      title: "Playland & Cafe",
      img: SCHOOL_ASSETS.activities.playland,
      color: "bg-blue-400",
      tag: "Popular"
    },
    {
      title: "Shapes Match",
      img: SCHOOL_ASSETS.activities.shapes,
      color: "bg-pink-400",
      tag: "New"
    },
    {
      title: "Color Match",
      img: SCHOOL_ASSETS.activities.colors,
      color: "bg-yellow-400",
      tag: "Creative"
    }
  ];

  return (
    <section id="programs" className="py-32 bg-[#F5F3FF] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-10 rotate-12">
        <Star className="text-purple-500 fill-purple-500" size={100} />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 -rotate-12">
        <Star className="text-blue-500 fill-blue-500" size={80} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-purple-100 text-purple-600 px-4 py-1.5 rounded-full font-bold text-sm mb-6">
            Our Activities
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-slate-800 mb-6">
            Joyful Engaging Activities <br />
            <span className="text-purple-500">Start Here</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            We offer a variety of engaging activities designed to spark curiosity and foster a love for discovery in every child.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {activities.map((activity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-slate-100"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={activity.img} 
                  alt={activity.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute top-6 left-6 ${activity.color} text-white font-bold px-4 py-1.5 rounded-full text-xs shadow-lg`}>
                  {activity.tag}
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-display font-bold text-slate-800 mb-4">{activity.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Engaging activities that help children develop essential skills while having fun in a supportive environment.
                </p>
                <div className="pt-4 border-t border-slate-50">
                  <span className="text-sm font-bold text-purple-500 uppercase tracking-widest">Discover More</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Highlights = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "Happy Students", value: "500+", color: "text-blue-500", bg: "bg-blue-50" },
          { label: "Expert Teachers", value: "35+", color: "text-pink-500", bg: "bg-pink-50" },
          { label: "Creative Labs", value: "12+", color: "text-yellow-600", bg: "bg-yellow-50" },
          { label: "Years Excellence", value: "15+", color: "text-green-500", bg: "bg-green-50" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`${stat.bg} p-8 rounded-[40px] text-center hover:scale-105 transition-transform cursor-default`}
          >
            <p className={`text-4xl md:text-5xl font-display font-bold ${stat.color} mb-2`}>{stat.value}</p>
            <p className="text-slate-600 font-bold text-sm uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Gallery = () => {
  const [selectedImg, setSelectedImg] = React.useState<string | null>(null);

  const images = [
    { src: SCHOOL_ASSETS.gallery[0], size: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" },
    { src: SCHOOL_ASSETS.gallery[1], size: "aspect-square" },
    { src: SCHOOL_ASSETS.gallery[2], size: "aspect-square" },
    { src: SCHOOL_ASSETS.gallery[3], size: "aspect-square" },
    { src: SCHOOL_ASSETS.gallery[4], size: "aspect-square" },
  ];

  return (
    <section id="gallery" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block bg-pink-100 text-pink-600 px-4 py-1.5 rounded-full font-bold text-sm mb-6">
            Our Gallery
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-slate-800 mb-6">
            Moments of <span className="text-pink-500">Pure Joy</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Take a peek into the daily lives of our little explorers and the wonderful memories they create.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedImg(img.src)}
              className={`${img.size} rounded-[24px] md:rounded-[40px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group cursor-pointer relative`}
            >
              <img 
                src={img.src} 
                alt={`Gallery ${i}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Play size={24} className="text-pink-500 fill-pink-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Simple Lightbox */}
      {selectedImg && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-10 right-10 text-white hover:text-pink-400 transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            <Star size={40} />
          </button>
          <motion.img 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImg} 
            className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
            alt="Full view"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      )}
    </section>
  );
};

const BrightFuture = () => (
  <section className="py-12 bg-white relative overflow-hidden">
    {/* Graffiti/Doodle Background Elements */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
      <div className="absolute top-10 left-10 rotate-12">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <path d="M20,50 Q50,20 80,50 T140,50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-blue-500" />
          <circle cx="150" cy="150" r="30" fill="none" stroke="currentColor" strokeWidth="4" className="text-pink-500" />
          <rect x="30" y="120" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="4" className="text-yellow-500" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-20 -rotate-12">
        <svg width="250" height="250" viewBox="0 0 250 250">
          <path d="M10,10 L50,50 M50,10 L10,50" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="text-green-500" />
          <path d="M100,100 C150,50 200,150 250,100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="text-purple-500" />
          <path d="M50,200 A50,50 0 0,1 150,200" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="text-orange-500" />
        </svg>
      </div>
      {/* Faded Kids Images as "Graffiti" */}
      <img src={SCHOOL_ASSETS.backgrounds.draw1} className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full grayscale opacity-20 mix-blend-multiply" alt="" />
      <img src={SCHOOL_ASSETS.backgrounds.draw2} className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-[60px] grayscale opacity-20 mix-blend-multiply rotate-6" alt="" />
    </div>

    <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-2">
          <motion.div 
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative"
          >
            <img 
              src={SCHOOL_ASSETS.logo} 
              alt="Cradel Play Logo" 
              className="w-64 md:w-80 h-auto relative z-10" 
              referrerPolicy="no-referrer" 
            />
          </motion.div>
        </div>

        <h2 className="text-5xl md:text-7xl font-display font-bold text-slate-800 mb-10 leading-[1.1]">
          Your child's <span className="text-blue-500 italic">first learning</span> starts with us, 
          <br className="hidden md:block" />
          get your child's <span className="text-pink-500">future bright</span> with us
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <div className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="font-bold text-slate-600">Safe Environment</span>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            <span className="font-bold text-slate-600">Expert Teachers</span>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-3 h-3 bg-pink-500 rounded-full" />
            <span className="font-bold text-slate-600">Creative Learning</span>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-800 px-12 py-5 rounded-full font-bold text-xl transition-all shadow-xl hover:shadow-yellow-200 border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1">
            Admission Open
          </button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Rainbow = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 50" className={className}>
    <path d="M10,50 A40,40 0 0,1 90,50" fill="none" stroke="#FFB5E8" strokeWidth="6" strokeLinecap="round" opacity="0.4" />
    <path d="M20,50 A30,30 0 0,1 80,50" fill="none" stroke="#FFCCF9" strokeWidth="6" strokeLinecap="round" opacity="0.4" />
    <path d="M30,50 A20,20 0 0,1 70,50" fill="none" stroke="#B28DFF" strokeWidth="6" strokeLinecap="round" opacity="0.4" />
    <path d="M40,50 A10,10 0 0,1 60,50" fill="none" stroke="#AFF8DB" strokeWidth="6" strokeLinecap="round" opacity="0.4" />
  </svg>
);

const Heart = ({ className = "", size = 24 }: { className?: string, size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const Footer = () => (
  <footer id="contact" className="pt-32 md:pt-48 pb-12 bg-slate-100 relative overflow-hidden">
    {/* Enhanced Cloud Section Divider Top */}
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20 rotate-180">
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px] text-slate-100 fill-current drop-shadow-[0_-5px_15px_rgba(0,0,0,0.05)]"
      >
        <path d="M0,0 C150,90 400,10 600,70 C800,130 1050,30 1200,100 L1200,120 L0,120 Z" className="opacity-30" />
        <path d="M0,30 C200,110 500,20 700,80 C900,140 1100,40 1200,110 L1200,120 L0,120 Z" className="opacity-50" />
        <path d="M0,60 C300,130 600,40 800,100 C1000,160 1150,60 1200,120 L1200,120 L0,120 Z" />
      </svg>
    </div>

    {/* Floating Decorative Elements near separator - Hidden on small mobile */}
    <div className="hidden sm:block absolute top-20 left-[10%] opacity-20">
      <FloatingElement duration={4}>
        <Heart className="text-pink-400" size={32} />
      </FloatingElement>
    </div>
    <div className="hidden sm:block absolute top-32 left-[25%] opacity-20">
      <FloatingElement delay={1} duration={5}>
        <Star className="text-yellow-400 fill-yellow-400" size={24} />
      </FloatingElement>
    </div>
    <div className="hidden sm:block absolute top-24 right-[15%] opacity-20">
      <FloatingElement delay={2} duration={6}>
        <Heart className="text-blue-400" size={28} />
      </FloatingElement>
    </div>
    <div className="hidden sm:block absolute top-36 right-[30%] opacity-20">
      <FloatingElement delay={1.5} duration={4.5}>
        <Star className="text-purple-400 fill-purple-400" size={20} />
      </FloatingElement>
    </div>

    {/* Decorative Rainbows - Repositioned for mobile */}
    <div className="absolute top-16 md:top-28 left-4 md:left-8 w-24 md:w-40 opacity-10 md:opacity-20 -rotate-12">
      <Rainbow />
    </div>
    <div className="absolute top-16 md:top-28 right-4 md:right-8 w-24 md:w-40 opacity-10 md:opacity-20 rotate-12">
      <Rainbow />
    </div>
    
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 mb-20 relative z-10">
      <div className="md:col-span-2">
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg rotate-3 overflow-hidden border-2 border-slate-200">
            <img src={SCHOOL_ASSETS.logo} alt="Cradel Play Logo" className="w-full h-full object-contain p-1" referrerPolicy="no-referrer" />
          </div>
          <span className="text-3xl md:text-4xl font-display font-bold text-slate-800">Cradel Play</span>
        </div>
        <p className="text-slate-600 mb-8 md:mb-10 max-w-sm text-base md:text-lg leading-relaxed font-medium">
          Nurturing little minds with love, care, and creativity. Join our family today and watch your child bloom in a magical environment.
        </p>
        
        {/* Newsletter Section */}
        <div className="mb-10">
          <h5 className="text-slate-800 font-bold mb-4">Join the Magic (Newsletter)</h5>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-6 py-3 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:border-blue-400 font-medium"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-md whitespace-nowrap">
              Join
            </button>
          </div>
        </div>

        <div className="flex gap-4">
          {[
            { icon: Facebook, color: "hover:bg-blue-600", label: "Facebook" },
            { icon: Instagram, color: "hover:bg-pink-600", label: "Instagram" },
            { icon: Twitter, color: "hover:bg-sky-500", label: "Twitter" }
          ].map((item, i) => (
            <a 
              key={i} 
              href="#" 
              aria-label={item.label}
              className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-slate-400 ${item.color} hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1`}
            >
              <item.icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xl font-display font-bold text-slate-800 mb-6 md:mb-8">Quick Links</h4>
        <ul className="space-y-3 md:space-y-4 text-slate-500 font-bold">
          <li><a href="#" className="hover:text-blue-500 transition-colors">Homepage</a></li>
          <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
          <li><a href="#programs" className="hover:text-blue-500 transition-colors">Our Programs</a></li>
          <li><a href="#gallery" className="hover:text-blue-500 transition-colors">Gallery</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-display font-bold text-slate-800 mb-6 md:mb-8">Contact Info</h4>
        <ul className="space-y-4 md:space-y-6 text-slate-500 font-bold">
          <li className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
              <MapPin className="text-blue-500" size={20} />
            </div>
            <span className="pt-2">Jagadhri, Haryana, India</span>
          </li>
          <li className="flex items-center gap-4">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
              <Phone className="text-green-500" size={20} />
            </div>
            <span>+91 98765 43210</span>
          </li>
          <li className="flex items-center gap-4">
            <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center shrink-0">
              <Mail className="text-pink-500" size={20} />
            </div>
            <span>hello@cradelplay.com</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 font-bold text-sm">
      <p>© {new Date().getFullYear()} Cradel Play . All rights reserved.</p>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
      </div>
    </div>
    
    {/* Decorative Stars & Hearts at bottom */}
    <div className="absolute bottom-10 left-10 opacity-10">
      <Star size={40} className="text-blue-500 fill-blue-500" />
    </div>
    <div className="absolute bottom-20 left-[20%] opacity-10">
      <Heart size={30} className="text-pink-500" />
    </div>
    <div className="absolute top-40 right-10 opacity-10">
      <Star size={30} className="text-orange-500 fill-orange-500" />
    </div>
    <div className="absolute bottom-10 right-[15%] opacity-10">
      <Heart size={24} className="text-purple-500" />
    </div>

    {/* Grass/Flower Grounding Element */}
    <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-green-100 via-emerald-100 to-green-100 opacity-50" />
  </footer>
);

export default function LandingPage() {
  return (
    <div className="relative selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <Activities />
      <Gallery />
      <BrightFuture />
      <Footer />
    </div>
  );
}
