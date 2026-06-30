type Item = {
  nome: string;
  descricao: string;
};

type ListaItensProps = {
  itens: Item[];
};

export default function ListaItens({ itens }: ListaItensProps) {
  return (
    <div>
      {itens.map((item) => (
        <div key={item.nome}>
          <h3 className="text-xl font-bold">{item.nome}</h3>
          <h4>{item.descricao}</h4>
          <br />
        </div>
      ))}
    </div>
  );
}