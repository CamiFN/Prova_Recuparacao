import Button from './Button'
import './App.css'
import Lista from './Lista'

function App() {

  const palavras = [
  "linux", "docker", "server", "rails", "douane", "my-developments","command-line", 
  "ruby", "c-2", "linux-on-mac", "maintenance", "security", "gnome", "kubernetes",
  "mes-developpements", "ubuntu", "python", "vcs", "capybara", "contribution", "git",
  "apt","bazaar", "chef", "cucumber", "debian", "game", "howto", "packaging", "testing",
  "boost", "debug","devise", "elixir", "gtk", "homebrew", "information", "ssh", "tuxtremsplit", "xpath"
  ]
  const lista = palavras.map((p)=> 
  <p className='caixa'>{p}</p>
  )
  
  return (
  <div className='Elementos'> 
      <Button/>
  <p></p>
  <div className='palavras'>
        {lista}
        <p></p>
  </div>
  <div className='Notícias'>
      <Lista/>
  </div>
  </div>
        )
  }

export default App
