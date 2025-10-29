import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const QuranNazira = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-primary">
            তাজবীদসহ কুরআন শিক্ষা (নাযিরা)
          </h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-accent"></div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  কোর্স সম্পর্কে
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  এই কোর্সে শিক্ষার্থীরা সঠিক তাজবীদের নিয়ম মেনে কুরআন
                  তিলাওয়াত শিখবেন। আরবি হরফ চেনা থেকে শুরু করে পূর্ণ সূরা
                  তিলাওয়াত পর্যন্ত ধাপে ধাপে শেখানো হবে।
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>ফযীলত</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  রাসুলুল্লাহ ﷺ বলেছেন: "তোমাদের মধ্যে শ্রেষ্ঠ সেই, যে নিজে
                  কুরআন শেখে এবং অন্যকে তা শেখায়।" (বুখারী)
                </p>
                <p className="text-muted-foreground">
                  কিয়ামতের দিন কুরআন তিলাওয়াতকারীকে বলা হবে: "তুমি পড় এবং উপরে
                  উঠতে থাক।" (তিরমিযী)
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
                      <h4 className="font-semibold">
                        ১ম পর্যায়: মৌলিক বর্ণ পরিচিতি
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        আরবি বর্ণমালা ও হরকত
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <div>
                      <h4 className="font-semibold">
                        ২য় পর্যায়: তাজবীদের মৌলিক নিয়ম
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        মাদ্দ, গুন্নাহ, ইদগাম ইত্যাদি
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <div>
                      <h4 className="font-semibold">
                        ৩য় পর্যায়: বিশেষ নিয়মাবলী
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        কালকালাহ, রা এর উচ্চারণ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <div>
                      <h4 className="font-semibold">
                        ৪র্থ পর্যায়: ব্যবহারিক অনুশীলন
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        ছোট সূরা থেকে বড় সূরা পর্যন্ত
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
                    <p className="font-semibold">৪-৬ মাস</p>
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
                  আজই ভর্তি হয়ে যান এবং কুরআন শেখা শুরু করুন
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

export default QuranNazira;
