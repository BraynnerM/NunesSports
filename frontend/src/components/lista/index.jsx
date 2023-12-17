import React, { useState, useEffect } from "react";
import { getProdutos } from "../../services/requestApi";

const ListaComponent = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const produtosData = await getProdutos();
        setProdutos(produtosData);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchData();
  }, []);

  console.log(produtos);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map(produto =>
            <tr key={produto.id}>
              <td>
                {produto.codigo_do_produto}
              </td>
              <td>
                {produto.nome_do_produto}
              </td>
              <td>
                {produto.descricao_do_produto}
              </td>
              <td>
                R${produto.preco_do_produto}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListaComponent;
