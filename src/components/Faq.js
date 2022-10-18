import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';

export const Faq = () => {
  return (
    <section className="faq">
      <div className="container">
        <Accordion defaultActiveKey={['0']} alwaysOpen className="border-radial">
          <h2>
            <Badge bg="secondary d-flex justify-content-center"> Dúvidas frequentes</Badge>
          </h2>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Como funcionará o translado do aeroporto de Natal até o Congresso?</Accordion.Header>
            <Accordion.Body>
              Estamos trabalhando a ideia de formar grupos que chegam em horários próximos para a realização do translado. Desenvolveremos uma logística mediante retorno dos preenchimentos do <a href="https://forms.gle/kh5JDo9PQ3Ybd2PZA" target="_blank"> formulário do translado</a>.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Qual será o estilo da acomodação no Hotel Rio das Garças?</Accordion.Header>
            <Accordion.Body>
              <p>Lembramos que o Hotel Rio das Garças não tem a estrutura de um Centro Mariápolis. Trata-se de um hotel que será adaptado às necessidades do congresso Gen. A escolha do hotel se baseou em várias pesquisas e foi a proposta mais econômica que encontramos para hospedagem e alimentação, além de estar localizado na região nordeste, que abriga a maior parte dos e das Gen do Brasil.</p>

              <p>Com relação aos quartos, o Hotel dispõe de 26 bangalôs (quartos), nos quais serão distribuídos em torno de 12 pessoas (por bangalô), em beliches. Para cada bangalô teremos um banheiro. Sendo assim, contamos com a iniciativa e caridade de cada um(a) em organizar as filas de banheiro e banhos.</p>

              <p>Para o programa, teremos um espaço ao ar livre, com cobertura por tendas, para a realização dos temas e painéis, além de muitas opções para os momentos de verde.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header> Já fiz e paguei minha inscrição, mas não poderei mais ir ao Congresso. E agora? </Accordion.Header>
            <Accordion.Body>
              <p>
                É possível repassar sua inscrição para alguém que não tenha ainda se inscrito. Para isso, a responsabilidade de encontrar um “substituto” é do próprio(a) Gen que desistiu da vaga, o qual deverá identificar uma pessoa que tenha interesse em substituir e pedir que essa pessoa faça a inscrição (por meio do  <a href="https://forms.gle/AFQAgLxayYwutcVg7" target="_blank"> link de inscrição</a>)
              </p>
              <p>
                O novo inscrito deverá escolher a opção que diz “A minha inscrição substitui a inscrição de outro/a Gen”, informando o nome da pessoa que será substituída.
              </p>
              <p>
                Quando for solicitado o comprovante de pagamento, em caso de substituição, o/a gen pode adicionar qualquer documento ou foto apenas para finalizar a inscrição.
              </p>
            </Accordion.Body>

          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Qual o horário de Check In e Check Out do hotel?</Accordion.Header>
            <Accordion.Body>
              Seguindo as regras do Hotel Rio das Garças e do pacote contratado pelo Movimento dos Focolares, o horário de check in (entrada no hotel) será a partir das 14h00 do dia 11/11/2022 (sexta-feira) e de check out (saída) até as 14h00 do dia 15/11/2022.
            </Accordion.Body>
          </Accordion.Item>


          <Accordion.Item eventKey="4">
            <Accordion.Header>Se eu chegar dias antes ou quiser ficar dias após o congresso no Hotel Rio das Garças, é possível ficar hospedado?</Accordion.Header>
            <Accordion.Body>
              Sim. Para essa situação, foi proposto pelo Resort a estadia no Bangalô Luxo à partir de 4 pessoas, incluindo café da manhã e toda a estrutura de lazer do resort, no valor de R$80,00 (diária por pessoa). Com validade de 05 à 11.11.22 (pré congresso) e 15 à 18.11.22 (pós congresso)<br></br>

              Condições Gerais:<br></br>
              -Check in: a partir das 14h<br></br>
              -Check out: às 12h<br></br>
              -Obrigatório apresentação de documento de identidade com foto na recepção<br></br>
              -Para cancelamento de reserva ou qualquer alteração, deverá comunicar em até 10 dias antes do check in<br></br>
              -Pagamento via pix ou transferência bancária.<br></br>

              As reservas dos dias extras devem ser feitas exclusivamente com o hotel.
              No ato da reserva, é necessário que você informe que é participante do Movimento dos Focolares através do contato: Kelly (resort) - 84 81292505

            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>Chego na rodoviária de natal, tenho direito ao translado?</Accordion.Header>
            <Accordion.Body>
              Sim. Entretanto, é preciso que você nos informe preenchendo o do <a href="https://forms.gle/kh5JDo9PQ3Ybd2PZA" target="_blank"> formulário do translado</a>.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Minhas passagens são para João Pessoa, Recife, como faço para chegar ao congresso?</Accordion.Header>
            <Accordion.Body>
              Pontos de contatos de João Pessoa e Recife estarão disponíveis para orientá-los, caso precisem. É necessário que nos informe através do formulário do translado no campo de “Tem alguma realidade específica que precisa de ajuda?”, para que assim alguém da cidade de João Pessoa ou Recife entre em contato (link:   ).
              <br></br>
              Estamos trabalhando a ideia de formar grupos que chegam em horários próximos para a realização do translado. Desenvolveremos uma logística mediante retorno dos preenchimentos do do <a href="https://forms.gle/kh5JDo9PQ3Ybd2PZA" target="_blank"> formulário do translado</a>.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Haverá hospedagem para os motoristas?</Accordion.Header>
            <Accordion.Body>
              <p>Considerando a divisão e a quantidade de bangalôs (quartos) do Hotel Rio das Garças, não será possível hospedar os motoristas no mesmo hotel em que será realizado o Congresso Gen2. A responsabilidade de encontrar a hospedagem do motorista e arcar com essa hospedagem é do próprio regional ou da empresa de transporte contratada.</p>
              <p>Em contato com o Hotel, eles sugeriram que os motoristas se hospedassem no município de Parnamirim, próximo ao local do congresso.</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="8">
            <Accordion.Header>É preciso levar roupa de cama? </Accordion.Header>
            <Accordion.Body>
              <p>Sim! É preciso levar roupa de cama, banho e travesseiro. (Com exceção daqueles que reservaram e pagaram o kit disponibilizado pelo hotel separadamente até 16/10). </p>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </div>
    </section>
  );
}
