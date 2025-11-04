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
                <CardTitle>সিলেবাস</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">
                    🕋 পর্যায় ১: প্রাথমিক স্তর
                  </h4>
                  <ol className="list-decimal list-inside space-y-3">
                    <li>
                      <strong>কায়দা ও তাজবীদ শিক্ষা:</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>কুরআনের হরফ পরিচিতি ও মাখরাজ অনুশীলন</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            কায়দা শিক্ষা ও মৌলিক তাজবীদ (সঠিক উচ্চারণ ও
                            স্পষ্টভাবে পড়ার অনুশীলন)
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>নামাজ শিক্ষা (মৌখিক ও মশক):</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            নামাজের ফরজ, ওয়াজিব, সুন্নত ও মুসতাহাব সংক্রান্ত
                            আলোচনা
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>প্র্যাকটিক্যাল নামাজ শিক্ষা</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            নামাজের গুরুত্বপূর্ণ দোয়া ও দুরুদ মুখস্থকরণ
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>দৈনন্দিন জীবনের দোয়াসমূহ:</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>সকাল-সন্ধ্যার দোয়া</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            দৈনন্দিন জীবনের প্রয়োজনীয় অন্যান্য দোয়া (মুখস্থ ও
                            মশক)
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">
                    📖 পর্যায় ২: মধ্যবর্তী স্তর
                  </h4>
                  <ol className="list-decimal list-inside space-y-3">
                    <li>
                      <strong>কুরআন শিক্ষা:</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>আমপারা (কুরআনের ৩০তম পারা) অধ্যয়ন</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            সূরা ফীল থেকে সূরা নাস পর্যন্ত ধারাবাহিকভাবে মুখস্থ
                            ও মশক
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>দৈনন্দিন জীবনে ইসলামের প্রয়োগ:</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>দোয়া ও ইবাদতের বাস্তব প্রয়োগ</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>সামাজিক ও নৈতিক শিক্ষা</span>
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">
                    🌙 পর্যায় ৩: উচ্চতর স্তর
                  </h4>
                  <ol className="list-decimal list-inside space-y-3">
                    <li>
                      <strong>কুরআন শিক্ষা:</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            পূর্ণ কুরআন ধারাবাহিকভাবে শিক্ষা (সঠিক উচ্চারণ ও
                            স্পষ্টভাবে পড়ার অনুশীলন)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            তাজবীদ অনুশীলন ও সঠিক উচ্চারণে দৃষ্টান্তমূলক
                            প্রশিক্ষণ
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>ইসলামের অন্যান্য গুরুত্বপূর্ণ মাসায়েল:</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>রোজা: ফজিলত, নিয়মাবলি ও সময়জ্ঞান</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>হজ্জ: ফরজ, ওয়াজিব ও হজ্জের নিয়মাবলি</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>যাকাত: ফরজ, হিসাব ও বিতরণের নিয়ম</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            অতিরিক্ত বিষয়: হালাল-হারাম, জীবনের নৈতিকতা ও ইসলামী
                            আচরণ
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

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>ফযীলত</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="text-muted-foreground space-y-3">
                  <blockquote className="border-l-4 border-primary pl-3 arabic-font">
                    عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا، عَنِ النَّبِيِّ ﷺ
                    قَالَ: «الَّذِي يَقْرَأُ الْقُرْآنَ وَهُوَ مَاهِرٌ بِهِ مَعَ
                    السَّفَرَةِ الْكِرَامِ الْبَرَرَةِ، وَالَّذِي يَقْرَأُ
                    الْقُرْآنَ وَيَتَتَعْتَعُ فِيهِ، وَهُوَ عَلَيْهِ شَاقٌّ،
                    لَهُ أَجْرَانِ»
                  </blockquote>
                  <p>
                    অর্থ: রাসুলুল্লাহ ﷺ বলেছেন, “যে ব্যক্তি কুরআন পাঠ করে এবং
                    এতে পারদর্শী, সে থাকবে সম্মানিত ও অনুগত ফেরেশতাদের সঙ্গে। আর
                    যে ব্যক্তি কুরআন পড়ে এবং এতে জড়তা অনুভব করে, কিন্তু তবুও
                    পাঠ করে, তার জন্য দ্বিগুণ প্রতিদান।” (সহীহ আল-বুখারী, হাদীস
                    নং ৪৯৩৭ , সহীহ মুসলিম, হাদীস নং ৭৯৮)
                  </p>
                </div>
                <div className="text-muted-foreground space-y-3">
                  <blockquote className="border-l-4 border-primary pl-3 text-muted-foreground arabic-font">
                    "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ"
                  </blockquote>
                  <p>
                    অর্থাৎ — “তোমাদের মধ্যে সর্বোত্তম সেই ব্যক্তি, যে নিজে কুরআন
                    শেখে এবং অন্যকে তা শেখায়।”(বুখারী, হাদীস নং ৫০২৭)
                  </p>
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
