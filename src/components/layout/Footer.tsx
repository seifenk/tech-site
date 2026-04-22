import Link from "next/link";
import { Cpu, Globe, MessageCircle, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface-light overflow-hidden mt-20">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Cpu className="w-6 h-6 text-primary" />
              <span className="font-heading font-bold text-xl tracking-wider text-white">
                Nexus <span className="text-gradient">AI</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              AI驱动软件快速交付，初创企业的最佳技术合伙人。我们用前沿AI技术重构开发流程，让您的伟大构想在2周内落地验证，不仅快，而且省。
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-primary glow-border transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-primary glow-border transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-primary glow-border transition-colors">
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">服务与方案</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-sm text-slate-400 hover:text-primary transition-colors">MVP极速开发</Link></li>
              <li><Link href="/services" className="text-sm text-slate-400 hover:text-primary transition-colors">微信小程序定制</Link></li>
              <li><Link href="/services" className="text-sm text-slate-400 hover:text-primary transition-colors">SaaS平台研发</Link></li>
              <li><Link href="/services" className="text-sm text-slate-400 hover:text-primary transition-colors">企业官网建设</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-6">联系我们</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><span className="text-slate-500 block text-xs">Email</span> hello@nexusai.dev</li>
              <li><span className="text-slate-500 block text-xs">Phone</span> 400-888-8888</li>
              <li><span className="text-slate-500 block text-xs">Address</span> 上海市浦东新区张江高科技园区</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Nexus AI Dev. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">隐私政策</Link>
            <Link href="#" className="hover:text-white transition-colors">服务条款</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
