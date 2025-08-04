import diamond from '../../assets/diamond.svg'
import diamondWhite from '../../assets/diamondWhite.svg'

const About = () => {
	const gemCards = [
		{
			title: 'ТОП AI-инструментов',
			desc: 'которые уже экономят бизнесу десятки часов',
		},
		{
			title: 'Пошаговый план',
			desc: 'внедрение AI без хаоса',
		},
		{
			title: 'Разбор кейсов',
			desc: 'на мероприятии',
		},
		{
			title: 'Ответы на вопросы',
			desc: 'именно по вашей компании',
		},
		{
			title: 'Бонус:',
			desc: 'чек-лист «AI для бизнеса 2025» доступ в закрытый Telegram-чат',
		},
	]

	return (
		<section className='pt-[50px] pb-[200px] about'>
			<div className='container'>
				<h2 className='text-[28px] sm:text-[52px] md:text-[64px] lg:text-[72px] leading-[100%] font-bold text-white text-center'>
					Что вы получите за{' '}
					<span
						style={{
							background: 'linear-gradient(90deg, #371F7E 0%, #9F80FB 100%)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
						}}
						className='block sm:inline-block'
					>
						2 часа?
					</span>
				</h2>

				<ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[70px] xl:gap-6 pt-[100px]'>
					{gemCards.slice(0, 3).map((card, index) => (
						<li
							key={index}
							style={{
								background:
									'linear-gradient(90deg, rgba(87, 87, 87, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)',
							}}
							className='relative rounded-[18px] p-6 text-white flex flex-col w-full'
						>
							<div className='bg-gradient-to-tr from-[#371F7E] to-[#9F80FB] p-3 rounded-full w-[80px] md:w-[100px] h-[80px] md:h-[100px] flex items-center justify-center mb-4 absolute top-[-50px] left-[50%] translate-x-[-50%]'>
								<img
									src={diamond}
									alt='gem'
									className='w-[40px] md:w-[60px] h-[40px] md:h-[60px]'
									width={60}
									height={60}
								/>
							</div>
							<h3 className='text-[24px] sm:text-[32px] md:text-[40px] font-bold mb-2 leading-[100%] pt-[20px] sm:pt-[40px] md:pt-[90px]'>
								{card.title}
							</h3>
							<p className='text-[16px] sm:text-[28px] md:text-[36px] leading-[100%] mt-[10px] md:mt-[30px] text-left'>
								{card.desc}
							</p>
						</li>
					))}
				</ul>

				<ul className='flex items-center flex-col md:flex-row justify-center gap-[60px] pt-[70px]'>
					<li
						style={{
							background:
								'linear-gradient(90deg, rgba(87, 87, 87, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)',
						}}
						className='relative rounded-[18px] p-6 text-white flex flex-col w-full max-w-[400px] md:h-[450px]'
					>
						<div className='bg-gradient-to-tr from-[#371F7E] to-[#9F80FB] p-3 rounded-full  w-[80px] md:w-[100px] h-[80px] md:h-[100px] flex items-center justify-center mb-4 absolute top-[-50px] left-[50%] translate-x-[-50%]'>
							<img
								src={diamond}
								alt='gem'
								className='w-[40px] md:w-[60px] h-[40px] md:h-[60px]'
								width={60}
								height={60}
							/>
						</div>
						<h3 className='text-[24px] sm:text-[32px] md:text-[40px] font-bold mb-2 leading-[100%] pt-[20px] sm:pt-[40px] md:pt-[90px]'>
							Ответы на вопросы
						</h3>
						<p className='text-[16px] sm:text-[28px] md:text-[36px] leading-[100%] mt-[10px] md:mt-[30px] text-left'>
							именно по вашей компании
						</p>
					</li>

					<li className='bg-[#5153AA] relative rounded-[18px] p-6 text-white flex flex-col w-full max-w-[400px] md:h-[450px]'>
						<div className='bg-white p-3 rounded-full  w-[80px] md:w-[100px] h-[80px] md:h-[100px] flex items-center justify-center mb-4 absolute top-[-50px] left-[50%] translate-x-[-50%]'>
							<img
								src={diamondWhite}
								alt='gem'
								className='w-[40px] md:w-[60px] h-[40px] md:h-[60px]'
								width={60}
								height={60}
							/>
						</div>
						<h3 className='text-[24px] sm:text-[32px] md:text-[40px] font-bold mb-2 leading-[100%] pt-[20px] sm:pt-[40px] md:pt-[90px]'>
							Бонус:
						</h3>
						<ul className='text-[16px] sm:text-[28px] md:text-[36px] leading-[100%] mt-[10px] md:mt-[30px] text-left list-disc pl-6'>
							<li>чек-лист «AI для бизнеса 2025»</li>
							<li>доступ в закрытый Telegram-чат</li>
						</ul>
					</li>
				</ul>

				<a
					href='#telegram-form'
					style={{
						background: 'linear-gradient(90deg, #7086FD 0%, #80E1FB 100%)',

						boxShadow:
							'0px 4px 20px linear-gradient(90deg, #7086FD 0%, #80E1FB 100%)',
					}}
					className='mt-[100px] mx-auto text-[20px] sm:text-[36px] md:text-[50px] w-fit block font-bold text-white py-4 sm:py-8 px-8 rounded-[18px] hover:opacity-90 transition-opacity duration-300 cursor-pointer'
				>
					Забронировать
				</a>
			</div>
		</section>
	)
}

export default About
