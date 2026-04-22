"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Star, Users } from "lucide-react";
import Image from "next/image";

const CASES = [
  {
    id: 1,
    title: "跨境外贸电商独立站",
    category: "电商系统",
    client: "新锐出海品牌",
    challenge: "传统建站公司报价30万且需3个月，错过黑五旺季风险大。",
    solution: "基于AI辅助生成前端代码与后端接口模板，快速搭积木式完成电商核心交易链路开发。",
    time: "14天",
    roi: "节省成本 65%",
    image: "ecom-dashboard"
  },
  {
    id: 2,
    title: "本地生活服务微信小程序",
    category: "微信小程序",
    client: "某连锁美容机构",
    challenge: "亟需数字化转型，但预算有限，且希望实现预约、会员管理等复杂功能。",
    solution: "采用Serverless+云开发架构，复用成熟的行业组件库，快速定制UI。",
    time: "10天",
    roi: "节省成本 70%",
    image: "mini-app"
  },
  {
    id: 3,
    title: "企业级AI知识库SaaS",
    category: "SaaS平台",
    client: "某大企业创新部门",
    challenge: "内部试错项目，需要极速验证概念，传统IT排期满无法支持。",
    solution: "集成大模型API，快速构建前后端分离的高性能Web端与完善权限体系。",
    time: "21天",
    roi: "提前2个月验证市场",
    image: "saas-platform"
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Cases() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
          成功<span className="text-gradient">交付案例</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          速度与质量的完美结合。看看我们如何帮助各种规模的团队极速上线产品。
        </p>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {CASES.map((item) => (
          <motion.div 
            key={item.id}
            variants={fadeUp}
            className="glass-card rounded-3xl glow-border group flex flex-col overflow-hidden"
          >
            {/* Decorative Image Area */}
            <div className="h-48 w-full bg-surface-light relative overflow-hidden flex items-center justify-center border-b border-border">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-50 group-hover:scale-110 transition-transform duration-500" />
              <div className="text-slate-500 font-heading font-bold text-2xl tracking-wider uppercase opacity-30 group-hover:opacity-60 group-hover:text-primary transition-all duration-300">
                {item.image.replace('-', ' ')}
              </div>
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full">
                  {item.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Users className="w-3 h-3" /> {item.client}
                </span>
              </div>
              
              <h3 className="text-xl font-heading font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              
              <div className="space-y-4 mb-8 flex-1">
                <div>
                  <h4 className="text-xs text-slate-500 font-semibold mb-1 uppercase tracking-wider">挑战</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xs text-secondary font-semibold mb-1 uppercase tracking-wider">解决方案</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.solution}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex justify-between items-center mt-auto">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500">交付周期</span>
                  <span className="text-white font-heading font-bold flex items-center gap-1">
                    <Clock className="w-4 h-4 text-primary" /> {item.time}
                  </span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs text-slate-500">成效</span>
                  <span className="text-secondary font-heading font-bold flex items-center gap-1 justify-end">
                    <Star className="w-4 h-4" /> {item.roi}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
