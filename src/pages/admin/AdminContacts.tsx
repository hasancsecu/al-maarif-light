import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Download } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";

const AdminContacts = () => {
  // Mock data for frontend display
  const contacts = [
    {
      id: "1",
      name: "সারা আহমেদ",
      email: "sara@example.com",
      phone: "01234567890",
      subject: "কোর্সের ফি সম্পর্কে জিজ্ঞাসা",
      message: "উপলব্ধ কোর্সের ফি সম্পর্কে জানতে চাই...",
      date: "2024-11-20",
      status: "new"
    },
    {
      id: "2",
      name: "খালেদ মাহমুদ",
      email: "khaled@example.com",
      phone: "01234567891",
      subject: "কোর্সের সময়সূচী সম্পর্কে প্রশ্ন",
      message: "কুরআন হিফজ কোর্স কখন শুরু হবে?",
      date: "2024-11-19",
      status: "replied"
    },
    {
      id: "3",
      name: "নূর উদ্দিন",
      email: "noureldeen@example.com",
      phone: "01234567892",
      subject: "অতিরিক্ত তথ্যের অনুরোধ",
      message: "ইনস্টিটিউট সম্পর্কে আরও তথ্য পেতে চাই...",
      date: "2024-11-18",
      status: "new"
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { label: string; variant: "default" | "secondary" }> = {
      new: { label: "নতুন", variant: "default" },
      replied: { label: "উত্তর দেওয়া হয়েছে", variant: "secondary" }
    };
    return variants[status] || variants.new;
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">যোগাযোগের বার্তা</h1>
            <p className="text-muted-foreground mt-2">প্রাপ্ত যোগাযোগের বার্তা পরিচালনা ও পর্যালোচনা</p>
          </div>
          <Button>
            <Download className="h-4 w-4 ml-2" />
            ডেটা রপ্তানি
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>সকল বার্তা ({contacts.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>নাম</TableHead>
                    <TableHead>ইমেইল</TableHead>
                    <TableHead>ফোন নম্বর</TableHead>
                    <TableHead>বিষয়</TableHead>
                    <TableHead>বার্তা</TableHead>
                    <TableHead>তারিখ</TableHead>
                    <TableHead>অবস্থা</TableHead>
                    <TableHead className="text-left">কার্যক্রম</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contacts.map((contact) => {
                    const statusInfo = getStatusBadge(contact.status);
                    return (
                      <TableRow key={contact.id}>
                        <TableCell className="font-medium">{contact.name}</TableCell>
                        <TableCell>{contact.email}</TableCell>
                        <TableCell>{contact.phone}</TableCell>
                        <TableCell>{contact.subject}</TableCell>
                        <TableCell className="max-w-xs truncate">
                          {contact.message}
                        </TableCell>
                        <TableCell>{contact.date}</TableCell>
                        <TableCell>
                          <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminContacts;
