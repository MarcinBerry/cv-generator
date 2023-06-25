interface SkillProps {
  title: string;
  count: number;
}

export const Skill = ({ title }: SkillProps) => (
  <li className="w-full space-x-4 list-item">
    <p className="font-light font-sm">{title}</p>
  </li>
);
