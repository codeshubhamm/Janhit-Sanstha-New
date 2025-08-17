import React, { createContext, useContext, useState, ReactNode } from 'react';

// Translation data
const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    aboutUs: 'About Us',
    sdgGoals: 'SDG Goals',
    ourProjects: 'Our Projects',
    awards: 'Awards',
    annualReports: 'Annual Reports',
    mediaUpdates: 'Media & Updates',
    covidPandemic: 'Covid Pandemic',
    team: 'Team',
    ourTeam: 'Our Team',
    trustee: 'Trustee',
    contact: 'Contact',
    donate: 'Donate',
    
    // Hero Section
    heroTitle: 'Empowering Rural Communities Through Education & Development',
    heroDescription: 'Founded in 1998, Janhit Bahuuddeshiya Gramin Vikas Sanstha has been actively working in 20 tribal villages surrounding the Tipeshwar Wildlife Sanctuary, focusing on Adolescent Development, Digital Education, Primary Education, Women Empowerment, and Environmental Conservation.',
    donateNow: 'Donate Now',
    learnMore: 'Learn More',
    
    // Annual Reports
    annualReportsTitle: 'Annual Reports',
    transparencySubtitle: 'Transparency, Accountability, and Impact Measurement',
    ourAnnualReports: 'Our Annual Reports',
    annualReportsDescription: 'Explore our comprehensive annual reports to understand our impact, achievements, and commitment to rural development and community empowerment.',
    viewOnline: 'View Online',
    downloadPDF: 'Download PDF',
    share: 'Share',
    keyHighlights: 'Key Highlights:',
    whyAnnualReportsMatter: 'Why Annual Reports Matter',
    whyAnnualReportsDescription: 'Our annual reports are more than just documents - they are a testament to our commitment to transparency, accountability, and community impact.',
    transparency: 'Transparency',
    transparencyDesc: 'Complete disclosure of our activities, finances, and impact metrics for public accountability.',
    impactMeasurement: 'Impact Measurement',
    impactMeasurementDesc: 'Detailed analysis of our programs\' effectiveness and community transformation outcomes.',
    communityStories: 'Community Stories',
    communityStoriesDesc: 'Real stories of transformation and empowerment from the communities we serve.',
    financialAccountability: 'Financial Accountability',
    financialAccountabilityDesc: 'Complete financial statements and resource utilization for donor transparency.',
    
    // Language
    language: 'Language',
    english: 'English',
    marathi: 'Marathi'
  },
  mr: {
    // Navigation
    home: 'मुख्यपृष्ठ',
    about: 'आमच्याबद्दल',
    aboutUs: 'आमच्याबद्दल',
    sdgGoals: 'एसडीजी ध्येये',
    ourProjects: 'आमचे प्रकल्प',
    awards: 'पुरस्कार',
    annualReports: 'वार्षिक अहवाल',
    mediaUpdates: 'माध्यम आणि अपडेट्स',
    covidPandemic: 'कोविड महामारी',
    team: 'संघ',
    ourTeam: 'आमचा संघ',
    trustee: 'विश्वस्त',
    contact: 'संपर्क',
    donate: 'दान करा',
    
    // Hero Section
    heroTitle: 'शिक्षण आणि विकासाद्वारे ग्रामीण समुदायांना सक्षम करणे',
    heroDescription: '१९९८ मध्ये स्थापन झालेल्या जनहित बहुउद्देशीय ग्रामीण विकास संस्थेने टिपेश्वर वन्यजीव अभयारण्याभोवती असलेल्या २० आदिवासी गावांमध्ये किशोरवयीन विकास, डिजिटल शिक्षण, प्राथमिक शिक्षण, महिला सक्षमीकरण आणि पर्यावरण संवर्धन या क्षेत्रात सक्रियपणे काम केले आहे.',
    donateNow: 'आता दान करा',
    learnMore: 'अधिक जाणून घ्या',
    
    // Annual Reports
    annualReportsTitle: 'वार्षिक अहवाल',
    transparencySubtitle: 'पारदर्शकता, जबाबदारी आणि प्रभाव मोजमाप',
    ourAnnualReports: 'आमचे वार्षिक अहवाल',
    annualReportsDescription: 'आमच्या प्रभाव, यश आणि ग्रामीण विकास आणि समुदाय सक्षमीकरणासाठीच्या वचनबद्धतेचे समजून घेण्यासाठी आमचे व्यापक वार्षिक अहवाल पहा.',
    viewOnline: 'ऑनलाइन पहा',
    downloadPDF: 'पीडीएफ डाउनलोड करा',
    share: 'शेअर करा',
    keyHighlights: 'मुख्य वैशिष्ट्ये:',
    whyAnnualReportsMatter: 'वार्षिक अहवाल का महत्वाचे आहेत',
    whyAnnualReportsDescription: 'आमचे वार्षिक अहवाल केवळ दस्तऐवज नाहीत - ते पारदर्शकता, जबाबदारी आणि समुदाय प्रभावासाठीच्या आमच्या वचनबद्धतेचे प्रमाणपत्र आहेत.',
    transparency: 'पारदर्शकता',
    transparencyDesc: 'सार्वजनिक जबाबदारीसाठी आमच्या क्रियाकलापांचे, वित्तीय आणि प्रभाव मेट्रिक्सचे संपूर्ण प्रकटीकरण.',
    impactMeasurement: 'प्रभाव मोजमाप',
    impactMeasurementDesc: 'आमच्या कार्यक्रमांच्या प्रभावीतेचे आणि समुदाय परिवर्तन परिणामांचे तपशीलवार विश्लेषण.',
    communityStories: 'समुदाय कथा',
    communityStoriesDesc: 'आम्ही सेवा करत असलेल्या समुदायांमधून परिवर्तन आणि सक्षमीकरणाच्या वास्तविक कथा.',
    financialAccountability: 'आर्थिक जबाबदारी',
    financialAccountabilityDesc: 'दात्यांसाठी पारदर्शकतेसाठी संपूर्ण आर्थिक विधाने आणि संसाधन वापर.',
    
    // Language
    language: 'भाषा',
    english: 'इंग्रजी',
    marathi: 'मराठी'
  }
};

type Language = 'en' | 'mr';

interface TranslationContextType {
  language: Language;
  t: (key: string) => string;
  changeLanguage: (lang: Language) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    // Store in localStorage for persistence
    localStorage.setItem('language', lang);
  };

  // Load language from localStorage on mount
  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'mr')) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <TranslationContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};
