import React, { useState, useEffect } from "react";
import { getProdutos, updateProduto } from "../../services/requestApi";
import Modal from "./Modal"; 
import './index.css'

const AtualizacaoComponent = () => {
  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState({});
  const [isModalAberto, setIsModalAberto] = useState(false);

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

  const handleModificarClick = (produto) => {
    setProdutoSelecionado(produto);
    setIsModalAberto(true);
  };

  const handleCloseModal = () => {
    setProdutoSelecionado({});
    setIsModalAberto(false);
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    try {
      const produtoAtualizado = await updateProduto(produtoSelecionado.id, produtoSelecionado);
      window.alert("Produto atualizado com sucesso!", produtoAtualizado);
      handleCloseModal();
    } catch (error) {
      window.alert("Erro ao atualizar produto:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProdutoSelecionado((prevProduto) => ({
      ...prevProduto,
      [name]: value
    }));    
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const formattedValue = parseFloat(value).toFixed(2);
    setProdutoSelecionado((prevProduto) => ({
      ...prevProduto,
      [name]: formattedValue
    }));
  };

  return (
    <div className="container-update-products">
      <div className="product-cards">
        {produtos.map((produto) => (
          <div key={produto.id} className="product-card">
            <img src='\assets\placeholder.jpeg' alt={produto.nome_do_produto} />
            <div className="product-card-data">
              <p>{produto.nome_do_produto}</p>
              <p>R${Number.parseFloat(produto.preco_do_produto).toFixed(2)}</p>
            </div>
            <button onClick={() => handleModificarClick(produto)}>Modificar</button>
          </div>
        ))}
      </div>

      {isModalAberto && (
        <Modal 
          onClose={handleCloseModal} 
          handleUpdate={handleUpdateProduct}
          produto={produtoSelecionado}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      )}
    </div>
  );
};

export default AtualizacaoComponent;

