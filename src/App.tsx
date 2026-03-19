import { motion, useScroll, useTransform } from 'motion/react';
import { Radio, Globe, Database, BarChart3, Download, Activity, Headphones, Map, ArrowRight, Github, ExternalLink, Play, Sparkles } from 'lucide-react';
import React, { useRef } from 'react';
import heroVideo from './herovideo.mp4';

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-zinc-950/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 font-bold text-xl tracking-tight"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Radio className="w-6 h-6 text-cyan-400" />
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">MIRAGE-MC</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400"
          >
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#data" className="hover:text-cyan-400 transition-colors">MetaCorpus</a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <a 
              href="https://arxiv.org/html/2502.05250v1" 
              target="_blank" 
              rel="noreferrer"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Paper
            </a>
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="https://dashboard.mirage-project.org"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)] border border-cyan-400/20"
            >
              Open Dashboard
            </motion.a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 bg-zinc-950">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src={heroVideo}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/80 to-zinc-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#09090b_100%)]" />
        </div>

        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] -z-10"
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10"
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-cyan-300 text-xs sm:text-sm font-medium mb-8 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.1)]">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Live Global Radio Data Dashboard</span>
              <span className="relative flex h-2 w-2 ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.05]">
              Exploring Internet <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                Radio Across the Globe
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-2xl text-zinc-300 mb-12 max-w-3xl leading-relaxed font-light">
              The MIRAGE Online Dashboard provides unprecedented access to the <strong className="text-white font-medium">MIRAGE MetaCorpus</strong>, enabling researchers to analyze, visualize, and export metadata from thousands of stations worldwide.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              <motion.a 
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                href="https://dashboard.mirage-project.org"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-white text-zinc-950 px-8 py-4 rounded-full font-bold hover:bg-zinc-100 transition-all w-full sm:w-auto justify-center text-lg shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Launch Dashboard
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="https://arxiv.org/html/2502.05250v1" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all w-full sm:w-auto justify-center text-lg"
              >
                <Play className="w-5 h-5 fill-current" />
                Read the Paper
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
        </motion.div>
      </section>

      {/* Stats/Features Grid */}
      <section id="about" className="py-24 relative border-y border-white/5 bg-zinc-950">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Globe className="w-8 h-8 text-cyan-400" />}
              title="Global Reach"
              description="Analyze internet radio stations from every continent, tracking regional trends and global broadcasting patterns in real-time."
              delay={0.1}
            />
            <FeatureCard 
              icon={<Database className="w-8 h-8 text-blue-400" />}
              title="MIRAGE MetaCorpus"
              description="A massive, continuously updated dataset containing rich metadata including genres, bitrates, listener counts, and locations."
              delay={0.2}
            />
            <FeatureCard 
              icon={<BarChart3 className="w-8 h-8 text-indigo-400" />}
              title="Interactive Dashboard"
              description="Visualize complex data structures through an intuitive, responsive interface designed for both quick insights and deep research."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section id="features" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20">
                <Activity className="w-4 h-4" />
                Data Processing
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                Structure & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Processing</span>
              </h2>
              <p className="text-zinc-400 mb-8 leading-relaxed text-lg">
                The MIRAGE online dashboard is built to handle the immense scale of the MIRAGE MetaCorpus. It processes raw metadata streams from global radio directories, standardizing and indexing the information for rapid querying.
              </p>
              <ul className="space-y-6">
                {[
                  { title: 'Real-time Ingestion', desc: 'Continuous metadata normalization from global streams.' },
                  { title: 'Advanced Filtering', desc: 'Slice data by genre, country, language, and technical specs.' },
                  { title: 'Dynamic Visualization', desc: 'Charts and maps that update instantly based on query parameters.' }
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.4 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-1 bg-zinc-900 border border-white/10 p-2 rounded-xl group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors">
                      <Activity className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                      <p className="text-zinc-500 mt-1">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, type: "spring" }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl border border-white/10 bg-zinc-900/80 backdrop-blur-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] group perspective-1000"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5" />
              
              {/* Abstract Dashboard UI Representation */}
              <div className="absolute inset-0 p-6 flex flex-col gap-4">
                {/* Header mock */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="h-6 w-32 bg-white/5 rounded-full" />
                </div>

                <div className="flex gap-4 h-1/3 mt-2">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 bg-zinc-950/50 rounded-2xl border border-white/5 p-5 flex flex-col justify-between relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl" />
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center border border-cyan-500/20">
                      <Headphones className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-3xl font-bold text-white"
                      >
                        42,891
                      </motion.div>
                      <div className="text-xs text-cyan-400/80 uppercase tracking-wider font-semibold mt-1">Active Stations</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 bg-zinc-950/50 rounded-2xl border border-white/5 p-5 flex flex-col justify-between relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/20">
                      <Map className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">194</div>
                      <div className="text-xs text-blue-400/80 uppercase tracking-wider font-semibold mt-1">Countries Tracked</div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="flex-1 bg-zinc-950/50 rounded-2xl border border-white/5 p-5 relative overflow-hidden flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold text-zinc-300">Global Distribution</div>
                    <div className="w-16 h-4 bg-white/5 rounded-full" />
                  </div>
                  
                  {/* Abstract Animated Chart */}
                  <div className="absolute inset-0 top-16 opacity-60 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/20 to-transparent pointer-events-none" />
                  <div className="flex-1 w-full flex items-end justify-between gap-2 px-2 pb-2">
                    {[40, 70, 45, 90, 65, 30, 85, 50, 75, 60, 80, 55].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: "10%" }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: false }}
                        transition={{ 
                          duration: 1.5, 
                          delay: i * 0.05,
                          type: "spring",
                          bounce: 0.4
                        }}
                        className="w-full bg-gradient-to-t from-cyan-500 to-blue-400 rounded-t-md relative group"
                      >
                        <motion.div 
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                          className="absolute -top-1 left-0 right-0 h-1 bg-white rounded-full blur-[2px]"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Export Section */}
      <section id="data" className="py-32 relative border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900/80" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-24 h-24 mx-auto bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl flex items-center justify-center border border-cyan-500/30 mb-8 shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              <Download className="w-10 h-10 text-cyan-400" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              MetaData Access & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Export</span>
            </h2>
            <p className="text-zinc-400 mb-12 leading-relaxed text-xl max-w-2xl mx-auto">
              The MIRAGE MetaCorpus is designed for researchers. Export filtered datasets in standard formats for offline analysis, machine learning applications, or integration with other research tools.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {[
                'station_id', 'genre_tags', 'bitrate', 'codec', 'geo_lat', 'geo_lon', 'language', 'listener_count'
              ].map((tag, i) => (
                <motion.div 
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -5, borderColor: "rgba(34,211,238,0.5)", backgroundColor: "rgba(34,211,238,0.1)" }}
                  className="px-5 py-3 rounded-xl bg-zinc-950/50 border border-white/10 text-sm font-mono text-cyan-100 shadow-lg backdrop-blur-sm cursor-default transition-all"
                >
                  <span className="text-cyan-500 mr-2">#</span>{tag}
                </motion.div>
              ))}
            </div>

            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 211, 238, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="https://zenodo.org/records/12786202"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-zinc-800 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-700 transition-all border border-zinc-600 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              <Database className="w-5 h-5 text-cyan-400" />
              Download Full MetaCorpus on Zenodo
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-zinc-950 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-24 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <Radio className="w-6 h-6 text-cyan-400" />
            <span className="text-white">MIRAGE-MC</span>
          </div>
          <div className="text-zinc-500 text-sm text-center md:text-left">
            Based on the research paper <br className="block sm:hidden" />
            <a href="https://arxiv.org/html/2502.05250v1" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors font-medium">arXiv:2502.05250v1</a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] hover:bg-zinc-900/80 backdrop-blur-sm relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-2xl -mr-10 -mt-10 transition-opacity opacity-0 group-hover:opacity-100" />
      
      <div className="w-16 h-16 rounded-2xl bg-zinc-950 flex items-center justify-center mb-8 border border-white/5 group-hover:border-cyan-500/30 transition-colors shadow-inner relative z-10">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white relative z-10">{title}</h3>
      <p className="text-zinc-400 leading-relaxed text-base relative z-10 group-hover:text-zinc-300 transition-colors">
        {description}
      </p>
    </motion.div>
  );
}
