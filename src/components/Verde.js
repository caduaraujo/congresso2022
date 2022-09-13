import calendar from '../assets/img/Vector.png';
import geo from '../assets/img/geo-alt.svg';
import Button from 'react-bootstrap/Button';

export const Verde = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="verde-bx wow zoomIn">
              <p className="fw-bold">
              Já considerou doar um talento pra ministrar uma oficina fazendo o que você curte?
              </p>
              <p>
              A ideia é incluí-las em uma tarde de lazer da nossa programação 💚 <br></br>

              E ainda daria tempo de você curtir o resto da tarde de outras formas!<br></br>
              Preencha este formulário se você manja de uma coisa que poderia virar uma oficina 🤩 !<br></br>
              <br></br>

              <Button  href="https://forms.gle/pgGWq97XtMQKeNMV9" target="_blank" variant="light" type="submit" size="lg">Formulário</Button>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

)
}
