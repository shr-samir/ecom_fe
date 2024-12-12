interface TitleProps {
  text1: string;
  text2: string;
}
const Title: React.FC<TitleProps> = ({ text1, text2 }) => {
  return (
    <div className="inline-flex text-gray-500 items-center justify-center gap-3">
      <h6 className="text-lg sm:text-xl md:text-3xl font-medium">
        {text1}
        <span className="text-gray-700"> {text2}</span>
      </h6>
      <hr className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700 border-none"/>
    </div>
  );
};

export default Title;
