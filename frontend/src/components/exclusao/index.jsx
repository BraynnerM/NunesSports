import React, { useState, useEffect } from "react";
import { getProdutos, deleteProduto } from "../../services/requestApi";
import './index.css'

const ExclusaoComponent = () => {
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
  const handleDelete = async (id) =>{
    
    try {
        const produtoDeletado = await deleteProduto(id);
        window.alert("Produto deletado com sucesso!", produtoDeletado);
        const updatedProdutos = produtos.filter((produto) => produto.id !== id);
      setProdutos(updatedProdutos);
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
    }
  }
  return (
    <div className="container-delete-products">
      <div className="product-cards">
        {produtos.map(produto =>
          <div key={produto.id} className="product-card">
            <img
              src='/assets/placeholder.jpeg'
              alt={produto.nome_do_produto}
            />
            <div>
              <p>
                {produto.nome_do_produto}
              </p>
            </div>
            <button onClick={() => handleDelete(produto.id)}>Excluir</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExclusaoComponent;
