interface NoResultProps {
  title: string;
  children?: JSX.Element;
}
const NoResult = (props: NoResultProps) => {
  const { title, children } = props;
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold text-center">{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default NoResult;
