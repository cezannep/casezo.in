import {
  Users,
  Briefcase,
  Shield,
  Lock,
  LucideIcon,
} from "lucide-react";

interface Stat {
  value: string;
  label: string;
  Icon: LucideIcon;
  color:string;
}

export default function Stats() {
const stats: Stat[] = [
  { value: "10K+", label: "Active Users", Icon: Users ,color:"#4C2682"},
  { value: "25K+", label: "Cases Managed", Icon: Briefcase ,color:"#4089FE"},
  { value: "99.9%", label: "Uptime & Reliability", Icon: Shield ,color:"#F09438"},
  { value: "256-bit", label: "Data Encryption", Icon: Lock ,color:"#461F87"},
  { value: "Trusted", label: "Across India", Icon: Shield ,color:"#F17838"},
];

  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="bg-white rounded-3xl border p-10">
        <div className="flex flex-wrap gap-10 justify-center-safe">
          {stats.map(({value, label, Icon,color}, index) => (
            <div key={index} className="flex justify-center ">
              <Icon className={`mr-2`}size={40} style={{ color }}/>
              <div><h3 className="text-3xl font-bold">
                {value}
              </h3>
              <p className="text-gray-500">
                {label}
              </p></div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}