import Navbar from "../components/Navbar";
import ListaItens from "../components/Listar";


export default function Blocos() {

const itens = [
  {
    nome: "Bloco de Grama",
    descricao: "O bloco clássico da superfície."
  },
  {
    nome: "Pedra",
    descricao: "Material básico encontrado no subsolo."
  },
  {
    nome: "Madeira de Carvalho",
    descricao: "Usada para crafting e construção."
  },
  {
    nome: "Minério de Ferro",
    descricao: "Fonte de ferro para ferramentas e armaduras."
  },
  {
    nome: "Minério de Ouro",
    descricao: "Material valioso encontrado em cavernas."
  },
  {
    nome: "Minério de Diamante",
    descricao: "Um dos recursos mais raros do jogo."
  },
  {
    nome: "Redstone",
    descricao: "Utilizada para circuitos e automação."
  },
  {
    nome: "Obsidiana",
    descricao: "Bloco resistente usado para portais."
  },
  {
    nome: "Areia",
    descricao: "Cai quando não possui suporte."
  },
  {
    nome: "Tijolos",
    descricao: "Bloco decorativo para construções."
  }
];
  return (
    <main className="">
      <Navbar />



      <div className="container">
          <p className="font-bold">Blocos</p> 
            <img src="/blocos.png" className="h-49" alt="Minecraft Logo" />
            <br />
            
      <ListaItens itens={itens} />
      </div>
    </main>
  );
}