interface SkillProps {
  title: string;
  count: number;
}

export const Skill = ({ count, title }: SkillProps) => (
  <div className="flex flex-row items-center justify-between w-full space-x-4">
    <p className="font-light font-sm">{title}</p>
    <div className="h-[15px] rounded-md w-36 border">
      <div
        className="h-full bg-white rounded-l"
        style={{ width: `${count}%` }}
      ></div>
    </div>
  </div>
);
