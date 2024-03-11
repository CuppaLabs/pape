const Pagination: any = ({ items, pageSize, currentPage, onPageChange }: any) => {
    const pagesCount = Math.ceil(items / pageSize); // 100/10

    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
    console.log(pages)

    return (
        <div>
            <ul className="pagination justify-content-center mt-0">
            {pages.map((page) => (
         <li
           key={page}
           className={
             page === currentPage ? 'page-item active' : 'page-item'
           }
         >
           <a className="page-link" href="javascript:;" onClick={() => onPageChange(page)}>
             {page}
           </a>
         </li>
       ))}
            </ul>
        </div>
    )
}
export const paginate = (items: any, pageNumber: any, pageSize: any) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
   };
export default Pagination