'use client';

import React from 'react';
import { Search, Compass, Code, Sliders, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'DISCOVER',
    desc: 'Understanding your goals, audience and vision. I research, analyze and uncover the right direction.',
    icon: Search,
    points: ['Project Brief', 'Research & Analysis', 'Competitor Study', 'Strategy & Roadmap']
  },
  {
    num: '02',
    title: 'PLAN',
    desc: 'Turning insights into a clear plan. I wireframe, structure and create a blueprint for success.',
    icon: Compass,
    points: ['Information Architecture', 'Wireframing', 'User Flow', 'Technical Planning']
  },
  {
    num: '03',
    title: 'CREATE',
    desc: 'This is where ideas come to life. I design, code, edit and craft every detail with precision.',
    icon: Code,
    points: ['UI/UX Design', 'Development', 'Motion & Visuals', 'Creative Execution']
  },
  {
    num: '04',
    title: 'REFINE',
    desc: 'I test, optimize and perfect every element to ensure smooth performance and polished experience.',
    icon: Sliders,
    points: ['Testing & QA', 'Performance Optimization', 'Iterations & Feedback', 'Final Polish']
  },
  {
    num: '05',
    title: 'DELIVER',
    desc: 'I deliver the final product that not only meets expectations but exceeds them on time.',
    icon: Rocket,
    points: ['Deployment', 'Handover', 'Support & Maintenance', 'Long Term Growth']
  }
];

export default function Process() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto space-y-12">
      <div className="space-y-4">
        <p className="text-xs font-semibold text-purple-600 tracking-widest uppercase">05 / MY PROCESS</p>
        <h2 className="text-6xl font-extrabold text-black">
          From idea<br /><span className="text-indigo-600">to impact.</span>
        </h2>
        <p className="text-gray-600 text-sm max-w-md">
          A proven process that helps transform ideas into digital experiences that are functional, beautiful and unforgettable.
        </p>
      </div>

      <div className="space-y-6">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.num} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-1 p-4 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center w-14 h-14">
                <Icon size={24} />
              </div>
              <div className="md:col-span-6 space-y-2">
                <span className="text-xs font-bold text-purple-600 tracking-widest">{step.num}</span>
                <h3 className="text-xl font-extrabold text-black">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
              <div className="md:col-span-5 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <ul className="grid grid-cols-2 gap-2 text-[11px] font-semibold text-gray-700">
                  {step.points.map((p) => (
                    <li key={p} className="flex items-center gap-1.5">• {p}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dark Call to Action Banner */}
     <div className="bg-black text-white p-8 md:p-12 rounded-3xl mt-16 flex flex-col md:flex-row items-center justify-between gap-6">
  <div>
    <span className="text-xs font-bold text-purple-400 tracking-wider uppercase">
      READY TO START YOUR PROJECT?
    </span>
   <h3 className="text-2xl md:text-3xl font-extrabold mt-2">
  Great projects start with a <span className="text-purple-400">conversation.</span>
</h3>
</div>

<a
  href="https://www.linkedin.com/in/kunal-pandey-10032235b"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-black font-bold text-xs uppercase px-6 py-4 rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap"
>
  LET'S WORK TOGETHER →
</a>
</div>
    </section>
  );
} 