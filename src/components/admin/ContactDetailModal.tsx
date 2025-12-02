import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface ContactDetail {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  status: string;
}

interface ContactDetailModalProps {
  contact: ContactDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactDetailModal = ({ contact, open, onOpenChange }: ContactDetailModalProps) => {
  if (!contact) return null;

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { label: string; variant: "default" | "secondary" }> = {
      new: { label: "নতুন", variant: "default" },
      replied: { label: "উত্তর দেওয়া হয়েছে", variant: "secondary" }
    };
    return variants[status] || variants.new;
  };

  const statusInfo = getStatusBadge(contact.status);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">বার্তার বিস্তারিত</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">বার্তা নং: {contact.id}</h3>
            <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">নাম</p>
              <p className="font-medium">{contact.name}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">ইমেইল</p>
              <p className="font-medium">{contact.email}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">ফোন নম্বর</p>
              <p className="font-medium">{contact.phone}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">তারিখ</p>
              <p className="font-medium">{contact.date}</p>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">বিষয়</p>
            <p className="font-medium text-lg">{contact.subject}</p>
          </div>

          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">বার্তা</p>
            <div className="p-4 bg-muted rounded-lg">
              <p className="whitespace-pre-wrap">{contact.message}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
