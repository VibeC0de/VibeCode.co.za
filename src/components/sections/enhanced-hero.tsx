"use client";

import React, { useEffect, useRef } from "react";
import { OrbButton } from "@/components/ui/custom/orb-button";
import { OrbBadge } from "@/components/ui/custom/orb-badge";
import { motion } from "framer-motion";

export function EnhancedHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.8;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;

        // Colors from our theme
        const colors = [
          'rgba(28, 84, 176, 0.5)',  // orbBlue
          'rgba(80, 182, 218, 0.5)',  // orbCyan
          'rgba(210, 244, 39, 0.3)',  // orbGreen
        ];

        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;

        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(50, Math.floor(canvas.width * canvas.height / 15000));

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }

      // Connect particles with lines if they're close enough
      connectParticles();

      requestAnimationFrame(animate);
    };

    // Connect particles with lines
    const connectParticles = () => {
      if (!ctx) return;
      const maxDistance = 150;

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = `rgba(150, 167, 192, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-white dark:bg-orbGray-900 pt-20 pb-32">
      {/* Background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 opacity-50"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-orbGray-900 z-10"></div>

      {/* Content */}
      <div className="relative z-20 orb-container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <OrbBadge variant="blue" size="md" rounded className="mb-6">
              Premium Web Development Solutions
            </OrbBadge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orbBlue-600 to-orbCyan-500 dark:from-orbBlue-400 dark:to-orbCyan-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Elevate Your Digital Presence
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-orbGray-600 dark:text-orbGray-300 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Cutting-edge web development services for businesses looking to establish a powerful online presence.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <OrbButton variant="primary" size="lg" href="/" className="px-8">
              Get Started
            </OrbButton>
            <OrbButton variant="secondary" size="lg" href="/">
              View Our Work
            </OrbButton>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {['React', 'Next.js', 'Tailwind CSS', 'TypeScript'].map((technology) => (
              <div key={technology} className="flex items-center justify-center">
                <div className="text-orbGray-400 dark:text-orbGray-500 font-medium text-lg">{technology}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
