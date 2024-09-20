import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Admin/Dashboard';
import GestionAgents from './Admin/Gestion_agents';
import GestionAppels from './Admin/Gestion_appels';
import GestionClients from './Admin/Gestion_clients';
import Ajouter_agents from './Admin/Ajouter_agents';
import List from"./Agents/List_clients";
import Login from './Components/Login';
import Acceuil from './Agents/Gestion_appels';

function App() {
  return (
    <Router>
      <div className="flex">
        <div className="flex-1">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Gestion_agents" element={<GestionAgents />} />
            <Route path="/Gestion_appels" element={<GestionAppels />} />
            <Route path="/Gestion_clients" element={<GestionClients />} />
            <Route path="/Ajouter_agents" element={<Ajouter_agents />} />
            <Route path="/Ajouter_agents" element={<Ajouter_agents />} />
            <Route path="/Acceuil" element={<Acceuil/>} />
            <Route path="/clients" element={<List/>} />
            <Route path="/" element={<Login/>} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
