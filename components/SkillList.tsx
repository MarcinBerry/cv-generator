import { SkillItem } from './MainSkillsSection';
import { Skill } from './Skill';

export const SkillList = ({ list }: { list: SkillItem[] }) => (
  <>
    {list.map((item, index) => (
      <Skill key={'skill-' + index} {...item} />
    ))}
  </>
);
