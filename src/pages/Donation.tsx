import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartHandshake, HandCoins, Banknote, Gift } from "lucide-react";

const Donation = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-primary">
            ডোনেশন ও সহযোগিতা
          </h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-accent"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            দ্বীনের খেদমতে আপনিও অংশ নিতে পারেন আপনার দান ও সহযোগিতার মাধ্যমে
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <HeartHandshake className="h-6 w-6 text-primary" />
                কেন ডোনেশন গুরুত্বপূর্ণ
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg leading-relaxed">
              <p>
                আল-মা'আরিফ ইন্টারন্যাশনাল ইনস্টিটিউট সম্পূর্ণ অলাভজনক একটি
                দ্বীনি শিক্ষা প্রতিষ্ঠান। এখানে আপনার প্রদত্ত প্রতিটি টাকা
                দ্বীনের প্রচার ও প্রসারে, শিক্ষার্থীদের জন্য বৃত্তি প্রদান, এবং
                দরিদ্রদের সহায়তায় ব্যয় করা হয়।
              </p>
              <div className="rounded-lg bg-primary/10 p-6">
                <h3 className="mb-4 text-xl font-bold text-primary">
                  "তোমরা যারা আল্লাহর রাস্তায় দান করবে তার প্রতিদান তোমাদেরকে
                  পুরাপুরি দেয়া হবে। আর তোমাদের প্রতি কোনও প্রকার জুলুম করা হবে
                  না।"
                </h3>
                <p className="text-muted-foreground text-sm">
                  — সুরা আল-আনফাল, ৮:৬০
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Donation Methods */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Banknote className="h-5 w-5 text-primary" />
                ব্যাংক ট্রান্সফার
              </CardTitle>
            </CardHeader>
            <CardContent className="text-base space-y-1">
              <p>ব্যাংক: ইসলামী ব্যাংক বাংলাদেশ লিমিটেড</p>
              <p>অ্যাকাউন্ট নাম: Al-Ma'arif International Institute</p>
              <p>
                অ্যাকাউন্ট নং:{" "}
                <span className="font-semibold text-primary">0123456789</span>
              </p>
              <p>শাখা: গুলশান</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <HandCoins className="h-5 w-5 text-primary" />
                মোবাইল ব্যাংকিং (বিকাশ/নগদ)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-base">
              <p>
                📱 বিকাশ (সেন্ড মানি):{" "}
                <span className="font-semibold text-primary">
                  +880 1886106782
                </span>
              </p>
              <p>
                📱 নগদ (সেন্ড মানি):{" "}
                <span className="font-semibold text-primary">
                  +880 1886106782
                </span>
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Gift className="h-5 w-5 text-primary" />
                স্পনসরশিপ ও সহযোগিতা
              </CardTitle>
            </CardHeader>
            <CardContent className="text-base">
              <p>
                শিক্ষার্থীদের বৃত্তি, ক্লাস রুম পরিচালনা, ও প্রকল্প স্পনসর করতে
                যোগাযোগ করুন:
              </p>
              <p className="mt-2 font-medium text-primary">
                📧 almaarif.edu101010@gmail.com
              </p>
              <p className="font-medium text-primary">📞 +880 1886106782</p>
            </CardContent>
          </Card>
        </div>

        {/* Footer Message */}
        <Card className="text-center">
          <CardContent className="py-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              আপনার প্রতিটি দান দ্বীনের পথে এক একটি ইট!
            </h2>
            <p className="text-muted-foreground text-base">
              আল্লাহ তাআলা আপনার দান কবুল করুন এবং তা হেদায়াত ও বরকতের মাধ্যমে
              ফলপ্রসূ করুন — আমিন।
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Donation;
