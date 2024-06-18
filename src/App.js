// src/App.js
import React, { useState } from 'react';
import styled from 'styled-components';
import FileExplorer from './components/FileExplorer';
import SelectedItems from './components/SelectedItems';

const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f0f0f0;
  height: 100vh;
  box-sizing: border-box;
`;

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemSelect = (item) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.some((i) => i.path === item.path)
        ? prevSelectedItems.filter((i) => i.path !== item.path)
        : [...prevSelectedItems, item]
    );
  };

  const handleItemRemove = (item) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.filter((i) => i.path !== item.path)
    );
  };

  return (
    <AppContainer>
      <FileExplorer onItemSelect={handleItemSelect} selectedItems={selectedItems} />
      <SelectedItems items={selectedItems} onRemove={handleItemRemove} />
    </AppContainer>
  );
};

export default App;
