import About from './components/About/about'
import Barriers from './components/Barriers/barriers'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Manager from './components/Manager/manager'
import { Swipers } from './components/swiper/Swipers'
import TelegramForm from './components/TelegramForm/TelegramForm'
import TestimonialsSwiper from './components/TestimonialsSwiper/TestimonialsSwiper'

const App = () => {
	return (
		<>
			<Hero />
			<About />
			<Manager />
			<Barriers />
			<TestimonialsSwiper />
			<TelegramForm />
			<Footer />
			<Swipers/>
		</>
	)
}

export default App
