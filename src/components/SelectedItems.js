// src/components/SelectedItems.js
import React from 'react';
import styled from 'styled-components';

const SelectedItemsContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  width: 50%;
`;

const SelectedItemList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SelectedItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;

const RemoveButton = styled.button`
  background-color: red;
  margin-left: 10px;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
`;

const SelectedItems = ({ items, onRemove }) => {
  return (
    <SelectedItemsContainer>
      <h3>Selected Items</h3>
      <SelectedItemList>
        {items.map((item, index) => (
          <SelectedItem key={index}>
            {item.name}
            <RemoveButton onClick={() => onRemove(item)}>Remove</RemoveButton>
          </SelectedItem>
        ))}
      </SelectedItemList>
    </SelectedItemsContainer>
  );
};

export default SelectedItems;
