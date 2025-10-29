import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Target, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-primary">
            আমাদের সম্পর্কে
          </h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-accent"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            আল-মা'আরিফ ইন্টারন্যাশনাল ইনস্টিটিউট — দ্বীনের আলো ছড়িয়ে দেওয়ার
            অঙ্গীকার
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <BookOpen className="h-6 w-6 text-primary" />
                প্রতিষ্ঠানের সূচনা
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg leading-relaxed">
              <p>
                বর্তমান সময়ে আমরা দ্বীনের এক গভীর সংকটময় অধ্যায় পার করছি।
                চারদিকে ফিতনার ঝড়—নাস্তিকতা, বস্তুবাদ, অবিশ্বাস ও বিভ্রান্তির
                স্রোত পৃথিবীজুড়ে ছড়িয়ে পড়েছে। মানুষ কুরআনের হেদায়াত থেকে
                দূরে সরে যাচ্ছে, রাসুলুল্লাহ ﷺ এর পবিত্র হাদীস অনুসরণ তো দূরের
                কথা—অনেকেই আজ তা অস্বীকার করার দুঃসাহস দেখাচ্ছে।
              </p>
              <p>
                তবুও, এই হতাশার ঘন অন্ধকারের ভেতরেও আশার এক ফালি আলোর ঝলকানি
                দেখা যায়—একদল স্বপ্নবাজ, দ্বীনের প্রতি অনুরাগী তরুণ-তরুণীর
                উদ্যোগে।
              </p>
              <div className="rounded-lg bg-primary/10 p-6">
                <h3 className="mb-4 text-xl font-bold text-primary">
                  আল-মা'আরিফ ইন্টারন্যাশনাল ইনস্টিটিউটের সূচনা
                </h3>
                <p className="mb-4">
                  এই সংকটাপূর্ণ সময়ে, দ্বীনের আলো মানুষের অন্তরে জ্বালানোর দৃঢ়
                  অঙ্গীকার নিয়ে, একঝাঁক তরুণ ওলামায়ে কেরাম এবং দ্বীনদার
                  জেনারেল শিক্ষিত ব্যক্তিবর্গের উদ্যোগে প্রতিষ্ঠিত হয়
                  অনলাইনভিত্তিক ইসলামিক শিক্ষা প্রতিষ্ঠান "আল-মা'আরিফ
                  ইন্টারন্যাশনাল ইনস্টিটিউট"।
                </p>
                <p className="font-medium text-primary">
                  প্রতিষ্ঠার তারিখ: ১২ অক্টোবর ২০২৫ ঈসায়ী / ২০ রবিউস্ সানি ১৪৪৭
                  হিজরি / ২৭ আশ্বিন ১৪৩২ বঙ্গাব্দ
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mission & Vision */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Target className="h-6 w-6 text-primary" />
                আমাদের লক্ষ্য
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-base">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <p>বিশ্বের প্রতিটি ঘরে কুরআন ও হাদীসের আলো পৌঁছে দেওয়া</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <p>দিকভ্রান্ত মানুষকে দ্বীনের সরল ও সুন্দর পথে ফিরিয়ে আনা</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <p>
                  একটি প্রজন্ম গড়ে তোলা, যারা জ্ঞান, আমল ও আখলাকের সমন্বয়ে
                  মানবতার কল্যাণে কাজ করবে
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Heart className="h-6 w-6 text-primary" />
                আমাদের উদ্দেশ্য
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-base">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <p>কুরআন ও সুন্নাহর আলোকে সঠিক ইসলামিক শিক্ষা প্রদান</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <p>আধুনিক প্রযুক্তির মাধ্যমে দ্বীনি শিক্ষাকে সহজলভ্য করা</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <p>চরিত্রবান ও দক্ষ মুসলিম প্রজন্ম তৈরি করা</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Users className="h-6 w-6 text-primary" />
              আমাদের মূল্যবোধ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-border p-4">
                <h3 className="mb-2 font-bold text-lg">ইখলাস (আন্তরিকতা)</h3>
                <p className="text-sm text-muted-foreground">
                  একমাত্র আল্লাহর সন্তুষ্টির জন্য কাজ করা
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="mb-2 font-bold text-lg">মানসম্মত শিক্ষা</h3>
                <p className="text-sm text-muted-foreground">
                  উচ্চমানের পাঠ্যক্রম ও যোগ্য শিক্ষকমণ্ডলী
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="mb-2 font-bold text-lg">সহজলভ্যতা</h3>
                <p className="text-sm text-muted-foreground">
                  সবার জন্য সহজ ও সুবিধাজনক শিক্ষা ব্যবস্থা
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="mb-2 font-bold text-lg">ধারাবাহিকতা</h3>
                <p className="text-sm text-muted-foreground">
                  নিয়মিত পর্যবেক্ষণ ও মূল্যায়ন
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="mb-2 font-bold text-lg">আমানতদারিতা</h3>
                <p className="text-sm text-muted-foreground">
                  শিক্ষার্থীদের প্রতি দায়িত্বশীলতা
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="mb-2 font-bold text-lg">উদ্ভাবনী</h3>
                <p className="text-sm text-muted-foreground">
                  আধুনিক পদ্ধতিতে শিক্ষা প্রদান
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
