import calendar from '../assets/img/Vector.png';
import geo from '../assets/img/geo-alt.svg';
import Button from 'react-bootstrap/Button';

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <p>
                <div className="social-icon">
                  <a><img src={calendar} alt="" /></a>
                  11 a 15 de novembro de 2022
                </div>
              </p>
              <p>
                <div className="social-icon">
                  <a><img src={geo} alt="" /></a>
                  Rio das Garças Resort
                  Rua da Floresta, 78 - Taborda, São José de Mipibu - RN, 59162-000
                </div>
              </p>
              <p>
                <div>
                <Button  href="https://forms.gle/6rWaokX3hwF8mpGV9" target="_blank" variant="primary" type="submit" size="lg">Clique aqui para acessar o formulário do translado até o resort</Button>{' '}<br></br>
                </div>
              </p>
              <p>
                <div>
                <Button  href="https://forms.gle/AFQAgLxayYwutcVg7" target="_blank" variant="light" type="submit" size="lg">Clique aqui para se inscrever</Button>{' '}<br></br>
                </div>
              </p>
              <p>
                <div>
                  Confira o <a href="https://riodasgarcasecoresort.com.br" target="_blank"> site do resort </a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
)
}
