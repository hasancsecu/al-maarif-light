import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Clock,
  UserCheck,
  Calendar,
  Monitor,
  Award,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "ওয়ান বাই ওয়ান ক্লাস",
      description: "একজন শিক্ষক, একজন ছাত্র—সম্পূর্ণ ব্যক্তিগত মনোযোগ",
    },
    {
      icon: Users,
      title: "গ্রুপ ক্লাস",
      description: "৩-৫ জনের ছোট গ্রুপে কার্যকর শিক্ষা",
    },
    {
      icon: Clock,
      title: "নমনীয় সময়সূচি",
      description: "আপনার সুবিধামতো সময়ে ক্লাস করার সুযোগ",
    },
    {
      icon: UserCheck,
      title: "অভিজ্ঞ শিক্ষক-শিক্ষিকা",
      description: "পুরুষদের জন্য শিক্ষক ও মহিলাদের জন্য শিক্ষিকা",
    },
    {
      icon: Award,
      title: "ফ্রি ট্রায়াল ক্লাস",
      description: "ভর্তির আগে একাধিক ফ্রি ক্লাসের সুযোগ",
    },
    {
      icon: TrendingUp,
      title: "দ্রুত শিক্ষা",
      description: "মাত্র ৪ মাসে সুন্দরভাবে কুরআন পড়তে শিখুন",
    },
    {
      icon: Monitor,
      title: "সার্বক্ষণিক মনিটরিং",
      description: "শিক্ষার্থীদের অগ্রগতি নিয়মিত পর্যবেক্ষণ",
    },
    {
      icon: CheckCircle,
      title: "মাসিক পরীক্ষা",
      description: "নিয়মিত মূল্যায়ন ও প্রতিবেদন প্রদান",
    },
    {
      icon: Calendar,
      title: "সময় ব্যবস্থাপনা",
      description: "সময়ের সঠিক ব্যবহার ও নিয়মানুবর্তিতা শিক্ষা",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-primary">
            আমাদের বৈশিষ্ট্যসমূহ
          </h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-accent"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            যে বিশেষত্বগুলো আমাদের আলাদা করে
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="shadow-elegant transition-transform hover:scale-105"
            >
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-center">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 space-y-6">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="h-6 w-6 text-primary" />
                ক্লাস পরিচালনা পদ্ধতি
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                আমাদের প্রতিটি ক্লাস সম্পূর্ণ অনলাইনে পরিচালিত হয়, যাতে
                শিক্ষার্থীরা ঘরে বসেই সহজে শিখতে পারে।
              </p>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg bg-secondary/50 p-4 text-center">
                  <p className="font-semibold">WhatsApp</p>
                </div>
                <div className="rounded-lg bg-secondary/50 p-4 text-center">
                  <p className="font-semibold">Google Meet</p>
                </div>
                <div className="rounded-lg bg-secondary/50 p-4 text-center">
                  <p className="font-semibold">Zoom</p>
                </div>
                <div className="rounded-lg bg-secondary/50 p-4 text-center">
                  <p className="font-semibold">Microsoft Teams</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Features;
