import calendar from '../assets/img/Vector.png';
import geo from '../assets/img/geo-alt.svg';
import Button from 'react-bootstrap/Button';

export const Vermelho = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="vermelho-bx wow zoomIn">
              <p className="fw-bold">
              AÇÃO EXTRAORDINÁRIA DE COMUNHÃO DE BENS: "Congresso Nacional Gen"
              </p>

              <p>
              ⚠️ A Geração Nova do Movimento dos Focolares, realizará em Novembro deste ano, o Congresso Nacional Gen2 em Natal-RN,
              e como forma de permitir que todos participem da construção desse momento e ajudem com a viabilidade do nosso encontro
              (passagens, estruturas e diversos outros gastos), disponibilizamos o link da "Vakinha Virtual" para aqueles que desejarem fazer a sua doação, de qualquer valor.
              </p>

              <br></br>
              As doações poderão ser via boleto, cartão de crédito ou pix.
              <br></br>
              <br></br>

              <Button  href="https://abacashi.com/p/congresso-nacional-gen-2" target="_blank" variant="light" type="submit" size="lg">Acessar link para doação (cartão e boleto)</Button>{' '}
              <br></br>
              <br></br>

              ➡️ Pix para doação: (98) 974002091 <br></br>
              Leonel Anderson Macedo da Silva <br></br>
              CPF: ***.288.893-**<br></br>

              Agradecemos a sua generosidade!<br></br>
            </div>
          </div>
        </div>
      </div>
    </section>
)
}
