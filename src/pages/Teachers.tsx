import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Globe } from "lucide-react";

const Teachers = () => {
  const teachers = [
    {
      name: "উস্তাদ আব্দুল করিম",
      specialization: "কুরআন তিলাওয়াত ও তাজবীদ",
      qualification: "হাফিজুল কুরআন, ক্বারী",
      experience: "১২ বছর",
      language: ["বাংলা", "আরবি", "ইংরেজি"],
    },
    {
      name: "শায়খ মুহাম্মদ রহমান",
      specialization: "হাদীস ও ফিকহ",
      qualification: "দাওরায়ে হাদীস",
      experience: "১৫ বছর",
      language: ["বাংলা", "আরবি", "উর্দু"],
    },
    {
      name: "উস্তাদা ফাতিমা খাতুন",
      specialization: "কুরআন ও ইসলামিক স্টাডিজ",
      qualification: "হাফিজা, ইসলামিক স্টাডিজে স্নাতক",
      experience: "৮ বছর",
      language: ["বাংলা", "আরবি", "ইংরেজি"],
    },
    {
      name: "উস্তাদ ইব্রাহিম খলিল",
      specialization: "আরবি ভাষা",
      qualification: "আরবি সাহিত্যে স্নাতকোত্তর",
      experience: "১০ বছর",
      language: ["বাংলা", "আরবি"],
    },
    {
      name: "উস্তাদা আয়েশা সিদ্দিকা",
      specialization: "শিশু শিক্ষা ও সীরাহ",
      qualification: "ইসলামিক স্টাডিজ",
      experience: "৬ বছর",
      language: ["বাংলা", "ইংরেজি"],
    },
    {
      name: "শায়খ তাহের হুসাইন",
      specialization: "হিফজ প্রশিক্ষক",
      qualification: "হাফিজুল কুরআন",
      experience: "১৪ বছর",
      language: ["বাংলা", "আরবি"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-primary">
            শিক্ষক প্যানেল
          </h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-accent"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            আমাদের অভিজ্ঞ ও দক্ষ শিক্ষকমণ্ডলী
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
                      <span>অভিজ্ঞতা: {teacher.experience}</span>
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
