"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Code, Rocket, Eye, FastForward } from "lucide-react";

export default function Services() {
    return (
        <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                    服务类型与<span className="text-gradient">交付流程</span>
                </h1>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">彻底摒弃低效的传统瀑布流开发，用AI和敏捷重塑数字化服务。</p>
            </div>

            {/* Comparison Section */}
            <section className="mb-24">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-white mb-10">
                    为何选择 <span className="text-primary">AI辅助交付</span>？
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass-card rounded-3xl p-8 border-red-500/20 bg-red-500/5">
                        <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-2">
                            <XCircle className="text-red-400 w-6 h-6" /> 传统开发模式
                        </h3>
                        <ul className="space-y-4">
                            {["需求沟通反复，文档厚达百页", "排期动辄3-6个月，极易延期", "过程黑盒，客户无法随时看进度", "代码从零手写，人力成本极高", "需求变更流程繁琐，加钱加时间"].map(
                                (item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-400">
                                        <span className="mt-1 text-red-500/50 block w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0" />
                                        {item}
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>

                    <div className="glass-card rounded-3xl p-8 border-primary/40 shadow-[0_0_30px_rgba(0,240,255,0.1)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4">
                            <div className="animate-pulse flex space-x-1">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <div className="w-2 h-2 bg-secondary rounded-full" />
                            </div>
                        </div>
                        <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-2">
                            <CheckCircle2 className="text-primary w-6 h-6" /> Nexus AI极速开发
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "AI快速生成高保真原型，所见即所得",
                                "组件化+AI编程，2周极速交付MVP",
                                "代码实时可见，项目进度仪表盘随时看",
                                "提效降本，同等质量价格省半",
                                "敏捷迭代，24小时响应微调需求",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-200 font-medium">
                                    <CheckCircle2 className="mt-0.5 text-primary w-4 h-4 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-white mb-16">极速交付时间轴</h2>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-background md:-translate-x-1/2" />

                    {[
                        {
                            day: "Day 1-2",
                            title: "需求拆解 & AI原型",
                            desc: "拒绝繁冗文档，直接出具可交互的高保真原型，明确核心MVP边界。",
                            icon: <Eye />,
                            align: "left",
                        },
                        {
                            day: "Day 3-9",
                            title: "AI编码与积木拼装",
                            desc: "复用成熟架构引擎，AI辅助快速生成核心业务逻辑代码，效率提升8倍。",
                            icon: <Code />,
                            align: "right",
                        },
                        {
                            day: "Day 10-12",
                            title: "进度透明 & 联调测试",
                            desc: "客户可通过专属链接实时查看测试环境，随时提出微调建议，极速响应。",
                            icon: <FastForward />,
                            align: "left",
                        },
                        {
                            day: "Day 14",
                            title: "打包上线 & 交付源码",
                            desc: "完成部署与压测，100%交付所有源代码与文档，不绑架客户。",
                            icon: <Rocket />,
                            align: "right",
                        },
                    ].map((step, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            key={i}
                            className={`flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 relative ${step.align === "left" ? "md:flex-row" : "md:flex-row-reverse"}`}>
                            <div className={`md:w-1/2 w-full pl-20 md:pl-0 flex flex-col ${step.align === "left" ? "md:items-end md:text-right md:pr-12" : "md:items-start md:pl-12"}`}>
                                <span className="text-primary font-heading font-bold text-xl mb-1">{step.day}</span>
                                <h4 className="text-white font-bold text-lg mb-2">{step.title}</h4>
                                <p className="text-slate-400 text-sm max-w-xs">{step.desc}</p>
                            </div>

                            <div className="absolute md:left-1/2 w-14 h-14 rounded-full bg-surface border-2 border-primary flex items-center justify-center z-10 md:-translate-x-1/2 text-white shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                                {step.icon}
                            </div>

                            <div className="md:w-1/2 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
