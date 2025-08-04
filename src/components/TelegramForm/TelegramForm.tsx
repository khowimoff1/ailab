import { useState } from 'react'

const BOT_TOKEN = '8351580781:AAGalrQMRzmrOeOP9L8pQq5p3_TigpHZP5o'
const CHAT_ID = '-1002805979616'

const TelegramForm = () => {
	const [form, setForm] = useState({ name: '', phone: '', company: '' })
	const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e: React.FormEvent) => {
	e.preventDefault()
	setStatus('sending')

	// ✅ Telefon raqami tekshiruvi
	const uzbekPhoneRegex = /^\+998\d{9}$/
	if (!uzbekPhoneRegex.test(form.phone)) {
		setStatus('error')
		alert('Пожалуйста, введите корректный номер в формате +998xxxxxxxxx')
		return
	}

	const message = `
<b>Новое сообщение:</b>\n
Имя: ${form.name}
Телефон: <a href="tel:${form.phone}">${form.phone}</a>
Компания: ${form.company || 'Не указано'}
	`

	try {
		const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: CHAT_ID,
				text: message,
				parse_mode: 'HTML',
			}),
		})

		if (res.ok) {
			setStatus('success')
			setForm({ name: '', phone: '', company: '' })
		} else {
			setStatus('error')
		}
	} catch {
		setStatus('error')
	}

	setTimeout(() => setStatus('idle'), 3000)
}


	return (
		<section className='py-16 px-4 bg-[#0D0B21] text-white' id='telegram-form'>
			<div className='container max-w-3xl mx-auto'>
				<h2 className='text-[36px] sm:text-[52px] md:text-[64px] font-bold leading-[110%] text-center md:text-left'>
					Места ограничены
				</h2>

				<p className='text-[18px] sm:text-[24px] md:text-[28px] mt-6 mb-10 text-center md:text-left'>
					Бонус: чек-лист <i>“AI для бизнеса 2025”</i> после регистрации
				</p>

				<form onSubmit={handleSubmit} className='space-y-6'>
					<div>
						<label className='block text-[18px] sm:text-[24px] mb-2'>Имя</label>
						<input
							type='text'
							name='name'
							value={form.name}
							onChange={handleChange}
							required
							className='w-full p-4 bg-[#1F1E35] rounded-lg text-white placeholder:text-[#AAB0E5] focus:outline-none focus:ring-2 focus:ring-[#80E1FB]'
						placeholder='Введите ваше имя'
						/>
					</div>
					<div>
						<label className='block text-[18px] sm:text-[24px] mb-2'>Телефон</label>
						<input
							type='tel'
							name='phone'
							value={form.phone}
							onChange={handleChange}
							required
							className='w-full p-4 bg-[#1F1E35] rounded-lg text-white placeholder:text-[#AAB0E5] focus:outline-none focus:ring-2 focus:ring-[#80E1FB]'
							placeholder='+998 90 123 4567'
						/>
					</div>
					<div>
						<label className='block text-[18px] sm:text-[24px] mb-2'>Компания</label>
						<input
							type='text'
							name='company'
							value={form.company}
							onChange={handleChange}
							className='w-full p-4 bg-[#1F1E35] rounded-lg text-white placeholder:text-[#AAB0E5] focus:outline-none focus:ring-2 focus:ring-[#80E1FB]'
							placeholder='Введите название вашей компании (необязательно)'
						/>
					</div>
					<button
						type='submit'
						className='w-full py-4 bg-gradient-to-r from-[#7086FD] to-[#80E1FB] text-white text-[22px] sm:text-[30px] font-bold rounded-lg hover:opacity-90 transition'
					>
						{status === 'sending' ? 'Отправка...' : 'Забронировать место'}
					</button>
				</form>
				{status === 'success' && (
					<p className='mt-4 text-green-500 text-center'>Спасибо! Ваша заявка отправлена.</p>
				)}

			</div>
		</section>
	)
}

export default TelegramForm
