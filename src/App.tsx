import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminAdmissions from "./pages/admin/AdminAdmissions";
import AdminContacts from "./pages/admin/AdminContacts";
import Features from "./pages/Features";
import Goals from "./pages/Goals";
import Policies from "./pages/Policies";
import FounderDirector from "./pages/FounderDirector";
import CurriculumCommittee from "./pages/CurriculumCommittee";
import Teachers from "./pages/Teachers";
import AdmissionForm from "./pages/admission/AdmissionForm";
import AdmissionFees from "./pages/admission/AdmissionFees";
import AdmissionProcess from "./pages/admission/AdmissionProcess";
import ArabicLanguage from "./pages/courses/ArabicLanguage";
import KidsIslam from "./pages/courses/KidsIslam";
import HadithHifz from "./pages/courses/HadithHifz";
import QuranTranslation from "./pages/courses/QuranTranslation";
import QuranNazira from "./pages/courses/QuranNazira";
import QuranHifz from "./pages/courses/QuranHifz";
import ScrollToTop from "./components/ScrollToTop";
import DynamicTitle from "./components/DynamicTitle";
import NoticeBoard from "./pages/NoticeBoard";
import Donation from "./pages/Donation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <DynamicTitle />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/features" element={<Features />} />
            <Route path="/policies" element={<Policies />} />

            <Route path="/founder-director" element={<FounderDirector />} />
            <Route
              path="/curriculum-committee"
              element={<CurriculumCommittee />}
            />
            <Route path="/teachers" element={<Teachers />} />

            <Route path="/courses/quran-nazira" element={<QuranNazira />} />
            <Route path="/courses/quran-hifz" element={<QuranHifz />} />
            <Route
              path="/courses/quran-translation"
              element={<QuranTranslation />}
            />
            <Route path="/courses/hadith-hifz" element={<HadithHifz />} />
            <Route path="/courses/kids-islam" element={<KidsIslam />} />
            <Route
              path="/courses/arabic-language"
              element={<ArabicLanguage />}
            />

            <Route path="/admission/process" element={<AdmissionProcess />} />
            <Route path="/admission/form" element={<AdmissionForm />} />
            <Route path="/admission/fees" element={<AdmissionFees />} />

            <Route path="/notice" element={<NoticeBoard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donation" element={<Donation />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/admissions" element={<AdminAdmissions />} />
        <Route path="/admin/contacts" element={<AdminContacts />} />
        
        <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
