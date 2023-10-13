'use client';

import { useEffect, useRef } from 'react';

export default function Giscus() {
  const ref = useRef<HTMLDivElement>(null);
  const theme = 'noborder_light'; 
  //light_high_contrast, light, light_protanopia, light_tritanopia
  // preferred_color_scheme, noborder_light

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;
    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://giscus.app/client.js';
    scriptElem.async = true;
    scriptElem.crossOrigin = 'anonymous';
    scriptElem.setAttribute('data-repo', 'sun0lee/nextjs-mdx-blog'); 
    scriptElem.setAttribute('data-repo-id', 'R_kgDOKWzGaQ'); 
    scriptElem.setAttribute('data-category', 'General');
    scriptElem.setAttribute('data-category-id', 'DIC_kwDOKWzGac4CZkDt');
    scriptElem.setAttribute('data-mapping', 'pathname');
    scriptElem.setAttribute('data-strict', '0');
    scriptElem.setAttribute('data-reactions-enabled', '0'); // 0 반응 안남기기 , 1 남기기
    scriptElem.setAttribute('data-emit-metadata', '0');
    scriptElem.setAttribute('data-input-position', 'bottom'); //top, bottom
    scriptElem.setAttribute('data-theme', theme);
    scriptElem.setAttribute('data-lang', 'ko');
    // scriptElem.setAttribute('data-loading', 'lazy');
    ref.current.appendChild(scriptElem);

  }, []);

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    iframe?.contentWindow?.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app');
  }, [theme]);

  return <section ref={ref} />;
}