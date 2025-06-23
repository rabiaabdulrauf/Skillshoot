import React from 'react';
import faq from "../Assets/faq.png"
const Faqs = () => {
  return (
    <div>
      <div className="bg-gradient-to-t from-white to-purple-200 h-auto w-100 flex  justify-center">
      <div className="flex flex-col justify-center rounded-2xl pt-5 pb-10 w-[70%]">
        <div className="flex justify-center mt-4 items-center border rounded-2xl  bg-white flex-row">
            <div className='ml-6 '>
                <img src={faq} alt="" className='h-8' />
            </div>
            <div className="px-8 font-bold text-2xl py-4">
            <button>
              FAQS
            </button>
            </div>
        </div>
        <div className="text-center text-5xl max-sm:text-3xl font-bold pt-10">
            <h1>Frequently Asked Questions</h1>
        </div>
        <div class="w-full mt-10 px-4">
  <div class="w-full border border-gray-300 rounded mb-2">
    <input type="checkbox" id="accordion1" class="peer hidden"/>
    <label for="accordion1" class="flex justify-between items-center  p-4 bg-white cursor-pointer">
      <span class="font-semibold">1. What services does Skill Shoot offer?</span>
      <svg class="w-5 h-5 text-gray-600 peer-checked:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </label>
    <div class="bg-white px-4 py-2 hidden peer-checked:block">
SkillShoot is a modern online learning platform designed to equip learners with practical, job-ready skills. We offer: 
<br />1: Project Management <br />2: Full stack development <br />3: Digital marketing    </div>
  </div>
  <div class="w-full border border-gray-300 rounded mb-2">
    <input type="checkbox" id="accordion2" class="peer hidden"/>
    <label for="accordion2" class="flex justify-between items-center p-4 bg-white cursor-pointer">
      <span class="font-semibold">2. What makes Arise different from other agencies?</span>
      <svg class="w-5 h-5 text-gray-600 peer-checked:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </label>
    <div class="bg-white px-4 py-2 hidden peer-checked:block">
      Arise by SkillShoot stands out because we combine education with real growth — not just certifications. 
    </div>
  </div>
  <div class="w-full border border-gray-300 rounded mb-2">
    <input type="checkbox" id="accordion3" class="peer hidden"/>
    <label for="accordion3" class="flex justify-between items-center p-4 bg-white cursor-pointer">
      <span class="font-semibold">3. What is your pricing structure like?</span>
      <svg class="w-5 h-5 text-gray-600 peer-checked:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </label>
    <div class="bg-white px-4 py-2 hidden peer-checked:block">
      At SkillShoot, we believe in affordable, flexible, and value-packed pricing — no hidden fees, no fluff.
      
    </div>
  </div>
</div>

      </div>
       
      </div>
    </div>
  );
}

export default Faqs;
