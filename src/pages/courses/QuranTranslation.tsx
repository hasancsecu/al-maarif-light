import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Award, CheckCircle, Languages } from "lucide-react";
import { Link } from "react-router-dom";

const QuranTranslation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-primary">
            অনুবাদসহ কুরআন শিক্ষা
          </h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-accent"></div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="h-6 w-6 text-primary" />
                  কোর্স সম্পর্কে
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  এই কোর্সে শিক্ষার্থীরা কুরআনের আয়াতসমূহের বাংলা অনুবাদ ও
                  সংক্ষিপ্ত ব্যাখ্যা শিখবেন। কুরআন বুঝে পড়ার মাধ্যমে আল্লাহর
                  বাণীর প্রকৃত অর্থ হৃদয়ঙ্গম করা যায়।
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>ফযীলত</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  আল্লাহ তা'আলা বলেন: "এটি একটি মুবারক কিতাব যা আমি তোমার প্রতি
                  নাযিল করেছি, যাতে তারা এর আয়াতসমূহ নিয়ে চিন্তা-ভাবনা করে।"
                  (সূরা সোয়াদ: ২৯)
                </p>
                <p className="text-muted-foreground">
                  "যে ব্যক্তি কুরআনের একটি আয়াত শিখে, তা তার জন্য লাল উটের
                  চেয়েও উত্তম।" (বুখারী)
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>সিলেবাস</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <div>
                      <h4 className="font-semibold">পারা ৩০</h4>
                      <p className="text-sm text-muted-foreground">
                        ছোট সূরাসমূহের অনুবাদ ও ব্যাখ্যা
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <div>
                      <h4 className="font-semibold">গুরুত্বপূর্ণ সূরা</h4>
                      <p className="text-sm text-muted-foreground">
                        ইয়াসিন, রহমান, ওয়াকিয়া, মুলক
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <div>
                      <h4 className="font-semibold">দৈনন্দিন আয়াত</h4>
                      <p className="text-sm text-muted-foreground">
                        আয়াতুল কুরসি, শেষ দুই আয়াত ইত্যাদি
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <div>
                      <h4 className="font-semibold">তাফসীর মূলনীতি</h4>
                      <p className="text-sm text-muted-foreground">
                        কুরআন বুঝার মৌলিক পদ্ধতি
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>কোর্স তথ্য</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      কোর্সের মেয়াদ
                    </p>
                    <p className="font-semibold">৬-১২ মাস</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">সার্টিফিকেট</p>
                    <p className="font-semibold">হ্যাঁ</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">ক্লাসের ধরন</p>
                    <p className="font-semibold">ওয়ান-টু-ওয়ান / গ্রুপ</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary to-accent text-white shadow-elegant">
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">আগ্রহী?</h3>
                <p className="mb-4 text-sm opacity-90">
                  কুরআন বুঝে পড়তে শিখুন আজই
                </p>
                <Link to="/admission/form">
                  <Button variant="secondary" className="w-full">
                    ভর্তি হন
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuranTranslation;
