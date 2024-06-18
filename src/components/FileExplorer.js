// src/components/FileExplorer.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Breadcrumb from './Breadcrumb';
import FileItem from './FileItem';
import mockData from '../mockData';

const FileExplorerContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  width: 50%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

const FileList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const FileExplorer = ({ onItemSelect, selectedItems }) => {
  const [currentPath, setCurrentPath] = useState('/');
  const [items, setItems] = useState(mockData[currentPath]);

  const handleItemClick = (item) => {
    if (item.type === 'folder') {
      const newPath = `${currentPath}${item.name}/`;
      setCurrentPath(newPath);
      setItems(mockData[newPath] || []);
    }
  };

  const handleBreadcrumbClick = (newPath) => {
    setCurrentPath(newPath);
    setItems(mockData[newPath] || []);
  };

  return (
    <FileExplorerContainer>
      <Breadcrumb path={currentPath} setPath={handleBreadcrumbClick} />
      <FileList>
        {items.map((item, index) => (
          <FileItem
            key={index}
            item={item}
            onClick={() => handleItemClick(item)}
            onSelect={() => onItemSelect(item)}
            isSelected={selectedItems.some((i) => i.path === item.path)}
          />
        ))}
      </FileList>
    </FileExplorerContainer>
  );
};

export default FileExplorer;
