import DannyGiljes from '../assets/imgs/DannyGiljes.png'

const Reviews = () => {
  return (
    <div className="flex flex-col items-center pt-10 ">
      {/* Header Section */}
      <div className="text-center px-4">
        <h4 className="text-white text-4xl sm:text-5xl md:text-[56px] font-light leading-tight tracking-tight">
          Want to see more?
        </h4>
        <p className="text-[#A4A7AC] text-lg sm:text-xl md:text-2xl font-light mt-4">
          Reach out to me{' '}
          <span className="text-[#01B7C3] font-medium">HMTalha@gmail.com</span>
        </p>
      </div>

      {/* Reviews Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-[95%] max-w-6xl mt-10  p-6 rounded-lg">
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h5 className="text-white text-2xl sm:text-3xl md:text-4xl font-light leading-snug">
            Read what our clients have to say
          </h5>
          <p className="text-[#A4A7AC] text-base sm:text-lg md:text-xl font-light">
            One of the biggest challenges we face as business owners is high
            client expectations given the rapid evolution of different payment
            methods. Talha always listens to our needs. There’s always a lot of
            respect there, and his professionalism makes the business
            relationship enjoyable. Thank you!
          </p>
          <div className="flex items-center justify-between">
            <div>
              <h6 className="text-white text-lg sm:text-xl md:text-2xl">
                Dany Giljess
              </h6>
              <p className="text-[#01B7C3] text-sm sm:text-base md:text-lg">
                Erdody Studios Agency
              </p>
            </div>
            <div className="flex gap-4">
              <button
                id="left-button"
                className="bg-[#01B7C3] text-white px-4 py-2 rounded-lg hover:bg-[#019da3]"
              >
                Left
              </button>
              <button
                id="right-button"
                className="bg-[#01B7C3] text-white px-4 py-2 rounded-lg hover:bg-[#019da3]"
              >
                Right
              </button>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="max-w-full h-auto rounded-lg shadow-lg"
            src={DannyGiljes}
            alt="Dany Giljes"
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
