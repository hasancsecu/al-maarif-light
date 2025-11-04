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
                <CardTitle>সিলেবাস</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">
                    🌿 স্তর ১: প্রাথমিক স্তর
                  </h4>
                  <div className="mb-2">
                    🎯 লক্ষ্য: কুরআনের সাধারণ শব্দভাণ্ডার ও সহজ ব্যাকরণ রপ্ত
                    করা, অনুবাদ বোঝার ভিত্তি তৈরি করা।
                  </div>
                  <div className="mb-2">📘 বিষয়বস্তু:</div>
                  <ol className="list-decimal list-inside space-y-3 ps-5">
                    <li>
                      <strong>কুরআনিক শব্দ মুখস্থ ও অনুশীলন</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            সর্বাধিক ব্যবহৃত ৩০০–৫০০ কুরআনিক শব্দ মুখস্থ
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>শব্দের অর্থসহ বাক্যে প্রয়োগ</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>দৈনন্দিন দোয়ার অনুবাদ অনুশীলন</span>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong>সহজ আরবি ব্যাকরণ (নাহু ও সরফের ভূমিকা)</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>আরবি বর্ণ ও মৌলিক গঠন</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>সাধারণ বাক্য অনুবাদ অনুশীলন</span>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong>কুরআনের নির্ভরযোগ্য অনুবাদ অধ্যয়ন</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            সূরা ফাতিহা, সূরা ইখলাস, সূরা ফালাক, সূরা নাস, সূরা
                            আল-বাকারার প্রথম ৫ আয়াত
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>অনুবাদ ও প্রেক্ষাপট বোঝা</span>
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
                    🎯 লক্ষ্য: কুরআনের বাক্যগঠন ও ব্যাকরণিক অর্থের সম্পর্ক বোঝা,
                    অনুবাদে দক্ষতা বৃদ্ধি।
                  </div>
                  <div className="mb-2">📘 বিষয়বস্তু:</div>
                  <ol className="list-decimal list-inside space-y-3 ps-5">
                    <li>
                      <strong>কুরআনিক শব্দভাণ্ডার বিস্তার</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>১০০০–১২০০ সাধারণ শব্দ</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            প্রতিটি শব্দের ক্রিয়া, বিশেষ্য, বিশেষণ রূপ অনুশীলন
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>কুরআনের উদ্ধৃতি দ্বারা ব্যবহারিক প্রয়োগ</span>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong>কুরআনের নির্ভরযোগ্য অনুবাদ অধ্যয়ন</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>সূরা আল-বাকারা (নির্বাচিত অংশ)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>সূরা আল-ইমরান (প্রথম অংশ)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>অনুবাদ তুলনা</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>অর্থবোধক কুইজ ও অনুশীলন</span>
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
                    🎯 লক্ষ্য: কুরআনের গভীর অর্থ অনুধাবন, আরবি গঠন ও প্রেক্ষাপট
                    বিশ্লেষণ করতে পারা।
                  </div>
                  <div className="mb-2">📘 বিষয়বস্তু:</div>
                  <ol className="list-decimal list-inside space-y-3 ps-5">
                    <li>
                      <strong>
                        উন্নত কুরআনিক শব্দভাণ্ডার ও বাক্য বিশ্লেষণ
                      </strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>কুরআনের প্রায় ২০০০–২৫০০ শব্দ আত্তীকরণ</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            প্রবাদ, রূপক, অলঙ্কারিক ব্যবহার চিনে নেওয়া
                          </span>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong>উন্নত ব্যাকরণ ও প্রয়োগ</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>জুমলা (বাক্য) বিশ্লেষণ</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>ই‘রাব (বাক্য বিশ্লেষণ প্রক্রিয়া) অনুশীলন</span>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong>
                        কুরআনের নির্ভরযোগ্য অনুবাদ ও তাফসির অধ্যয়ন
                      </strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>অনুবাদ, ব্যাখ্যা ও বাস্তব জীবনে প্রয়োগ</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>সংক্ষিপ্ত তাফসির লেখার অনুশীলন</span>
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

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>ফযীলত</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="text-muted-foreground space-y-3">
                  <blockquote className="border-l-4 border-primary pl-3 arabic-font">
                    كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِّيَدَّبَّرُوا
                    آيَاتِهِ وَلِيَتَذَكَّرَ أُولُوا الْأَلْبَابِ
                  </blockquote>
                  <p>
                    অনুবাদ:“এটি এক মুবারক কিতাব, যা আমি তোমার প্রতি নাযিল করেছি,
                    যাতে মানুষ এর আয়াতসমূহ নিয়ে চিন্তা-ভাবনা করে এবং যাতে
                    বুদ্ধিমানরা শিক্ষা গ্রহণ করে।”(সূরা সোয়াদ, আয়াত ২৯)
                  </p>
                </div>
                <div className="text-muted-foreground space-y-3">
                  <blockquote className="border-l-4 border-primary pl-3 arabic-font">
                    مَنْ تَعَلَّمَ آيَةً مِنَ الْقُرْآنِ فَهِيَ خَيْرٌ لَهُ مِنْ
                    أَنْ يَكُونَ لَهُ جَمَلٌ أَحْمَرُ
                  </blockquote>
                  <p>
                    অর্থ: "যে ব্যক্তি কুরআনের একটি আয়াত শিখে, তা তার জন্য লাল
                    উটের চেয়েও উত্তম।" (বুখারী, হাদিস ৪৭০৫)
                  </p>
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
