import React, { useState, useEffect } from "react";
import { getProdutoById } from "../../services/requestApi";
import { useParams, Link } from "react-router-dom";
const DetalhesComponent = () => {
  const [produto, setProduto] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const produtoData = await getProdutoById(id);
        setProduto(produtoData);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="container-product-card">
        <div className="product-card-details" key={produto.id}>
          <img src={produto.imagem_do_produto} alt={produto.nome_do_produto} />
          <div>
            <p>
              {produto.codigo_do_produto}
            </p>
            <p>
              {produto.nome_do_produto}
            </p>
            <p>
              {produto.descricao_do_produto}
            </p>
            <p>
              R${Number.parseFloat(produto.preco_do_produto).toFixed(2)}
            </p>
          </div>
        </div>
        <Link to="/list">
          <button>Voltar para a Lista</button>
        </Link>
      </div>
    </div>
  );
};

export default DetalhesComponent;
