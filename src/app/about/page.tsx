"use client";

import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
          重新定义<span className="text-gradient">软件工程</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          我们不仅是一家外包公司，更是掌握前沿AI工具链的极客团队。
        </p>
      </div>

      {/* Core Values */}
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {[
          {
            icon: <Terminal className="w-8 h-8 text-primary" />,
            title: "全栈极客背景",
            desc: "核心成员来自一线大厂与顶级开源社区，精通现代Web架构，只写高质量、可扩展的代码。"
          },
          {
            icon: <Zap className="w-8 h-8 text-secondary" />,
            title: "AI赋能开发",
            desc: "深度使用 Copilot, Cursor 等AI工具重构工作流，让开发者聚焦核心业务架构，将CRUD交由AI瞬间完成。"
          },
          {
            icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
            title: "商业契约精神",
            desc: "B端客户最看重靠谱。我们承诺：不接超出能力的单，一旦承接，必定按时按质交付，100%移交代码。"
          }
        ].map((item, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="glass-card p-8 rounded-3xl glow-border"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-heading font-bold text-white mb-3">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Tech Stack Parallax / Display */}
      <section className="glass-card rounded-3xl p-10 md:p-16 border-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-heading font-bold text-white mb-6">
              硬核技术栈保证交付底线
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              我们不盲目追求最新技术，而是选择最适合快速交付且久经考验的现代工程方案。这是我们能够承诺"2周上线"的技术底气。
            </p>
            <div className="flex flex-wrap gap-3">
              {['Next.js', 'React', 'Vue', 'Tailwind', 'Node.js', 'Go', 'Python', 'PostgreSQL', 'Redis', 'Docker'].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-lg bg-surface border border-border text-sm font-mono text-slate-300 hover:border-primary hover:text-primary transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 w-full grid grid-cols-2 gap-4">
             {/* Visual decorative element for tech stack */}
             <div className="col-span-2 glass-card h-32 rounded-2xl flex items-center justify-center border-primary/30 glow-border overflow-hidden relative">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
               <span className="font-heading text-2xl font-bold text-white tracking-widest relative z-10">FRONTEND <span className="text-primary">CORE</span></span>
             </div>
             <div className="glass-card h-32 rounded-2xl flex items-center justify-center border-secondary/30 glow-border overflow-hidden relative">
               <span className="font-heading text-xl font-bold text-slate-300 relative z-10">BACKEND API</span>
             </div>
             <div className="glass-card h-32 rounded-2xl flex items-center justify-center border-white/10 glow-border overflow-hidden relative">
               <span className="font-heading text-xl font-bold text-slate-300 relative z-10">DEVOPS</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
