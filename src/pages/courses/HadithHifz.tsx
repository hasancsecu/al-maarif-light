import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HadithHifz = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-primary">
            বুখারী ও মুসলিম হিফজ
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
                  সহীহ বুখারী ও সহীহ মুসলিমের নির্বাচিত হাদীস মুখস্থ করার বিশেষ
                  কোর্স। গুরুত্বপূর্ণ হাদীসসমূহ সনদসহ মুখস্থ করা হয়।
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>সিলেবাস</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">
                    🌿 স্তর ১: প্রাথমিক স্তর
                  </h4>
                  <div className="mb-2">
                    🎯 লক্ষ্য: হাদীসের মৌলিক ধারণা ও পরিচিতি অর্জন করা।
                  </div>
                  <div className="mb-2">📘 বিষয়বস্তু: </div>
                  <ol className="list-decimal list-inside space-y-3 ps-5">
                    <li>
                      <strong>হাদীসের কিতাব পরিচিতি</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            সহীহ বুখারী ও সহীহ মুসলিমের সংক্ষিপ্ত ইতিহাস
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>ইমাম বুখারী ও ইমাম মুসলিম (রহঃ)-এর জীবনী</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            হাদীস সংগ্রহ ও যাচাই প্রক্রিয়ার সংক্ষিপ্ত আলোচনা
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>হাদীসের মৌলিক পরিভাষা</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            হাদীস, সনদ, মতন, রাবি, সহীহ, দাঈফ, হাসান ইত্যাদি
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong> মুখস্থের দিকনির্দেশনা</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>সহজ ও ছোট হাদীস নির্বাচন (৫–১০টি)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            মুখস্থের সাথে বাংলা অর্থ ও সারনির্যাস (মাফহুম) শেখা
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>প্রয়োগমূলক শিক্ষা</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            প্রতিটি হাদীস থেকে ১টি করে শিক্ষা লিখে বাস্তব জীবনে
                            প্রয়োগের চর্চা
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">
                    🌿 স্তর ২: মধ্যম স্তর
                  </h4>
                  <div className="mb-2">
                    🎯 লক্ষ্য: নির্দিষ্ট অধ্যায়ভিত্তিক হাদীস মুখস্থ ও ব্যাখ্যা
                    আত্মস্থ করা।
                  </div>
                  <div className="mb-2">📘 বিষয়বস্তু: </div>
                  <ol className="list-decimal list-inside space-y-3 ps-5">
                    <li>
                      <strong>অধ্যায় নির্বাচন পদ্ধতি</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            ইচ্ছামতো ১ বা একাধিক অধ্যায় (যেমন, ঈমান, সালাত,
                            আখলাক, দোয়া ইত্যাদি) নির্বাচন করা
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong> হাদীস মুখস্থ ও ব্যাখ্যা</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            প্রতিটি নির্বাচিত অধ্যায় থেকে ৫–১৫টি হাদীস মুখস্থ
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            প্রতিটি হাদীসের অর্থ, প্রেক্ষাপট (সাবাব), ও তাফসীর
                            শেখা
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong> মাফহুম ও হিদায়াত বিশ্লেষণ</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>প্রতিটি হাদীস থেকে ২–৩টি হিদায়াত বের করা</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>বাস্তব জীবনের উদাহরণসহ আলোচনা</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>মৌখিক মূল্যায়ন ও আলোচনা</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            সহপাঠী বা শিক্ষক সঙ্গে মুখস্থ পাঠ ও প্রয়োগভিত্তিক
                            আলাপ
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">
                    🌿 স্তর ৩: উচ্চ স্তর
                  </h4>
                  <div className="mb-2">
                    🎯 লক্ষ্য: বিস্তৃত হাদীস মুখস্থ, ব্যাখ্যা, বিশ্লেষণ ও বাস্তব
                    প্রয়োগে দক্ষতা অর্জন।
                  </div>
                  <div className="mb-2">📘 বিষয়বস্তু: </div>
                  <ol className="list-decimal list-inside space-y-3 ps-5">
                    <li>
                      <strong>বিস্তৃত মুখস্থ পরিকল্পনা</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            পুরো কিতাব থেকে প্রতি অধ্যায় থেকে ১–৩টি বা তার বেশি
                            হাদীস নির্বাচন
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>কমপক্ষে ৫০–১০০ হাদীস মুখস্থ </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong> তাফসীর, মাফহুম ও প্রেক্ষাপট বিশ্লেষণ</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            প্রতিটি হাদীসের অর্থ, ব্যাখ্যা, সাবাব ও ইমামদের
                            ব্যাখ্যা অধ্যয়ন
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            সম্পর্কিত কুরআনের আয়াতের সাথে তুলনামূলক বিশ্লেষণ
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>হিদায়াত নির্যাস ও বাস্তব জীবন প্রয়োগ</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            প্রতিটি হাদীসের অন্তর্নিহিত দিকনির্দেশনা বিশ্লেষণ
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            সমাজ, পরিবার ও ব্যক্তিজীবনে তা প্রয়োগের পরিকল্পনা
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>মূল্যায়ন ও প্রেজেন্টেশন</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            লিখিত ও মৌখিক পরীক্ষার মাধ্যমে স্মৃতি ও অনুধাবন
                            যাচাই
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            নির্দিষ্ট বিষয়ের ওপর উপস্থাপনা (Presentation) করা
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ol>
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
                    <p className="font-semibold">১২–১৮ মাস</p>
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
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-primary text-lg mb-2">
                    📍 অতিরিক্ত নির্দেশনা:
                  </h4>
                  <ul className="list-disc space-y-1 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>
                        প্রতিটি স্তরে “যার যতটুকু সাধ্য, সে ততটুকু মুখস্থ করবে”
                        নীতি প্রযোজ্য।
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>
                        হাদীস মুখস্থের পাশাপাশি অর্থ ও হিদায়াত বুঝা অপরিহার্য।
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>
                        নিয়মিত পুনরাবৃত্তি ও বাস্তব জীবনে অনুশীলন সিলেবাসের মূল
                        উদ্দেশ্য।
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>ফযীলত</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="text-muted-foreground space-y-3">
                  <blockquote className="border-l-4 border-primary pl-3 arabic-font">
                    مَنْ حَفِظَ مِنْ كَلَامِي شَيْئًا فَعَلَّمَهُ النَّاسَ
                    فَلَهُ بِهِ بَيْتٌ فِي الْجَنَّةِ
                  </blockquote>
                  <p className="text-muted-foreground">
                    "যে ব্যক্তি আমার কিছু কথা মুখস্থ করে এবং তা অন্যদেরকে
                    শেখায়, আল্লাহ তায়ালা তাকে জান্নাতে এক ঘর দান করবেন।"
                    <span className="block text-sm text-muted-foreground mt-1">
                      (সহীহ তিরমিজি, হাদীস নং: ২৬৭৭)
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary to-accent text-white shadow-elegant">
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">আগ্রহী?</h3>
                <p className="mb-4 text-sm opacity-90">
                  হাদীস হিফজ শুরু করুন আজই
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

export default HadithHifz;
