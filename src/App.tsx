/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingElements from './components/layout/FloatingElements';

import Hero from './components/sections/Hero';
import TrustBar from './components/sections/TrustBar';
import ValueProposition from './components/sections/ValueProposition';
import Segments from './components/sections/Segments';
import Testimonials from './components/sections/Testimonials';
import Differentials from './components/sections/Differentials';
import StructureTour from './components/sections/StructureTour';
import Timeline from './components/sections/Timeline';
import FamilyPortal from './components/sections/FamilyPortal';
import Gallery from './components/sections/Gallery';
import Enrollment from './components/sections/Enrollment';
import Location from './components/sections/Location';
import FAQ from './components/sections/FAQ';

export default function App() {
  return (
    <div className="font-body text-kennedy-gray-dark min-h-screen bg-kennedy-off-white overflow-x-hidden selection:bg-kennedy-gold selection:text-kennedy-blue-dark">
      <Header />
      
      <main>
        <Hero />
        <TrustBar />
        <ValueProposition />
        <Segments />
        <Testimonials />
        <Differentials />
        <StructureTour />
        <Timeline />
        <FamilyPortal />
        <Gallery />
        <Enrollment />
        <Location />
        <FAQ />
      </main>

      <Footer />
      <FloatingElements />
    </div>
  );
}
