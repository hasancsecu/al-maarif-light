import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  Users,
  Clock,
  Award,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  const features = [
    {
      icon: Users,
      title: "ওয়ান বাই ওয়ান ক্লাস",
      description: "একজন শিক্ষক, একজন ছাত্র — সম্পূর্ণ মনোযোগ ও দ্রুত উন্নতি",
    },
    {
      icon: Clock,
      title: "সুবিধামতো সময়",
      description: "আপনার সুবিধামতো সময়ে ক্লাস করার সুযোগ",
    },
    {
      icon: Award,
      title: "অভিজ্ঞ শিক্ষক",
      description: "পুরুষদের জন্য শিক্ষক ও মহিলাদের জন্য শিক্ষিকা",
    },
    {
      icon: Sparkles,
      title: "ফ্রি ট্রায়াল ক্লাস",
      description: "ভর্তির আগে একাধিক ফ্রি ট্রায়াল ক্লাসের সুযোগ",
    },
  ];

  const courses = [
    { title: "তাজবীদসহ কুরআন শিক্ষা (নাযিরা)", path: "/courses/quran-nazira" },
    { title: "কুরআন হিফজ (আংশিক/পূর্ণ)", path: "/courses/quran-hifz" },
    { title: "অনুবাদসহ কুরআন শিক্ষা", path: "/courses/quran-translation" },
    { title: "বুখারী ও মুসলিম হিফজ", path: "/courses/hadith-hifz" },
    { title: "শিশুদের ইসলাম শিক্ষা ও সীরাহ", path: "/courses/kids-islam" },
    { title: "আরবী ভাষা শিক্ষা", path: "/courses/arabic-language" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Islamic Education"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center text-primary-foreground">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              আল-মা'আরিফ ইন্টারন্যাশনাল ইনস্টিটিউট
            </h1>
            <p className="mb-8 text-lg leading-relaxed md:text-xl opacity-95">
              বিশ্বের প্রতিটি ঘরে কুরআন ও হাদীসের আলো পৌঁছে দেওয়া আমাদের
              লক্ষ্য। দিকভ্রান্ত মানুষকে দ্বীনের সরল ও সুন্দর পথে ফিরিয়ে আনতে
              আমরা প্রতিশ্রুতিবদ্ধ।
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/admission/form">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  ভর্তি হন
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary-foreground text-primary hover:bg-primary-foreground"
                >
                  আরও জানুন
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-secondary/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-foreground">
              আমাদের সূচনা
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              বর্তমান সময়ে আমরা দ্বীনের এক গভীর সংকটময় অধ্যায় পার করছি।
              চারদিকে ফিতনার ঝড়—নাস্তিকতা, বস্তুবাদ, অবিশ্বাস ও বিভ্রান্তির
              স্রোত পৃথিবীজুড়ে ছড়িয়ে পড়েছে।
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              তবুও, এই হতাশার ঘন অন্ধকারের ভেতরেও আশার এক ফালি আলোর ঝলকানি দেখা
              যায়—একদল স্বপ্নবাজ, দ্বীনের প্রতি অনুরাগী তরুণ-তরুণীর উদ্যোগে
              প্রতিষ্ঠিত হয় "আল-মা'আরিফ ইন্টারন্যাশনাল ইনস্টিটিউট"।
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3">
              <BookOpen className="h-5 w-5 text-secondary-foreground" />
              <p className="text-sm font-medium text-secondary-foreground">
                প্রতিষ্ঠার তারিখ: ১২ অক্টোবর ২০২৫ ঈসায়ী / ২০ রবিউস্ সানি ১৪৪৭
                হিজরি / ২৭ আশ্বিন ১৪৩২ বঙ্গাব্দ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            আমাদের বিশেষ বৈশিষ্ট্যসমূহ
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">আমাদের কোর্সসমূহ</h2>
            <p className="text-lg text-muted-foreground">
              ব্যাপক পাঠ্যক্রম এবং অভিজ্ঞ শিক্ষকমণ্ডলীর মাধ্যমে সম্পূর্ণ ইসলামিক
              শিক্ষা
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <Link key={index} to={course.path}>
                <Card className="h-full border-border transition-all hover:border-primary hover:shadow-md">
                  <CardHeader>
                    <div className="mb-2 flex items-start justify-between">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      বিস্তারিত দেখুন →
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            আজই শুরু করুন আপনার ইসলামিক শিক্ষা যাত্রা
          </h2>
          <p className="mb-8 text-lg opacity-95">
            ফ্রি ট্রায়াল ক্লাসের জন্য আবেদন করুন এবং অনুভব করুন মানসম্মত
            শিক্ষার স্বাদ
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link to="/admission/form">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                ভর্তি ফরম পূরণ করুন
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary-foreground text-primary hover:bg-primary-foreground"
              >
                যোগাযোগ করুন
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
