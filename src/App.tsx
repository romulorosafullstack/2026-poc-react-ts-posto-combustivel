
import { Card } from "./components/Card/card";
import Cards from "./components/Cards/cards";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Main from "./components/Main/main";

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Cards>
          <Card 
            name="Leandro Bezerra"
            age={40}
            city="Itapipoca da Serra"
          />
          <Card 
            name="Flávio Souza"
            age={40}
          />
          <Card 
            name="Leonardo Ciriaco"
            age={12}
            city="Capão Redondo"
          />
          <Card 
            name="Romulo Rosa"
            age={45}
            city="Hellosmile"
          />
        </Cards>
      </Main>
      <Footer
        copyright="Todos os direitos reservados "
      />
    </>
  )
}
