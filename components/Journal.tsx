import React from "react";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "Neumorphism in 2024: Still Relevant?",
    date: "Mar 25, 2024",
    read: "3 min read",
    category: "DESIGN",
  },
  {
    title: "Optimizing Core Web Vitals for Perfect Performance",
    date: "Mar 22, 2024",
    read: "7 min read",
    category: "DEVELOPMENT",
  },
  {
    title: "How I Edit Travel Videos for Maximum Engagement",
    date: "Mar 10, 2024",
    read: "5 min read",
    category: "TUTORIAL",
  },
];

export default function Journal() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black">Journal</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((item, idx) => (
          <div
            key={idx}
            className="bg-black text-white p-6 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold text-purple-400">
                {item.category || "ARTICLE"}
              </span>
              <h3 className="text-lg font-extrabold mt-2 leading-snug">
                {item.title}
              </h3>
            </div>
            <div className="flex justify-between items-center text-xs text-gray-400 mt-6">
              <span>
                {item.date} • {item.read}
              </span>
              <span className="p-2 bg-gray-900 rounded-full text-white">
                <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
