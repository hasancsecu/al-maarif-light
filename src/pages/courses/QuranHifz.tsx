import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Award, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const QuranHifz = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-primary">
            কুরআন হিফজ (আংশিক / পূর্ণ)
          </h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-accent"></div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-primary" />
                  কোর্স সম্পর্কে
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  এই কোর্সে শিক্ষার্থীরা আল-কুরআনের সম্পূর্ণ বা আংশিক অংশ মুখস্থ
                  করতে পারবেন। অভিজ্ঞ হাফিজ উস্তাদদের তত্ত্বাবধানে বৈজ্ঞানিক
                  পদ্ধতিতে হিফজ করানো হয়।
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>ফযীলত</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  রাসুলুল্লাহ ﷺ বলেছেন: "যে ব্যক্তি কুরআন পড়ে এবং তাতে
                  পারদর্শী, সে থাকবে সম্মানিত ফেরেশতাদের সাথে।" (বুখারী ও
                  মুসলিম)
                </p>
                <p className="text-muted-foreground">
                  "কিয়ামতের দিন কুরআন হাফিজের পিতামাতাকে এমন মুকুট পরানো হবে
                  যার আলো সূর্যের চেয়েও উজ্জ্বল।" (আবু দাউদ)
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
                      <h4 className="font-semibold">আংশিক হিফজ</h4>
                      <p className="text-sm text-muted-foreground">
                        পারা ২৮-৩০ বা যেকোনো নির্দিষ্ট পারা
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <div>
                      <h4 className="font-semibold">পূর্ণ হিফজ</h4>
                      <p className="text-sm text-muted-foreground">
                        ৩০ পারা সম্পূর্ণ হিফজ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <div>
                      <h4 className="font-semibold">দৈনিক সবক</h4>
                      <p className="text-sm text-muted-foreground">
                        নতুন সবক + পুরাতন সবক দোহরানো
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <div>
                      <h4 className="font-semibold">মুরাজাআহ (পুনরাবৃত্তি)</h4>
                      <p className="text-sm text-muted-foreground">
                        নিয়মিত দোহরানোর ব্যবস্থা
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
                    <p className="font-semibold">১-৩ বছর (নির্ভর করে)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">সার্টিফিকেট</p>
                    <p className="font-semibold">হ্যাঁ (হিফজ সনদ)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">ক্লাসের ধরন</p>
                    <p className="font-semibold">ওয়ান-টু-ওয়ান</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary to-accent text-white shadow-elegant">
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">আগ্রহী?</h3>
                <p className="mb-4 text-sm opacity-90">
                  হাফিজ হওয়ার স্বপ্ন পূরণ করুন আজই
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

export default QuranHifz;
