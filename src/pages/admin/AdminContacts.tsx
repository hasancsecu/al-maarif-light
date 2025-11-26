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
      name: "سارة أحمد",
      email: "sara@example.com",
      phone: "01234567890",
      subject: "استفسار عن الرسوم الدراسية",
      message: "أود الاستفسار عن الرسوم الدراسية للدورات المتاحة...",
      date: "2024-11-20",
      status: "new"
    },
    {
      id: "2",
      name: "خالد محمود",
      email: "khaled@example.com",
      phone: "01234567891",
      subject: "سؤال عن مواعيد الدورات",
      message: "متى تبدأ دورة حفظ القرآن الكريم؟",
      date: "2024-11-19",
      status: "replied"
    },
    {
      id: "3",
      name: "نور الدين",
      email: "noureldeen@example.com",
      phone: "01234567892",
      subject: "طلب معلومات إضافية",
      message: "أرغب في الحصول على معلومات إضافية عن المعهد...",
      date: "2024-11-18",
      status: "new"
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { label: string; variant: "default" | "secondary" }> = {
      new: { label: "جديد", variant: "default" },
      replied: { label: "تم الرد", variant: "secondary" }
    };
    return variants[status] || variants.new;
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">رسائل التواصل</h1>
            <p className="text-muted-foreground mt-2">إدارة ومراجعة رسائل التواصل الواردة</p>
          </div>
          <Button>
            <Download className="h-4 w-4 ml-2" />
            تصدير البيانات
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>جميع الرسائل ({contacts.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>الاسم</TableHead>
                    <TableHead>البريد الإلكتروني</TableHead>
                    <TableHead>رقم الهاتف</TableHead>
                    <TableHead>الموضوع</TableHead>
                    <TableHead>الرسالة</TableHead>
                    <TableHead>التاريخ</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead className="text-left">الإجراءات</TableHead>
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
