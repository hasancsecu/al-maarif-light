import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'bn' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, any>> = {
  bn: {
    nav: {
      home: 'হোম',
      about: 'আমাদের সম্পর্কে',
      aboutInstitute: 'এ এম আই টি সম্পর্কে',
      goals: 'লক্ষ্য ও উদ্দেশ্য',
      features: 'বৈশিষ্ট্যসমূহ',
      policies: 'নীতিমালা',
      directors: 'পরিচালক প্যানেল',
      founderDirector: 'প্রতিষ্ঠাতা পরিচালক',
      curriculum: 'পাঠ্যক্রম কমিটি',
      teachers: 'শিক্ষক প্যানেল',
      courses: 'কোর্সসমূহ',
      quranNazira: 'তাজবীদসহ কুরআন শিক্ষা',
      quranHifz: 'কুরআন হিফজ',
      quranTranslation: 'অনুবাদসহ কুরআন শিক্ষা',
      hadithHifz: 'বুখারী ও মুসলিম হিফজ',
      kidsIslam: 'শিশুদের ইসলাম শিক্ষা',
      arabicLanguage: 'আরবী ভাষা',
      admission: 'ভর্তি সংক্রান্ত',
      admissionProcess: 'ভর্তি প্রক্রিয়া ও যোগ্যতা',
      admissionForm: 'ফরম ও ভর্তি ফি',
      courseFees: 'কোর্স ফি',
      notice: 'নোটিশ বোর্ড',
      contact: 'যোগাযোগ',
      donation: 'ডোনেশন',
    },
    home: {
      title: `আল-মা'আরিফ ইন্টারন্যাশনাল ইনস্টিটিউট`,
      subtitle: `বিশ্বের প্রতিটি ঘরে কুরআন ও হাদীসের আলো পৌঁছে দেওয়া।`,
      enrollNow: 'এখনই ভর্তি হন',
      learnMore: 'আরও জানুন',
      ourBeginning: 'আমাদের সূচনা',
      beginningText: 'বর্তমান সময়ে আমরা দ্বীনের এক গভীর সংকটময় অধ্যায় পার করছি। চারদিকে ফিতনার ঝড়—নাস্তিকতা, বস্তুবাদ, অবিশ্বাস ও বিভ্রান্তির স্রোত পৃথিবীজুড়ে ছড়িয়ে পড়েছে। তবুও, এই হতাশার ঘন অন্ধকারের ভেতরেও আশার এক ফালি আলোর ঝলকানি দেখা যায়—একদল স্বপ্নবাজ, দ্বীনের প্রতি অনুরাগী তরুণ-তরুণীর উদ্যোগে প্রতিষ্ঠিত হয় "আল-মাআরিফ ইন্টারন্যাশনাল ইনস্টিটিউট"।',
      established: 'প্রতিষ্ঠার তারিখ',
      establishedDate: '১২ অক্টোবর ২০২৫ ঈসায়ী / ২০ রবিউস্ সানি ১৪৪৭ হিজরি / ২৭ আশ্বিন ১৪৩২ বঙ্গাব্দ',
      features: 'আমাদের বিশেষ বৈশিষ্ট্যসমূহ',
      oneToOne: 'ওয়ান টু ওয়ান ক্লাস',
      oneToOneDesc: 'একজন শিক্ষক, একজন ছাত্র — সম্পূর্ণ মনোযোগ এবং দ্রুত অগ্রগতি।',
      flexibleSchedule: 'সুবিধামতো সময়',
      flexibleScheduleDesc: 'আপনার সুবিধামতো সময়ে পড়াশোনা করুন।',
      qualifiedTeachers: 'অভিজ্ঞ শিক্ষক',
      qualifiedTeachersDesc: 'পুরুষদের জন্য শিক্ষক এবং মহিলাদের জন্য শিক্ষিকা।',
      freeTrial: 'ফ্রি ট্রায়াল ক্লাস',
      freeTrialDesc: 'ভর্তির আগে একাধিক ট্রায়াল ক্লাসের সুযোগ।',
      ourCourses: 'আমাদের কোর্সসমূহ',
      coursesSubtitle: 'সম্পূর্ণ পাঠ্যক্রম এবং অভিজ্ঞ শিক্ষক দ্বারা সম্পূর্ণ ইসলামী শিক্ষা।',
      viewCourse: 'কোর্স দেখুন',
      startJourney: 'আজই আপনার ইসলামিক শিক্ষার যাত্রা শুরু করুন',
      startJourneyDesc: 'একটি ফ্রি ট্রায়াল ক্লাসের জন্য আবেদন করুন এবং মানসম্পন্ন ইসলামী শিক্ষার স্বাদ নিন।',
      fillForm: 'ভর্তি ফরম পূরণ করুন',
      contactUs: 'যোগাযোগ করুন',
    },
    footer: {
      about: `আল-মা'আরিফ`,
      institute: `ইন্টারন্যাশনাল ইনস্টিটিউট`,
      description: `বিশ্বের প্রতিটি ঘরে কুরআন ও হাদীসের আলো পৌঁছে দেওয়া আমাদের লক্ষ্য।`,
      quickLinks: 'দ্রুত লিংক',
      aboutUs: 'আমাদের সম্পর্কে',
      courses: 'কোর্সসমূহ',
      admissionProcess: 'ভর্তি প্রক্রিয়া',
      teachers: 'শিক্ষক প্যানেল',
      contact: 'যোগাযোগ',
      socialMedia: 'সোশ্যাল মিডিয়া',
      rights: `আল-মা'আরিফ ইন্টারন্যাশনাল ইনস্টিটিউট। সর্বস্বত্ব সংরক্ষিত।`,
      establishedDate: `প্রতিষ্ঠার তারিখ: ১২ অক্টোবর ২০২৫ ঈসায়ী / ২০ রবিউস্ সানি ১৪৪৭ হিজরি / ২৭ আশ্বিন ১৪৩২ বঙ্গাব্দ`,
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      aboutInstitute: 'About AMIT',
      goals: 'Goals & Objectives',
      features: 'Features',
      policies: 'Policies',
      directors: 'Directors Panel',
      founderDirector: 'Founder Director',
      curriculum: 'Curriculum Committee',
      teachers: 'Teachers Panel',
      courses: 'Courses',
      quranNazira: 'Quran with Tajweed',
      quranHifz: 'Quran Memorization',
      quranTranslation: 'Quran with Translation',
      hadithHifz: 'Bukhari & Muslim Hifz',
      kidsIslam: 'Islamic Education for Kids',
      arabicLanguage: 'Arabic Language',
      admission: 'Admission',
      admissionProcess: 'Admission Process & Eligibility',
      admissionForm: 'Form & Admission Fee',
      courseFees: 'Course Fees',
      notice: 'Notice Board',
      contact: 'Contact',
      donation: 'Donation',
    },
    home: {
      title: 'Al-Maarif International Institute',
      subtitle: 'Spreading the light of the Quran and Hadith to every home around the world.',
      enrollNow: 'Enroll Now',
      learnMore: 'Learn More',
      ourBeginning: 'Our Beginning',
      beginningText: 'Today, the Ummah is passing through a critical chapter — a time of spiritual crisis. The storms of atheism, materialism, disbelief, and confusion are sweeping across the globe. Yet, amidst this darkness, a ray of hope emerges — a group of visionary, faith-driven young men and women came together to establish Al-Maarif International Institute.',
      established: 'Date of Establishment',
      establishedDate: '12 October 2025 CE / 20 Rabi al-Thani 1447 AH / 27 Ashwin 1432 BS',
      features: 'Our Distinctive Features',
      oneToOne: 'One-on-One Classes',
      oneToOneDesc: 'One teacher, one student — full attention for faster progress.',
      flexibleSchedule: 'Flexible Schedule',
      flexibleScheduleDesc: 'Study at the time most convenient for you.',
      qualifiedTeachers: 'Qualified Instructors',
      qualifiedTeachersDesc: 'Male teachers for brothers and female teachers for sisters.',
      freeTrial: 'Free Trial Classes',
      freeTrialDesc: 'Experience multiple trial sessions before enrollment.',
      ourCourses: 'Our Courses',
      coursesSubtitle: 'Comprehensive curriculum and experienced instructors offering complete Islamic education.',
      viewCourse: 'View Course',
      startJourney: 'Start Your Islamic Learning Journey Today',
      startJourneyDesc: 'Apply for a Free Trial Class and experience the taste of quality Islamic education.',
      fillForm: 'Fill Out the Admission Form',
      contactUs: 'Contact Us',
    },
    footer: {
      about: 'Al-Maarif',
      institute: 'International Institute',
      description: 'Spreading the light of the Quran and Hadith to every home around the world.',
      quickLinks: 'Quick Links',
      aboutUs: 'About Us',
      courses: 'Courses',
      admissionProcess: 'Admission Process',
      teachers: 'Teachers Panel',
      contact: 'Contact',
      socialMedia: 'Social Media',
      rights: 'Al-Maarif International Institute. All rights reserved.',
      establishedDate: 'Date of Establishment: 12 October 2025 CE / 20 Rabi al-Thani 1447 AH / 27 Ashwin 1432 BS',
    },
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'bn') ? saved : 'bn';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
