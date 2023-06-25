import { SkillItem } from './MainSkillsSection';
import { Skill } from './Skill';

export const SkillList = ({ list }: { list: SkillItem[] }) => (
  <ul className="list-[square] pl-4 pt-2">
    {list.map((item, index) => (
      <Skill key={'skill-' + index} {...item} />
    ))}
  </ul>
);
