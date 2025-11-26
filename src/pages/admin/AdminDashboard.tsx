import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, TrendingUp, Calendar } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";

const AdminDashboard = () => {
  // Mock data for frontend display
  const stats = [
    {
      title: "إجمالي طلبات القبول",
      value: "24",
      icon: Users,
      description: "طلب جديد هذا الأسبوع 5",
      trend: "+12%",
      color: "text-blue-600"
    },
    {
      title: "رسائل التواصل",
      value: "18",
      icon: FileText,
      description: "رسالة جديدة اليوم 3",
      trend: "+8%",
      color: "text-green-600"
    },
    {
      title: "الطلبات قيد المراجعة",
      value: "12",
      icon: Calendar,
      description: "تحتاج إلى متابعة",
      trend: "0%",
      color: "text-orange-600"
    },
    {
      title: "معدل النمو",
      value: "+15%",
      icon: TrendingUp,
      description: "مقارنة بالشهر الماضي",
      trend: "+3%",
      color: "text-purple-600"
    }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">لوحة التحكم</h1>
          <p className="text-muted-foreground mt-2">مرحباً بك في لوحة الإدارة</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-2">
                  {stat.description}
                </p>
                <div className="flex items-center mt-2">
                  <span className="text-xs font-medium text-green-600">
                    {stat.trend}
                  </span>
                  <span className="text-xs text-muted-foreground mr-2">
                    من الفترة السابقة
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>آخر طلبات القبول</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-3 last:border-b-0">
                    <div>
                      <p className="font-medium">طالب {i}</p>
                      <p className="text-sm text-muted-foreground">دورة القرآن الكريم</p>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      منذ {i} يوم
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>آخر رسائل التواصل</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-3 last:border-b-0">
                    <div>
                      <p className="font-medium">مستخدم {i}</p>
                      <p className="text-sm text-muted-foreground">استفسار عام</p>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      منذ {i * 2} ساعة
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
