import style from "./NDescription.module.scss";

export default function N4Description() {
  return (
    <div className={style.NDescription_container}>
      <div className={style.NDescription_box}>
        <div className={style.NDescription_gridItem}>
          <p>
            O JLPT N3 é um nível intermediário avançado no exame de proficiência
            da língua japonesa. Ele avalia habilidades mais sofisticadas em
            comparação com o N4, exigindo um conhecimento ainda mais abrangente
            da língua. Inclua os conhecimentos dos níveis anteriores. Abaixo
            estão as seções e habilidades testadas no JLPT N3:
          </p>
        </div>
        <div className={style.NDescription_gridItem}>
          <h3>Seções do JLPT N3:</h3>

          <h4>Vocabulário e Leitura:</h4>
          <p>
            Nesta seção, os candidatos serão testados em seu conhecimento de
            vocabulário japonês avançado e habilidades de leitura. É preciso ser
            capaz de ler artigos de jornais e revistas, além de estar
            familiarizado com cerca de 3.000 palavras.
          </p>

          <h4>Gramática e Leitura:</h4>
          <p>
            Será aferida a compreensão das estruturas gramaticais avançadas em
            japonês. Os candidatos precisam ser capazes de identificar e
            utilizar corretamente as partículas, os tempos verbais, os padrões
            gramaticais e as expressões idiomáticas mais complexas. Além disso,
            é necessário ser capaz de ler e reagir a perguntas sobre textos mais
            sofisticados.
          </p>

          <h4>Compreensão Auditiva:</h4>
          <p>
            Os candidatos serão testados em sua capacidade de compreender o
            japonês falado em situações diversas, um pouco mais desafiadoras do
            que o N4. Serão apresentados diálogos mais longos e perguntas
            gravadas, e os candidatos deverão escolher a resposta correta
            baseada no que ouvirem. É essencial ter uma boa compreensão do
            vocabulário e das expressões idiomáticas japonesas.
          </p>
        </div>
      </div>
    </div>
  );
}
