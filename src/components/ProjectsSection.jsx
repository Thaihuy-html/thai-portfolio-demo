import { Users, Briefcase, Award, DollarSign } from "lucide-react";

function ProjectStat({ icon, count, label }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-gray-400 mb-4">{icon}</div>
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}
      </h3>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section className="px-8 py-20 bg-[#0d1b2e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
            PROJECTS
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <ProjectStat
            icon={<Users size={48} />}
            count="567+"
            label="Happy Clients"
          />
          <ProjectStat
            icon={<Briefcase size={48} />}
            count="400"
            label="Project Completed"
          />
          <ProjectStat
            icon={<Award size={48} />}
            count="760"
            label="Success Users"
          />
          <ProjectStat
            icon={<DollarSign size={48} />}
            count="778"
            label="Operating Financing"
          />
        </div>
      </div>
    </section>
  );
}
export default ProjectsSection;