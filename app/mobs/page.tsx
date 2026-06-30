import Navbar from "../components/Navbar";
import ListaItens from "../components/Listar";


export default function Mobs() {

const mobs = [
  {
    nome: "Creeper",
    descricao: "Explode quando se aproxima do jogador."
  },
  {
    nome: "Zombie",
    descricao: "Hostil durante a noite e em locais escuros."
  },
  {
    nome: "Skeleton",
    descricao: "Ataca à distância usando arco e flechas."
  },
  {
    nome: "Spider",
    descricao: "Escala paredes e se torna hostil à noite."
  },
  {
    nome: "Enderman",
    descricao: "Pode se teleportar e mover blocos."
  },
  {
    nome: "Witch",
    descricao: "Arremessa poções negativas nos jogadores."
  },
  {
    nome: "Villager",
    descricao: "Habitante pacífico que realiza trocas."
  },
  {
    nome: "Iron Golem",
    descricao: "Protege aldeões contra ameaças."
  },
  {
    nome: "Wolf",
    descricao: "Pode ser domesticado e acompanhar o jogador."
  },
  {
    nome: "Axolotl",
    descricao: "Criatura aquática amigável encontrada em cavernas."
  },
  {
    nome: "Bee",
    descricao: "Produz mel e protege sua colmeia."
  },
  {
    nome: "Pig",
    descricao: "Animal passivo que fornece carne."
  },
  {
    nome: "Cow",
    descricao: "Fonte de couro e carne."
  },
  {
    nome: "Sheep",
    descricao: "Fornece lã de diversas cores."
  },
  {
    nome: "Chicken",
    descricao: "Produz ovos e fornece penas."
  }
];

  return (
    <>
      <Navbar />
      <div className="container">
          <p className="font-bold">Mobs</p> 

      <img src="/mobs.png" className="h-59" alt="Minecraft" />
<br />

      <ListaItens itens={mobs} />
        
      </div>
    </>
  );
}