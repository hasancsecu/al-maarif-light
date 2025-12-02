import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface AdmissionDetail {
  id: string;
  student_name: string;
  course: string;
  gender: string;
  phone: string;
  email: string;
  date: string;
  status: string;
  father_name?: string;
  mother_name?: string;
  date_of_birth?: string;
  address?: string;
  guardian_phone?: string;
  previous_education?: string;
}

interface AdmissionDetailModalProps {
  admission: AdmissionDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AdmissionDetailModal = ({ admission, open, onOpenChange }: AdmissionDetailModalProps) => {
  if (!admission) return null;

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { label: string; variant: "default" | "secondary" | "destructive" }> = {
      pending: { label: "পর্যালোচনাধীন", variant: "default" },
      reviewed: { label: "পর্যালোচনা সম্পন্ন", variant: "secondary" },
      approved: { label: "অনুমোদিত", variant: "default" }
    };
    return variants[status] || variants.pending;
  };

  const statusInfo = getStatusBadge(admission.status);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">ভর্তি আবেদনের বিস্তারিত</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">আবেদন নং: {admission.id}</h3>
            <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">শিক্ষার্থীর নাম</p>
              <p className="font-medium">{admission.student_name}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">কোর্স</p>
              <p className="font-medium">{admission.course}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">লিঙ্গ</p>
              <p className="font-medium">{admission.gender}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">জন্ম তারিখ</p>
              <p className="font-medium">{admission.date_of_birth || "তথ্য নেই"}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">ফোন নম্বর</p>
              <p className="font-medium">{admission.phone}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">ইমেইল</p>
              <p className="font-medium">{admission.email}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">পিতার নাম</p>
              <p className="font-medium">{admission.father_name || "তথ্য নেই"}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">মাতার নাম</p>
              <p className="font-medium">{admission.mother_name || "তথ্য নেই"}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">অভিভাবকের ফোন</p>
              <p className="font-medium">{admission.guardian_phone || "তথ্য নেই"}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">পূর্ববর্তী শিক্ষা</p>
              <p className="font-medium">{admission.previous_education || "তথ্য নেই"}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">আবেদনের তারিখ</p>
              <p className="font-medium">{admission.date}</p>
            </div>
          </div>

          {admission.address && (
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">ঠিকানা</p>
              <p className="font-medium">{admission.address}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
