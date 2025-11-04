import { useState } from "react";
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
import { toast } from "@/components/ui/use-toast";
import { postAdmission } from "@/api/api";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    course: "",
    classType: "",
    preferredTime: "",
    comments: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.studentName.trim()) newErrors.studentName = "নাম প্রদান করুন";
    if (!formData.age.trim()) newErrors.age = "বয়স প্রদান করুন";
    if (!formData.gender.trim()) newErrors.gender = "লিঙ্গ নির্বাচন করুন";
    if (!formData.phone.trim()) newErrors.phone = "মোবাইল নম্বর প্রদান করুন";
    if (!formData.address.trim()) newErrors.address = "ঠিকানা প্রদান করুন";
    if (!formData.course) newErrors.course = "কোর্স নির্বাচন করুন";
    if (!formData.classType) newErrors.classType = "ক্লাসের ধরন নির্বাচন করুন";
    if (!formData.preferredTime)
      newErrors.preferredTime = "পছন্দের সময় নির্বাচন করুন";

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
      await postAdmission(formData);

      toast({
        title: "সফল!",
        description: "আপনার ভর্তি ফরম সফলভাবে জমা হয়েছে।",
      });

      setFormData({
        studentName: "",
        age: "",
        gender: "",
        phone: "",
        email: "",
        address: "",
        course: "",
        classType: "",
        preferredTime: "",
        comments: "",
      });
      setErrors({});
    } catch (error) {
      toast({
        title: "ত্রুটি!",
        description: "ফরম জমা দিতে ব্যর্থ হয়েছে। আবার চেষ্টা করুন।",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

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
          {/* Admission Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  ভর্তি ফরম
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="studentName">শিক্ষার্থীর নাম *</Label>
                      <Input
                        id="studentName"
                        placeholder="পূর্ণ নাম লিখুন"
                        value={formData.studentName}
                        onChange={handleChange}
                      />
                      {errors.studentName && (
                        <p className="text-sm text-red-500">
                          {errors.studentName}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">বয়স *</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="বয়স"
                        value={formData.age}
                        onChange={handleChange}
                      />
                      {errors.age && (
                        <p className="text-sm text-red-500">{errors.age}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="gender">লিঙ্গ *</Label>
                      <Select
                        onValueChange={(val) =>
                          handleSelectChange("gender", val)
                        }
                        value={formData.gender}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="নির্বাচন করুন" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">পুরুষ</SelectItem>
                          <SelectItem value="female">মহিলা</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.gender && (
                        <p className="text-sm text-red-500">{errors.gender}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">মোবাইল নম্বর *</Label>
                      <Input
                        id="phone"
                        placeholder="+880"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">ইমেইল</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">ঠিকানা *</Label>
                    <Textarea
                      id="address"
                      placeholder="সম্পূর্ণ ঠিকানা লিখুন"
                      value={formData.address}
                      onChange={handleChange}
                    />
                    {errors.address && (
                      <p className="text-sm text-red-500">{errors.address}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course">কোর্স নির্বাচন *</Label>
                    <Select
                      onValueChange={(val) => handleSelectChange("course", val)}
                      value={formData.course}
                    >
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
                    {errors.course && (
                      <p className="text-sm text-red-500">{errors.course}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="classType">ক্লাসের ধরন *</Label>
                    <Select
                      onValueChange={(val) =>
                        handleSelectChange("classType", val)
                      }
                      value={formData.classType}
                    >
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
                    {errors.classType && (
                      <p className="text-sm text-red-500">{errors.classType}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredTime">পছন্দের সময় *</Label>
                    <Select
                      onValueChange={(val) =>
                        handleSelectChange("preferredTime", val)
                      }
                      value={formData.preferredTime}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="সময় নির্বাচন করুন" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sixtoseven">
                          সকাল (৬:০০ - ৭:০০)
                        </SelectItem>
                        <SelectItem value="seventoeight">
                          সকাল (৭:০০ - ৮:০০)
                        </SelectItem>
                        <SelectItem value="eighttonine">
                          সকাল (৮:০০ - ৯:০০)
                        </SelectItem>
                        <SelectItem value="ninetoten">
                          সকাল (৯:০০ - ১০:০০)
                        </SelectItem>
                        <SelectItem value="tentoeleven">
                          সকাল (১০:০০ - ১১:০০)
                        </SelectItem>
                        <SelectItem value="eleventotwelve">
                          দুপুর (১১:০০ - ১২:০০)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.preferredTime && (
                      <p className="text-sm text-red-500">
                        {errors.preferredTime}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="comments">অতিরিক্ত মন্তব্য</Label>
                    <Textarea
                      id="comments"
                      placeholder="কোনো বিশেষ তথ্য থাকলে লিখুন"
                      value={formData.comments}
                      onChange={handleChange}
                    />
                  </div>
                  <Button
                    className="w-full"
                    size="lg"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "জমা হচ্ছে..." : "ফরম জমা দিন"}
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
