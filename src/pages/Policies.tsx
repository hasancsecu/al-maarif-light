import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  Clock,
  BookOpen,
  Users,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

const Policies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-primary">নীতিমালা</h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-accent"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            আমাদের প্রতিষ্ঠানের নিয়ম ও নীতি
          </p>
        </div>

        <div className="space-y-6">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                ক্লাস সংক্রান্ত নীতিমালা
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  প্রতিটি ক্লাসে সময়মতো উপস্থিত থাকতে হবে। ক্লাস শুরুর ৫ মিনিট
                  আগে প্রস্তুত থাকুন।
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  ক্লাসে অংশগ্রহণের জন্য স্থিতিশীল ইন্টারনেট সংযোগ নিশ্চিত করুন।
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  ক্লাসে মনোযোগী থাকতে হবে এবং শিক্ষকের নির্দেশনা অনুসরণ করতে
                  হবে।
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  প্রতিটি ক্লাসের পর দেওয়া হোমওয়ার্ক সম্পন্ন করতে হবে।
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                উপস্থিতি ও ছুটি
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  ক্লাস মিস করলে অন্তত ২৪ ঘণ্টা আগে শিক্ষককে জানাতে হবে।
                </p>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  জরুরি কারণে ক্লাস মিস হলে মেকআপ ক্লাসের ব্যবস্থা করা হবে।
                </p>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  পরপর ৩টি ক্লাস বিনা কারণে অনুপস্থিত থাকলে সতর্কতা দেওয়া হবে।
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                আচরণবিধি
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  শিক্ষক ও সহপাঠীদের প্রতি সম্মান প্রদর্শন করতে হবে।
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  ক্লাসে ইসলামী আদব ও শিষ্টাচার বজায় রাখতে হবে।
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  কোনো প্রকার অনৈতিক বা অসদাচরণ গ্রহণযোগ্য নয়।
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                পেমেন্ট ও রিফান্ড পলিসি
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  মাসিক ফি প্রতি মাসের ১-৫ তারিখের মধ্যে পরিশোধ করতে হবে।
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  ভর্তি ফি কোনো অবস্থাতেই ফেরতযোগ্য নয়।
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  কোর্স শুরুর পর বাতিল করলে রিফান্ড পাওয়া যাবে না।
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  প্রথম ৭ দিনের মধ্যে কোর্স বাতিল করলে ৫০% রিফান্ড পাওয়া যাবে।
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Policies;
