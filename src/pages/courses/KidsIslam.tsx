import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Award, CheckCircle, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const KidsIslam = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-primary">
            শিশুদের ইসলাম শিক্ষা ও সীরাহ
          </h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-accent"></div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-primary" />
                  কোর্স সম্পর্কে
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  শিশুদের জন্য বিশেষভাবে তৈরি এই কোর্সে মজার ও সহজ পদ্ধতিতে
                  ইসলামের মৌলিক বিষয়সমূহ এবং রাসুলুল্লাহ ﷺ এর জীবনী শেখানো হয়।
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
                    ১. সীরাহ শিক্ষা
                  </h4>
                  <ul className="mt-1 space-y-1 ps-5">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>
                        শিক্ষার আলোকে রাসূল সাল্লাল্লাহু আলাইহি ওয়া সাল্লামের
                        জীবনকথা (সীরাহ) অধ্যয়ন
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>সীরাহ পাঠের মাধ্যমে আদর্শ জীবন গঠন</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>
                        শিশুদের বয়স উপযোগী গল্প ও ঘটনা দ্বারা শিক্ষা প্রদান
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">
                    ২. আদাব ও আখলাক শিক্ষা
                  </h4>
                  <ul className="mt-1 space-y-1 ps-5">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>সীরাহ পাঠের আলোকে মৌলিক আদব ও আখলাক শিক্ষা</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>বাস্তব জীবনে আচরণে প্রয়োগে উৎসাহ দেওয়া</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>বাবা-মা, শিক্ষক ও বন্ধুদের সাথে আচরণবিধি</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">
                    ৩. আমলী সূরা শিক্ষা
                  </h4>
                  <ul className="mt-1 space-y-1 ps-5">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>দৈনন্দিন জীবনে পড়া হয় এমন সূরাগুলোর শিক্ষা</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>সূরা ফীল থেকে সূরা নাস পর্যন্ত মুখস্থ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>অর্থ ও ব্যাখ্যার প্রাথমিক ধারণা</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">
                    ৪. হাদীস শিক্ষা
                  </h4>
                  <ul className="mt-1 space-y-1 ps-5">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>
                        শিশুদের বয়স উপযোগী বিষয়ভিত্তিক ১০০ সহীহ হাদীস মুখস্থ
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>
                        প্রতিটি হাদীসের সংক্ষিপ্ত ব্যাখ্যা ও বাস্তব প্রয়োগ
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">
                    ৫. দোয়া শিক্ষা
                  </h4>
                  <ul className="mt-1 space-y-1 ps-5">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>দৈনন্দিন জীবনের সকল মাসনূন দোয়া মুখস্থ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>অর্থ ও প্রেক্ষাপটসহ শিক্ষা</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>ঘুমানোর আগে ও পরে দোয়া</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>খাবারের আগে-পরে দোয়া</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>ঘর থেকে বের হওয়ার ও প্রবেশের দোয়া</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>ভ্রমণ, অসুস্থতা ইত্যাদি পরিস্থিতির দোয়া</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">
                    ৬. মৌলিক মাসায়েল শিক্ষা
                  </h4>
                  <ul className="mt-1 space-y-1 ps-5">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>শিশুদের জন্য প্রযোজ্য মৌলিক ফিকহ শিক্ষা</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>পবিত্রতা ও ওযুর নিয়ম</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>নামাজের সময় ও পদ্ধতি</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>রোযা সম্পর্কে প্রাথমিক ধারণা</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-accent flex-shrink-0" />
                      <span>ইসলামী শুভেচ্ছা, সালাম, দান ও আচরণ</span>
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
                    <p className="font-semibold">৬-৮ মাস</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">বয়স</p>
                    <p className="font-semibold">৫-১২ বছর</p>
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
                  عَنْ أَبِي هُرَيْرَةَ رضي الله عنه قَالَ: قَالَ رَسُولُ
                  اللَّهِ ﷺ: "كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ
                  رَعِيَّتِهِ"
                </blockquote>
                <p className="text-muted-foreground">
                  অর্থ: রাসুলুল্লাহ ﷺ বলেছেন: “তোমরা প্রত্যেকেই দায়িত্বশীল এবং
                  তোমাদের দায়িত্ব সম্পর্কে জিজ্ঞাসা করা হবে।” (সহীহ বুখারী,
                  হাদীস নং ৮৯৩)
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary to-accent text-white shadow-elegant">
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">আগ্রহী?</h3>
                <p className="mb-4 text-sm opacity-90">
                  আপনার শিশুকে ভর্তি করান আজই
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

export default KidsIslam;
