import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Lista } from "../pages/lista";
import { Cadastro } from "../pages/cadastro";
import { Atualizacao } from "../pages/atualizacao";
import { Exclusao } from "../pages/exclusao";

const AppRoutes = () =>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/list" element={<Lista />} />
    <Route path="/new" element={<Cadastro />} />
    <Route path="/update" element={<Atualizacao />} />
    <Route path="/delete" element={<Exclusao />} />
  </Routes>;

export default AppRoutes;
