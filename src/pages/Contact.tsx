import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-primary">কোন পরামর্শ?</h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-accent"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            আমরা আপনার সেবায় সর্বদা প্রস্তুত। যেকোনো প্রশ্ন বা পরামর্শের জন্য
            যোগাযোগ করুন।
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                যোগাযোগ ফরম
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    আপনার নাম
                  </label>
                  <Input placeholder="আপনার পূর্ণ নাম লিখুন" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    ইমেইল
                  </label>
                  <Input type="email" placeholder="example@email.com" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    মোবাইল নম্বর
                  </label>
                  <Input type="tel" placeholder="+880 1886106782" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    বিষয়
                  </label>
                  <Input placeholder="বিষয় লিখুন" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    বার্তা
                  </label>
                  <Textarea placeholder="আপনার বার্তা এখানে লিখুন" rows={5} />
                </div>
                <Button type="submit" className="w-full">
                  বার্তা পাঠান
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>যোগাযোগের তথ্য</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium">ইমেইল</h3>
                    <p className="text-sm text-muted-foreground">
                      almaarif.edu101010@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium">ফোন</h3>
                    <p className="text-sm text-muted-foreground">
                      +880 1886106782
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium">ঠিকানা</h3>
                    <p className="text-sm text-muted-foreground">
                      ঢাকা, বাংলাদেশ
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>অফিস সময়</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">
                      শনিবার - বৃহস্পতিবার
                    </span>
                    <span className="text-sm text-muted-foreground">
                      ৯:০০ AM - ৮:০০ PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">শুক্রবার</span>
                    <span className="text-sm text-muted-foreground">বন্ধ</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <h3 className="mb-2 text-lg font-bold">জরুরি সহায়তা</h3>
                <p className="mb-4 text-sm opacity-90">
                  জরুরি বিষয়ে সরাসরি আমাদের হটলাইনে যোগাযোগ করুন
                </p>
                <Button variant="secondary" className="w-full">
                  হটলাইন: +880 1886106782
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
