import React from 'react'
import { NavLink } from 'react-router-dom'

const Pageb = () => {
    return (
        <div className='w-full lg:px-12 px-4 py-8 flex flex-col '>
            <div className='lg:w-[1240px] lg:ml-16 flex border-2 rounded-[12px] px-4 lg:px-[20px] lg:py-[16px] py-2 justify-between'>
                <NavLink to="/">
                    <div className='text-lg cursor-pointer'><i class="bi bi-arrow-left"></i></div>
                </NavLink>
                <div className='flex'>
                    <div className='border-[1px] lg:text-lg lg:px-5 rounded-full px-2 cursor-pointer'><i class="bi bi-files"></i><span className='lg:pl-2'>Copy</span></div>
                    <div className='px-2 cursor-pointer lg:text-lg lg:px-5'><i class="bi bi-twitter"></i></div>
                    <div className='px-2 cursor-pointer lg:text-lg lg:px-5'><i class="bi bi-facebook"></i></div>
                    <div className='px-2 cursor-pointer lg:text-lg lg:px-5'><i class="bi bi-linkedin"></i></div>
                    <div className='px-2 cursor-pointer lg:text-lg lg:px-5'><i class="bi bi-whatsapp"></i></div>
                </div>
            </div>
            <div className='w-full flex flex-col justify-center mt-6'>
                <div className='w-full flex justify-center'>
                    <img className='w-[1240px] lg:h-[692px] rounded-[8px] shadow-xl' src="https://thumbs.dreamstime.com/b/agriculture-vegetable-field-landscape-view-freshly-growing-84090367.jpg" alt='img' />
                </div>
                <div className='lg:w-[1240px] lg:ml-16 pt-7'>
                    <div className='font-[700] text-[28px]  lg:text-[48px] '>Organic Farming: How It Can Help Save the Planet</div>
                    <span className='text-[16px] font-[400] text-slate-500'>Sustainable Farming - April 2023</span>
                    <div>
                        <div className='font-[400] text-[20px] flex text-justify py-4'>
                            Organic farming is a method of agriculture that avoids the use of synthetic fertilizers, pesticides, and other harmful chemicals. Instead, it relies on natural methods of pest control and soil management, such as crop rotation, cover crops, and composting. Organic farming has gained popularity in recent years due to concerns about the impact of conventional agriculture on the environment, human health, and animal welfare. In this blog post, we'll explore how organic farming can help save the planet and why it's important to support this sustainable method of agriculture.
                        </div>
                        <div className='font-[600] text-[26px] pt-5'>
                            Reducing Environmental Impact
                        </div>
                        <div className='font-[400] text-[20px] flex text-justify '>
                            One of the main benefits of organic farming is its reduced environmental impact. Conventional agriculture relies heavily on synthetic fertilizers, pesticides, and herbicides, which can have harmful effects on soil health, water quality, and biodiversity. Organic farming, on the other hand, focuses on building healthy soil ecosystems that can support diverse plant and animal life. By avoiding synthetic chemicals and prioritizing soil health, organic farming can reduce greenhouse gas emissions, promote biodiversity, and protect natural resources such as water and air.
                        </div>

                        <div className='font-[600] text-[26px] pt-5'>
                            Supporting Local Economies
                        </div>
                        <div className='font-[400] text-[20px] flex text-justify'>
                            In addition to its environmental benefits, organic farming can also support local economies by promoting sustainable agriculture practices and creating jobs in rural communities. Organic farms tend to be smaller and more diverse than conventional farms, which can provide opportunities for local farmers to grow a wide range of crops and sell them directly to consumers. This can help to build a more resilient and sustainable food system, reduce food waste, and support local economies.
                        </div>

                        <div className='font-[600] text-[26px] pt-5'>
                            Promoting Health and Wellness
                        </div>
                        <div className='font-[400] text-[20px] flex text-justify'>
                            Organic farming also promotes health and wellness by providing consumers with access to fresh, healthy food that's free of harmful chemicals and synthetic additives. Research has shown that organic produce may contain higher levels of certain nutrients, such as antioxidants and vitamin C, than conventionally grown produce. Additionally, by avoiding the use of synthetic pesticides and herbicides, organic farming can reduce exposure to harmful chemicals that have been linked to a range of health problems, including cancer, neurotoxicity, and reproductive disorders.
                        </div>

                        <div className='font-[600] text-[26px] pt-5'>
                            Challenges and Opportunities
                        </div>
                        <div className='font-[400] text-[20px] flex text-justify'>
                            While organic farming has many benefits, it also faces a number of challenges and opportunities. One of the biggest challenges is the higher cost of organic produce compared to conventionally grown produce. This can make it difficult for some consumers to afford organic food, especially in areas where access to healthy food is limited. Additionally, organic farming requires more labor and management than conventional farming, which can make it challenging for farmers to transition to this method.

                            Despite these challenges, organic farming presents many opportunities for farmers, consumers, and the planet. By supporting organic agriculture through our food choices and advocacy efforts, we can help to build a more sustainable and equitable food system that promotes health, wellness, and environmental stewardship.
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-6 lg:ml-16 lg:w-[1240px]'>
                <div className='text-[32px] font-[700] '>Comments</div>
                <div>
                    <input type='text' placeholder='Write comments' className='h-[46px] px-4 rounded-xl w-full border-2 border-green-400'/>
                </div>
                <div>
                <div className='py-2 px-2'>
                    <div className='font-[500] text-[20px]'>Nand Lal</div>
                    <div className='text-slate-400'>As someone who grew up in a rural area and has seen the impact of conventional farming on environment and local communities, I appreciate the message of this article. We need to shift towards sustainable and equitable agriculture practices if we want to protect the planet and our health.
                    </div>
                    </div>
                    <div className='py-2 px-2'>
                    <div className='font-[500] text-[20px]'>Nand Lal</div>
                    <div className='text-slate-400'>As someone who grew up in a rural area and has seen the impact of conventional farming on environment and local communities, I appreciate the message of this article. We need to shift towards sustainable and equitable agriculture practices if we want to protect the planet and our health.
                    </div>
                    </div>
                    <div className='py-2 px-2'>
                    <div className='font-[500] text-[20px]'>Nand Lal</div>
                    <div className='text-slate-400'>As someone who grew up in a rural area and has seen the impact of conventional farming on environment and local communities, I appreciate the message of this article. We need to shift towards sustainable and equitable agriculture practices if we want to protect the planet and our health.
                    </div>
                    </div>
                    <div className='py-2 px-2'>
                    <div className='font-[500] text-[20px]'>Nand Lal</div>
                    <div className='text-slate-400'>As someone who grew up in a rural area and has seen the impact of conventional farming on environment and local communities, I appreciate the message of this article. We need to shift towards sustainable and equitable agriculture practices if we want to protect the planet and our health.
                    </div>
                    </div>
                    <div className='py-2 px-2'>
                    <div className='font-[500] text-[20px]'>Nand Lal</div>
                    <div className='text-slate-400'>As someone who grew up in a rural area and has seen the impact of conventional farming on environment and local communities, I appreciate the message of this article. We need to shift towards sustainable and equitable agriculture practices if we want to protect the planet and our health.
                    </div>
                    </div>
                    <div className='py-2 px-2'>
                    <div className='font-[500] text-[20px]'>Nand Lal</div>
                    <div className='text-slate-400'>As someone who grew up in a rural area and has seen the impact of conventional farming on environment and local communities, I appreciate the message of this article. We need to shift towards sustainable and equitable agriculture practices if we want to protect the planet and our health.
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pageb

