import style from "../components/ListDescription.module.scss";

export default function ListKanjiDescription({ level }) {
  const n5Description =
    "A lista de kanji do JLPT N5 é fundamental para iniciantes que desejam estabelecer uma base sólida no japonês. Composta por 103 kanji essenciais, ela permite a leitura de textos simples, como menus, sinais e instruções em japonês. Dominar esses caracteres é o primeiro passo para progredir nos níveis mais avançados do teste de proficiência em japonês.";

  const n4Description =
    "A lista de kanji do JLPT N4 representa um passo significativo no caminho para a proficiência no japonês. Composta por aproximadamente 181 kanji, essa lista é essencial para aqueles que desejam compreender textos mais complexos em japonês e se comunicar de maneira mais abrangente. Os kanji do N4 são frequentemente encontrados em leitura cotidiana, como notícias, revistas e textos informativos. Ao dominar esses caracteres, os estudantes podem melhorar sua capacidade de compreensão e comunicação em japonês, abrindo portas para oportunidades acadêmicas e profissionais mais amplas. O N4 marca uma etapa intermediária importante no teste de proficiência em japonês, preparando os alunos para níveis mais avançados e uma compreensão mais aprofundada da língua e cultura japonesa.";

  const n3Description =
    "A lista de kanji do JLPT N3 marca um avanço significativo no domínio do japonês. Composta por cerca de 371 kanji, esta lista é essencial para quem busca uma compreensão mais profunda do idioma japonês e deseja interagir com textos mais avançados, como artigos de jornal, literatura e documentos profissionais. Os kanji do N3 são frequentemente utilizados em contextos mais sofisticados, abrindo portas para oportunidades acadêmicas e profissionais mais amplas. Além disso, eles proporcionam uma compreensão mais profunda da cultura japonesa ao permitir a leitura de obras literárias e análise de textos mais complexos. O JLPT N3 é um marco importante na jornada de aprendizado do japonês, preparando os alunos para níveis mais avançados de proficiência e uma maior imersão na língua e cultura japonesa.";

  const n2Description =
    "A lista de kanji do JLPT N2 representa um marco importante no domínio da língua japonesa. Composta por cerca de 617 kanji, essa lista é essencial para aqueles que desejam alcançar um alto nível de proficiência em japonês. Os kanji do N2 são frequentemente encontrados em textos avançados, como artigos de jornal, literatura, documentos acadêmicos e profissionais. Dominar esses caracteres permite uma compreensão profunda da língua e cultura japonesa, bem como a capacidade de se comunicar eficazmente em contextos formais e informais. Além disso, o JLPT N2 é frequentemente um requisito para admissão em universidades japonesas e para oportunidades de emprego no Japão. O N2 é um desafio significativo, mas também é um passo crucial para atingir a maestria na língua japonesa e se destacar em um mundo cada vez mais globalizado.";

  const n1Description =
    "A lista de kanji do JLPT N1 representa o mais alto nível de proficiência em japonês. Composta por cerca de 1.000 kanji, essa lista é essencial para aqueles que buscam uma compreensão completa e avançada da língua japonesa. Os kanji do N1 são encontrados em textos muito avançados, como literatura clássica, documentos acadêmicos especializados e textos de negócios. Dominar esses caracteres é um indicativo de expertise na língua japonesa e permite a capacidade de se comunicar com fluência em diversos contextos, inclusive em ambientes profissionais. Além disso, o JLPT N1 é frequentemente necessário para ingressar em universidades japonesas e para oportunidades de emprego de alto nível no Japão. O N1 é um desafio significativo, mas é o passo final em direção à maestria no idioma japonês e à imersão profunda na cultura japonesa.";

  let kanjiListDescription;
  switch (level) {
    case "n1":
      kanjiListDescription = n1Description;
      break;
    case "n2":
      kanjiListDescription = n2Description;
      break;
    case "n3":
      kanjiListDescription = n3Description;
      break;
    case "n4":
      kanjiListDescription = n4Description;
      break;
    case "n5":
      kanjiListDescription = n5Description;
      break;
    default:
      kanjiListDescription = "";
      break;
  }

  return (
    <div className={style.listDescription}>
      <p>{kanjiListDescription}</p>
    </div>
  );
}
