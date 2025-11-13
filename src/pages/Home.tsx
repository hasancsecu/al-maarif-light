import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Clock, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <img 
          src={heroBanner} 
          alt="Hero Banner" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {t('home.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/admission/form">{t('home.enrollNow')}</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/about">{t('home.learnMore')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            {t('home.ourBeginning')}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t('home.beginningText')}
          </p>
          <div className="bg-secondary/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{t('home.established')}:</h3>
            <p className="text-muted-foreground">
              {t('home.establishedDate')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('home.features')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{t('home.oneToOne')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t('home.oneToOneDesc')}
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{t('home.flexibleSchedule')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t('home.flexibleScheduleDesc')}
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{t('home.qualifiedTeachers')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t('home.qualifiedTeachersDesc')}
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{t('home.freeTrial')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t('home.freeTrialDesc')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('home.ourCourses')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('home.coursesSubtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: t('nav.quranNazira'), path: "/courses/quran-nazira" },
              { title: t('nav.quranHifz'), path: "/courses/quran-hifz" },
              { title: t('nav.quranTranslation'), path: "/courses/quran-translation" },
              { title: t('nav.hadithHifz'), path: "/courses/hadith-hifz" },
              { title: t('nav.kidsIslam'), path: "/courses/kids-islam" },
              { title: t('nav.arabicLanguage'), path: "/courses/arabic-language" },
            ].map((course) => (
              <Card key={course.path} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to={course.path}>{t('home.viewCourse')}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('home.startJourney')}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {t('home.startJourneyDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/admission/form">{t('home.fillForm')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-transparent">
              <Link to="/contact">{t('home.contactUs')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
