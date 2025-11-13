import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const DynamicTitle = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const path = location.pathname;
    const pathTitles: Record<string, string> = {
      '/': 'home.title',
      '/about': 'nav.aboutInstitute',
      '/goals': 'nav.goals',
      '/features': 'nav.features',
      '/policies': 'nav.policies',
      '/founder-director': 'nav.founderDirector',
      '/curriculum-committee': 'nav.curriculum',
      '/teachers': 'nav.teachers',
      '/courses/quran-nazira': 'nav.quranNazira',
      '/courses/quran-hifz': 'nav.quranHifz',
      '/courses/quran-translation': 'nav.quranTranslation',
      '/courses/hadith-hifz': 'nav.hadithHifz',
      '/courses/kids-islam': 'nav.kidsIslam',
      '/courses/arabic-language': 'nav.arabicLanguage',
      '/admission/process': 'nav.admissionProcess',
      '/admission/form': 'nav.admissionForm',
      '/admission/fees': 'nav.courseFees',
      '/notice': 'nav.notice',
      '/contact': 'nav.contact',
      '/donation': 'nav.donation',
    };

    const title = pathTitles[path] ? t(pathTitles[path]) : t('home.title');
    document.title = `${title} - ${t('home.title')}`;
  }, [location, t]);

  return null;
};

export default DynamicTitle;
