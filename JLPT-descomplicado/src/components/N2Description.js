import style from "./NDescription.module.scss";

export default function N2Description() {
  return (
    <div
      className={style.NDescription_container}
      data-testid="link-N2Description"
    >
      <div className={style.NDescription_box}>
        <div className={style.NDescription_gridItem}>
          <p>
            O JLPT N2 é um nível avançado no exame de proficiência da língua
            japonesa. Ele avalia habilidades mais avançadas em comparação com o
            N3, exigindo um conhecimento mais aprofundado da língua. Inclua os
            conhecimentos dos níveis anteriores. Abaixo estão as seções e
            habilidades testadas no JLPT N2:
          </p>
        </div>
        <div className={style.NDescription_gridItem}>
          <h3>Seções do JLPT N2:</h3>

          <h4>Vocabulário e Leitura:</h4>
          <p>
            Nesta seção, os candidatos serão testados em seu conhecimento de
            vocabulário japonês avançado e habilidades de leitura. É necessário
            ser capaz de ler artigos de jornais e revistas e estar familiarizado
            com cerca de 6.000 palavras.
          </p>

          <h4>Gramática e Leitura:</h4>
          <p>
            Será avaliada a compreensão das estruturas gramaticais avançadas em
            japonês. Os candidatos precisam ser capazes de identificar e
            utilizar corretamente as partículas, os tempos verbais, os padrões
            gramaticais e as expressões idiomáticas mais complexas. Além disso,
            é necessário ser capaz de ler e responder a perguntas sobre textos
            mais sofisticados.
          </p>

          <h4>Compreensão Auditiva:</h4>
          <p>
            Os candidatos serão testados em sua capacidade de compreender o
            japonês falado em situações diversas, um pouco mais desafiadoras do
            que o N3. Serão apresentados diálogos mais longos e perguntas
            gravadas, e os candidatos deverão escolher a resposta correta com
            base no que ouvirem. É essencial ter uma boa compreensão do
            vocabulário e das expressões idiomáticas japonesas.
          </p>
        </div>
      </div>
    </div>
  );
}
