import axios from 'axios';

const API_BASE_URL = 'https://nunes-sports.onrender.com/api';

export const getProdutos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/produtos/`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    throw error;
  }
};

export const getProdutoById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/produtos/id/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produto por ID:', error);
    throw error;
  }
};

export const getProdutosByNome = async (nome) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/produtos/nome/${nome}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produtos por nome:', error);
    throw error;
  }
};

export const createProduto = async (novoProduto) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/produtos`, novoProduto);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    throw error;
  }
};

export const updateProduto = async (id, produtoAtualizado) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/produtos/${id}`, produtoAtualizado);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    throw error;
  }
};

export const deleteProduto = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/produtos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao excluir produto:', error);
    throw error;
  }
};
