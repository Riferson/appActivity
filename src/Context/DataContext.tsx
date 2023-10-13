import React, { createContext, useState, useContext } from 'react';

type Objeto = {
  uri: string;
};

type DataContextType = {
  objetos: Objeto[];
  adicionarObjeto: (novoObjeto: Objeto) => void;
};

// Crie o contexto
const DataContext = createContext<DataContextType | undefined>(undefined);

// Crie um provedor para o contexto
export const DataContextProvider:React.FC = ({ children }:any) => {
  const [objetos, setObjetos] = useState<Objeto[]>([]);

  // Função para adicionar um novo objeto ao array de objetos
  const adicionarObjeto = (novoObjeto:Objeto) => {
    setObjetos([...objetos, novoObjeto]);
  };

  // Crie um objeto de valor que contém o estado e a função
  const valor = {
    objetos,
    adicionarObjeto,
  };

  return <DataContext.Provider value={valor}>{children}</DataContext.Provider>;
};

// Crie um gancho personalizado para acessar o contexto
export const useDataContext = ():DataContextType => {
  const contexto = useContext(DataContext);
  if (!contexto) {
    throw new Error('useMeuContexto deve ser usado dentro de um MeuContextoProvider');
  }
  return contexto;
};