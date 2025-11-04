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
                <CardTitle>সিলেবাস</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">
                    ১. সবকের প্রস্তুতি ও সবক মুখস্থ
                  </h4>
                  <ul className="mt-1 space-y-1 ps-5">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>
                        কুরআনের নির্ধারিত অংশ শিক্ষক নির্দেশনা অনুযায়ী স্পষ্ট ও
                        সঠিক উচ্চারণে নাযিরা (দেখে) পড়া।
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>সঠিক তাজবীদ, মাখরাজ ও শুদ্ধ উচ্চারণে পাঠ করা।</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>মুখস্থ অংশ সাবলীলভাবে ও ভুল ছাড়া আদায় করা।</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">
                    ২. দৈনিক অনুশীলন
                  </h4>
                  <ul className="mt-1 space-y-1 ps-5">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>প্রতিদিন নতুন সবক মুখস্থ করা।</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>
                        আগের দিনগুলোর পড়া (পিছনের পড়া) নিয়মিত পুনরাবৃত্তি করা।
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>
                        নির্দিষ্ট সময় দিয়ে নতুন ও পুরনো পাঠ উভয়ই অনুশীলন করা।
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">
                    ৩. সাপ্তাহিক কার্যক্রম
                  </h4>
                  <ul className="mt-1 space-y-1 ps-5">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>
                        সপ্তাহে একদিন কুরআন মশক (পরীক্ষা/রিভিউ ক্লাস) অনুষ্ঠিত
                        হবে।
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>
                        সেই দিনে সপ্তাহের সব পাঠ একত্রে পুনরাবৃত্তি করা হবে।
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>ভুল সংশোধন ও পাঠের মান যাচাই করা হবে।</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">
                    ৪. অতিরিক্ত পাঠ ও আলোচনা
                  </h4>
                  <ul className="mt-1 space-y-1 ps-5">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>
                        প্রয়োজনীয় মাসআলা-মাসায়েল (দৈনন্দিন ইসলামী বিধান) বিষয়ে
                        আলোচনা।
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>
                        কুরআন মুখস্থের আদব, নিয়ম-কানুন, ও কৌশল শেখানো।
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>
                        হিফজের আগ্রহ, শৃঙ্খলা ও ধারাবাহিকতা বজায় রাখার উপদেশ
                        দেওয়া।
                      </span>
                    </li>
                  </ul>
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
                    <div>
                      <p className="text-sm text-muted-foreground">
                        ক্লাসের ধরন
                      </p>
                      <p className="font-semibold">ওয়ান-টু-ওয়ান / গ্রুপ</p>
                    </div>
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
                    عَنْ مُعَاذِ بْنِ أَنَسٍ، عَنِ النَّبِيِّ ﷺ قَالَ: «مَنْ
                    قَرَأَ الْقُرْآنَ وَعَمِلَ بِمَا فِيهِ، أُلْبِسَ وَالِدَاهُ
                    تَاجًا يَوْمَ الْقِيَامَةِ ضَوْءُهُ أَحْسَنُ مِنْ ضَوْءِ
                    الشَّمْسِ فِي بُيُوتِ الدُّنْيَا، لَوْ كَانَتْ فِيكُمْ،
                    فَمَا ظَنُّكُمْ بِالَّذِي عَمِلَ بِهَذَا؟»
                  </blockquote>
                  <p>
                    অর্থ: রাসুলুল্লাহ ﷺ বলেছেন, “যে ব্যক্তি কুরআন তেলাওয়াত করে
                    ও তার বিধান অনুযায়ী আমল করে, কিয়ামতের দিনে তার পিতা-মাতাকে
                    এমন মুকুট পরানো হবে যার আলো দুনিয়ার সূর্যের আলোর চেয়েও
                    উজ্জ্বল হবে। তাহলে তুমি কি ধারণা কর সেই ব্যক্তির মর্যাদা
                    কেমন হবে, যে নিজে কুরআনের উপর আমল করেছে?” (সুনান আবু দাউদ,
                    হাদীস নং ১৪৫৩)
                  </p>
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
