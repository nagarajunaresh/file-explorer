// src/components/FileItem.js
import React from 'react';
import styled from 'styled-components';

const FileItemContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e9f3ff;
  }
`;

const FileItemCheckbox = styled.input`
  margin-right: 10px;
`;

const FileItemName = styled.span`
  flex-grow: 1;
`;

const FileItemIcon = styled.span`
  width: 20px;
  margin-right: 10px;
`;

const getIcon = (type) => {
  if (type === 'folder') return '📁';
  if (type === 'file') return '📄';
};

const FileItem = ({ item, onClick, onSelect, isSelected }) => {
  return (
    <FileItemContainer onClick={onClick}>
      <FileItemCheckbox
        type="checkbox"
        checked={isSelected}
        onChange={onSelect}
        onClick={(e) => e.stopPropagation()}
      />
      <FileItemIcon>{getIcon(item.type)}</FileItemIcon>
      <FileItemName>{item.name}</FileItemName>
    </FileItemContainer>
  );
};

export default FileItem;
