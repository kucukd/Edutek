"use client";

/**
 * EDUTEK - Multilingual Website
 * Supports Turkish and English with proper diacritics
 */

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  AudioLines,
  BadgeCheck,
  BarChart3,
  Bot,
  BrainCircuit,
  Building2,
  ChevronRight,
  Crown,
  Database,
  FileText,
  Globe2,
  LineChart,
  Lock,
  Menu,
  MonitorSmartphone,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage, LanguageProvider } from "@/lib/language-context";
import type { Language } from "@/lib/translations";

// Icons for pillars/cards (mapped by index)
const pillarIcons = [BrainCircuit, BarChart3, ShieldCheck, Target];
const solutionIcons = [MonitorSmartphone, AudioLines, Database, Lock];
const rdIcons = [Bot, Workflow, Users, Globe2];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e67e22]/20 bg-[#e67e22]/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#f39c12]">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-neutral-300 md:text-lg">
        {description}
      </p>
    </div>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Card
      className={`border-white/10 bg-white/[0.03] shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl ${className}`}
    >
      <CardContent className="p-0">{children}</CardContent>
    </Card>
  );
}

function GoldLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#e67e22]/20 bg-[#e67e22]/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#f39c12]">
      <BadgeCheck className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
      <button
        onClick={() => setLanguage("tr")}
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-medium transition ${
          language === "tr"
            ? "bg-[#e67e22]/20 text-white"
            : "text-neutral-400 hover:bg-white/10 hover:text-white"
        }`}
      >
        <svg className="h-4 w-6 rounded-sm overflow-hidden" viewBox="0 0 1200 800">
          <rect width="1200" height="800" fill="#E30A17"/>
          <circle cx="425" cy="400" r="200" fill="#ffffff"/>
          <circle cx="475" cy="400" r="160" fill="#E30A17"/>
          <polygon points="583,400 764,458 652,340 652,460 764,342" fill="#ffffff"/>
        </svg>
        <span className="hidden sm:inline">TR</span>
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-medium transition ${
          language === "en"
            ? "bg-[#e67e22]/20 text-white"
            : "text-neutral-400 hover:bg-white/10 hover:text-white"
        }`}
      >
        <svg className="h-4 w-6 rounded-sm overflow-hidden" viewBox="0 0 60 30">
          <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
          <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
          <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
          </g>
        </svg>
        <span className="hidden sm:inline">EN</span>
      </button>
    </div>
  );
}

