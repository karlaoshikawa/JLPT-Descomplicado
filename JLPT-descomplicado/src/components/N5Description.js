import style from "./N5Description.module.scss";

export default function N5Description() {
  return (
    <div className={style.N5Description_container}>
      <div className={style.N5Description_box}>
        <div className={style.N5Description_gridItem}>
          <p>
            É o nível mais básico e introdutório do exame. Ele é projetado para
            avaliar o conhecimento fundamental da língua japonesa. É importante
            notar que o JLPT N5 é o nível mais básico do teste, portanto, as
            habilidades exigidas são limitadas. <br />
            Ele serve como uma base para aqueles que desejam avançar para os
            níveis mais altos do JLPT, como o N4, N3, N2 e N1, que aumentam
            progressivamente em termos de complexidade e conhecimento exigido.
          </p>
        </div>
        <div className={style.N5Description_gridItem}>
          <h3>Seções do JLPT N5:</h3>

          <h4>Vocabulário e Leitura:</h4>
          <p>
            Nesta seção, os candidatos são testados em seu conhecimento de
            vocabulário japonês básico e habilidades de leitura. Precisa ser
            capazes de ler e entender palavras e frases simples, como sinais,
            anúncios, conversas diárias e deve estar familiarizado com cerca de
            800 palavras.
          </p>

          <h4>Gramática e Leitura:</h4>
          <p>
            Será avaliado a sua compreensão das estruturas gramaticais básicas
            em japonês. Deve ser capaz de identificar e usar corretamente as
            partículas, os tempos verbais e os padrões gramaticais comuns. Além
            disso, precisa saber ler e responder perguntas simples relacionadas
            a um texto.
          </p>

          <h4>Compreensão Auditiva:</h4>
          <p>
            O candidato é testado em sua capacidade de entender o japonês falado
            em situações cotidianas. Será ouvido diálogos e perguntas gravadas e
            precisa selecionar a resposta correta com base no que ouviu. A
            compreensão auditiva básica, como cumprimentos, direções e pedidos
            simples, é avaliada.
          </p>
        </div>
      </div>
    </div>
  );
}
