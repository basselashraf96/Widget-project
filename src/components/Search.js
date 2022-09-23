import wikipedia from "../api/wikipedia";
import React, { useState, useEffect } from "react";
let f_initialSearch = false;
const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);
  console.log(results);
  useEffect(() => {
    const search = async () => {
      const res = await wikipedia.get("", { params: { srsearch: term } });
      setResults(res.data.query.search);
    };
    if (f_initialSearch === false) {
      search();
      f_initialSearch = true;
    } else {
      const timerId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            GO
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Search term</label>
          <input
            className="input"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
