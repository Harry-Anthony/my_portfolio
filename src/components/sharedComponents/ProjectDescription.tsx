type ProjectProps = {
  name: string;
  description: string;
  githubLinhk: string;
  appLink: string;
  children: JSX.Element | JSX.Element[];
};
function ProjectDescription({
  name,
  description,
  githubLinhk,
  appLink,
  children,
}: ProjectProps) {
  return (
    <div className="pro-desc w-[400px] max-w-[400px]">
      <h5 className="text-[#ffaf23] text-[20px] my-[8px] border-b-[1px] border-black">
        {name}
      </h5>
      <div>
        <p className="text-[black]">{description}</p>
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}

export default ProjectDescription;
