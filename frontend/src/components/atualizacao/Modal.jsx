import React from "react";

const Modal = ({ handleUpdate, onClose, produto, handleChange, handleBlur  }) => {

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleUpdate}>
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
          <button type="submit">Gravar Alterações</button>
          <button onClick={onClose}>Fechar</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
