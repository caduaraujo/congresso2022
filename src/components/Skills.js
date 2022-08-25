import calendar from '../assets/img/Vector.png';
import geo from '../assets/img/geo-alt.svg';

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h3>Informações</h3>
              <p>
                <div className="social-icon">
                  <a><img src={calendar} alt="" /></a>
                  12 a 15 de novembro de 2022
                </div>
              </p>
              <p>
                <div className="social-icon">
                  <a><img src={geo} alt="" /></a>
                  Rio das Graças Resort
                  Rua da Floresta, 78 - Taborda, São José de Mipibu - RN, 59162-000
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
