"use client"

import About from '@/components/About'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Skill from '@/components/Skill'
import Project from '@/components/Project'
import React from 'react'
import Foter from '@/components/Foter'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Zap, ArrowRight, Globe, Code, TrendingUp } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';


export default function page() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 100], ['0%', '100%']);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productItems = [
    { title: 'Database', desc: 'Fully managed Postgres with realtime', href: '/product/database' },
    { title: 'Authentication', desc: 'User management out of the box', href: '/product/authentication' },
    { title: 'Storage', desc: 'Store and serve any type of digital content', href: '/product/storage' },
    { title: 'Edge Functions', desc: 'Deploy serverless functions globally', href: '/product/functions' },
    { title: 'Realtime', desc: 'Listen to database changes in realtime', href: '/product/realtime' },
    { title: 'Vector Database', desc: 'AI-ready with pgvector support', href: '/product/vector' },
  ];

  const devItems = [
    { title: 'Documentation', desc: 'Complete API references and guides', href: '/docs' },
    { title: 'Examples', desc: 'Production-ready starter kits', href: '/examples' },
    { title: 'CLI', desc: 'Command line interface', href: '/cli' },
    { title: 'Status', desc: 'Real-time service status', href: 'https://status.atlas.dev' },
    { title: 'Community', desc: 'Join thousands of developers', href: '/community' },
    { title: 'Support', desc: 'Get help from our team', href: '/support' },
  ];

  const metrics = [
    { val: '7m → 40s', label: 'Build times' },
    { val: '95%', label: 'Page load reduction' },
    { val: '24x', label: 'Faster builds' },
    { val: '50k+', label: 'Developers' },
  ];

  const sections = [
    { title: 'AI Apps', desc: 'Enrich any product or feature with the latest models and tools.', icon: <Zap className="w-12 h-12" />, tools: ['Fluid', 'AI SDK', 'AI Gateway', 'Workflow', 'Sandbox', 'BotID'], href: '/ai' },
    { title: 'Web Apps', desc: 'Ship beautiful interfaces that don’t compromise speed or functionality.', icon: <Code className="w-12 h-12" />, tools: ['Next.js', 'React', 'Svelte', 'Nuxt'], href: '#' },
    { title: 'Composable Commerce', desc: 'Increase conversion with fast, branded storefronts.', icon: <TrendingUp className="w-12 h-12" />, tools: ['Shopify', 'Stripe', 'Medusa'], href: '#' },
  ];
  return (
    <div className=''>
      <Navbar/>
      <Hero />
      <About />
      <Skill />
      <Project />
      <Foter />
    </div>
  )
}
