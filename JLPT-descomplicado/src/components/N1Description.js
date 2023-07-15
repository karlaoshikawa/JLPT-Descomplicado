import style from "./NDescription.module.scss";

export default function N4Description() {
  return (
    <div className={style.NDescription_container}>
      <div className={style.NDescription_box}>
        <div className={style.NDescription_gridItem}>
          <p>
            O JLPT N1 é o nível mais avançado no exame de proficiência da língua
            japonesa. Ele avalia habilidades linguísticas de forma abrangente e
            sofisticada. Inclua os conhecimentos dos níveis anteriores. Abaixo
            estão as seções e habilidades testadas no JLPT N1:
          </p>
        </div>
        <div className={style.NDescription_gridItem}>
          <h3>Seções do JLPT N1:</h3>

          <h4>Vocabulário e Leitura:</h4>
          <p>
            Nesta seção, os candidatos serão testados em seu conhecimento de
            vocabulário japonês avançado e habilidades de leitura. É necessário
            ser capaz de ler textos complexos, como artigos acadêmicos e
            literatura, e estar familiarizado com cerca de 10.000 palavras.
          </p>

          <h4>Gramática e Leitura:</h4>
          <p>
            Será avaliada a compreensão das estruturas gramaticais avançadas e
            sutis em japonês. Os candidatos precisam ser capazes de identificar
            e utilizar corretamente as partículas, os tempos verbais, os padrões
            gramaticais e as expressões idiomáticas mais complexas. Além disso,
            é necessário ser capaz de ler e responder a perguntas detalhadas
            sobre textos sofisticados.
          </p>

          <h4>Compreensão Auditiva:</h4>
          <p>
            Os candidatos serão testados em sua capacidade de compreender o
            japonês falado em situações diversas e desafiadoras. Serão
            apresentados diálogos longos e complexos, palestras acadêmicas e
            gravações de notícias, e os candidatos deverão escolher a resposta
            correta com base no que ouvirem. É essencial ter uma excelente
            compreensão do vocabulário e das expressões idiomáticas japonesas,
            além de habilidades de inferência e compreensão de contexto.
          </p>
        </div>
      </div>
    </div>
  );
}
