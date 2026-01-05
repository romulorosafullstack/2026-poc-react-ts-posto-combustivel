import Cards from "./components/Cards/cards";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Main from "./components/Main/main";

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Cards />
      </Main>
      <Footer />
    </>
  )
}
