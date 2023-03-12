import { LeftSubSection } from './LeftSubSection';
import { TechnologyItem } from './TechnologyItem';

export interface TechnologyItemData {
  href: string;
  name: string;
  style?: {
    width?: string | number;
    height?: string | number;
  };
}

export const TechnologySection = ({
  title,
  list,
}: {
  title: string;
  list: TechnologyItemData[];
}) => (
  <LeftSubSection {...{ title }}>
    <div className="flex flex-row flex-wrap items-center justify-center gap-2 -ml-5">
      {list.map((item, index) => (
        <TechnologyItem {...item} key={'tech-' + index} />
      ))}
    </div>
  </LeftSubSection>
);
