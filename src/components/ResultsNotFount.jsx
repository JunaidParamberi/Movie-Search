import React, { useState } from "react";

const ResultsNotFount = ({ movies, searchedTvShow }) => {
  return (
    <div className="result-not-fount">
      <div>
        <h1>Sorry, No results found</h1>

        <p>
          There are no movies matching your search terms. You can suggest me
          manually
        </p>

        {searchedTvShow && (
          <p>
            There are no TV shows matching your search terms. You can suggest me
            manually
          </p>
        )}
      </div>
    </div>
  );
};

export default ResultsNotFount;
