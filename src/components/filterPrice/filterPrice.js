import React, { useCallback, useState } from "react";

export const Filter = () => {
  const [filterPrice, setFilterPrice] = useState(0);
  const handleFilterValue = useCallback((event) => {
    setFilterPrice(event.target.value);
  }, []);

  return (
    <>
      <div className="col-4 ml-5 mt-3">
        <p>Filter Price 0 - {filterPrice}</p>
        <form>
          <div className="form-group">
            <input
              onChange={handleFilterValue}
              type="range"
              min="0"
              step="10"
              max="100"
              className="form-control-range"
              id="formControlRange"
            />
            <input
              type="button"
              className="btn btn-primary btn-sm"
              value="Filter"
            />
          </div>
        </form>
      </div>
    </>
  );
};
