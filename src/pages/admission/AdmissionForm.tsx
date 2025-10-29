import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileText, CircleDollarSign } from "lucide-react";

const AdmissionForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-primary">
            ভর্তি ফরম ও ফি
          </h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-accent"></div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  ভর্তি ফরম
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="studentName">শিক্ষার্থীর নাম *</Label>
                      <Input id="studentName" placeholder="পূর্ণ নাম লিখুন" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">বয়স *</Label>
                      <Input id="age" type="number" placeholder="বয়স" />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="gender">লিঙ্গ *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="নির্বাচন করুন" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">পুরুষ</SelectItem>
                          <SelectItem value="female">মহিলা</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">মোবাইল নম্বর *</Label>
                      <Input id="phone" placeholder="+880" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">ইমেইল</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">ঠিকানা *</Label>
                    <Textarea
                      id="address"
                      placeholder="সম্পূর্ণ ঠিকানা লিখুন"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course">কোর্স নির্বাচন *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="কোর্স নির্বাচন করুন" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nazira">
                          তাজবীদসহ কুরআন শিক্ষা
                        </SelectItem>
                        <SelectItem value="hifz">কুরআন হিফজ</SelectItem>
                        <SelectItem value="translation">
                          অনুবাদসহ কুরআন
                        </SelectItem>
                        <SelectItem value="hadith">
                          বুখারী ও মুসলিম হিফজ
                        </SelectItem>
                        <SelectItem value="kids">
                          শিশুদের ইসলাম শিক্ষা
                        </SelectItem>
                        <SelectItem value="arabic">আরবী ভাষা</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="classType">ক্লাসের ধরন *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="নির্বাচন করুন" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one-to-one">
                          ওয়ান টু ওয়ান
                        </SelectItem>
                        <SelectItem value="group-3">গ্রুপ (৩ জন)</SelectItem>
                        <SelectItem value="group-5">গ্রুপ (৫ জন)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredTime">পছন্দের সময় *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="সময় নির্বাচন করুন" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">
                          সকাল (৮:০০ - ১২:০০)
                        </SelectItem>
                        <SelectItem value="afternoon">
                          দুপুর (১২:০০ - ৫:০০)
                        </SelectItem>
                        <SelectItem value="evening">
                          সন্ধ্যা (৫:০০ - ৯:০০)
                        </SelectItem>
                        <SelectItem value="night">
                          রাত (৯:০০ - ১১:০০)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comments">অতিরিক্ত মন্তব্য</Label>
                    <Textarea
                      id="comments"
                      placeholder="কোনো বিশেষ তথ্য থাকলে লিখুন"
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    ফরম জমা দিন
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CircleDollarSign className="h-6 w-6 text-primary" />
                  ভর্তি ফি
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg bg-secondary/50 p-4">
                    <p className="text-sm text-muted-foreground">
                      একবারের জন্য
                    </p>
                    <p className="text-2xl font-bold text-primary">৫০০ টাকা</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    * ভর্তি ফি ফেরতযোগ্য নয়
                  </p>
                  <p className="text-sm text-muted-foreground">
                    * প্রথম ৩টি ট্রায়াল ক্লাস সম্পূর্ণ বিনামূল্যে
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary to-accent text-white shadow-elegant">
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">সহায়তা প্রয়োজন?</h3>
                <p className="mb-4 text-sm opacity-90">
                  ভর্তি সংক্রান্ত যেকোনো প্রশ্নের জন্য যোগাযোগ করুন
                </p>
                <div className="space-y-2 text-sm">
                  <p>📞 +880 1886106782</p>
                  <p>📧 almaarif.edu101010@gmail.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
