import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { postContact } from "@/api/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "নাম প্রদান করুন";
    if (!formData.email.trim()) newErrors.email = "ইমেইল প্রদান করুন";
    if (!formData.phone.trim()) newErrors.phone = "মোবাইল নম্বর প্রদান করুন";
    if (!formData.subject.trim()) newErrors.subject = "বিষয় প্রদান করুন";
    if (!formData.message.trim()) newErrors.message = "বার্তা প্রদান করুন";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "ত্রুটি!",
        description: "সব বাধ্যতামূলক ঘর পূরণ করুন।",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      await postContact(formData);

      toast({
        title: "সফল!",
        description: "আপনার বার্তা সফলভাবে প্রেরিত হয়েছে।",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      toast({
        title: "ত্রুটি!",
        description: "বার্তা প্রেরণে ব্যর্থ হয়েছে। আবার চেষ্টা করুন।",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

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
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                যোগাযোগ ফরম
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium block">
                    আপনার নাম *
                  </label>
                  <Input
                    id="name"
                    placeholder="আপনার পূর্ণ নাম লিখুন"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium block">ইমেইল *</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium block">
                    মোবাইল নম্বর *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+880 1886106782"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium block">বিষয় *</label>
                  <Input
                    id="subject"
                    placeholder="বিষয় লিখুন"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium block">বার্তা *</label>
                  <Textarea
                    id="message"
                    placeholder="আপনার বার্তা এখানে লিখুন"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "পাঠানো হচ্ছে..." : "বার্তা পাঠান"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>যোগাযোগের তথ্য</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
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
