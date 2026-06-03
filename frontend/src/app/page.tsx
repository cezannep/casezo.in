import UserNavbar from "./components/Navbar/UserNavbar ";
import Hero from "./components/PublicLanding/Hero";
import UserCard from "./components/PublicLanding/UserCard";
import Stats from "./components/PublicLanding/Stats";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className="bg-[#FCFBF8] min-h-screen w-full">
      <UserNavbar />
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-18">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            How would you like to continue?
          </h2>

          <p className="text-gray-500 mt-3">
            Choose an experience tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <UserCard
            type="user"
            data={[
              "Track case status & hearing dates",
              "Schedule & join meetings",
              "Manage and organize documents",
              "Get timely updates & notifications",
            ]}
          />
          <UserCard type="advocate" data={[
            "Manage clients cases & appointments",
            "Organize documents & tasks",
            "AI-powered case insights",
            "Boost productivity" 
          ]} />
        </div>
      </section>

      <Stats />
      <Footer />
    </main>
  );
}
