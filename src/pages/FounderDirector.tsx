import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Award, GraduationCap } from "lucide-react";

const FounderDirector = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-primary">
            প্রতিষ্ঠাতা পরিচালক
          </h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-accent"></div>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="overflow-hidden shadow-elegant">
            <CardContent className="p-8">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center">
                  <div className="mb-4 flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                    <GraduationCap className="h-24 w-24 text-white" />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <h2 className="mb-2 text-2xl font-bold text-primary">
                    শায়খ [নাম]
                  </h2>
                  <p className="mb-4 text-lg text-muted-foreground">
                    প্রতিষ্ঠাতা ও প্রধান পরিচালক
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Award className="mt-1 h-5 w-5 text-accent" />
                      <div>
                        <h3 className="font-semibold">শিক্ষাগত যোগ্যতা</h3>
                        <p className="text-muted-foreground">
                          দারুল উলুম থেকে দাওরায়ে হাদীস সম্পন্ন। ইসলামিক
                          স্টাডিজে স্নাতকোত্তর ডিগ্রিধারী। আরবি ভাষা ও সাহিত্যে
                          বিশেষ দক্ষতা অর্জন।
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <BookOpen className="mt-1 h-5 w-5 text-accent" />
                      <div>
                        <h3 className="font-semibold">অভিজ্ঞতা</h3>
                        <p className="text-muted-foreground">
                          ১৫+ বছরের শিক্ষকতার অভিজ্ঞতা। বিভিন্ন মাদরাসা ও
                          ইসলামিক প্রতিষ্ঠানে কুরআন, হাদীস ও ফিকহ শিক্ষা প্রদান।
                          অনলাইন ইসলামিক শিক্ষায় পথপ্রদর্শক।
                        </p>
                      </div>
                    </div>

                    <div className="rounded-lg bg-secondary/50 p-4">
                      <h3 className="mb-2 font-semibold">আমাদের স্বপ্ন</h3>
                      <p className="italic text-muted-foreground">
                        "আমাদের লক্ষ্য বিশ্বের প্রতিটি মুসলিম পরিবারে কুরআন ও
                        সুন্নাহর আলো পৌঁছে দেওয়া। প্রযুক্তির মাধ্যমে আমরা
                        দূরত্বের সীমা অতিক্রম করে জ্ঞানের দ্বার উন্মুক্ত করতে
                        চাই।"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FounderDirector;
