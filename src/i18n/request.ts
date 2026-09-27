import {getRequestConfig} from 'next-intl/server';
import { cookies } from 'next/headers';
 
export default getRequestConfig(async () => {
  // Static for now, we'll change this later
  const cookiesInfo= await cookies();

  const locale= cookiesInfo.get("locale")?.value || "fa" ;
 


  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});