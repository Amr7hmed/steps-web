import ReactPaginate from "react-paginate";

function Paginate(props: {
  handlePageClick: any;
  pageCount: any;
  pagenumber: any;
}) {
  const { handlePageClick, pageCount, pagenumber } = props;

  return (
    <>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        forcePage={pagenumber - 1}
      />
    </>
  );
}

export default Paginate;
