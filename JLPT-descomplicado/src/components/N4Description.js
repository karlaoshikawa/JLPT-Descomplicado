import style from "./NDescription.module.scss";

export default function N4Description() {
  return (
    <div
      className={style.NDescription_container}
      data-testid="link-N4Description"
    >
      <div className={style.NDescription_box}>
        <div className={style.NDescription_gridItem}>
          <p>
            O JLPT N4 é um nível intermediário no exame de proficiência da
            língua japonesa. Ele avalia habilidades mais avançadas em comparação
            ao N5, exigindo um conhecimento mais amplo da língua. Inclua os
            conhecimentos dos níveis anteriores. Abaixo estão as seções e
            habilidades testadas no JLPT N4:
          </p>
        </div>
        <div className={style.NDescription_gridItem}>
          <h3>Seções do JLPT N4:</h3>

          <h4>Vocabulário e Leitura:</h4>
          <p>
            Nesta seção, os candidatos serão testados em seu conhecimento de
            vocabulário japonês intermediário e habilidades de leitura. É
            necessário ser capaz de ler artigos de notícias simples, além de
            estar familiarizado com cerca de 1.500 palavras.
          </p>

          <h4>Gramática e Leitura:</h4>
          <p>
            Será avaliada a compreensão das estruturas gramaticais
            intermediárias em japonês. Os candidatos devem ser capazes de
            identificar e utilizar corretamente as partículas, os tempos verbais
            e os padrões gramaticais mais complexos. Além disso, é necessário
            ser capaz de ler e responder perguntas sobre textos mais detalhados.
          </p>

          <h4>Compreensão Auditiva:</h4>
          <p>
            Os candidatos serão testados em sua capacidade de compreender o
            japonês falado em situações do cotidiano, um pouco mais desafiadoras
            do que o N5. Serão apresentados diálogos e perguntas gravadas, e os
            candidatos deverão escolher a resposta correta baseada no que
            ouvirem.
          </p>
        </div>
      </div>
    </div>
  );
}
