import img from './assets/woman.jpg'
import svg from './assets/logo.svg'
import './styles.css'
import Counter from './components/Counter'

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <h1>Hello world! {process.env.NODE_ENV}</h1>
      <Counter />
      <img src={img} width={300} alt="" />
      <img src={svg} alt="" />
    </div>
  )
}

export default App
