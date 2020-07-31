import React from "react";

const Paginator = ({
  pages,
  currentPage,
  onNextClick,
  onPreviousClick,
  buttonNextDisabled,
  buttonPreviusDisabled,
  currentPageActiv,
  currentPageNumber,
}) => {
  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className={`page-item ${buttonPreviusDisabled}`}>
          <a
            className="page-link"
            tabIndex="-1"
            onClick={() => onPreviousClick()}
          >
            Previous
          </a>
        </li>
        {pages.map((p) => {
          return (
            <li
              className={
                currentPageNumber === p
                  ? `page-item ${currentPageActiv}`
                  : `page-item`
              }
              key={p}
            >
              <a
                className="page-link"
                onClick={() => {
                  currentPage(p);
                }}
              >
                {p}
              </a>
            </li>
          );
        })}

        <li className={`page-item ${buttonNextDisabled}`}>
          <a
            className="page-link"
            onClick={() => {
              onNextClick();
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Paginator;
