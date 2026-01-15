import Card from "./components/Card/Card";
import Titulo from "./components/Titulo/Titulo";

function App() {
  return (
    <>
      <main>
        <Titulo />

        <p>
          Defina seus objetivos, acompanhe seu progresso e transforme seus
          sonhos <br /> em realidade.
        </p>

        {/* Estrutura HTML */}
        {/* Lembrar que o flexbox é aplicado no elemento pai e passado para os filhos */}
        {/* Não colocar tanta div = pode confundir */}
        {/* <div className={"cards"}>
          <div className={"cardPessoal"}>
            <Card title="Pessoal" />
          </div>

          <div className={"cardCarreira"}>
            <Card title="Carreira" />
          </div>
        </div> */}

        {/* Alteração*/}
        {/* elemento pai */}
        <section>
          {/* Elementos filhos */}
          <Card title="Pessoal" />
          <Card title="Carreira" />
        </section>
      </main>
      <footer>O futuro pertence aqueles que acreditam nos seus sonhos!</footer>
    </>
  );
}

export default App;
