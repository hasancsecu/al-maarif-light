import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Megaphone, Calendar, AlertCircle } from "lucide-react";

const NoticeBoard = () => {
  // Example notices – in real app, fetch from API
  const notices = [
    {
      title: "নতুন কুরআন তাজবীদ কোর্স শুরু হচ্ছে ইনশাআল্লাহ",
      date: "১০ নভেম্বর ২০২৫",
      details:
        "আগামী ১০ নভেম্বর থেকে নতুন ব্যাচ শুরু হবে। ভর্তি চলছে এখনই। সীমিত আসন!",
      type: "general",
    },
    {
      title: "হিফজ বিভাগের ভর্তি কার্যক্রম শুরু",
      date: "১৫ নভেম্বর ২০২৫",
      details:
        "হিফজ বিভাগের নতুন সেশনের জন্য ভর্তি চলছে। অনলাইনে ফরম পূরণ করে আবেদন করুন।",
      type: "admission",
    },
    {
      title: "মাহে রমজান বিশেষ কোর্স ঘোষণা",
      date: "২৫ মার্চ ২০২৬",
      details:
        "রমজান মাস উপলক্ষে বিশেষ কোর্সে অংশ নিন— কুরআন তিলাওয়াত, দুআ ও আমল শেখা।",
      type: "special",
    },
  ];

  const getNoticeColor = (type: string) => {
    switch (type) {
      case "admission":
        return "border-green-400";
      case "special":
        return "border-amber-400";
      default:
        return "border-primary/30";
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-primary">নোটিশ বোর্ড</h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-accent"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            সর্বশেষ আপডেট ও ঘোষণা এক নজরে
          </p>
        </div>

        {/* Notices */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {notices.map((notice, i) => (
            <Card
              key={i}
              className={`hover:shadow-lg transition-shadow border ${getNoticeColor(
                notice.type
              )}`}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Megaphone className="h-5 w-5 text-primary" />
                  {notice.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{notice.date}</span>
                </div>
                <p className="text-base leading-relaxed">{notice.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Alert Section */}
        <div className="mt-12">
          <Card className="border border-amber-400 bg-amber-50/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-amber-600">
                <AlertCircle className="h-5 w-5" />
                গুরুত্বপূর্ণ বিজ্ঞপ্তি
              </CardTitle>
            </CardHeader>
            <CardContent className="text-base">
              <p>
                নোটিশ বোর্ডে প্রকাশিত তথ্যসমূহ নিয়মিত আপডেট হয়। ভর্তি, ক্লাস
                সময়সূচি ও পরীক্ষার তথ্য জানতে এই পেইজটি নিয়মিত ভিজিট করুন।
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
