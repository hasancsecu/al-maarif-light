import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Download } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";

const AdminAdmissions = () => {
  // Mock data for frontend display
  const admissions = [
    {
      id: "1",
      student_name: "أحمد محمد علي",
      course: "دورة حفظ القرآن الكريم",
      gender: "ذكر",
      phone: "01234567890",
      email: "ahmed@example.com",
      date: "2024-11-20",
      status: "pending"
    },
    {
      id: "2",
      student_name: "فاطمة عبدالله",
      course: "دورة تفسير القرآن",
      gender: "أنثى",
      phone: "01234567891",
      email: "fatima@example.com",
      date: "2024-11-19",
      status: "reviewed"
    },
    {
      id: "3",
      student_name: "محمود حسن",
      course: "دورة اللغة العربية",
      gender: "ذكر",
      phone: "01234567892",
      email: "mahmoud@example.com",
      date: "2024-11-18",
      status: "approved"
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { label: string; variant: "default" | "secondary" | "destructive" }> = {
      pending: { label: "قيد المراجعة", variant: "default" },
      reviewed: { label: "تمت المراجعة", variant: "secondary" },
      approved: { label: "مقبول", variant: "default" }
    };
    return variants[status] || variants.pending;
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">طلبات القبول</h1>
            <p className="text-muted-foreground mt-2">إدارة ومراجعة طلبات القبول المقدمة</p>
          </div>
          <Button>
            <Download className="h-4 w-4 ml-2" />
            تصدير البيانات
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>جميع طلبات القبول ({admissions.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>اسم الطالب</TableHead>
                    <TableHead>الدورة</TableHead>
                    <TableHead>الجنس</TableHead>
                    <TableHead>رقم الهاتف</TableHead>
                    <TableHead>البريد الإلكتروني</TableHead>
                    <TableHead>التاريخ</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead className="text-left">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {admissions.map((admission) => {
                    const statusInfo = getStatusBadge(admission.status);
                    return (
                      <TableRow key={admission.id}>
                        <TableCell className="font-medium">{admission.student_name}</TableCell>
                        <TableCell>{admission.course}</TableCell>
                        <TableCell>{admission.gender}</TableCell>
                        <TableCell>{admission.phone}</TableCell>
                        <TableCell>{admission.email}</TableCell>
                        <TableCell>{admission.date}</TableCell>
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

export default AdminAdmissions;
