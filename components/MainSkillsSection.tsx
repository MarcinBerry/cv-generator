import { LeftSubSection } from './LeftSubSection';
import { SkillList } from './SkillList';

export interface SkillItem {
  title: string;
  count: number;
}

export const MainSkillsSection = ({
  title,
  list,
}: {
  title: string;
  list: SkillItem[];
}) => (
  <LeftSubSection {...{ title }}>
    <SkillList {...{ list }} />
  </LeftSubSection>
);
