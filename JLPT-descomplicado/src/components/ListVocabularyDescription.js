import style from "../components/ListDescription.module.scss";

export default function ListVocabularyDescription({ level }) {
  const n5Description =
    "O vocabulário do JLPT N5 é uma parte essencial do aprendizado do japonês para iniciantes. Esta lista abrange um conjunto básico de palavras e frases que são fundamentais para compreender e se comunicar em situações cotidianas. O vocabulário do N5 inclui termos simples usados em cumprimentos, compras, números e expressões comuns de uso diário. Dominar esse vocabulário é crucial para construir uma base sólida na língua japonesa e para se sentir confortável em situações comuns de interação. O JLPT N5 é o nível introdutório do teste de proficiência em japonês e é a porta de entrada para aqueles que estão começando a explorar a língua e a cultura japonesa. Embora seja o nível mais básico, é um passo importante para estabelecer as habilidades necessárias para progredir nos níveis superiores.";

  const n4Description =
    "O vocabulário do JLPT N4 é um passo importante para aqueles que desejam alcançar um nível intermediário de proficiência em japonês. Esta lista abrange uma variedade de palavras e expressões que são essenciais para compreender textos e se comunicar em níveis mais avançados do idioma. O vocabulário do N4 inclui termos usados em contextos como viagens, trabalho, lazer e interações sociais. Dominar esse vocabulário é crucial para expandir as habilidades de comunicação e compreensão em japonês. O JLPT N4 representa uma transição significativa do básico para o intermediário, preparando os estudantes para interações mais complexas e aprofundando seu entendimento da língua e cultura japonesa. Muitas vezes, o N4 é um pré-requisito para ingressar em cursos de língua japonesa em universidades ou para buscar oportunidades de emprego no Japão, tornando-o um passo importante na jornada de aprendizado.";

  const n3Description =
    "O vocabulário do JLPT N3 é uma etapa intermediária crucial para aqueles que desejam aprofundar sua proficiência no japonês. Esta lista engloba uma ampla variedade de palavras e expressões usadas em contextos cotidianos, profissionais e acadêmicos. O vocabulário do N3 permite que os estudantes compreendam textos mais complexos, participem de discussões mais aprofundadas e se expressem de maneira mais precisa em japonês. Inclui termos relacionados a negócios, tecnologia, sociedade e cultura japonesa. Dominar esse vocabulário é um marco importante no caminho para a fluência e abre portas para uma compreensão mais profunda da língua e cultura japonesa. O JLPT N3 é frequentemente considerado um requisito para admissão em universidades japonesas e para muitas oportunidades de emprego no Japão, tornando-se um nível intermediário altamente valorizado para estudantes e profissionais.";

  const n2Description =
    "O vocabulário do JLPT N2 é uma parte essencial para aqueles que desejam atingir um nível avançado de proficiência em japonês. Esta lista compreende uma ampla variedade de palavras e expressões, muitas das quais são fundamentais para compreender e se comunicar em níveis mais altos de japonês. O vocabulário do N2 abrange termos usados em contextos variados, como negócios, literatura, notícias e conversas cotidianas. Dominar esse vocabulário não apenas aprimora as habilidades de comunicação, mas também permite uma compreensão mais profunda da cultura japonesa, já que muitas palavras estão ligadas a conceitos culturais e sociais específicos. O JLPT N2 é frequentemente exigido para ingressar em universidades japonesas e para oportunidades de emprego em níveis mais avançados no Japão. Este nível representa um desafio significativo, mas também é um passo crucial para aqueles que buscam a maestria no idioma japonês e desejam se destacar em um mundo globalizado.";

  const n1Description =
    "O vocabulário do JLPT N1 representa o mais alto nível de proficiência em japonês. Esta lista abrange uma ampla gama de palavras e expressões avançadas que são cruciais para compreender textos complexos, se comunicar de maneira sofisticada e mergulhar profundamente na língua japonesa. O vocabulário do N1 inclui termos usados em contextos como literatura clássica, negócios, ciência e debates acadêmicos. Dominar esse vocabulário demonstra uma expertise considerável no idioma e permite que os estudantes participem de discussões profundas e compreendam nuances culturais e sociais no japonês. O JLPT N1 é frequentemente um requisito para admissão em programas acadêmicos avançados em universidades japonesas e é altamente valorizado por empregadores que buscam profissionais com proficiência completa em japonês. Alcançar o N1 é um feito notável e indica um domínio excepcional da língua e cultura japonesa.";

  let vocabularyListDescription;
  switch (level) {
    case "n1":
      vocabularyListDescription = n1Description;
      break;
    case "n2":
      vocabularyListDescription = n2Description;
      break;
    case "n3":
      vocabularyListDescription = n3Description;
      break;
    case "n4":
      vocabularyListDescription = n4Description;
      break;
    case "n5":
      vocabularyListDescription = n5Description;
      break;
    default:
      vocabularyListDescription = "";
      break;
  }

  return (
    <div className={style.listDescription}>
      <p>{vocabularyListDescription}</p>
    </div>
  );
}
