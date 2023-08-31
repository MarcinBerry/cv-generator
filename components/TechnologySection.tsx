import { LeftSubSection } from './LeftSubSection';
import { TechnologyItem } from './TechnologyItem';

export interface TechnologyItemData {
  href: string;
  name: string;
  style?: {
    width?: string | number;
    height?: string | number;
  };
  url?: string;
  background?: string;
}

export const TechnologySection = ({
  title,
  list,
}: {
  title: string;
  list: TechnologyItemData[];
}) => (
  <LeftSubSection {...{ title }}>
    <ul className="flex flex-row flex-wrap items-center justify-between list-[square]">
      {list.map((item, index) => (
        <TechnologyItem {...item} key={'tech-' + index} />
      ))}
    </ul>
  </LeftSubSection>
);
