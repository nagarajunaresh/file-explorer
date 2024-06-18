// src/components/Breadcrumb.js
import React from 'react';
import styled from 'styled-components';

const BreadcrumbContainer = styled.div`
  margin-bottom: 10px;
  padding: 5px;
  background-color: #f1f1f1;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

const BreadcrumbSegment = styled.span`
  cursor: pointer;
  padding: 0 5px;
  &:hover {
    text-decoration: underline;
  }
`;

const Breadcrumb = ({ path, setPath }) => {
  const pathSegments = path.split('/').filter(Boolean);

  const handleBreadcrumbClick = (index) => {
    const newPath = '/' + pathSegments.slice(0, index).join('/') + '/';
    setPath(newPath);
  };

  return (
    <BreadcrumbContainer>
      {pathSegments.length > 0 ? (
        <BreadcrumbSegment onClick={() => handleBreadcrumbClick(0)}>Home /</BreadcrumbSegment>
      ) : (
        <BreadcrumbSegment>Home /</BreadcrumbSegment>
      )}
      {pathSegments.map((segment, index) => (
        <BreadcrumbSegment key={index} onClick={() => handleBreadcrumbClick(index + 1)}>
          {segment} /
        </BreadcrumbSegment>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
