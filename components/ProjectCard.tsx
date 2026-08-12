interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export default function ProjectCard({ title, description, tags, link, image }: ProjectCardProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg overflow-hidden hover:border-blue-500 transition">
       <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
        <span className="text-gray-300">Project Image</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="bg-blue-600/30 text-blue-400 text-xs px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <a href={link} className="text-blue-400 hover:text-blue-300 font-semibold">
          View Project →
        </a>
      </div>
    </div>
  );
}