"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, MessageSquare, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-16">
      
      <div className="md:w-5/12 flex flex-col">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          随时准备<br/>
          <span className="text-gradient">将您的构想落地</span>
        </h1>
        <p className="text-slate-400 mb-12 text-lg">
          提交简单的需求信息，我们的技术专家将在 <strong className="text-white font-medium">24小时内</strong> 与您取得联系，并提供免费的技术选型建议与评估报价。
        </p>
        
        <div className="space-y-8 mt-auto">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group-hover:border-primary transition-colors">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium mb-1">官方微信</p>
              <p className="text-white font-bold tracking-wide">NexusAI_Dev</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group-hover:border-primary transition-colors">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium mb-1">咨询热线</p>
              <p className="text-white font-bold tracking-wide">400-888-8888</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group-hover:border-primary transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium mb-1">电子邮箱</p>
              <p className="text-white font-bold tracking-wide">hello@nexusai.dev</p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-7/12 w-full">
        <div className="glass-card rounded-3xl p-8 md:p-10 glow-border relative overflow-hidden">
          {/* Subtle background glow in form */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
                <CheckCircle2 className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">需求已成功提交！</h3>
              <p className="text-slate-400">感谢您的信任。我们的技术专家正在快马加鞭为您评估，请留意您的联系方式，我们将于24小时内答复。</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 px-6 py-2 rounded-full border border-border text-sm text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
              >
                再次提交
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">您的称呼</label>
                  <input required type="text" id="name" className="bg-background/50 border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" placeholder="如：张经理" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact" className="text-sm font-medium text-slate-300">联系方式</label>
                  <input required type="text" id="contact" className="bg-background/50 border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" placeholder="手机号或微信号" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="type" className="text-sm font-medium text-slate-300">项目类型</label>
                <select id="type" className="bg-background/50 border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none">
                  <option value="website">企业官网 / 营销落地页</option>
                  <option value="miniapp">微信小程序定制</option>
                  <option value="saas">系统开发 / SaaS平台</option>
                  <option value="other">其他</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className="text-sm font-medium text-slate-300">大概预算范围</label>
                <select id="budget" className="bg-background/50 border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none">
                  <option value="under5">5万以下 (极速MVP验证)</option>
                  <option value="5to15">5-15万 (标准版本开发)</option>
                  <option value="15to30">15-30万 (复杂业务系统)</option>
                  <option value="above30">30万以上 (企业级平台集群)</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="desc" className="text-sm font-medium text-slate-300">简单描述您的需求</label>
                <textarea id="desc" rows={4} className="bg-background/50 border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none" placeholder="一句话描述您想做什么产品，或是遇到的技术痛点..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-4 w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_20px_rgba(176,38,255,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">提交中...</span>
                ) : (
                  <>立即提交需求 <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
