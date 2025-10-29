import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, Target } from "lucide-react";

const CurriculumCommittee = () => {
  const members = [
    {
      name: "শায়খ [নাম ১]",
      role: "কারিকুলাম প্রধান",
      qualification: "দাওরায়ে হাদীস, আরবি সাহিত্যে স্নাতকোত্তর",
    },
    {
      name: "উস্তাদ [নাম ২]",
      role: "কুরআন বিভাগ প্রধান",
      qualification: "হাফিজুল কুরআন, তাজবীদ বিশেষজ্ঞ",
    },
    {
      name: "উস্তাদা [নাম ৩]",
      role: "মহিলা বিভাগ প্রধান",
      qualification: "ইসলামিক স্টাডিজে স্নাতকোত্তর",
    },
    {
      name: "শায়খ [নাম ৪]",
      role: "হাদীস বিভাগ প্রধান",
      qualification: "দাওরায়ে হাদীস, হাদীস গবেষক",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-primary">
            পাঠ্যক্রম কমিটি
          </h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-accent"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            আমাদের অভিজ্ঞ ওলামায়ে কেরাম যারা পাঠ্যক্রম তৈরি ও তত্ত্বাবধান করেন
          </p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <Card className="shadow-elegant">
            <CardHeader>
              <Users className="mb-2 h-12 w-12 text-primary" />
              <CardTitle>বিশেষজ্ঞ টিম</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                অভিজ্ঞ ওলামা ও শিক্ষাবিদদের সমন্বয়ে গঠিত কমিটি
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <BookOpen className="mb-2 h-12 w-12 text-primary" />
              <CardTitle>আধুনিক পদ্ধতি</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                প্রযুক্তি ও ঐতিহ্যের সমন্বয়ে কার্যকর শিক্ষা পদ্ধতি
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <Target className="mb-2 h-12 w-12 text-primary" />
              <CardTitle>স্পষ্ট লক্ষ্য</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                প্রতিটি কোর্সের জন্য সুনির্দিষ্ট শিক্ষার লক্ষ্য
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {members.map((member, index) => (
            <Card
              key={index}
              className="shadow-elegant transition-transform hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 text-xl font-bold text-primary">
                      {member.name}
                    </h3>
                    <p className="mb-2 text-sm font-medium text-accent">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.qualification}
                    </p>
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

export default CurriculumCommittee;
