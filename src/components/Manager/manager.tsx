import managerData from '../../mock/managerData'

const Manager = () => {
	return (
		<section
			className={`bg-[#5153AA] py-[60px] rounded-[30px] bg-no-repeat bg-right-top manager bg-size-[150px]`}
		>
			<div className='container px-4 mx-auto'>
				<h2 className='text-[36px] sm:text-[52px] md:text-[64px] lg:text-[72px] leading-[100%] font-bold text-white text-center md:text-left'>
					Для кого этот мастер-класс?
				</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[50px]'>
					{managerData.map((item) => (
						<div key={item.id} className='rounded-[30px] p-[30px] flex flex-col items-center'>
							<img
								src={item.img}
								alt={`Manager ${item.id}`}
								className='w-full max-w-[400px] h-[300px] sm:h-[350px] md:h-[400px] sm:object-cover '
								width={400}
								height={400}
							/>
							<p className='text-[18px] sm:text-[24px] xl:text-[36px] text-white font-bold leading-[110%] mt-[20px] text-center md:text-left'>
								{item.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Manager
