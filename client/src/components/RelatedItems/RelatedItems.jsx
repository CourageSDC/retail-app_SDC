import React from 'react';
import styled from 'styled-components';
import CardsList from './RelatedList/CardsList';
import OutfitList from './OutfitList/OutfitList';

function RelatedItems() {
  return (
    <div id="related-items">
      <Text>
        Related Items
      </Text>
      <CardsList />
      <Text>
        Outfit List
      </Text>
      <OutfitList />
    </div>
  );
}

const Text = styled.div`
  font-size: large;
  font-weight: bold;
  text-align: center;
  background-color: #82827d;
`;

export default RelatedItems;
