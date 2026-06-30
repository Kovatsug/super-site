import Navbar from "../components/Navbar";
import ListaItens from "../components/Listar";


export default function Dimensoes() {

  const dimensoes = [
  {
    nome: "Overworld",
    descricao:
      "O Overworld é a dimensão principal do Minecraft, onde a maioria dos jogadores começa sua jornada. Ele é composto por uma grande variedade de biomas como florestas, desertos, oceanos, montanhas e cavernas subterrâneas. Aqui você encontra a maior parte dos recursos básicos, como madeira, pedra, carvão, ferro e alimentos. É também onde vilas, templos, minas abandonadas e outras estruturas geradas naturalmente aparecem. Durante o dia é relativamente seguro, mas à noite surgem mobs hostis como zumbis, esqueletos e creepers. É a dimensão mais equilibrada e essencial para progressão no jogo."
  },
  {
    nome: "Nether",
    descricao:
      "O Nether é uma dimensão infernal acessada através de portais de obsidiana. Ele é composto por paisagens perigosas como rios de lava, fortalezas, biomas de netherrack e estruturas como fortalezas do Nether e bastiões. É um lugar extremamente hostil, com mobs como ghasts, piglins, blaze e magma cubes. Apesar do perigo, o Nether é essencial para progressão, pois fornece recursos raros como nether quartz, glowstone, blaze rods e netherite. Também é muito usado como atalho para viagens longas no Overworld, já que a distância é reduzida em escala 1:8."
  },
  {
    nome: "End",
    descricao:
      "O End é a dimensão final do Minecraft, acessada através de portais do End encontrados em strongholds. Ele é composto por ilhas flutuantes no vazio, com a grande ilha principal onde o Ender Dragon habita. Após derrotar o dragão, o jogador pode explorar as cidades do End, onde vivem os shulkers e é possível encontrar elytras, um dos itens mais valiosos do jogo. O End é um ambiente silencioso, escuro e perigoso, com poucos recursos naturais, mas extremamente importante para o final da progressão do jogo e exploração avançada."
  }
];
  return (
    <main className="">
      <Navbar />

      <div className="container">
              <p className="font-bold">Dimensões</p> 

            <img src="/portal.png" className="h-59" alt="Minecraft" />
<br />

      <ListaItens itens={dimensoes} />
        
      </div>
    </main>
  );
}