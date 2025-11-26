import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, TrendingUp, Calendar } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";

const AdminDashboard = () => {
  // Mock data for frontend display
  const stats = [
    {
      title: "মোট ভর্তি আবেদন",
      value: "24",
      icon: Users,
      description: "এই সপ্তাহে ৫টি নতুন আবেদন",
      trend: "+12%",
      color: "text-blue-600"
    },
    {
      title: "যোগাযোগের বার্তা",
      value: "18",
      icon: FileText,
      description: "আজ ৩টি নতুন বার্তা",
      trend: "+8%",
      color: "text-green-600"
    },
    {
      title: "পর্যালোচনাধীন আবেদন",
      value: "12",
      icon: Calendar,
      description: "ফলোআপ প্রয়োজন",
      trend: "0%",
      color: "text-orange-600"
    },
    {
      title: "বৃদ্ধির হার",
      value: "+15%",
      icon: TrendingUp,
      description: "গত মাসের তুলনায়",
      trend: "+3%",
      color: "text-purple-600"
    }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">ড্যাশবোর্ড</h1>
          <p className="text-muted-foreground mt-2">অ্যাডমিন প্যানেলে স্বাগতম</p>
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
                    আগের সময়ের থেকে
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>সাম্প্রতিক ভর্তি আবেদন</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-3 last:border-b-0">
                    <div>
                      <p className="font-medium">শিক্ষার্থী {i}</p>
                      <p className="text-sm text-muted-foreground">কুরআন কোর্স</p>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {i} দিন আগে
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>সাম্প্রতিক যোগাযোগের বার্তা</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-3 last:border-b-0">
                    <div>
                      <p className="font-medium">ব্যবহারকারী {i}</p>
                      <p className="text-sm text-muted-foreground">সাধারণ জিজ্ঞাসা</p>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {i * 2} ঘণ্টা আগে
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
