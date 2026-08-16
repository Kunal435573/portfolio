import React from "react";
import { ArrowUpRight } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    category: "DESIGN",
    title: "Neumorphism in 2024: Still Relevant?",
    date: "Mar 25, 2024",
    readTime: "3 min read",
    link: "https://medium.com", // Apna link yahan dalein
  },
  {
    id: 2,
    category: "DEVELOPMENT",
    title: "Optimizing Core Web Vitals for Perfect Performance",
    date: "Mar 22, 2024",
    readTime: "7 min read",
    link: "https://dev.to",
  },
  {
    id: 3,
    category: "TUTORIAL",
    title: "How I Edit Travel Videos for Maximum Engagement",
    date: "Mar 10, 2024",
    readTime: "5 min read",
    link: "https://youtube.com",
  },
];

export default function Journal() {
  return (
    <section id="journal" className="w-full px-6 md:px-16 py-16 max-w-7xl mx-auto scroll-mt-20">
      <h2 className="text-4xl md:text-5xl font-black text-black mb-10 tracking-tight">
        Journal
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post) => (
          <a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#171717] text-white p-8 rounded-3xl flex flex-col justify-between h-72 hover:scale-[1.02] transition-all duration-300 shadow-xl cursor-pointer"
          >
            <div>
              <span className="text-[10px] font-bold tracking-widest text-indigo-400 uppercase">
                {post.category}
              </span>
              <h3 className="text-xl font-bold mt-3 leading-snug group-hover:text-gray-300 transition-colors">
                {post.title}
              </h3>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-400 pt-6 border-t border-gray-800">
              <span>{post.date} • {post.readTime}</span>
              <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowUpRight size={16} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
