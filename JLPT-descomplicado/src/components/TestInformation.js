import style from "./TestInformation.module.scss";

export default function TestInformation() {
  return (
    <div className={style.TestInformation_container}>
      <div className={style.TestInformation_box}>
        <h2>Como funciona o teste JLPT?</h2>

        <h3>Data do teste JLPT</h3>
        <h4>dia 2 de Julho de 2023 (domingo)</h4>
        <p><strong>Período de Inscrição</strong></p>
        <p>28/3 (Segunda)  a  23/4 (Sábado)</p>

        <h4>dia 3 de Dezembro de 2023 (domingo)</h4>
        <p><strong>Período de Inscrição</strong></p>
        <p>a partir do fim de Agosto até meio de Setembro (Data indisponível)</p>

        <h3>Site oficial</h3>
        <a href="http://www.jlpt.jp/e/index.html" target="_blank" rel="noreferrer">
          JLPT - Japanese Language Proficiency Test
        </a>

        <h4>Brasil</h4>
        <a href="https://cblj.org.br/pt/" target="_blank" rel="noreferrer">
          CBLJ - Centro Brasileiro de Língua Japonesa
        </a>

        <h4>Japão </h4>
        <a href="https://info.jees-jlpt.jp/" target="_blank" rel="noreferrer">
          JEES - Japn Educational Exchanges and Services
        </a>

        <h3>Taxa de inscrição</h3>
        <h4>Brasil</h4>
        <p>N1:R$ 230,00</p>
        <p>N2:R$ 200,00</p>
        <p>N3:R$ 190,00</p>
        <p>N4:R$ 180,00</p>
        <p>N5:R$ 170,00</p>

        <h4>Japão </h4>
        <p>¥7.500(imposto incluso)</p>
 
        <h3>Como funciona o teste</h3>
        <p>
          As questões desta avaliação são todas de múltipla escolha e têm o objetivo de avaliar a sua capacidade de compreensão tanto da língua escrita quanto da língua falada. Portanto, não é necessário elaborar respostas em formato de texto ou responder perguntas abertas.
        </p>

        <h3>Como me inscrever?</h3>
        <p>Online pelo site de acordo ao país que você mora, seguindo as instruções e pagando a taxa</p>

      </div>
    </div>
  );
}
