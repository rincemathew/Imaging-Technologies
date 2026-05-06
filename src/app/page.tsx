import NavBar from "@/components/nav_bar";
import MainContent from "@/components/main_content";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <NavBar/>
      <MainContent />
      <Footer />
    </div>
  );
}
