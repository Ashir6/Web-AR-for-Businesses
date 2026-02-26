/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Palette, 
  Pointer, 
  Box, 
  BookOpen, 
  Cpu, 
  Rotate3d, 
  Layers, 
  Gamepad2, 
  Megaphone, 
  ScanQrCode, 
  Maximize, 
  Rocket,
  QrCode
} from "lucide-react";

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-white/60 hover:text-terra transition-colors text-sm font-medium"
  >
    {children}
  </a>
);

const FeatureItem = ({ icon: Icon, children, colorClass = "bg-terra/20 border-terra/30 text-terra" }: { icon: any; children: React.ReactNode; colorClass?: string }) => (
  <motion.li 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-4 text-white/80 group"
  >
    <div className={`size-10 rounded-xl border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${colorClass}`}>
      <Icon size={20} />
    </div>
    <span className="font-medium">{children}</span>
  </motion.li>
);

const ARViewfinder = ({ children, imageUrl }: { children?: React.ReactNode; imageUrl?: string }) => (
  <div className="glass-card rounded-[2.5rem] p-4 relative overflow-hidden group">
    <div className="aspect-square w-full bg-colony-dark rounded-[2rem] relative overflow-hidden border border-white/5">
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt="AR Scene" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
      )}
      <div className="absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(26,15,10,0.4)_100%)]"></div>
      
      {/* Viewfinder Corners */}
      <div className="ar-corner top-8 left-8 border-r-0 border-b-0"></div>
      <div className="ar-corner top-8 right-8 border-l-0 border-b-0"></div>
      <div className="ar-corner bottom-8 left-8 border-r-0 border-t-0"></div>
      <div className="ar-corner bottom-8 right-8 border-l-0 border-t-0"></div>
      
      {children}
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-terra selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="size-8 text-terra">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-white font-display text-xl font-bold tracking-tight">Namespace Systems</h2>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            <NavItem href="#configurators">Configurators</NavItem>
            <NavItem href="#guides">Living Guides</NavItem>
            <NavItem href="#media">Augmented Media</NavItem>
          </nav>
          
          <button className="ares-button h-10 px-6 rounded-lg text-sm font-bold tracking-wide">
            Start Mission
          </button>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-terra/30 bg-terra/10 mb-8 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-terra animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-terra">Standardized Web AR Protocol 2.0</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="font-display text-6xl md:text-8xl font-bold mb-8 leading-[0.9] text-white tracking-tighter"
            >
              Engagement<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-terra via-ares-orange to-ares-gold">Reimagined</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12"
            >
              Turn standard business functions into interactive brand experiences that users actually enjoy.
            </motion.p>
            
            <div className="flex justify-center gap-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-terra/50 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Tier 01 - Configurators */}
        <section id="configurators" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <ARViewfinder imageUrl="https://picsum.photos/seed/config/800/800">
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="relative drop-shadow-[0_20px_60px_rgba(255,107,43,0.3)]"
                    >
                      <img 
                        src="https://picsum.photos/seed/rover/600/400" 
                        alt="3D Component" 
                        className="w-full h-auto rounded-xl"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-black/40 blur-2xl rounded-full"></div>
                    </motion.div>
                  </div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-40">
                    <div className="bg-colony-dark/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 flex gap-6">
                      <div className="size-8 rounded-full bg-terra border-2 border-white ring-4 ring-terra/20 cursor-pointer"></div>
                      <div className="size-8 rounded-full bg-ares-copper border-2 border-white/20 cursor-pointer"></div>
                      <div className="size-8 rounded-full bg-slate-500 border-2 border-white/20 cursor-pointer"></div>
                    </div>
                  </div>
                </ARViewfinder>
              </motion.div>

              <div className="order-1 lg:order-2">
                <span className="text-terra font-bold tracking-widest uppercase text-sm mb-4 block">Tier 01</span>
                <h2 className="font-display text-5xl font-bold text-white mb-6 leading-tight">Visual Configurators</h2>
                <ul className="space-y-6 mb-12">
                  <FeatureItem icon={Palette}>Real-time Color & Spec Swaps</FeatureItem>
                  <FeatureItem icon={Pointer}>Interactive Feature Discovery</FeatureItem>
                  <FeatureItem icon={Box}>True-to-Scale Visualization</FeatureItem>
                </ul>
                <div className="flex flex-wrap items-center gap-6">
                  <button className="flex items-center gap-4 ares-button px-8 py-5 rounded-2xl font-bold">
                    <ScanQrCode size={20} />
                    Launch AR Configurator
                  </button>
                  <div className="flex items-center gap-4 p-3 pr-5 glass-card rounded-2xl border-terra/30">
                    <div className="size-14 bg-white p-1 rounded-xl flex items-center justify-center">
                      <QrCode className="text-colony-dark" size={40} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-tighter text-terra leading-tight">Scan for<br/>Web AR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tier 02 - Living User Guides */}
        <section id="guides" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-ares-orange font-bold tracking-widest uppercase text-sm mb-4 block">Tier 02</span>
                <h2 className="font-display text-5xl font-bold text-white mb-6 leading-tight">Living User Guides</h2>
                <ul className="space-y-6 mb-12">
                  <FeatureItem icon={BookOpen} colorClass="bg-ares-orange/20 border-ares-orange/30 text-ares-orange">3D Quick Start Visuals</FeatureItem>
                  <FeatureItem icon={Cpu} colorClass="bg-ares-orange/20 border-ares-orange/30 text-ares-orange">Interactive Part Highlights</FeatureItem>
                  <FeatureItem icon={Rotate3d} colorClass="bg-ares-orange/20 border-ares-orange/30 text-ares-orange">Step-by-Step Spatial Tours</FeatureItem>
                </ul>
                <div className="flex flex-wrap items-center gap-6">
                  <button className="flex items-center gap-4 ares-button px-8 py-5 rounded-2xl font-bold">
                    <Maximize size={20} />
                    Scan Machine to Start Guide
                  </button>
                  <div className="flex items-center gap-4 p-3 pr-5 glass-card rounded-2xl border-ares-orange/30">
                    <div className="size-14 bg-white p-1 rounded-xl flex items-center justify-center">
                      <QrCode className="text-colony-dark" size={40} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-tighter text-ares-orange leading-tight">Scan for<br/>Web AR</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <ARViewfinder imageUrl="https://picsum.photos/seed/guide/800/800">
                  <div className="absolute inset-0">
                    {/* Hotspot 1 */}
                    <div className="absolute top-1/3 left-1/4">
                      <div className="size-6 bg-terra rounded-full flex items-center justify-center animate-pulse shadow-[0_0_20px_#FF6B2B]">
                        <div className="size-2 bg-white rounded-full"></div>
                      </div>
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="absolute left-8 -top-12 glass-morphism p-4 rounded-2xl w-52 bg-colony-dark/95 border-terra/40"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="size-4 rounded bg-terra flex items-center justify-center text-[8px] font-bold text-white">01</span>
                          <p className="text-[10px] font-bold text-white uppercase tracking-wider">Check Fuel Line</p>
                        </div>
                        <p className="text-[9px] text-white/60">Ensure the high-pressure connector is seated properly.</p>
                      </motion.div>
                    </div>
                    
                    {/* Hotspot 2 */}
                    <div className="absolute bottom-1/4 right-1/3">
                      <div className="size-6 bg-ares-orange rounded-full flex items-center justify-center shadow-[0_0_20px_#FF8C42]">
                        <div className="size-2 bg-white rounded-full"></div>
                      </div>
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="absolute left-8 -top-8 glass-morphism p-4 rounded-2xl w-48 bg-colony-dark/95 border-ares-orange/40"
                      >
                        <p className="text-[10px] font-bold text-ares-orange mb-1 uppercase tracking-wider">Heat Sync Status</p>
                        <div className="h-1 w-full bg-white/10 rounded overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "80%" }}
                            className="h-full bg-ares-orange"
                          ></motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </ARViewfinder>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tier 03 - Augmented Media */}
        <section id="media" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <ARViewfinder>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-96 border-2 border-dashed border-white/20 rounded-xl relative flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-terra/10 blur-2xl"></div>
                      <div className="relative z-10 text-center scale-125">
                        <motion.div 
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="size-20 bg-terra/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-terra/50"
                        >
                          <Rocket className="text-terra" size={40} />
                        </motion.div>
                        <h4 className="text-white font-display text-2xl font-bold mb-2">MARS BASE 01</h4>
                        <p className="text-terra text-[10px] font-bold tracking-[0.3em] uppercase">Now Boarding</p>
                        <div className="mt-8 flex gap-2 justify-center">
                          <div className="size-1 w-8 bg-terra rounded-full"></div>
                          <div className="size-1 w-2 bg-white/20 rounded-full"></div>
                          <div className="size-1 w-2 bg-white/20 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ARViewfinder>
              </motion.div>

              <div className="order-1 lg:order-2">
                <span className="text-terra font-bold tracking-widest uppercase text-sm mb-4 block">Tier 03</span>
                <h2 className="font-display text-5xl font-bold text-white mb-6 leading-tight">Augmented Media</h2>
                <ul className="space-y-6 mb-12">
                  <FeatureItem icon={Layers}>Interactive Billboards & Signage</FeatureItem>
                  <FeatureItem icon={Gamepad2}>Gamified Print Campaigns</FeatureItem>
                  <FeatureItem icon={Megaphone}>Viral Wow Moments</FeatureItem>
                </ul>
                <div className="flex flex-wrap items-center gap-6">
                  <button className="flex items-center gap-4 ares-button px-8 py-5 rounded-2xl font-bold">
                    <Rocket size={20} />
                    Launch AR Gateway
                  </button>
                  <div className="flex items-center gap-4 p-3 pr-5 glass-card rounded-2xl border-terra/30">
                    <div className="size-14 bg-white p-1 rounded-xl flex items-center justify-center">
                      <QrCode className="text-colony-dark" size={40} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-tighter text-terra leading-tight">Scan for<br/>Web AR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 border-t border-white/5 relative overflow-hidden bg-white/5 backdrop-blur-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,107,43,0.25)_0%,rgba(26,15,10,0)_70%)] opacity-30"></div>
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8">Ready to Terraform?</h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
              Bring your static assets to the Namespace lab. We convert CAD, PDF, and Print into kinetic Web AR experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <input 
                className="w-full sm:w-80 bg-colony-dark/80 border border-white/20 text-white px-8 py-5 rounded-2xl outline-none focus:ring-2 focus:ring-terra backdrop-blur-md transition-all" 
                placeholder="Mission Contact Email" 
                type="email"
              />
              <button className="w-full sm:w-auto ares-button font-bold px-10 py-5 rounded-2xl">
                Initiate Transformation
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-colony-dark border-t border-white/5 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 text-white mb-8">
                <div className="size-6 text-terra">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                  </svg>
                </div>
                <span className="font-display font-bold text-xl">Namespace</span>
              </div>
              <p className="text-white/40 text-sm max-w-xs mb-8">
                The spatial interactivity layer for enterprise missions. Engagement Reimagined via Zero-App Web AR.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Service Tiers</h3>
              <ul className="space-y-4">
                <li><a className="text-white/40 hover:text-terra text-sm transition-colors" href="#configurators">Configurators</a></li>
                <li><a className="text-white/40 hover:text-terra text-sm transition-colors" href="#guides">Guides</a></li>
                <li><a className="text-white/40 hover:text-terra text-sm transition-colors" href="#media">Media</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/20 text-xs font-display">© 2024 Namespace Systems Inc. Mars Orbit Division.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
