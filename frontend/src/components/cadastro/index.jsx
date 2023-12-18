import React, { useState } from "react";
import { createProduto } from "../../services/requestApi";

const CadastroComponent = () => {
  const [produto, setProduto] = useState({
    codigo_do_produto: "",
    nome_do_produto: "",
    descricao_do_produto: "",
    preco_do_produto: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setProduto(prevProduto => ({
      ...prevProduto,
      [name]: value
    }));
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    const formattedValue = parseFloat(value).toFixed(2);
    setProduto(prevProduto => ({
      ...prevProduto,
      [name]: formattedValue
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const novoProduto = await createProduto(produto);
      console.log("Produto criado com sucesso:", novoProduto);
      setProduto({
        codigo_do_produto: "",
        nome_do_produto: "",
        descricao_do_produto: "",
        preco_do_produto: ""
      });
    } catch (error) {
      console.error("Erro ao criar produto:", error);
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Código do Produto:
          <input
            type="text"
            name="codigo_do_produto"
            value={produto.codigo_do_produto}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Nome do Produto:
          <input
            type="text"
            name="nome_do_produto"
            value={produto.nome_do_produto}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Descrição do Produto:
          <textarea
            name="descricao_do_produto"
            value={produto.descricao_do_produto}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Preço do Produto:
          <input
            type="text"
            name="preco_do_produto"
            value={produto.preco_do_produto}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroComponent;
