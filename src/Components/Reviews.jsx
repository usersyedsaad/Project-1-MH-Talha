import DannyGiljes from '../assets/imgs/DannyGiljes.png'

const Reviews = () => {
  return (
    <div className=' flex-col items-center pt-[180px]'>
      <div className='want-to-see-more'>
        <h4 className='text-white text-center text-[56px] font-[300] leading-normal tracking-[.2.24px]'>Want to see more?</h4>
        <p className="text[#A4A7AC] text-center text-[32px] font-[300] leading-normal tracking-[-1.28px]
        ">Reach out to me <span className="text-[#01B7C3] text-[32px]  font-[300] leading-normal tracking[-1.28px]">HMTalha@gmail.com </span></p>
      </div>
      
      <div className="pt-[180px]  ml-auto mr-auto flex w-[89%] items-center justify-between">
        <div className=" self-end w-[49%]  gap-[192px] flex flex-col items-start justify-between">
          <div>
            <h5 className=" text-white text-5xl font-[300] leading-normal tracking-[-2.24] ">Read what our clients have to say?</h5>
          </div>
          <div className="flex flex-col gap-[56px]">
            <div className="text-[#A4A7AC] text-[22px] leading-normal font-[300] ">One of the biggest challenges we face as business owners is high client expectations given the rapid evolution of different payment methods. Talha always listens to our needs. There’s always a lot of respect there, and his professionalism makes the business relationship enjoyable. Thank you</div>
            <div className="flex items-center justify-between">
              <div>
                <h6>Dany Giljess</h6>
                <p>Erody Studios</p>
              </div>
              <div className="buttons flex gap-[16px]">
                <button id='left-button'>left</button>
                <button id='right-button'>right</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-300 w-[522px]">
          <img className='object-contain' src={DannyGiljes}  />
          
        </div>
      </div>
    </div>
  )
}

export default Reviews