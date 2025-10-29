import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Heart, Users, Globe, BookOpen, Star } from "lucide-react";

const Goals = () => {
  const goals = [
    {
      icon: Globe,
      title: "বৈশ্বিক প্রচার",
      description: "বিশ্বের প্রতিটি ঘরে কুরআন ও হাদীসের আলো পৌঁছে দেওয়া",
    },
    {
      icon: Heart,
      title: "সঠিক পথ প্রদর্শন",
      description: "দিকভ্রান্ত মানুষকে দ্বীনের সরল ও সুন্দর পথে ফিরিয়ে আনা",
    },
    {
      icon: Users,
      title: "প্রজন্ম গঠন",
      description: "জ্ঞান, আমল ও আখলাকের সমন্বয়ে আদর্শ প্রজন্ম তৈরি করা",
    },
    {
      icon: BookOpen,
      title: "ইলম বিস্তার",
      description: "কুরআন ও সুন্নাহর সঠিক জ্ঞান প্রচার ও প্রসার করা",
    },
    {
      icon: Star,
      title: "মানসম্মত শিক্ষা",
      description: "আন্তর্জাতিক মানের অনলাইন ইসলামিক শিক্ষা নিশ্চিত করা",
    },
    {
      icon: Target,
      title: "সহজ প্রবেশাধিকার",
      description: "প্রযুক্তির মাধ্যমে সবার জন্য ইসলামী শিক্ষা সহজলভ্য করা",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-primary">
            লক্ষ্য ও উদ্দেশ্য
          </h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-accent"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            আমাদের স্বপ্ন ও অঙ্গীকার
          </p>
        </div>

        <div className="mb-12 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 p-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-primary">
            আমাদের মূল লক্ষ্য
          </h2>
          <p className="text-center text-lg leading-relaxed text-muted-foreground">
            বিশ্বের প্রতিটি ঘরে কুরআন ও হাদীসের আলো পৌঁছে দেওয়া এবং একটি
            প্রজন্ম গড়ে তোলা, যারা জ্ঞান, আমল ও আখলাকের সমন্বয়ে মানবতার
            কল্যাণে কাজ করবে এবং পৃথিবীকে আলোকিত করবে আল্লাহর দীন দিয়ে।
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal, index) => (
            <Card
              key={index}
              className="shadow-elegant transition-transform hover:scale-105"
            >
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                    <goal.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-center">{goal.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  {goal.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-card p-8 shadow-elegant">
          <h2 className="mb-6 text-2xl font-bold text-primary">
            আমাদের অঙ্গীকার
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>✓ প্রতিটি শিক্ষার্থীকে ব্যক্তিগত মনোযোগ দিয়ে পড়ানো</p>
            <p>✓ সর্বোচ্চ মানের শিক্ষা উপকরণ ও পদ্ধতি ব্যবহার করা</p>
            <p>✓ শিক্ষার্থীদের নৈতিক ও চারিত্রিক উন্নয়নে সহায়তা করা</p>
            <p>✓ কুরআন ও সুন্নাহর সঠিক বুঝ প্রদান করা</p>
            <p>✓ শিক্ষার পরিবেশকে সহজ, আরামদায়ক ও কার্যকর করা</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
