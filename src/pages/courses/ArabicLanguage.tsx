import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Award, CheckCircle, Languages } from "lucide-react";
import { Link } from "react-router-dom";

const ArabicLanguage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-primary">
            আরবী ভাষা শিক্ষা
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
                  কুরআনের ভাষা আরবী শিক্ষার জন্য পরিকল্পিত এই কোর্সে
                  শিক্ষার্থীরা আরবী পড়া, লেখা, বলা ও বোঝার দক্ষতা অর্জন করবেন।
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>সিলেবাস</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 text-muted-foreground">
                {/* 🌿 প্রথম স্তর */}
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">
                    🌿 প্রথম স্তর: প্রাথমিক
                  </h4>
                  <div className="mb-2">
                    🎯 লক্ষ্য: মৌলিক শব্দভান্ডার ও সহজ বাক্য গঠন শেখা
                  </div>
                  <ol className="list-decimal list-inside space-y-3 ps-5">
                    <li>
                      <strong>মৌলিক শব্দভান্ডার</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>নাম (মানুষ, প্রাণী, বস্তু, স্থান)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            দৈনন্দিন ব্যবহার: সালাম, দোয়া, সময়, সংখ্যা (১–১০০)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>রং, দিকনির্দেশ, পরিবারের নাম</span>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong>সহজ ব্যাকরণ</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>লিঙ্গ (مذكر / مؤنث)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>একবচন–বহুবচন</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>নির্দিষ্ট ও অনির্দিষ্ট (ال / تنوين)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            সহজ বাক্য: اسمية (নামবাচক) ও فعلية (ক্রিয়াবাচক)
                          </span>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong>অনুশীলন</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>ছোট ছোট পাঠ্যাংশ পড়া ও অনুবাদ</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>দৈনন্দিন কথোপকথনের অনুশীলন</span>
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>

                {/* 📘 দ্বিতীয় স্তর */}
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">
                    📘 দ্বিতীয় স্তর: মধ্যম
                  </h4>
                  <div className="mb-2">
                    🎯 লক্ষ্য: ব্যাকরণে দক্ষতা বৃদ্ধি, সাধারণ পাঠ্য পড়া ও লেখা
                    শেখা
                  </div>
                  <ol className="list-decimal list-inside space-y-3 ps-5">
                    <li>
                      <strong>ব্যাকরণ (النحو والصرف)</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>فعل (ক্রিয়া): الماضي, المضارع, الأمر</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>الضمائر (আমি, তুমি, সে ইত্যাদি)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>الجملة الفعلية ও الجملة الاسمية</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>حرف الجر ও حرف العطف</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>সংখ্যা, বিশেষণ ও ক্রিয়ার মিল (تطابق)</span>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong>শব্দভান্ডার সম্প্রসারণ</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>ধর্মীয় ও সামাজিক শব্দ</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            পেশা, সময়, খাবার, পোশাক ইত্যাদি বিষয়ভিত্তিক
                            শব্দভান্ডার
                          </span>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong>পাঠ ও অনুবাদ</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>সংক্ষিপ্ত গল্প, সংলাপ, সংবাদ পড়া</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>অনুবাদ অনুশীলন (আরবি→বাংলা / বাংলা→আরবি)</span>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong>লেখার অনুশীলন</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            ছোট রচনা (আমার পরিবার, আমার স্কুল, একটি দিন ইত্যাদি)
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>

                {/* 📚 তৃতীয় স্তর */}
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">
                    📚 তৃতীয় স্তর: উচ্চ
                  </h4>
                  <div className="mb-2">
                    🎯 লক্ষ্য: আরবি সাহিত্য, ব্যাকরণে গভীর জ্ঞান ও স্বচ্ছন্দ
                    পাঠ/লিখন
                  </div>
                  <ol className="list-decimal list-inside space-y-3 ps-5">
                    <li>
                      <strong>উন্নত ব্যাকরণ</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>إعراب (বাক্যের গঠন বিশ্লেষণ)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>مصدر, اسم الفاعل, اسم المفعول</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>الشرط, النفي, الاستفه, التعجب</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>বাক্যরীতি ও সংযোগ (بلاغة ও تركيب الجمل)</span>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong>সাহিত্য ও পাঠ্য</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>সহজ কুরআনিক আয়াত ও হাদীসের ভাষা বিশ্লেষণ</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>প্রবাদ-প্রবচন ও প্রাচীন কবিতা</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>আধুনিক আরবি গল্প, সংবাদ ও প্রবন্ধ পড়া</span>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong>অনুবাদ ও রচনা</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>জটিল বাক্যের অনুবাদ</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            প্রবন্ধ লেখা (ধর্মীয়, সামাজিক, সমসাময়িক বিষয়)
                          </span>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong>কথোপকথন</strong>
                      <ul className="mt-1 space-y-1 ps-5">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>
                            দৈনন্দিন ও আনুষ্ঠানিক আরবি বক্তৃতা অনুশীলন
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                          <span>আরব দেশীয় উচ্চারণে অভ্যস্ততা</span>
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
                    <p className="font-semibold">১২-২৪ মাস</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">সার্টিফিকেট</p>
                    <p className="font-semibold">হ্যাঁ (স্তরভিত্তিক)</p>
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
              <CardContent className="space-y-3">
                <blockquote className="border-l-4 border-primary pl-3 arabic-font">
                  قَالَ عُمَر رَضِيَ اللَّهُ عَنْهُ: "تَعَلَّمُوا اللُّغَةَ
                  العَرَبِيَّةَ، فَإِنَّهَا جُزْءٌ مِنْ دِينِكُمْ"
                </blockquote>
                <p className="text-muted-foreground">
                  উমর রাদিয়াল্লাহু আনহু বলেছেন: "তোমরা আরবী ভাষা শিখো, কারণ এটি
                  তোমাদের দ্বীনের অংশ।"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary to-accent text-white shadow-elegant">
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">আগ্রহী?</h3>
                <p className="mb-4 text-sm opacity-90">আরবী ভাষা শিখুন আজই</p>
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

export default ArabicLanguage;
