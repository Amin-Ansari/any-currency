import React, { useState } from "react";
import CoinCategory from "./CoinCategory";
import ItemLabels from "./ItemLabels";
import CoinsList from "./CoinsList";
import "./AllCoins.css";

const AllCoins = (props) => {
  //These states are for categories
  const [isAllSelect, updateIsAllSelect] = useState(true);
  const [isIncrementalSelect, updateIsincremental] = useState(false);
  const [isDecrementalSelect, updateIsDecremental] = useState(false);

  const allSetlected = () => {
    updateIsAllSelect(true);
    updateIsincremental(false);
    updateIsDecremental(false);
  };
  const incrementalSetlected = () => {
    updateIsincremental(true);
    updateIsAllSelect(false);
    updateIsDecremental(false);
  };
  const decrementalSetlected = () => {
    updateIsDecremental(true);
    updateIsAllSelect(false);
    updateIsincremental(false);
  };

  return (
    <>
      <CoinCategory
        onAllSelect={allSetlected}
        onIncrementalSelect={incrementalSetlected}
        onDecrementalSelect={decrementalSetlected}
        isAll={isAllSelect}
        isIncremental={isIncrementalSelect}
        decremental={isDecrementalSelect}
      />
      <div className="coins-container">
        <ItemLabels />
        <CoinsList
          tokenList={props.allTokens}
          loadingState={props.allTokens.isLoading}
          error={props.allTokens.errorMessage.toString()}
        />
      </div>
    </>
  );
};

export default AllCoins;
