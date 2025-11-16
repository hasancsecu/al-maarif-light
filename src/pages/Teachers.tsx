import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Teachers = () => {
  const { language } = useLanguage();

  const teachers = [
    {
      name: language === "bn" ? "উস্তাদ আব্দুল করিম" : "Ustad Abdul Karim",
      specialization: language === "bn" ? "কুরআন তিলাওয়াত ও তাজবীদ" : "Quran Recitation & Tajweed",
      qualification: language === "bn" ? "হাফিজুল কুরআন, ক্বারী" : "Hafizul Quran, Qari",
      experience: language === "bn" ? "১২ বছর" : "12 years",
      language: language === "bn" ? ["বাংলা", "আরবি", "ইংরেজি"] : ["Bangla", "Arabic", "English"],
    },
    {
      name: language === "bn" ? "শায়খ মুহাম্মদ রহমান" : "Sheikh Muhammad Rahman",
      specialization: language === "bn" ? "হাদীস ও ফিকহ" : "Hadith & Fiqh",
      qualification: language === "bn" ? "দাওরায়ে হাদীস" : "Dawrah-e-Hadith",
      experience: language === "bn" ? "১৫ বছর" : "15 years",
      language: language === "bn" ? ["বাংলা", "আরবি", "উর্দু"] : ["Bangla", "Arabic", "Urdu"],
    },
    {
      name: language === "bn" ? "উস্তাদা ফাতিমা খাতুন" : "Ustadha Fatima Khatun",
      specialization: language === "bn" ? "কুরআন ও ইসলামিক স্টাডিজ" : "Quran & Islamic Studies",
      qualification: language === "bn" ? "হাফিজা, ইসলামিক স্টাডিজে স্নাতক" : "Hafiza, Bachelor in Islamic Studies",
      experience: language === "bn" ? "৮ বছর" : "8 years",
      language: language === "bn" ? ["বাংলা", "আরবি", "ইংরেজি"] : ["Bangla", "Arabic", "English"],
    },
    {
      name: language === "bn" ? "উস্তাদ ইব্রাহিম খলিল" : "Ustad Ibrahim Khalil",
      specialization: language === "bn" ? "আরবি ভাষা" : "Arabic Language",
      qualification: language === "bn" ? "আরবি সাহিত্যে স্নাতকোত্তর" : "Master's in Arabic Literature",
      experience: language === "bn" ? "১০ বছর" : "10 years",
      language: language === "bn" ? ["বাংলা", "আরবি"] : ["Bangla", "Arabic"],
    },
    {
      name: language === "bn" ? "উস্তাদা আয়েশা সিদ্দিকা" : "Ustadha Ayesha Siddiqua",
      specialization: language === "bn" ? "শিশু শিক্ষা ও সীরাহ" : "Children's Education & Seerah",
      qualification: language === "bn" ? "ইসলামিক স্টাডিজ" : "Islamic Studies",
      experience: language === "bn" ? "৬ বছর" : "6 years",
      language: language === "bn" ? ["বাংলা", "ইংরেজি"] : ["Bangla", "English"],
    },
    {
      name: language === "bn" ? "শায়খ তাহের হুসাইন" : "Sheikh Taher Husain",
      specialization: language === "bn" ? "হিফজ প্রশিক্ষক" : "Hifz Instructor",
      qualification: language === "bn" ? "হাফিজুল কুরআন" : "Hafizul Quran",
      experience: language === "bn" ? "১৪ বছর" : "14 years",
      language: language === "bn" ? ["বাংলা", "আরবি"] : ["Bangla", "Arabic"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-primary">
            {language === "bn" ? "শিক্ষক প্যানেল" : "Teachers Panel"}
          </h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-accent"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            {language === "bn" ? "আমাদের অভিজ্ঞ ও দক্ষ শিক্ষকমণ্ডলী" : "Our Experienced and Skilled Teaching Staff"}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher, index) => (
            <Card
              key={index}
              className="shadow-elegant transition-transform hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                    <GraduationCap className="h-16 w-16 text-white" />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="mb-2 text-xl font-bold text-primary">
                    {teacher.name}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-accent">
                    {teacher.specialization}
                  </p>

                  <div className="mb-4 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <Award className="h-4 w-4" />
                      <span>{teacher.qualification}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span>{language === "bn" ? "অভিজ্ঞতা: " : "Experience: "}{teacher.experience}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-2">
                    {teacher.language.map((lang, idx) => (
                      <Badge key={idx} variant="secondary">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
