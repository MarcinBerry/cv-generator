import Image from 'next/image';

import CONTENT from '@/content.json';
import GithubQRIcon from '@/public/images/qrcode.png';

import { InterestsSection } from './InterestsSection';
import { MainSkillsSection } from './MainSkillsSection';
import { ProfilePicture } from './ProfilePicture';
import { TechnologySection } from './TechnologySection';

const { mainSkillsSection, interestSection, technologyStackSection } = CONTENT;
export const LeftSection = () => (
  <div
    className="w-[35%] bg-[#3f4363] p-2
    mt-6   rounded-r-lg text-white relative"
  >
    <ProfilePicture />
    <MainSkillsSection {...mainSkillsSection} />
    <TechnologySection {...technologyStackSection} />
    <InterestsSection {...interestSection} />
    <div className="absolute p-2 bg-white rounded-md bottom-2 right-2">
      <Image src={GithubQRIcon} alt="icon" className="w-28 h-28" />
    </div>
  </div>
);
