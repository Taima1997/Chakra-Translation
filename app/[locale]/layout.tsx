


import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import {NextIntlClientProvider} from 'next-intl';
import {useLocale} from 'next-intl'

import {notFound} from 'next/navigation';





const locales = ['en', 'ar', 'fr'];

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'ar'}];
}

export default async function LocaleLayout({children, params: {locale}}) {
  // Validate that the incoming `locale` parameter is valid
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
    
  
  

    return (
    
      <html lang={locale} dir={locale=="ar" ? "rtl" : "ltr"}>
           
        <body > <NextIntlClientProvider locale={locale} messages={messages}>
          <ChakraProvider>
           
           <Navbar/>
                  
                    {children}
            <Footer/>   
          </ChakraProvider>
         </NextIntlClientProvider>
         
         </body>
      </html>
      );
    }
   
   
 