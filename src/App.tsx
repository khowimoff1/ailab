import About from './components/About/about'
import Barriers from './components/Barriers/barriers'
import Eksprt from './components/Eksper/Eksprt'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Manager from './components/Manager/manager'
import TelegramForm from './components/TelegramForm/TelegramForm'
import TestimonialsSwiper from './components/TestimonialsSwiper/TestimonialsSwiper'

const App = () => {
	return (
		<>
			<Hero />
			<About />
			<Eksprt/>
			<Manager />
			<Barriers />
			<TestimonialsSwiper />
			<TelegramForm />
			<Footer />
			
		</>
	)
}

export default App
