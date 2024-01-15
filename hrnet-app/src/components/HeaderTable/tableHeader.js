import React from 'react';

export const TableHeader = ({ itemsPerPage, totalItems, paginate, setItemsPerPage }) => {
  return (
    <div className="table-header">
    <div className="pagination-info">
        {`Showing 1 to ${Math.min(itemsPerPage, totalItems)} of ${totalItems} entries`}
      </div>
      <div className="rows-per-page">
        <label htmlFor="rowsPerPage">Show
        <select
          id="rowsPerPage"
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(parseInt(e.target.value, 10));
            paginate(1); // Revenir à la première page après le changement du nombre d'éléments par page
          }}
        > 
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          </select>
           entries</label>
      </div>

    </div>
  );
};


