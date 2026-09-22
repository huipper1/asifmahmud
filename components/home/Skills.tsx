import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { skills } from "@/lib/constants";
import { Layers, BarChart, Target, FileText } from "lucide-react";

export function Skills() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Paid Acquisition":
        return <Layers className="w-4 h-4 text-[#709819]" />;
      case "Analytics":
        return <BarChart className="w-4 h-4 text-[#709819]" />;
      case "Marketing":
        return <Target className="w-4 h-4 text-[#709819]" />;
      default:
        return <FileText className="w-4 h-4 text-[#709819]" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#FFFFFF] border-y border-black/5 relative">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-fade">
          <SectionTitle
            number="07"
            badge="Competencies"
            title="Core Marketing &amp; Technical Skills"
            accentText="Skills"
            subtitle="Full-stack performance stack covering creative campaign setup, audience acquisition, and data attribution."
            align="center"
          />
        </div>

        {/* 4 Category Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-[#F7F7F4] p-6 rounded-2xl border border-black/10 flex flex-col justify-between hover:shadow-xl transition-all duration-300 card-hover-lift"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white border border-black/5 shadow-2xs flex items-center justify-center">
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className="text-base font-bold font-heading text-[#111111]">
                    {category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white text-[#222222] px-3 py-1.5 rounded-full border border-black/5 font-medium shadow-2xs hover:border-[#709819] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-black/5 text-[11px] font-mono text-[#777777]">
                Proven Execution
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
