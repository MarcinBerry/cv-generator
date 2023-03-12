import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { Footer } from '@/components/Footer';
import { LeftSection } from '@/components/LeftSection';
import { RightSection } from '@/components/RightSection';
import CONTENT from '@/content.json';

export default function Home() {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const handler = useReactToPrint({ content: () => componentRef.current });
  const { footer } = CONTENT;

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="w-screen h-screen text-[#3f4363]" ref={componentRef}>
        <div className="mx-auto w-[800px] h-[1130px] border flex flex-col">
          <div className="flex flex-row">
            <LeftSection />
            <RightSection />
          </div>
          <Footer {...footer} />
        </div>
      </div>
      <button
        type="button"
        onClick={handler}
        className="absolute text-white transition rounded top-3 right-5 bg-slate-700 w-28 h-11 hover:bg-slate-900 hover:scale-110"
      >
        Print
      </button>
    </div>
  );
}
