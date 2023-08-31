import { SkillItem } from './MainSkillsSection';
import { Skill } from './Skill';

export const SkillList = ({ list }: { list: SkillItem[] }) => (
  <ul className="flex flex-row flex-wrap">
    {list.map((item, index) => (
      <Skill key={'skill-' + index} {...item} />
    ))}
  </ul>
);
