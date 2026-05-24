import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, Volume2, VolumeX, Info, X, ChevronLeft, ChevronRight, ArrowDown, Compass, Lightbulb, LightbulbOff } from 'lucide-react';
import { creatures, type Creature } from '../data/creatures';
import './OceanExplorer.css';

// Depth to pixel conversion factor (1 meter = 15 pixels)
const DEPTH_SCALE = 15;
const MAX_DEPTH = 10924;

// Ocean Zones definition
const ZONES = [
  {
    id: 'epipelagic',
    name: 'Epipelajik Bölge',
    nameTr: 'Güneş Işığı Bölgesi (Epipelagic)',
    range: '0m - 200m',
    startDepth: 0,
    endDepth: 200,
    color: '#38bdf8',
    description: 'Deniz yaşamının %90\'ının barındığı, güneş ışığının ulaştığı aydınlık katman.'
  },
  {
    id: 'mesopelagic',
    name: 'Mezopelajik Bölge',
    nameTr: 'Alacakaranlık Bölgesi (Mesopelagic)',
    range: '200m - 1000m',
    startDepth: 200,
    endDepth: 1000,
    color: '#818cf8',
    description: 'Işığın çok zayıf olduğu, fotosentezin bittiği ve tuhaf uyum sağlamış canlıların başladığı bölge.'
  },
  {
    id: 'bathypelagic',
    name: 'Batipelajik Bölge',
    nameTr: 'Gece Yarısı Bölgesi (Bathypelagic)',
    range: '1000m - 4000m',
    startDepth: 1000,
    endDepth: 4000,
    color: '#c084fc',
    description: 'Tamamen karanlık olan, sadece canlıların kendi ürettiği biyolüminesans ışıkların görüldüğü katman.'
  },
  {
    id: 'abyssopelagic',
    name: 'Abisopelajik Bölge',
    nameTr: 'Abis Bölgesi (Abyssopelagic)',
    range: '4000m - 6000m',
    startDepth: 4000,
    endDepth: 6000,
    color: '#fb7185',
    description: 'Sıfıra yakın sıcaklık, ezici basınç ve besin kıtlığı ile karakterize edilen okyanus tabanı düzlükleri.'
  },
  {
    id: 'hadalpelagic',
    name: 'Hadalpelajik Bölge',
    nameTr: 'Hadal Bölgesi (Hadalpelagic)',
    range: '6000m - 10924m',
    startDepth: 6000,
    endDepth: 10924,
    color: '#f43f5e',
    description: 'Okyanus çukurlarının ve kanyonlarının oluşturduğu, mitolojideki yeraltı dünyası Hades\'ten adını alan en uç derinlik.'
  }
];

// Color stops for scroll background interpolation (R, G, B) representing scientific ocean light penetration
const COLOR_STOPS = [
  { depth: 0, color: [14, 116, 144] },       // 0m: Photic zone surface - beautiful teal-cyan
  { depth: 50, color: [3, 105, 161] },       // 50m: Mid-photic zone - rich sky blue
  { depth: 120, color: [7, 89, 133] },       // 120m: Lower-photic zone - deep sea blue
  { depth: 200, color: [3, 50, 95] },        // 200m: Twilight Zone start - deep navy
  { depth: 500, color: [2, 25, 60] },        // 500m: Deep Twilight - very dark indigo-blue
  { depth: 1000, color: [2, 6, 23] },        // 1000m: Midnight Zone start - almost pitch black
  { depth: 1800, color: [0, 0, 0] },         // 1800m: Complete blackness
  { depth: MAX_DEPTH, color: [0, 0, 0] }
];

