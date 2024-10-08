"use client";

import useProdutos from "@/data/hooks/useProdutos";
import ProdutoItem from "./produtoItem";
import ProdutoNaoEncontrado from "./ProdutoNaoEncontrado";

export default function ListaProdutos() {
  const { produtos } = useProdutos();
  console.log("PRODUTOS", produtos);
  return produtos.length ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {produtos.map((produto) => (
        <ProdutoItem produto={produto} key={produto.id} />
      ))}
    </div>
  ) : (
    <ProdutoNaoEncontrado semBotaVoltar />
  );
}
