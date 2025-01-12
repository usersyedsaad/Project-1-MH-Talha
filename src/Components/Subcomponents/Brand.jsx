import Icon from "./Icons/Icon";



const Brand = ({ title }) => {
  return (
    <a href="#" className="">
      <div className="inline-flex justify-between items-center gap-3 min-w-min">
        <Icon imgUrl="src\assets\svgs\EmailIcon.svg" altText="EmailIcon"/>
        <p className="text-[#A4A7AC] text-xs sm:text-base md:text-base lg:text-lg">HMTalha@gmail.com</p>
      </div>
    </a>
  );
};

export default Brand;
