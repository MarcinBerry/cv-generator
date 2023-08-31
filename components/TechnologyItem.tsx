/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import { TechnologyItemData } from './TechnologySection';

export const TechnologyItem = ({ href, url }: TechnologyItemData) => (
  <li className="w-[115px] h-7 flex justify-start items-center">
    <Link href={href}>{url && <img src={url} alt="" className="" />}</Link>
  </li>
);
