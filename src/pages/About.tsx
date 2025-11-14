import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Target, Heart, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const values = [
    { title: t('about.value1'), desc: t('about.value1Desc') },
    { title: t('about.value2'), desc: t('about.value2Desc') },
    { title: t('about.value3'), desc: t('about.value3Desc') },
    { title: t('about.value4'), desc: t('about.value4Desc') },
    { title: t('about.value5'), desc: t('about.value5Desc') },
    { title: t('about.value6'), desc: t('about.value6Desc') },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-primary">
            {t('about.title')}
          </h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-accent"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <BookOpen className="h-6 w-6 text-primary" />
                {t('about.ourBeginning')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg leading-relaxed">
              <p>{t('about.beginningText1')}</p>
              <p>{t('about.beginningText2')}</p>
              <div className="rounded-lg bg-primary/10 p-6">
                <h3 className="mb-4 text-xl font-bold text-primary">
                  {t('about.foundingTitle')}
                </h3>
                <p className="mb-4">{t('about.foundingText')}</p>
                <p className="font-medium text-primary">
                  {t('about.established')}: {t('about.establishedDate')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mission & Vision */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Target className="h-6 w-6 text-primary" />
                আমাদের লক্ষ্য
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-base">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <p>বিশ্বের প্রতিটি ঘরে কুরআন ও হাদীসের আলো পৌঁছে দেওয়া</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <p>দিকভ্রান্ত মানুষকে দ্বীনের সরল ও সুন্দর পথে ফিরিয়ে আনা</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <p>
                  একটি প্রজন্ম গড়ে তোলা, যারা জ্ঞান, আমল ও আখলাকের সমন্বয়ে
                  মানবতার কল্যাণে কাজ করবে
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Heart className="h-6 w-6 text-primary" />
                আমাদের উদ্দেশ্য
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-base">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <p>কুরআন ও সুন্নাহর আলোকে সঠিক ইসলামিক শিক্ষা প্রদান</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <p>আধুনিক প্রযুক্তির মাধ্যমে দ্বীনি শিক্ষাকে সহজলভ্য করা</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <p>চরিত্রবান ও দক্ষ মুসলিম প্রজন্ম তৈরি করা</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Users className="h-6 w-6 text-primary" />
              আমাদের মূল্যবোধ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-border p-4">
                <h3 className="mb-2 font-bold text-lg">ইখলাস (আন্তরিকতা)</h3>
                <p className="text-sm text-muted-foreground">
                  একমাত্র আল্লাহর সন্তুষ্টির জন্য কাজ করা
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="mb-2 font-bold text-lg">মানসম্মত শিক্ষা</h3>
                <p className="text-sm text-muted-foreground">
                  উচ্চমানের পাঠ্যক্রম ও যোগ্য শিক্ষকমণ্ডলী
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="mb-2 font-bold text-lg">সহজলভ্যতা</h3>
                <p className="text-sm text-muted-foreground">
                  সবার জন্য সহজ ও সুবিধাজনক শিক্ষা ব্যবস্থা
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="mb-2 font-bold text-lg">ধারাবাহিকতা</h3>
                <p className="text-sm text-muted-foreground">
                  নিয়মিত পর্যবেক্ষণ ও মূল্যায়ন
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="mb-2 font-bold text-lg">আমানতদারিতা</h3>
                <p className="text-sm text-muted-foreground">
                  শিক্ষার্থীদের প্রতি দায়িত্বশীলতা
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="mb-2 font-bold text-lg">উদ্ভাবনী</h3>
                <p className="text-sm text-muted-foreground">
                  আধুনিক পদ্ধতিতে শিক্ষা প্রদান
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
