import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CircleDollarSign, CheckCircle } from "lucide-react";

const AdmissionFees = () => {
  const courseFees = [
    {
      course: "তাজবীদসহ কুরআন শিক্ষা",
      oneToOne: "৩০০০",
      group3: "২০০০",
      group5: "১৫০০",
      duration: "মাসিক",
    },
    {
      course: "কুরআন হিফজ",
      oneToOne: "৩৫০০",
      group3: "২৫০০",
      group5: "১৫০০",
      duration: "মাসিক",
    },
    {
      course: "অনুবাদসহ কুরআন শিক্ষা",
      oneToOne: "৩৫০০",
      group3: "২৫০০",
      group5: "১৫০০",
      duration: "মাসিক",
    },
    {
      course: "বুখারী ও মুসলিম হিফজ",
      oneToOne: "৩৫০০",
      group3: "২৫০০",
      group5: "১৫০০",
      duration: "মাসিক",
    },
    {
      course: "শিশুদের ইসলাম শিক্ষা",
      oneToOne: "৩০০০",
      group3: "২৫০০",
      group5: "২০০০",
      duration: "মাসিক",
    },
    {
      course: "আরবী ভাষা",
      oneToOne: "৩০০০",
      group3: "২০০০",
      group5: "১৫০০",
      duration: "মাসিক",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-primary">কোর্স ফি</h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-accent"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            সাশ্রয়ী মূল্যে মানসম্মত ইসলামী শিক্ষা
          </p>
        </div>

        <Card className="mb-6 shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CircleDollarSign className="h-6 w-6 text-primary" />
              ভর্তি ফি (একবারের জন্য)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 p-6 text-center">
              <p className="mb-2 text-3xl font-bold text-primary">৫০০ টাকা</p>
              <p className="text-muted-foreground">সকল কোর্সের জন্য</p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 overflow-hidden shadow-elegant">
          <CardHeader>
            <CardTitle>মাসিক কোর্স ফি</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary">
                  <tr>
                    <th className="p-4 text-left">কোর্স</th>
                    <th className="p-4 text-center">ওয়ান টু ওয়ান</th>
                    <th className="p-4 text-center">গ্রুপ (৩ জন)</th>
                    <th className="p-4 text-center">গ্রুপ (৫ জন)</th>
                  </tr>
                </thead>
                <tbody>
                  {courseFees.map((fee, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-4 font-medium">{fee.course}</td>
                      <td className="p-4 text-center">
                        <Badge variant="secondary">{fee.oneToOne} টাকা</Badge>
                      </td>
                      <td className="p-4 text-center">
                        {fee.group3 !== "-" ? (
                          <Badge variant="secondary">{fee.group3} টাকা</Badge>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {fee.group5 !== "-" ? (
                          <Badge variant="secondary">{fee.group5} টাকা</Badge>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>পেমেন্ট পলিসি</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  প্রতি মাসের ১-৫ তারিখের মধ্যে ফি পরিশোধ করতে হবে
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  বিকাশ, নগদ, রকেট ও ব্যাংক ট্রান্সফারের মাধ্যমে পেমেন্ট করা
                  যাবে
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  পেমেন্ট রসিদ সংরক্ষণ করুন
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>বিশেষ ছাড়</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  <strong>একই পরিবারের একাধিক সদস্য:</strong> ১০% ছাড়
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  <strong>বার্ষিক পেমেন্ট:</strong> ১ মাসের ফি মওকুফ
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">
                  <strong>অসচ্ছল শিক্ষার্থী:</strong> বিশেষ বৃত্তির ব্যবস্থা
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 bg-gradient-to-r from-primary/10 to-accent/10 shadow-elegant">
          <CardContent className="p-6">
            <h3 className="mb-3 text-center text-xl font-bold text-primary">
              গুরুত্বপূর্ণ নোট
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ সকল মূল্য বাংলাদেশী টাকায়</li>
              <li>✓ প্রথম ৩টি ট্রায়াল ক্লাস সম্পূর্ণ বিনামূল্যে</li>
              <li>✓ ভর্তি ফি কোনো অবস্থাতেই ফেরতযোগ্য নয়</li>
              <li>✓ মাসিক ফি পরিশোধে বিলম্ব হলে ক্লাস স্থগিত রাখা হবে</li>
              <li>
                ✓ বিশেষ প্রয়োজনে কিস্তিতে পেমেন্টের ব্যবস্থা করা যেতে পারে
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdmissionFees;
