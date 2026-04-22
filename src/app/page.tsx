"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Zap, LayoutDashboard, TerminalSquare } from "lucide-react";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-32 pb-16 w-full overflow-hidden">
      
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          <motion.div variants={fadeUpVariant} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
            <Zap className="w-3 h-3" /> 传统开发终结者
          </motion.div>
          
          <motion.h1 
            variants={fadeUpVariant}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-white mb-8 leading-tight max-w-5xl"
          >
            AI驱动软件开发 <br className="hidden md:block" />
            <span className="text-gradient inline-block animate-float">极速交付体验</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeUpVariant}
            className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl font-body font-light leading-relaxed"
          >
            告别3个月的漫长等待。我们通过前沿AI技术重塑开发流程，帮助中小企业和创业团队实现 <strong className="text-white font-medium">2周上线，预算省半</strong>。
          </motion.p>
          
          <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_30px_rgba(176,38,255,0.4)] transition-all flex items-center justify-center gap-2 group">
                获取免费项目评估
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/cases" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-white glass-card hover:bg-white/5 transition-all glow-border">
                浏览成功案例
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-24 w-full"
        >
          {[
            { label: "平均交付周期", value: "14", suffix: "天" },
            { label: "研发成本降低", value: "50", suffix: "%" },
            { label: "已成功交付项目", value: "50", suffix: "+" },
            { label: "客户满意度", value: "99", suffix: "%" },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl glow-border flex flex-col items-center justify-center text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                {stat.value}<span className="text-primary text-2xl">{stat.suffix}</span>
              </div>
              <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Logo Marquee */}
      <section className="w-full mt-32 border-y border-border bg-surface-light/30 overflow-hidden py-10 relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <p className="text-center text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest">赋能创新团队与大企业创新部门</p>
        <div className="flex w-[200%] animate-[marquee_20s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex flex-1 justify-around items-center px-4">
              {['TechStartup', 'InnovateInc', 'FutureScale', 'CloudSync', 'DataFlow'].map((logo, j) => (
                <div key={j} className="text-2xl font-heading font-bold text-slate-700/50 flex items-center gap-2 grayscale hover:grayscale-0 hover:text-white transition-all duration-300">
                  <TerminalSquare className="w-6 h-6" /> {logo}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full max-w-7xl mx-auto px-6 mt-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">全栈技术服务概览</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">我们提供端到端的数字化解决方案，从需求沟通到代码上线，全程透明可见。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
              title: "SaaS / 定制系统",
              desc: "复杂的业务逻辑和数据处理？没问题。我们擅长构建高性能的后台管理系统、SaaS产品及企业级应用。"
            },
            {
              icon: <Zap className="w-8 h-8 text-secondary" />,
              title: "微信生态 / 小程序",
              desc: "完美适配微信生态的定制开发，快速沉淀私域流量，流畅的原生级交互体验。"
            },
            {
              icon: <Code2 className="w-8 h-8 text-blue-400" />,
              title: "高转化官网 / Landing Page",
              desc: "不仅好看，更能带来转化。极致的加载速度和精巧的动效，让您的品牌形象脱颖而出。"
            }
          ].map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-3xl glow-border group"
            >
              <div className="w-16 h-16 rounded-2xl bg-surface-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Required extra styles for marquee animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