function EdutekWebsiteContent() {
  const { t, language } = useLanguage();

  const navItems = [
    { label: t.nav.company, href: "#sirket" },
    { label: t.nav.solutions, href: "#cozumler" },
    { label: t.nav.rnd, href: "#arge" },
    { label: t.nav.consortium, href: "#konsorsiyum" },
    { label: t.nav.contact, href: "#iletisim" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#040810] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(26,60,110,0.18),transparent_30%),linear-gradient(to_bottom,rgba(8,15,28,1),rgba(4,8,16,1))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:52px_52px] opacity-[0.08]" />
        <div className="absolute left-[-10%] top-[-8%] h-[34rem] w-[34rem] rounded-full bg-[#1a3c6e]/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[6%] h-[28rem] w-[28rem] rounded-full bg-[#e67e22]/8 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[22%] h-[26rem] w-[26rem] rounded-full bg-[#1a3c6e]/15 blur-3xl" />

        <svg
          className="absolute inset-0 h-full w-full opacity-[0.18]"
          viewBox="0 0 1440 1200"
          fill="none"
        >
          <defs>
            <linearGradient id="goldNetwork" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1a3c6e" />
              <stop offset="45%" stopColor="#e67e22" />
              <stop offset="100%" stopColor="#1a3c6e" />
            </linearGradient>
          </defs>
          <path
            d="M60 190 C 240 110, 420 260, 610 210 S 980 120, 1310 240"
            stroke="url(#goldNetwork)"
            strokeWidth="1.2"
          />
          <path
            d="M120 530 C 280 460, 460 640, 760 560 S 1120 470, 1360 610"
            stroke="url(#goldNetwork)"
            strokeWidth="1.2"
          />
          <path
            d="M170 920 C 360 820, 590 990, 840 900 S 1150 840, 1340 960"
            stroke="url(#goldNetwork)"
            strokeWidth="1.2"
          />
          <circle cx="610" cy="210" r="4" fill="#e67e22" />
          <circle cx="760" cy="560" r="4" fill="#e67e22" />
          <circle cx="840" cy="900" r="4" fill="#e67e22" />
          <circle cx="1310" cy="240" r="4" fill="#e67e22" />
        </svg>
      </div>

      <header className="sticky top-0 z-50">
        <div className="border-b border-white/10 bg-black/70 backdrop-blur-2xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <div className="flex items-center gap-3">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edutek-logo-My2ShdW4J64S4QqE7YYgTVpIkp0GVm.png" 
                alt="EDUTEK Logo" 
                className="h-20 w-auto"
              />
              <div className="hidden sm:block">
                <div className="text-xs tracking-[0.14em] text-neutral-400">
                  {t.header.tagline}
                </div>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-sm text-neutral-300 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <LanguageToggle />
              <Button className="hidden rounded-full bg-[#e67e22] px-5 text-white hover:bg-[#f39c12] md:inline-flex">
                {t.header.ctaButton}
              </Button>
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-300 lg:hidden">
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-[#e67e22]/45 to-transparent" />
        </div>
      </header>

      <main>
        {/* Hero Banner Section */}
        <section className="relative mx-auto max-w-7xl px-6 pb-8 pt-8 lg:px-8 lg:pb-12 lg:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl"
          >
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LinkedIn%20Kapak_yeni-slR470dCnJlEXjcxpiCqMIMsyG7pvh.png" 
              alt={t.hero.bannerAlt}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040810]/80 via-transparent to-transparent" />
          </motion.div>
        </section>

        {/* Stats and CTA Section */}
        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-20">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e67e22]/20 bg-[#e67e22]/10 px-4 py-2 text-sm text-[#f39c12]">
                <Crown className="h-4 w-4" />
                {t.hero.motto}
              </div>

              <p className="max-w-2xl text-lg leading-8 text-neutral-300 md:text-xl">
                {t.hero.description}
              </p>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Button className="rounded-full bg-[#e67e22] px-6 text-white hover:bg-[#f39c12]">
                  {t.hero.exploreSolutions}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-[#1a3c6e]/50 bg-[#1a3c6e]/20 px-6 text-white hover:bg-[#1a3c6e]/40"
                >
                  {t.hero.viewPresentation}
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-2"
            >
              {t.topSignals.map((item) => (
                <GlassCard key={item.label} className="rounded-[1.45rem]">
                  <div className="p-4">
                    <div className="text-2xl font-semibold text-[#e67e22]">
                      {item.value}
                    </div>
                    <div className="mt-1 text-sm text-neutral-400">
                      {item.label}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Executive Trust Panel Section */}
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2.2rem] bg-gradient-to-br from-[#1a3c6e]/20 via-[#e67e22]/10 to-[#1a3c6e]/20 blur-3xl" />
            <GlassCard className="relative overflow-hidden rounded-[2.2rem] bg-[#0a1525]/90">
              <div className="border-b border-white/10 px-6 py-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm text-neutral-400">
                      {t.executivePanel.title}
                    </div>
                    <div className="mt-1 text-2xl font-semibold text-white">
                      {t.executivePanel.subtitle}
                    </div>
                  </div>
                  <GoldLabel>{t.executivePanel.readyLabel}</GoldLabel>
                </div>
              </div>

              <div className="grid gap-4 p-6 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-[#0f1f35] to-[#0a1525] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-neutral-400">
                        {t.executivePanel.platformTitle}
                      </div>
                      <div className="mt-1 text-lg font-medium text-white">
                        {t.executivePanel.platformSubtitle}
                      </div>
                    </div>
                    <div className="rounded-2xl bg-[#e67e22]/10 p-3 text-[#f39c12]">
                      <Network className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {t.executivePanel.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-neutral-300"
                      >
                        <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-[#e67e22]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  {t.executivePanel.metrics.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
                    >
                      <div className="text-sm text-neutral-400">{item.label}</div>
                      <div className="mt-2 text-3xl font-semibold text-white">
                        {item.value}
                      </div>
                    </div>
                  ))}

                  <div className="rounded-[1.5rem] border border-[#e67e22]/20 bg-[#e67e22]/10 p-5">
                    <div className="text-sm text-[#f39c12]">
                      {t.executivePanel.valueProposition}
                    </div>
                    <div className="mt-2 text-base font-semibold text-white">
                      &quot;{t.executivePanel.valueText}&quot;
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
            <div className="mb-3 text-xs uppercase tracking-[0.32em] text-neutral-500">
              {language === "tr" ? "Güven sinyalleri" : "Trust signals"}
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
              {t.capabilityTags.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center rounded-2xl border border-white/10 bg-[#111111] px-4 py-4 text-center text-sm font-medium text-neutral-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sirket" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionHeader
              eyebrow={t.companySection.eyebrow}
              title={t.companySection.title}
              description={t.companySection.description}
            />

            <div className="grid gap-5">
              {t.companyPillars.map((item, index) => {
                const Icon = pillarIcons[index];
                return (
                  <GlassCard key={item.title} className="rounded-[1.9rem]">
                    <div className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1a3c6e]/50 to-[#e67e22]/15 text-[#f39c12]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-neutral-300">
                        {item.text}
                      </p>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </section>

        <section id="cozumler" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader
            eyebrow={t.solutionsSection.eyebrow}
            title={t.solutionsSection.title}
            description={t.solutionsSection.description}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.solutionCards.map((item, index) => {
              const Icon = solutionIcons[index];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                >
                  <GlassCard className="h-full rounded-[1.85rem]">
                    <div className="p-6">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e67e22]/10 text-[#f39c12]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-neutral-300">
                        {item.text}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionHeader
              eyebrow={t.flagshipSection.eyebrow}
              title={t.flagshipSection.title}
              description={t.flagshipSection.description}
            />

            <div className="grid gap-5">
              {t.flagshipBlocks.map((item) => (
                <GlassCard key={item.title} className="rounded-[1.9rem]">
                  <div className="p-6">
                    <GoldLabel>{item.eyebrow}</GoldLabel>
                    <h3 className="mt-4 text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-neutral-300">
                      {item.text}
                    </p>
                    <div className="mt-5 grid gap-3">
                      {item.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#111111] px-4 py-4 text-sm text-neutral-200"
                        >
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#e67e22]" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section id="arge" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader
            eyebrow={t.rndSection.eyebrow}
            title={t.rndSection.title}
            description={t.rndSection.description}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.rdCards.map((item, index) => {
              const Icon = rdIcons[index];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <GlassCard className="h-full rounded-[1.85rem]">
                    <div className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1a3c6e]/50 to-[#e67e22]/15 text-[#f39c12]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-neutral-300">
                        {item.text}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <GlassCard className="overflow-hidden rounded-[2rem]">
              <div className="border-b border-white/10 px-6 py-5">
                <div className="flex items-center gap-3">
                  <LineChart className="h-5 w-5 text-[#f39c12]" />
                  <div>
                    <div className="text-sm text-neutral-400">
                      {t.benchmarkSection.title}
                    </div>
                    <div className="text-xl font-semibold text-white">
                      {language === "tr" ? "Ölçülebilir katma değerin görünür hale geldiği pano" : "Dashboard where measurable value becomes visible"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 p-6 sm:grid-cols-2 xl:grid-cols-3">
                {t.benchmarkTargets.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.45rem] border border-white/10 bg-[#111111] p-5"
                  >
                    <div className="text-sm text-neutral-400">{item.title}</div>
                    <div className="mt-2 text-3xl font-semibold text-[#e67e22]">
                      {item.value}
                    </div>
                    <div className="mt-2 text-sm text-neutral-300">
                      {item.note}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <div className="grid gap-6">
              <GlassCard className="rounded-[1.9rem]">
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-[#f39c12]" />
                    <h3 className="text-xl font-semibold text-white">
                      {language === "tr" ? "Güven ve Kurumsal Uygunluk" : "Trust and Enterprise Compliance"}
                    </h3>
                  </div>
                  <div className="grid gap-3">
                    {t.trustArchitecture.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-neutral-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="rounded-[1.9rem]">
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <FileText className="h-5 w-5 text-[#f39c12]" />
                    <h3 className="text-xl font-semibold text-white">
                      {language === "tr" ? "Satın Alma Tarafına Verilen Mesaj" : "Message to Procurement Side"}
                    </h3>
                  </div>
                  <p className="text-sm leading-7 text-neutral-300">
                    {language === "tr" 
                      ? "EDUTEK, teknoloji gösterisi yapan bir ekip değil; ürün, güvenlik, pedagojik uyum, raporlama, dağıtım ve ticarileştirme katmanlarını birlikte yöneten kurumsal çözüm ortağı olarak konumlandırılır."
                      : "EDUTEK is positioned not as a team doing technology demos, but as an enterprise solution partner that manages product, security, pedagogical compliance, reporting, deployment, and commercialization layers together."}
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        <section id="konsorsiyum" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader
            eyebrow={t.consortiumSection.eyebrow}
            title={t.consortiumSection.title}
            description={t.consortiumSection.description}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {t.partnerCards.map((partner) => (
              <GlassCard key={partner.name} className="h-full rounded-[1.85rem]">
                <div className="p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e67e22]/10 text-[#f39c12]">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div className="text-xs uppercase tracking-[0.22em] text-[#f39c12]">
                    {partner.role}
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {partner.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-300">
                    {partner.text}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionHeader
              eyebrow={t.roadmapSection.eyebrow}
              title={t.roadmapSection.title}
              description={t.roadmapSection.description}
            />

            <div className="grid gap-5">
              {t.roadmap.map((item) => (
                <GlassCard key={item.phase} className="rounded-[1.85rem]">
                  <div className="relative p-6">
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#e67e22]/10 blur-2xl" />
                    <div className="relative">
                      <div className="mb-4 inline-flex rounded-full border border-[#e67e22]/20 bg-[#e67e22]/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#f39c12]">
                        {item.phase}
                      </div>
                      <h3 className="text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-neutral-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section id="iletisim" className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-8 lg:pb-28">
          <GlassCard className="overflow-hidden rounded-[2.25rem] border-white/10 bg-gradient-to-r from-[#0a1628] via-[#0f2340] to-[#0a1628]">
            <div className="grid items-start gap-8 p-8 md:p-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e67e22]/20 bg-[#e67e22]/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-[#f39c12]">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {t.aboutSection.eyebrow}
                </div>
                <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {t.aboutSection.title}
                </h3>
                <div className="mt-6 space-y-4 text-base leading-7 text-neutral-300 md:text-lg md:leading-8">
                  {t.aboutSection.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  <p className="font-medium text-white">{t.aboutSection.eduprime}</p>
                  <ul className="ml-1 space-y-2">
                    {t.aboutSection.services.map((service) => (
                      <li key={service} className="flex items-start gap-2">
                        <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-[#e67e22]" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  <p>{t.aboutSection.workingIn}</p>
                  <p>
                    {language === "tr" ? (
                      <>
                        Özellikle <span className="font-semibold text-[#f39c12]">LinguaVerse AI</span> ve <span className="font-semibold text-[#f39c12]">BRIDGE-TR</span> projelerimizle; hikâye tabanlı, oyunlaştırılmış, gerçek zamanlı konuşma pratiği sunan ve otomatik CEFR değerlendirmesiyle ölçülebilir öğrenme çıktıları sağlayan yeni nesil eğitim teknolojileri geliştiriyoruz.
                      </>
                    ) : (
                      <>
                        Especially with our <span className="font-semibold text-[#f39c12]">LinguaVerse AI</span> and <span className="font-semibold text-[#f39c12]">BRIDGE-TR</span> projects; we develop next-generation education technologies that offer story-based, gamified, real-time speaking practice and provide measurable learning outcomes with automatic CEFR assessment.
                      </>
                    )}
                  </p>
                  <p>{t.aboutSection.visionText}</p>
                  <p className="font-semibold text-white">
                    {t.aboutSection.closingText}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:sticky lg:top-32">
                <Button className="rounded-full bg-[#e67e22] px-6 text-white hover:bg-[#f39c12]">
                  {t.aboutSection.demoButton}
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-white/15 bg-transparent px-6 text-white hover:bg-white/10"
                >
                  {t.aboutSection.downloadButton}
                </Button>
              </div>
            </div>
          </GlassCard>

          <footer className="mt-8 border-t border-white/10 pt-6 text-sm text-neutral-500">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                {language === "tr" 
                  ? "EDUTEK • Yapay zeka destekli dijital öğrenme • kurumsal seviye ürün sistemleri"
                  : "EDUTEK • AI-supported digital learning • institution-grade product systems"}
              </div>
              <div>Ankara / {language === "tr" ? "Türkiye" : "Turkey"}</div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default function EdutekPremiumWebsite() {
  return (
    <LanguageProvider>
      <EdutekWebsiteContent />
    </LanguageProvider>
  );
}
