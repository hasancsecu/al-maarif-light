import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Download } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import { AdmissionDetailModal } from "@/components/admin/AdmissionDetailModal";

const AdminAdmissions = () => {
  const [selectedAdmission, setSelectedAdmission] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);
  // Mock data for frontend display
  const admissions = [
    {
      id: "1",
      student_name: "আহমেদ মোহাম্মদ আলী",
      course: "কুরআন হিফজ কোর্স",
      gender: "পুরুষ",
      phone: "01234567890",
      email: "ahmed@example.com",
      date: "2024-11-20",
      status: "pending"
    },
    {
      id: "2",
      student_name: "ফাতিমা আব্দুল্লাহ",
      course: "কুরআন তাফসীর কোর্স",
      gender: "মহিলা",
      phone: "01234567891",
      email: "fatima@example.com",
      date: "2024-11-19",
      status: "reviewed"
    },
    {
      id: "3",
      student_name: "মাহমুদ হাসান",
      course: "আরবি ভাষা কোর্স",
      gender: "পুরুষ",
      phone: "01234567892",
      email: "mahmoud@example.com",
      date: "2024-11-18",
      status: "approved"
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { label: string; variant: "default" | "secondary" | "destructive" }> = {
      pending: { label: "পর্যালোচনাধীন", variant: "default" },
      reviewed: { label: "পর্যালোচনা সম্পন্ন", variant: "secondary" },
      approved: { label: "অনুমোদিত", variant: "default" }
    };
    return variants[status] || variants.pending;
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">ভর্তি আবেদন</h1>
            <p className="text-muted-foreground mt-2">জমা দেওয়া ভর্তি আবেদন পরিচালনা ও পর্যালোচনা</p>
          </div>
          <Button>
            <Download className="h-4 w-4 ml-2" />
            ডেটা রপ্তানি
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>সকল ভর্তি আবেদন ({admissions.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>শিক্ষার্থীর নাম</TableHead>
                    <TableHead>কোর্স</TableHead>
                    <TableHead>লিঙ্গ</TableHead>
                    <TableHead>ফোন নম্বর</TableHead>
                    <TableHead>ইমেইল</TableHead>
                    <TableHead>তারিখ</TableHead>
                    <TableHead>অবস্থা</TableHead>
                    <TableHead className="text-left">কার্যক্রম</TableHead>
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
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => {
                              setSelectedAdmission(admission);
                              setModalOpen(true);
                            }}
                          >
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

      <AdmissionDetailModal
        admission={selectedAdmission}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </AdminLayout>
  );
};

export default AdminAdmissions;
