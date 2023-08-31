/* eslint-disable @next/next/no-img-element */
interface SkillProps {
  title: string;
  count: number;
  url?: string;
}

export const Skill = ({ title, url }: SkillProps) => (
  <li className="w-full">
    {url && <img src={url} alt={title} className="h-7" />}
  </li>
);
