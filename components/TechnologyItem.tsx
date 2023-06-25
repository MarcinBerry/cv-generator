// import Image from 'next/image';
import Link from 'next/link';

// import { technologyToImage } from './ImagesMapper';
import { TechnologyItemData } from './TechnologySection';

// const defaultStyle = 'w-12 h-12';

export const TechnologyItem = ({ href, name }: TechnologyItemData) => (
  <li className="w-[100px] list-item">
    <Link href={href}>
      <p className="">{name}</p>
      {/* <Image
        src={technologyToImage[name] ?? ''}
        alt="icon"
        style={style}
        className={!style ? defaultStyle : ''}
      /> */}
    </Link>
  </li>
);
