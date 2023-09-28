import style from "../components/ListDescription.module.scss";

export default function ListGrammarDescription({ level }) {
  const n5Description =
    "A gramática do JLPT N5 é o ponto de partida ideal para quem está começando a aprender japonês. Esta lista abrange estruturas gramaticais simples, essenciais para compreender frases básicas e iniciar conversas em japonês. As estruturas gramaticais do N5 permitem que os estudantes expressem ideias simples, como cumprimentos, perguntas e respostas curtas. Dominar essa gramática é fundamental para estabelecer uma base sólida no idioma japonês e começar a se comunicar em situações cotidianas. O JLPT N5 é o nível introdutório do teste de proficiência em japonês e serve como ponto de partida para aqueles que estão começando a explorar a língua e a cultura japonesa. Mesmo sendo o nível mais básico, é um estágio crucial para construir as habilidades necessárias para progredir nos níveis mais avançados.";


  const n4Description =
    "A gramática do JLPT N4 é um passo importante para aqueles que buscam construir uma base sólida em japonês. Esta lista abrange uma variedade de estruturas gramaticais essenciais para compreender textos e se comunicar em situações cotidianas e de trabalho. As estruturas gramaticais do N4 permitem que os estudantes expressem ideias simples, compreendam instruções básicas e participem de conversas informais em japonês. Dominar essa gramática é crucial para estabelecer uma comunicação eficaz em situações comuns, como compras, viagens e interações sociais. O JLPT N4 é um nível introdutório intermediário que prepara os estudantes para interações mais complexas e um entendimento mais profundo da língua japonesa. Além disso, é muitas vezes um pré-requisito para ingressar em cursos de língua japonesa em universidades japonesas e para oportunidades de emprego no Japão, tornando-o um ponto de partida valioso na jornada de aprendizado.";


  const n3Description =
    "A gramática do JLPT N3 representa um ponto intermediário importante para aqueles que buscam aprofundar sua proficiência em japonês. Esta lista abrange uma variedade de estruturas gramaticais que são essenciais para compreender textos mais avançados, participar de conversas em japonês e interagir em contextos variados. As estruturas gramaticais do N3 permitem que os estudantes expressem ideias mais complexas, entendam textos mais detalhados e se comuniquem eficazmente em situações do dia a dia, como negócios, viagens e discussões sociais. Dominar essa gramática é um passo significativo para se tornar um comunicador mais confiante e versátil em japonês. O JLPT N3 é frequentemente considerado um requisito para admissão em cursos de língua japonesa em universidades japonesas e pode abrir portas para oportunidades de emprego no Japão, tornando-se um nível intermediário valioso no caminho para a proficiência na língua.";


 const n2Description =
   "A gramática do JLPT N2 é um passo fundamental para aqueles que desejam atingir um nível avançado de proficiência em japonês. Essa lista engloba uma ampla variedade de estruturas gramaticais que são essenciais para compreender textos mais complexos, participar de conversas avançadas e interagir eficazmente em ambientes profissionais. As estruturas gramaticais do N2 permitem que os estudantes expressem ideias mais elaboradas, argumentem pontos de vista e compreendam nuances em contextos como negócios, literatura e discussões acadêmicas. Dominar essa gramática é um indicativo de um alto nível de proficiência no japonês e abre portas para uma comunicação mais sofisticada em situações variadas. O JLPT N2 é frequentemente considerado um requisito importante para admissão em cursos de língua japonesa em universidades japonesas e é altamente valorizado por empregadores que buscam profissionais com habilidades avançadas no idioma.";


  const n1Description =
    "A gramática do JLPT N1 representa o ápice da proficiência em japonês. Esta lista abrange estruturas gramaticais avançadas e complexas, que são fundamentais para compreender textos sofisticados, se comunicar de maneira fluente e interpretar nuances culturais e sociais no idioma japonês. As estruturas gramaticais do N1 permitem que os estudantes expressem ideias sutis e participem de discussões profundas em diversos contextos, incluindo negócios, literatura e debates acadêmicos. Dominar essa gramática é um indicativo de maestria no japonês e demonstra a capacidade de se comunicar de forma clara e precisa em situações desafiadoras. O JLPT N1 é frequentemente exigido para admissão em cursos acadêmicos avançados em universidades japonesas e é altamente valorizado por empregadores que buscam profissionais com domínio completo do idioma. Alcançar o N1 é uma realização notável que indica um nível excepcional de proficiência na língua japonesa e cultura.";


  let grammarListDescription;
  switch (level) {
    case "n1":
      grammarListDescription = n1Description;
      break;
    case "n2":
      grammarListDescription = n2Description;
      break;
    case "n3":
      grammarListDescription = n3Description;
      break;
    case "n4":
      grammarListDescription = n4Description;
      break;
    case "n5":
      grammarListDescription = n5Description;
      break;
    default:
      grammarListDescription = "";
      break;
  }

  return (
    <div className={style.listDescription}>
      <p>{grammarListDescription}</p>
    </div>
  );
}
