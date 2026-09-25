import AppRouter from "./router/AppRouter"

function App() {
  const telegram = window.Telegram.WebApp;
useEffect(() => {
  tg.ready()
  tg.expand()
},[]) 

  return <AppRouter/>
}

export default App
