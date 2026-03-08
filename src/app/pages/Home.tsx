import React from 'react';
import { Hero } from '../components/Hero';
import { Programs } from '../components/Programs';
import { AboutUs } from '../components/AboutUs';
import { WhyUs } from '../components/WhyUs';
import { Universities } from '../components/Universities';
import { Testimonials } from '../components/Testimonials';
import { CTASection } from '../components/CTASection';
import { Blog } from '../components/Blog';
import { ScrollReveal } from '../components/ScrollReveal';

export function Home() {
    return (
        <main>
            <Hero />
            <ScrollReveal><Programs /></ScrollReveal>
            <ScrollReveal><AboutUs /></ScrollReveal>
            <ScrollReveal><WhyUs /></ScrollReveal>
            <ScrollReveal><Universities /></ScrollReveal>
            <ScrollReveal><Testimonials /></ScrollReveal>
            <ScrollReveal><CTASection /></ScrollReveal>
            <ScrollReveal><Blog /></ScrollReveal>
        </main>
    );
}
