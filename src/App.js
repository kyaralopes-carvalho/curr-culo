import fotoPerfil from './fotoPerfil.jpg'
import './App.css'

function App() {
  return (
    <div>
      <header>
        <img src={fotoPerfil}></img>
        <h1>Kyara Lopes</h1>
      </header>

      <main>
      <section> 
        <h1>Dados para contato</h1>
        <p>Kyara Lopes</p>
        <p>44984413608</p>
        <p>Email: kyara.carvalho@escola.pr.gov.br</p>
        <p>Linkdin: xxxxx</p>
        <p>GitHub: xxxx</p>
      </section>

      <section>
        <h1>Formação</h1>
        <div>
          <article>
            <h2>Ensino Médio Profissonalisante Desenvolvimento de Sistema</h2>
            <p>Instituição:Colégio Santa Maria Gorreti</p>
            <p>Ano de Conclusão: 2027</p>
          </article>

          <article>
            <h2>Curso de Oratória</h2>
            <p>Instituição:Cebrac</p>
            <p>Ano de Conclusão: 2025</p>
          </article>

          <article>
            <h2>Pré-Aprendizagem</h2>
            <p>Instituição:CIEE</p>
            <p>Ano de Conclusão: 2024</p>
          </article>

          <article>
            <h2>Curso Jovem Aprendiz</h2>
            <p>Instituição:CIEE / Hospital Bom Samaritano</p>
            <p>Ano de Conclusão: 2027</p>
          </article>

        </div>
      </section>
      </main>

      <footer>
        <div>Desenvolvido por Kyara Lopes</div>
      </footer>
    </div>
  );
}

export default App;