import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  FileText,
  UserCheck,
  CreditCard,
  BookOpen,
} from "lucide-react";

const AdmissionProcess = () => {
  const steps = [
    {
      icon: FileText,
      title: "১. ফরম পূরণ",
      description:
        "অনলাইন ভর্তি ফরম পূরণ করুন এবং প্রয়োজনীয় তথ্য প্রদান করুন",
    },
    {
      icon: UserCheck,
      title: "২. ট্রায়াল ক্লাস",
      description: "বিনামূল্যে ২-৩টি ট্রায়াল ক্লাসে অংশগ্রহণ করুন",
    },
    {
      icon: CreditCard,
      title: "৩. ফি পেমেন্ট",
      description: "সন্তুষ্ট হলে ভর্তি ফি এবং প্রথম মাসের কোর্স ফি পরিশোধ করুন",
    },
    {
      icon: BookOpen,
      title: "৪. ক্লাস শুরু",
      description: "আপনার সুবিধামতো সময়ে নিয়মিত ক্লাস শুরু করুন",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-primary">
            ভর্তি প্রক্রিয়া ও যোগ্যতা
          </h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-accent"></div>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={index} className="shadow-elegant">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-center text-lg">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>সাধারণ যোগ্যতা</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  <strong>বয়স:</strong> কুরআন শিক্ষার জন্য ৫ বছর+, অন্যান্য
                  কোর্সে কোনো বয়সসীমা নেই
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  <strong>ডিভাইস:</strong> স্মার্টফোন/ট্যাবলেট/কম্পিউটার যেকোনো
                  একটি
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  <strong>ইন্টারনেট:</strong> স্থিতিশীল ইন্টারনেট সংযোগ
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  <strong>সময়:</strong> নিয়মিত ক্লাসে অংশগ্রহণের প্রতিশ্রুতি
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>বিশেষ নির্দেশনা</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  শিশুদের ক্ষেত্রে অভিভাবকের তত্ত্বাবধান আবশ্যক
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  মহিলাদের জন্য মহিলা শিক্ষিকা ও পুরুষদের জন্য পুরুষ শিক্ষক
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  হিফজ কোর্সের জন্য নাযিরা সম্পন্ন করা আবশ্যক
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  আরবী ভাষা কোর্সের জন্য মৌলিক আরবী জ্ঞান থাকলে ভালো
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 bg-gradient-to-r from-primary/10 to-accent/10 shadow-elegant">
          <CardContent className="p-8">
            <h2 className="mb-4 text-center text-2xl font-bold text-primary">
              প্রয়োজনীয় তথ্য
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-semibold">ভর্তি ফরমে যা প্রয়োজন:</h3>
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  <li>শিক্ষার্থীর পূর্ণ নাম</li>
                  <li>বয়স ও জন্ম তারিখ</li>
                  <li>যোগাযোগের ঠিকানা</li>
                  <li>ফোন নম্বর ও ইমেইল</li>
                  <li>পছন্দের কোর্স</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">ক্লাস সময় নির্বাচন:</h3>
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  <li> সকাল (৬:০০ - ৭:০০)</li>
                  <li>সকাল (৭:০০ - ৮:০০)</li>
                  <li>সকাল (৮:০০ - ৯:০০)</li>
                  <li>সকাল (৯:০০ - ১০:০০)</li>
                  <li>সকাল (১০:০০ - ১১:০০)</li>
                  <li>দুপুর (১১:০০ - ১২:০০)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
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

export default AdmissionProcess;
