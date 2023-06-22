import style from "./TestInformation.module.scss";
import JLPTInformationIMG from "../images/jlpt_information.webp"

export default function TestInformation() {
  return (
    <div className={style.TestInformation_container}>
      <div className={style.TestInformation_gridItem}>
        <img src={JLPTInformationIMG} alt="Jlpt Information" />
      </div>
      <h2>Como funciona o teste JLPT?</h2>
      <div className={style.TestInformation_box}>
        <div className={style.TestInformation_gridItem}>
          <h3>Data do teste JLPT</h3>
          <h4>dia 2 de Julho de 2023 (domingo)</h4>
          <p>
            <strong>Período de Inscrição</strong>
          </p>
          <p>28/3 (Segunda) a 23/4 (Sábado)</p>
          <h4>dia 3 de Dezembro de 2023 (domingo)</h4>
          <p>
            <strong>Período de Inscrição</strong>
          </p>
          <p>
            a partir do fim de Agosto até meio de Setembro (Data indisponível)
          </p>
        </div>

        <div className={style.TestInformation_gridItem}>
          <h3>Site oficial</h3>
          <a
            href="http://www.jlpt.jp/e/index.html"
            target="_blank"
            rel="noreferrer"
          >
            JLPT - Japanese Language Proficiency Test
          </a>
          <h4>Brasil</h4>
          <a href="https://cblj.org.br/pt/" target="_blank" rel="noreferrer">
            CBLJ - Centro Brasileiro de Língua Japonesa
          </a>
          <h4>Japão </h4>
          <a href="https://info.jees-jlpt.jp/" target="_blank" rel="noreferrer">
            JEES - Japan Educational Exchanges and Services
          </a>
        </div>

        <div className={style.TestInformation_gridItem}>
          <h3>Taxa de inscrição</h3>
          <h4>Brasil</h4>
          <p>N1:R$ 230,00</p>
          <p>N2:R$ 200,00</p>
          <p>N3:R$ 190,00</p>
          <p>N4:R$ 180,00</p>
          <p>N5:R$ 170,00</p>
          <h4>Japão </h4>
          <p>¥7.500(imposto incluso)</p>
        </div>

        <div className={style.TestInformation_gridItem}>
          <h3>Como funciona o teste JLPT?</h3>
          <p>
            O teste JLPT é composto por seções de leitura, gramática e
            vocabulário, e compreensão auditiva. As questões são todas de
            múltipla escolha e avaliam a capacidade dos candidatos em
            compreender e utilizar a língua japonesa.
          </p>
        </div>

        <div className={style.TestInformation_item}>
          <h3>Qual a pontuação mínima para passar no teste?</h3>
          <table>
            <tr>
              <th>Nível</th>
              <th>Leitura (Pontos Mín/Máx)</th>
              <th>Gramática e Vocabulário (Pontos Mín/Máx)</th>
              <th>Compreensão Auditiva (Pontos Mín/Máx)</th>
              <th>Total (Pontos Mín/Máx)</th>
            </tr>
            <tr>
              <td>N1</td>
              <td>19-38</td>
              <td>19-38</td>
              <td>19-38</td>
              <td>100-180</td>
            </tr>
            <tr>
              <td>N2</td>
              <td>19-37</td>
              <td>19-37</td>
              <td>19-37</td>
              <td>90-160</td>
            </tr>
            <tr>
              <td>N3</td>
              <td>19-35</td>
              <td>19-35</td>
              <td>19-35</td>
              <td>95-155</td>
            </tr>
            <tr>
              <td>N4</td>
              <td>19-33</td>
              <td>19-33</td>
              <td>19-33</td>
              <td>90-150</td>
            </tr>
            <tr>
              <td>N5</td>
              <td>19-31</td>
              <td>19-31</td>
              <td>19-31</td>
              <td>80-120</td>
            </tr>
          </table>
        </div>

        <div className={style.TestInformation_gridItem}>
          <h3>Onde posso encontrar mais informações sobre o teste JLPT?</h3>
          <p>
            Você pode encontrar mais informações sobre o teste JLPT no site
            oficial do JLPT. No Brasil, o site do Centro Brasileiro de Língua
            Japonesa (CBLJ) também contém informações relevantes.{" "}
          </p>
        </div>

        <div className={style.TestInformation_gridItem}>
          <h3>Quanto tempo dura cada parte do teste JLPT em cada nível?</h3>

          <p>
            Esses tempos indicam a duração total de cada prova para cada nível
            do JLPT. É importante respeitar esses limites de tempo durante o
            exame para garantir que todas as seções sejam concluídas dentro do
            prazo estabelecido. Além disso, recomenda-se que os candidatos
            consultem o site oficial do JLPT para obter informações mais
            detalhadas sobre cada seção do teste e outros detalhes relevantes
            para o exame.
          </p>

          <table>
            <tr>
              <th>Nível N1</th>
            </tr>
            <tr>
              <td>Leitura</td>
              <td>110 minutos</td>
            </tr>
            <tr>
              <td>Gramática e Vocabulário</td>
              <td>60 minutos</td>
            </tr>
            <tr>
              <td>Compreensão Auditiva</td>
              <td>60 minutos</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>230 minutos</strong>
              </td>
            </tr>
            <tr>
              <th>Nível N2</th>
            </tr>
            <tr>
              <td>Leitura</td>
              <td>105 minutos</td>
            </tr>
            <tr>
              <td>Gramática e Vocabulário</td>
              <td>60 minutos</td>
            </tr>
            <tr>
              <td>Compreensão Auditiva</td>
              <td>50 minutos</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>215 minutos</strong>
              </td>
            </tr>
            <tr>
              <th>Nível N3</th>
            </tr>
            <tr>
              <td>Leitura</td>
              <td>95 minutos</td>
            </tr>
            <tr>
              <td>Gramática e Vocabulário</td>
              <td>60 minutos</td>
            </tr>
            <tr>
              <td>Compreensão Auditiva</td>
              <td>40 minutos</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>195 minutos</strong>
              </td>
            </tr>
            <tr>
              <th>Nível N4</th>
            </tr>
            <tr>
              <td>Leitura</td>
              <td>70 minutos</td>
            </tr>
            <tr>
              <td>Gramática e Vocabulário</td>
              <td>60 minutos</td>
            </tr>
            <tr>
              <td>Compreensão Auditiva</td>
              <td>35 minutos</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>165 minutos</strong>
              </td>
            </tr>
            <tr>
              <th>Nível N5</th>
            </tr>
            <tr>
              <td>Leitura</td>
              <td>65 minutos</td>
            </tr>
            <tr>
              <td>Gramática e Vocabulário</td>
              <td>60 minutos</td>
            </tr>
            <tr>
              <td>Compreensão Auditiva</td>
              <td>30 minutos</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>155 minutos</strong>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
