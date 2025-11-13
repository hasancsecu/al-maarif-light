import { Link } from "react-router-dom";
import { BookOpen, Mail, Phone, MapPin, Facebook, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <BookOpen className="h-8 w-8" />
              <div>
                <h3 className="text-lg font-bold">{t('footer.about')}</h3>
                <p className="text-sm opacity-90">{t('footer.institute')}</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  {t('footer.aboutUs')}
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/quran-nazira"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  {t('footer.courses')}
                </Link>
              </li>
              <li>
                <Link
                  to="/admission/process"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  {t('footer.admissionProcess')}
                </Link>
              </li>
              <li>
                <Link
                  to="/teachers"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  {t('footer.teachers')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold">{t('footer.contact')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">almaarif.edu101010@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">+880 1886106782</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">ঢাকা, বাংলাদেশ</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">{t('footer.socialMedia')}</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61575175316710"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>
            © {new Date().getFullYear()} আল-মা'আরিফ ইন্টারন্যাশনাল ইনস্টিটিউট।
            সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="mt-2">
            প্রতিষ্ঠার তারিখ: ১২ অক্টোবর ২০২৫ ঈসায়ী / ২০ রবিউস্ সানি ১৪৪৭ হিজরি
            / ২৭ আশ্বিন ১৪৩২ বঙ্গাব্দ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
