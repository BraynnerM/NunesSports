import React, { useState, useEffect } from "react";
import { getProdutos } from "../../services/requestApi";
import { Link } from "react-router-dom";

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

  return (
    <div>
      <div className="product-cards">
        {produtos.map(produto =>
          <Link key={produto.id} to={`/details/${produto.id}`}>
            <div className="product-card" >
              <img
                src={produto.imagem_do_produto}
                alt={produto.nome_do_produto}
              />
              <div>
                <p>
                  {produto.nome_do_produto}
                </p>
                <p>
                  R${Number.parseFloat(produto.preco_do_produto).toFixed(2)}
                </p>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ListaComponent;
