import { useState } from 'react'

const Barriers = () => {
	const [selected, setSelected] = useState<number | null>(null)

	const items = [
		{
			id: 1,
			question: 'Мы и так справляемся',
			answer: 'Конкуренты уже внедряют AI и снижают издержки',
		},
		{
			id: 2,
			question: 'Это сложно',
			answer: 'Поделимся личной практикой и инструментами, которые проверили на кейсах клиентов + внедряемые инструменты',
		},
		{
			id: 3,
			question: 'У нас нет специалистов, которые смогут внедрить это',
			answer: 'Лайфхаки, которые доступны даже для новичков — не нужно нанимать новых людей.',
		},
		{
			id: 4,
			question: 'Наши процессы слишком сложные, AI не поможет',
			answer: 'Сложные процессы — идеальная зона для AI: Мы покажем примеры для разного уровня сложности процессов',
		},
		{
			id: 5,
			question: 'Мы боимся рисков и ошибок при внедрении',
			answer: 'Вы не внедряете “вслепую” – мы даем готовый пошаговый план и методологию, которые уже проверены на десятках компаний.',
		},
		{
			id: 6,
			question: 'Сейчас не время, у нас есть другие приоритеты',
			answer: 'Через полгода конкуренты, которые пришли сегодня, будут на шаг впереди. Время – главный актив, и его нельзя откладывать.',
		},
	]

	return (
		<section className='py-[100px]'>
			<div className='container'>
				<h2 className='text-[22px] sm:text-[32px] md:text-[42px] lg:text-[60px] font-bold text-white max-w-[1000px] leading-[100%]'>
					<span className='bg-gradient-to-b from-[#371F7E] to-[#9F80FB] bg-clip-text text-transparent'>
						Что вам мешает внедрить AI
					</span>
					<span className='text-white'> — и почему это не повод откладывать?</span>
				</h2>

				<ul className='grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 mt-12 w-full'>
					{items.map((item) => {
						const isActive = selected === item.id
						return (
							<li
								key={item.id}
								onClick={() => setSelected(isActive ? null : item.id)}
								className={`cursor-pointer w-full bg-[#17162D] rounded-[30px] rounded-bl-[0px] px-6 py-6 text-white border border-white/20 text-left transition-all duration-300 ease-in-out ${
									isActive ? 'shadow-lg' : ''
								}`}
							>
								<div className='flex justify-between items-start gap-2'>
									<h3 className='text-[16px] sm:text-[20px] lg:text-[24px] font-semibold'>
										{item.question}
									</h3>
									<span
										className={`text-[22px] sm:text-[30px] lg:text-[36px] font-bold transition-transform duration-300 ${
											isActive ? 'rotate-180' : ''
										}`}
									>
										{isActive ? '-' : '+'}
									</span>
								</div>

								<div
									className={`overflow-hidden transition-all duration-500 ease-in-out ${
										isActive ? 'max-h-[300px] mt-4 opacity-100' : 'max-h-0 opacity-0'
									}`}
								>
									<p className='text-[16px] sm:text-[18px] lg:text-[20px] text-white/80'>
										{item.answer}
									</p>
								</div>
							</li>
						)
					})}
				</ul>

				<a
					href='#telegram-form'
					style={{
						background: 'linear-gradient(90deg, #7086FD 0%, #80E1FB 100%)',
						boxShadow: '0px 4px 20px rgba(112, 134, 253, 0.5)',
					}}
					className='mt-[100px] mx-auto text-[24px] sm:text-[24px] md:text-[50px] w-fit block font-bold text-white py-4 sm:py-8 px-8 rounded-[18px] hover:opacity-90 transition-opacity duration-300'
				>
					Забронировать
				</a>
			</div>
		</section>
	)
}

export default Barriers
