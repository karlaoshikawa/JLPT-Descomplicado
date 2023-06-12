import style from "./PageJLPTDetails.module.scss";
import aboutImg from "../images/JLPT_about_page.webp";
import JLPTImg from "../images/JLPT-about.webp";
import asakusaImg from "../images/JLPT_asakusa.webp";

export default function PageJLPTDetails() {
  return (
    <div className={style.PageJLPTDetails_container}>
      <img src={aboutImg} alt="explicacao sobre o teste jlpt" />
      <div className={style.PageJLPTDetails_box}>
        <div className={style.PageJLPTDetails_gridItem}>
          <h1>O que é JLPT?</h1>
          <p>
            O JLPT significa Exame de Proficiência em Língua Japonesa. É um
            teste padronizado em papel, com tempo determinado, projetado para
            avaliar a compreensão de leitura e habilidades de audição em
            japonês, com cinco níveis de dificuldade. Foi elaborado pela
            Fundação Japão e pelos Serviços de Intercâmbio Educacional do Japão
            em 1984. Milhares de pessoas fazem o exame ao redor do mundo todos
            os anos, então é atualmente o teste mais comum de proficiência em
            língua japonesa. O exame foi revisado em 2010 para ser mais difícil
            e assim nasceu a versão atual do JLPT. E você não precisa estar em
            nenhum programa especial de japonês ou aulas para fazer o JLPT; ele
            está aberto a qualquer pessoa que se inscreva. Os cinco níveis do
            exame vão de N5 a N1 , os candidatos escolhem qual nível fazer.
          </p>
        </div>

        <img
          src={JLPTImg}
          alt="jlpt logo"
          className={style.PageJLPTDetails_gridItem}
        />

        <img
          src={asakusaImg}
          alt="jlpt imagem do tempo de asakusa"
          className={style.PageJLPTDetails_gridItem}
        />

        <div className={style.PageJLPTDetails_gridItem}>
          <h2>PORQUE AS PESSOAS FAZEM O JLPT?</h2>
          <p>
            De acordo com uma pesquisa da Fundação Japão em 2018, os candidatos
            do exterior fazem o JLPT por duas razões principais. Uma razão é
            para o trabalho - conseguir um emprego, promoção ou aumento de
            salário, dentro ou fora do Japão (33,4%). A outra é simplesmente
            medir seu nível de proficiência em japonês (33,2%). Outro grande
            motivo é obter admissão em uma universidade japonesa, para aqueles
            que desejam se matricular em um programa ministrado em japonês.
          </p>
        </div>

        <div className={`${style.PageJLPTDetails_gridItem} ${style.PageJLPTDetails_bigP}`}>
          <h2>NO JAPÃO</h2>
          <p>
            No Japão, descobri que as pessoas geralmente fazem o JLPT por
            motivos práticos. Quase todos os anúncios de emprego em tempo
            integral técnico e/ou de escritório que exigem que você opere
            principalmente em japonês exigem que os candidatos tenham
            certificação de nível N2 ou N1. No entanto, tende a ser raro ter que
            apresentar comprovante, já que muitas vezes o mais importante é
            demonstrar na entrevista que você é capaz de desempenhar o trabalho
            no nível de japonês desejado. QUASE TODOS OS ANÚNCIOS DE EMPREGO EM
            TEMPO INTEGRAL QUE EXIGEM QUE VOCÊ OPERE PRINCIPALMENTE EM JAPONÊS
            EXIGEM QUE OS CANDIDATOS TENHAM CERTIFICAÇÃO DE NÍVEL N2 OU N1. Ter
            uma certificação de nível adequado pode aumentar suas chances de ser
            aceito em um programa acadêmico no Japão. Para aqueles que têm
            interesse na cultura japonesa e no idioma, o JLPT pode ser visto
            como um desafio pessoal e uma forma de avaliar seu progresso no
            estudo do japonês. Ter uma certificação de nível mais alto pode
            abrir portas para oportunidades profissionais e aumentar a
            competitividade no mercado de trabalho. O exame serve como um padrão
            reconhecido internacionalmente para avaliar a proficiência em língua
            japonesa e pode ter benefícios tangíveis na carreira e no estudo da
            língua.
          </p>
        </div>
      </div>
    </div>
  );
}
