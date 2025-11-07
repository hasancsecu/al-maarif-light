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
                    হাফেজ মাওলানা নূরুদ্দীন মুহাম্মাদ
                  </h2>
                  <p className="mb-4 text-lg text-muted-foreground">
                    প্রতিষ্ঠাতা ও প্রধান পরিচালক
                  </p>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold">শিক্ষাগত যোগ্যতা</h3>
                      </div>
                      <p className="text-muted-foreground">
                        তিনি অল্প বয়সে পবিত্র কুরআন হিফজ করেন। পরবর্তীতে
                        বাংলাদেশের বিভিন্ন স্বনামধন্য শিক্ষাপ্রতিষ্ঠানে অধ্যয়ন
                        শেষে আল-জামিয়াতুল ইসলামিয়া দারুল উলুম মাদানীনগর থেকে
                        দাওরায়ে হাদীস সম্পন্ন করেন। তিনি ইসলামিক স্টাডিজে
                        স্নাতকোত্তর ডিগ্রিধারী এবং আরবি ভাষা ও সাহিত্যে বিশেষ
                        পারদর্শিতা অর্জন করেছেন।
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold">অভিজ্ঞতা</h3>
                      </div>
                      <p className="text-muted-foreground">
                        তিনি পূর্বে বিভিন্ন আন্তর্জাতিক ইসলামিক অনলাইন
                        প্রতিষ্ঠানে শিক্ষকতা ও শিক্ষাসচিবের দায়িত্ব পালন
                        করেছেন। এছাড়াও বিভিন্ন মাদরাসা ও ইসলামিক শিক্ষা
                        প্রতিষ্ঠানে কুরআন, হাদীস ও ফিকহ বিষয়ে শিক্ষা প্রদান
                        করেছেন।
                      </p>
                    </div>
                    <div className="rounded-lg bg-secondary/50 p-4">
                      <h3 className="mb-2 font-semibold">আমাদের স্বপ্ন</h3>
                      <p className="italic text-muted-foreground">
                        আজ সমগ্র মুসলিম উম্মাহ দিশেহারা, নিপীড়িত ও বিভ্রান্ত।
                        পৃথিবীর প্রান্তে প্রান্তে মুসলমানদের উপর অন্যায় ও
                        জুলুমের কালো ছায়া নেমে এসেছে।
                        <br />
                        হে মুসলিম উম্মাহ! তোমাদের কাছে আমার প্রশ্ন— জানো কি, এই
                        ভয়াবহ ফিতনা থেকে মুক্তির একমাত্র উপায় কী?
                        <br />
                        “কুরআন ও হাদীস।”
                        <br />
                        তাই আমাদের প্রতিজ্ঞা — দূরত্বের সীমানা অতিক্রম করে,
                        প্রযুক্তির মাধ্যমে বিশ্বের প্রতিটি মুসলিম পরিবারের
                        দোরগোড়ায় কুরআন ও সুন্নাহর আলো পৌঁছে দেওয়া। দ্বীনি
                        ইলমের দুয়ার সর্বসাধারণের জন্য উন্মুক্ত করা —
                        ইনশাআল্লাহ।
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
