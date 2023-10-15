"use client"




import {useTranslations} from 'next-intl';


import Features from '@/components/Features';
import HeroSection from '@/components/HeroSection';

export   function Index() {
  const t = useTranslations('Index');
  return <h1>{t('title')}</h1>;
}
export default function Home()
 {
  
  
  return(
    
    <div>
     
      
     
     
      
      
      <h1>
       
       <HeroSection />
       <Features />
       
      
        
        
        
        
      </h1>


      
    </div>
  );
}