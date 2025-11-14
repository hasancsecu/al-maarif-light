import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Heart, Users, Globe, BookOpen, Star, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Goals = () => {
  const { t } = useLanguage();

  const goals = [
    { icon: Globe, title: t('goals.goal1'), desc: t('goals.goal1Desc') },
    { icon: Heart, title: t('goals.goal2'), desc: t('goals.goal2Desc') },
    { icon: Users, title: t('goals.goal3'), desc: t('goals.goal3Desc') },
    { icon: BookOpen, title: t('goals.goal4'), desc: t('goals.goal4Desc') },
    { icon: Star, title: t('goals.goal5'), desc: t('goals.goal5Desc') },
    { icon: Target, title: t('goals.goal6'), desc: t('goals.goal6Desc') },
  ];

  const commitments = [
    t('goals.commitment1'),
    t('goals.commitment2'),
    t('goals.commitment3'),
    t('goals.commitment4'),
    t('goals.commitment5'),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-primary">
            {t('goals.title')}
          </h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-accent"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('goals.subtitle')}
          </p>
        </div>

        <div className="mb-12 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 p-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-primary">
            {t('goals.mainGoalTitle')}
          </h2>
          <p className="text-center text-lg leading-relaxed text-muted-foreground">
            {t('goals.mainGoalText')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal, index) => (
            <Card
              key={index}
              className="shadow-elegant transition-transform hover:scale-105"
            >
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                    <goal.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-center">{goal.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  {goal.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-card p-8 shadow-elegant">
          <h2 className="mb-6 text-center text-2xl font-bold text-primary">
            {t('goals.commitmentsTitle')}
          </h2>
          <div className="space-y-4">
            {commitments.map((commitment, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-muted-foreground">{commitment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