export const OceanExplorer: React.FC = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollDepth, setScrollDepth] = useState(0);
  const [selectedCreature, setSelectedCreature] = useState<Creature | null>(null);
  const [activeCarouselIdx, setActiveCarouselIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isFlashlightMode, setIsFlashlightMode] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollSpeed, setScrollSpeed] = useState(0);
  
  const lastScrollTimeRef = useRef(Date.now());
  const lastScrollPosRef = useRef(0);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const droneNodeRef = useRef<AudioBufferSourceNode | null>(null);
  const droneGainRef = useRef<GainNode | null>(null);
  const sonarIntervalRef = useRef<number | null>(null);
  const turbulenceRef = useRef<SVGFETurbulenceElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Measure window height for depth calculations
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll listener tracking speed for turbulence physics
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const currentScroll = container.scrollTop;
      
      const now = Date.now();
      const timeDiff = Math.max(1, now - lastScrollTimeRef.current);
      const scrollDiff = Math.abs(currentScroll - lastScrollPosRef.current);
      
      const speed = (scrollDiff / timeDiff) * 15;
      setScrollSpeed(Math.min(30, speed));
      
      lastScrollTimeRef.current = now;
      lastScrollPosRef.current = currentScroll;
      
      // Depth begins after scrolling past the header screen (height is 1 window height)
      const calculatedDepth = Math.max(0, Math.floor((currentScroll - windowHeight) / DEPTH_SCALE));
      setScrollDepth(Math.min(MAX_DEPTH, calculatedDepth));
    };
    
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [windowHeight]);

  // Decay scroll speed over time
  useEffect(() => {
    let frameId: number;
    const decay = () => {
      setScrollSpeed(prev => Math.max(0, prev - 0.8));
      frameId = requestAnimationFrame(decay);
    };
    frameId = requestAnimationFrame(decay);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Click outside search listener to close autocomplete
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Mouse position tracker for Flashlight Mode
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate SVG turbulence baseFrequency for real-time liquid ripple
  useEffect(() => {
    let animationFrameId: number;
    let time = 0;
    
    const animate = () => {
      time += 0.015; // slow, organic sea wave speed
      if (turbulenceRef.current) {
        // Modulate frequency slightly to create moving water distortion
        const baseFreqX = 0.012 + Math.sin(time * 0.4) * 0.003;
        const baseFreqY = 0.035 + Math.cos(time * 0.3) * 0.005;
        turbulenceRef.current.setAttribute('baseFrequency', `${baseFreqX} ${baseFreqY}`);
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Background Color Interpolation based on depth
  useEffect(() => {
    const getInterpolatedColor = (depth: number): string => {
      // Find the two stops
      let startStop = COLOR_STOPS[0];
      let endStop = COLOR_STOPS[COLOR_STOPS.length - 1];

      for (let i = 0; i < COLOR_STOPS.length - 1; i++) {
        if (depth >= COLOR_STOPS[i].depth && depth <= COLOR_STOPS[i+1].depth) {
          startStop = COLOR_STOPS[i];
          endStop = COLOR_STOPS[i+1];
          break;
        }
      }

      const depthRange = endStop.depth - startStop.depth;
      const factor = depthRange === 0 ? 0 : (depth - startStop.depth) / depthRange;

      const r = Math.round(startStop.color[0] + factor * (endStop.color[0] - startStop.color[0]));
      const g = Math.round(startStop.color[1] + factor * (endStop.color[1] - startStop.color[1]));
      const b = Math.round(startStop.color[2] + factor * (endStop.color[2] - startStop.color[2]));

      return `rgb(${r}, ${g}, ${b})`;
    };

    const bgEl = document.getElementById('ocean-bg');
    if (bgEl) {
      bgEl.style.backgroundColor = getInterpolatedColor(scrollDepth);
    }
  }, [scrollDepth]);

  // Determine current active zone
  const currentZone = useMemo(() => {
    return ZONES.find(zone => scrollDepth >= zone.startDepth && scrollDepth <= zone.endDepth) || ZONES[0];
  }, [scrollDepth]);

  // Sound Engine (Web Audio API Synthesizer)
  const toggleAudio = () => {
    if (isAudioPlaying) {
      // Stop Audio
      if (droneNodeRef.current) {
        try { droneNodeRef.current.stop(); } catch (e) {}
        droneNodeRef.current.disconnect();
        droneNodeRef.current = null;
      }
      if (sonarIntervalRef.current) {
        window.clearInterval(sonarIntervalRef.current);
        sonarIntervalRef.current = null;
      }
      setIsAudioPlaying(false);
    } else {
      // Start/Resume Audio
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioContextRef.current;

      const startAudioEngine = () => {
        // Initialize Ambient Engine rumble/waves
        const bufferSize = 2 * ctx.sampleRate;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1; // White noise
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        // Filter to keep deep frequencies (rumble) audible on normal speakers
        const lowpass = ctx.createBiquadFilter();
        lowpass.type = 'lowpass';
        lowpass.frequency.value = 130; // slightly higher cutoff to be audible on laptops

        // Volume Gain Node (Base volume)
        const gainNode = ctx.createGain();
        gainNode.gain.value = 0.25;

        // Swell LFO to simulate deep ocean current swells
        const lfo = ctx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.value = 0.08; // swell every 12.5 seconds
        
        const lfoGain = ctx.createGain();
        lfoGain.gain.value = 0.12; // Modulate volume by +/- 12%

        // Connect LFO graph to modulate main volume
        lfo.connect(lfoGain);
        lfoGain.connect(gainNode.gain);
        lfo.start();

        whiteNoise.connect(lowpass);
        lowpass.connect(gainNode);
        gainNode.connect(ctx.destination);
        whiteNoise.start();

        droneNodeRef.current = whiteNoise;
        droneGainRef.current = gainNode;

        // Trigger first Sonar Ping
        triggerSonarPing();

        // Schedule subsequent Sonar Pings (every 14s)
        if (sonarIntervalRef.current) {
          window.clearInterval(sonarIntervalRef.current);
        }
        sonarIntervalRef.current = window.setInterval(() => {
          triggerSonarPing();
        }, 14000);

        setIsAudioPlaying(true);
      };

      if (ctx.state === 'suspended') {
        ctx.resume().then(() => {
          startAudioEngine();
        });
      } else {
        startAudioEngine();
      }
    }
  };

  const triggerSonarPing = () => {
    const ctx = audioContextRef.current;
    if (!ctx) return;

    // Double-check if suspended and resume if needed
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const now = ctx.currentTime;
    
    // Sonar Sound Generator
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now); // A5 note (piercing ping)
    osc.frequency.exponentialRampToValueAtTime(587.33, now + 1.2); // D5 note
    
    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);
    
    const delay = ctx.createDelay();
    delay.delayTime.value = 0.35; // 350ms delay
    
    const delayGain = ctx.createGain();
    delayGain.gain.value = 0.25; // 25% feedback
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    gain.connect(delay);
    delay.connect(delayGain);
    delayGain.connect(ctx.destination);
    delayGain.connect(delay);
    
    osc.start(now);
    osc.stop(now + 1.8);
  };

  // Cleanup audio nodes on unmount
  useEffect(() => {
    return () => {
      if (droneNodeRef.current) {
        try { droneNodeRef.current.stop(); } catch (e) {}
      }
      if (sonarIntervalRef.current) {
        window.clearInterval(sonarIntervalRef.current);
      }
    };
  }, []);

  // Filtered search results
  const filteredCreatures = useMemo(() => {
    if (!queryClean(searchQuery)) return [];
    return creatures.filter(c => 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.nameTr.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  function queryClean(q: string) {
    return q.trim().length > 0;
  }

  // Smooth scroll to a specific depth
  const scrollToDepth = (depth: number) => {
    const scrollTarget = windowHeight + depth * DEPTH_SCALE;
    containerRef.current?.scrollTo({
      top: scrollTarget,
      behavior: 'smooth'
    });
    setSearchQuery('');
    setIsSearchFocused(false);
    
    // Trigger a sonar ping on navigation
    if (isAudioPlaying) {
      triggerSonarPing();
    }
  };

  // Open Modal Details handler
  const openDetails = (creature: Creature) => {
    setSelectedCreature(creature);
    setActiveCarouselIdx(0);
  };

  // Particle generation (bubbles and marine snow)
  const bubbles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: `bubble-${i}`,
      left: `${Math.random() * 95}%`,
      size: `${Math.random() * 8 + 4}px`,
      delay: `${Math.random() * 10}s`,
      duration: `${Math.random() * 8 + 8}s`
    }));
  }, []);

  const marineSnowParticles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: `snow-${i}`,
      left: `${Math.random() * 95}%`,
      size: `${Math.random() * 3 + 1}px`,
      delay: `${Math.random() * 12}s`,
      duration: `${Math.random() * 10 + 10}s`
    }));
  }, []);

  // Dynamic telemetry calculations
  const calculateTemperature = (d: number) => {
    if (d < 1000) {
      return (22 - (d / 1000) * 18).toFixed(1);
    } else {
      const factor = (d - 1000) / (MAX_DEPTH - 1000);
      return (4 - factor * 2.8).toFixed(1);
    }
  };

  const calculatePressure = (d: number) => {
    return (1 + d / 10).toLocaleString('tr-TR', { maximumFractionDigits: 0 });
  };

  // Dynamic bioluminescent sparks generator
  const biolumSparks = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => {
      const depth = Math.floor(Math.random() * 7800) + 3000;
      return {
        id: `biolum-${i}`,
        top: `${depth * DEPTH_SCALE}px`,
        left: `${Math.random() * 90 + 5}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${Math.random() * 6 + 4}s`,
        color: i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#00ffcc' : '#c084fc' // cyan, teal, purple
      };
    });
  }, []);

  // Drifting background silhouettes
  const driftingFauna = useMemo(() => [
    {
      id: 'fauna-jelly-1',
      depth: 300,
      left: '-150px',
      type: 'jellyfish',
      speed: '25s',
      delay: '0s',
      scale: 1.2,
      opacity: 0.06
    },
    {
      id: 'fauna-jelly-2',
      depth: 750,
      left: '110%',
      type: 'jellyfish',
      speed: '30s',
      delay: '5s',
      scale: 0.9,
      opacity: 0.05,
      reverse: true
    },
    {
      id: 'fauna-squid',
      depth: 1800,
      left: '-200px',
      type: 'squid',
      speed: '35s',
      delay: '2s',
      scale: 1.5,
      opacity: 0.04
    },
    {
      id: 'fauna-whale',
      depth: 120,
      left: '110%',
      type: 'whale',
      speed: '45s',
      delay: '8s',
      scale: 2.0,
      opacity: 0.04,
      reverse: true
    },
    {
      id: 'fauna-fish-1',
      depth: 4800,
      left: '-100px',
      type: 'fish',
      speed: '22s',
      delay: '4s',
      scale: 0.7,
      opacity: 0.05
    }
  ], []);

  return (
    <div 
      className="ocean-container" 
      ref={containerRef}
      style={{ overflowY: selectedCreature ? 'hidden' : 'auto' }}
    >
      {/* SVG Liquid Ripple Filter Shader */}
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <filter id="underwater-ripple">
          <feTurbulence
            ref={turbulenceRef}
            type="fractalNoise"
            baseFrequency="0.012 0.035"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={Math.max(0, (24 + scrollSpeed) * (1 - scrollDepth / 800))}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* Background Gradient */}
      <div id="ocean-bg" className="ocean-bg" />
      
      {/* Water Ripple Caustics (representing wave refraction) */}
      <div className="caustics-overlay" style={{ opacity: Math.max(0, 1 - scrollDepth / 300) }} />

      {/* Depth Pressure Vignette (simulating fading light tunnel) */}
      <div className="depth-vignette" />

      {/* Flashlight Overlay Mask */}
      <div 
        className="flashlight-overlay"
        style={{
          opacity: (isFlashlightMode && scrollDepth >= 1000) ? 1 : 0,
          background: `radial-gradient(circle 180px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(2, 6, 23, 0.7) 60%, rgba(2, 6, 23, 0.98) 100%)`
        }}
      />
      
      {/* Sunlight Ray Overlays */}
      <div className="sunlight-rays" style={{ opacity: Math.max(0, 1 - scrollDepth / 300) }} />

      {/* Floating Ambient Particles */}
      <div className="particles-container">
        {/* Bubbles float in upper zones */}
        {scrollDepth < 1500 && bubbles.map(b => (
          <div
            key={b.id}
            className="bubble"
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              animationDelay: b.delay,
              animationDuration: b.duration
            }}
          />
        ))}
        {/* Marine snow falls in Midnight zone and below */}
        {scrollDepth > 800 && marineSnowParticles.map(s => (
          <div
            key={s.id}
            className="marine-snow"
            style={{
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
              animationDuration: s.duration
            }}
          />
        ))}
      </div>

      {/* HUD: Depth Indicator */}
      <div 
        className="hud-depth-tracker"
        style={{
          borderColor: currentZone.color,
          boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.4), 0 0 15px ${currentZone.color}25`
        }}
      >
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="hud-depth-number" style={{ color: '#fff' }}>
            {scrollDepth.toLocaleString('tr-TR')} m
          </div>
          <div className="hud-depth-label">
            {(Math.round(scrollDepth * 3.28084)).toLocaleString('tr-TR')} ft
          </div>
          <div className="hud-depth-zone" style={{ color: currentZone.color }}>
            {currentZone.name}
          </div>
          
          {/* Submarine Telemetry Sensors */}
          <div className="hud-sensors">
            <div className="hud-sensor-item">
              <span className="hud-sensor-lbl">SICAKLIK</span>
              <span className="hud-sensor-val temp">{calculateTemperature(scrollDepth)} °C</span>
            </div>
            <div className="hud-sensor-item">
              <span className="hud-sensor-lbl">BASINÇ</span>
              <span className="hud-sensor-val press">{calculatePressure(scrollDepth)} atm</span>
            </div>
          </div>
        </div>
      </div>

      {/* HUD: Controls Group (Audio & Flashlight) */}
      <div className="hud-controls-group">
        <button 
          className={`hud-control-btn ${isAudioPlaying ? 'active' : ''}`} 
          onClick={toggleAudio}
          style={{
            borderColor: currentZone.color,
            boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.4), 0 0 15px ${currentZone.color}25`,
            color: currentZone.color
          }}
          title={isAudioPlaying ? "Sesi Kapat" : "Ambiyans Sesini Aç"}
        >
          {isAudioPlaying ? (
            <>
              <Volume2 size={22} />
              <div className="sonar-pulse" style={{ borderColor: currentZone.color }} />
            </>
          ) : (
            <VolumeX size={22} />
          )}
        </button>
        <button 
          className={`hud-control-btn ${isFlashlightMode ? 'active' : ''}`} 
          onClick={() => setIsFlashlightMode(!isFlashlightMode)}
          style={{
            borderColor: currentZone.color,
            boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.4), 0 0 15px ${currentZone.color}25`,
            color: currentZone.color,
            opacity: scrollDepth >= 1000 ? 1 : 0,
            pointerEvents: scrollDepth >= 1000 ? 'auto' : 'none',
            transform: scrollDepth >= 1000 ? 'scale(1)' : 'scale(0.8)',
            transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
          title={isFlashlightMode ? "Feneri Kapat" : "Fener Modunu Aç"}
        >
          {isFlashlightMode ? <Lightbulb size={22} /> : <LightbulbOff size={22} />}
        </button>
      </div>

      {/* HUD: Progress Indicator Map */}
      <div 
        className="hud-progress-container"
        style={{
          borderColor: currentZone.color,
          boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.4), 0 0 15px ${currentZone.color}15`
        }}
      >
        <div className="progress-label">Mariana Çukuru İlerlemesi</div>
        <div className="progress-bar-bg">
          <div 
            className="progress-bar-fill" 
            style={{ 
              width: `${(scrollDepth / MAX_DEPTH) * 100}%`,
              background: currentZone.color
            }}
          />
        </div>
      </div>

      {/* HUD: Floating Search Engine */}
      <div className="hud-search-container" ref={searchContainerRef}>
        <div 
          className="hud-search-bar"
          style={{
            borderColor: currentZone.color,
            boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.4), 0 0 15px ${currentZone.color}20`
          }}
        >
          <Search size={20} style={{ color: currentZone.color }} />
          <input
            type="text"
            placeholder="Bir deniz canlısı veya derinlik ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
              <X size={16} />
            </button>
          )}
        </div>
        
        {isSearchFocused && filteredCreatures.length > 0 && (
          <div className="hud-search-results">
            {filteredCreatures.map(c => (
              <div
                key={c.id}
                className="search-result-item"
                onClick={() => scrollToDepth(c.depth)}
              >
                <div>
                  <div className="search-result-name">{c.name} ({c.nameTr})</div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                    {ZONES.find(z => c.depth >= z.startDepth && c.depth <= z.endDepth)?.name}
                  </div>
                </div>
                <div className="search-result-depth">{c.depth} m</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* HUD: Submarine Depth Gauge Navigator Sidebar */}
      <div className="hud-depth-gauge-container">
        <div className="depth-gauge-rail">
          <div 
            className="depth-gauge-fill" 
            style={{ 
              height: `${(scrollDepth / MAX_DEPTH) * 100}%`
            }}
          />
          <div 
            className="depth-gauge-marker" 
            style={{ 
              top: `${(scrollDepth / MAX_DEPTH) * 100}%`,
              borderColor: currentZone.color,
              boxShadow: `0 0 15px ${currentZone.color}`
            }}
          />
          
          {ZONES.map(z => {
            const isActive = scrollDepth >= z.startDepth && scrollDepth <= z.endDepth;
            const nodePos = (z.startDepth / MAX_DEPTH) * 100;
            return (
              <div
                key={z.id}
                className={`depth-gauge-node ${isActive ? 'active' : ''}`}
                style={{ top: `${nodePos}%` }}
                onClick={() => scrollToDepth(z.startDepth)}
              >
                <div className="depth-gauge-node-label">
                  {z.name}
                </div>
                <div 
                  className="depth-gauge-node-dot" 
                  style={{ backgroundColor: isActive ? z.color : undefined }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Intro Header Section (0m) */}
      <header className="ocean-header">
        <Compass size={64} className="text-sky-400 mb-6 animate-pulse" />
        <h1>OKYANUSUN DERİNLİKLERİ</h1>
        <p>
          Mavi suların yüzeyinden Mariana Çukuru'nun karanlık ve ezici tabanına doğru bir yolculuğa çıkın.
          Aşağı kaydırdıkça deniz canlılarını ve derin deniz batıklarını keşfedeceksiniz.
        </p>
        <div className="scroll-indicator" onClick={() => scrollToDepth(50)}>
          <span>Keşfetmek İçin Aşağı Kaydırın</span>
          <ArrowDown size={20} />
        </div>
      </header>

      {/* Main Ocean Column Spacer (Height is calculated in pixels based on MAX_DEPTH * SCALE) */}
      <main className="ocean-column" style={{ height: `${(MAX_DEPTH + 120) * DEPTH_SCALE}px` }}>
        {/* Visual Cable line in middle */}
        <div className="ocean-cable" />

        {/* Drifting Background Fauna Silhouettes */}
        {driftingFauna.map(f => (
          <div
            key={f.id}
            className={`drifting-fauna ${f.type} ${f.reverse ? 'reverse' : ''}`}
            style={{
              top: `${f.depth * DEPTH_SCALE}px`,
              animationDuration: f.speed,
              animationDelay: f.delay,
              opacity: f.opacity
            }}
          >
            <div style={{ transform: `scale(${f.scale}) ${f.reverse ? 'scaleX(-1)' : ''}` }}>
              {f.type === 'jellyfish' && (
                <svg width="80" height="120" viewBox="0 0 80 120" fill="currentColor">
                  <path d="M40,10 C20,10 10,25 10,40 C10,42 12,44 14,44 C16,44 18,42 19,40 C21,28 30,22 40,22 C50,22 59,28 61,40 C62,42 64,44 66,44 C68,44 70,42 70,40 C70,25 60,10 40,10 Z" />
                  <path d="M30,45 C28,55 32,70 30,85 C29,95 26,105 28,115" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M40,45 C38,60 42,80 40,95 C38,105 39,115 37,120" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M50,45 C48,55 52,70 50,85 C49,95 46,105 48,115" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              )}
              {f.type === 'squid' && (
                <svg width="120" height="80" viewBox="0 0 120 80" fill="currentColor">
                  <path d="M10,40 C30,25 60,25 80,40 C60,55 30,55 10,40 Z" />
                  <path d="M80,35 Q95,20 100,20 Q95,35 80,38 Z" />
                  <path d="M80,45 Q95,60 100,60 Q95,45 80,42 Z" />
                  <path d="M10,40 Q0,35 -15,35 Q0,40 10,40 Z" />
                  <path d="M10,40 Q0,45 -15,45 Q0,40 10,40 Z" />
                  <path d="M10,40 Q-5,30 -20,25 Q-5,35 10,40 Z" />
                  <path d="M10,40 Q-5,50 -20,55 Q-5,45 10,40 Z" />
                </svg>
              )}
              {f.type === 'whale' && (
                <svg width="160" height="70" viewBox="0 0 160 70" fill="currentColor">
                  <path d="M10,35 C20,10 60,5 90,20 C120,30 140,25 150,15 C145,30 145,45 150,55 C140,45 120,40 90,50 C60,65 20,60 10,35 Z" />
                  <path d="M150,15 L158,5 L154,20 Z" />
                  <path d="M150,55 L158,65 L154,50 Z" />
                  <path d="M70,40 L65,55 L58,45 Z" />
                </svg>
              )}
              {f.type === 'fish' && (
                <svg width="70" height="40" viewBox="0 0 70 40" fill="currentColor">
                  <path d="M10,20 C20,5 45,5 55,20 C45,35 20,35 10,20 Z" />
                  <path d="M55,20 L65,10 L62,20 L65,30 Z" />
                  <path d="M35,12 L30,5 L27,10 Z" />
                </svg>
              )}
            </div>
          </div>
        ))}

        {/* Bioluminescent sparks in deep zones */}
        {biolumSparks.map(s => (
          <div
            key={s.id}
            className="biolum-spark"
            style={{
              top: s.top,
              left: s.left,
              animationDelay: s.delay,
              animationDuration: s.duration,
              backgroundColor: s.color,
              boxShadow: `0 0 10px ${s.color}, 0 0 20px ${s.color}`
            }}
          />
        ))}

        {/* Zone Banners placed at specific depths */}
        {ZONES.map(z => (
          <div
            key={z.id}
            className="zone-divider"
            style={{ 
              top: `${z.startDepth * DEPTH_SCALE}px`,
              borderLeft: `4px solid ${z.color}`,
              borderRight: `4px solid ${z.color}`
            }}
          >
            <h2 style={{ color: z.color }}>{z.nameTr}</h2>
            <p>{z.range} • {z.description}</p>
          </div>
        ))}

        {/* Creatures cards plotted absolutely at their respective depths */}
        {creatures.map((c, index) => {
          const isLeft = index % 2 === 0;
          const cardZone = ZONES.find(z => c.depth >= z.startDepth && c.depth <= z.endDepth) || ZONES[0];
          return (
            <div
              key={c.id}
              className={`creature-card-wrapper ${isLeft ? 'left' : 'right'}`}
              style={{ top: `${c.depth * DEPTH_SCALE}px` }}
            >
              {/* Connector line mapping to center cable line */}
              <div className="creature-connector-line" style={{ borderColor: `${cardZone.color}60` }} />
              <div className="creature-connector-dot" style={{ backgroundColor: cardZone.color, boxShadow: `0 0 10px ${cardZone.color}` }} />

              {/* Creature display card */}
              <div 
                className="creature-card" 
                onClick={() => openDetails(c)}
                style={{ 
                  borderColor: `${cardZone.color}45`,
                  boxShadow: `0 8px 24px rgba(0, 0, 0, 0.35)`
                }}
              >
                <img 
                  src={c.images[0]} 
                  alt={c.name} 
                  className="creature-image-preview"
                  loading="lazy"
                />
                <div className="creature-info">
                  <span className="creature-depth-badge">{c.depth} m</span>
                  <h3 className="creature-name-en">{c.name}</h3>
                  <p className="creature-name-tr">({c.nameTr})</p>
                  <span className="creature-hint">
                    <Info size={12} /> Detayları Gör
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        {/* Return to Surface Elevator Button */}
        <div 
          className="bottom-elevator-container"
          style={{ top: `${(MAX_DEPTH + 30) * DEPTH_SCALE}px` }}
        >
          <button className="elevator-btn" onClick={() => scrollToDepth(0)}>
            YÜZEYE DÖN (ACİL ELEVATÖR)
          </button>
        </div>
      </main>

      {/* Glassmorphic Modal details view */}
      {selectedCreature && (
        <div className="modal-overlay" onClick={() => setSelectedCreature(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedCreature(null)}>
              <X size={20} />
            </button>
            
            <div className="modal-body">
              <div className="modal-header-info">
                <span className="modal-depth">
                  {selectedCreature.depth} Metre Derinlik
                </span>
                <h2 className="modal-title-en">
                  {selectedCreature.name}
                </h2>
                <h3 className="modal-title-tr">
                  ({selectedCreature.nameTr})
                </h3>
              </div>

              {/* Main Description */}
              <p className="modal-description">
                {selectedCreature.description}
              </p>

              {/* Fact Box */}
              {selectedCreature.funFact && (
                <div className="modal-fact-box">
                  <div className="modal-fact-title">İlginç Bilgi</div>
                  <p className="modal-fact-text">"{selectedCreature.funFact}"</p>
                </div>
              )}

              {/* Image Carousel (Photos under description) */}
              {selectedCreature.images.length > 0 && (
                <div className="carousel-container">
                  <div className="carousel-title">Fotoğraflar</div>
                  <div className="carousel-slides-wrapper">
                    <img 
                      src={selectedCreature.images[activeCarouselIdx]} 
                      alt={`${selectedCreature.name} fotoğraf ${activeCarouselIdx + 1}`}
                      className="carousel-slide-img"
                    />
                    
                    {/* Navigation Arrows */}
                    {selectedCreature.images.length > 1 && (
                      <>
                        <button 
                          className="carousel-nav-btn prev"
                          onClick={() => setActiveCarouselIdx((prev) => (prev === 0 ? selectedCreature.images.length - 1 : prev - 1))}
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button 
                          className="carousel-nav-btn next"
                          onClick={() => setActiveCarouselIdx((prev) => (prev === selectedCreature.images.length - 1 ? 0 : prev + 1))}
                        >
                          <ChevronRight size={20} />
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* Indicators / Dots */}
                  {selectedCreature.images.length > 1 && (
                    <div className="carousel-dots">
                      {selectedCreature.images.map((_, i) => (
                        <div
                          key={i}
                          className={`carousel-dot ${i === activeCarouselIdx ? 'active' : ''}`}
                          onClick={() => setActiveCarouselIdx(i)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
