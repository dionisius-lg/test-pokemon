import classnames from "classnames";
import { PaginationDots, PaginationRange, PaginationInfo } from "./../helpers/pagination";

const Pagination = ({ changePage, total, limit, current, sibling = 3 }) => {
    const pageRange = PaginationRange({ total, limit, current, sibling })
    const pagingInfo = PaginationInfo({ total, limit, current })
    const first = 1
    const last = (Math.ceil(total / limit))
    let dot = 0

    return (
        <div className="pure-g">
            <div key="pagingInfo" className="pure-u-1 pure-u-md-1-2 pure-u-lg-2-5 pagination-info">
                Showing { pagingInfo.lowest } to { pagingInfo.highest } of { pagingInfo.total } entries
            </div>

            <div className={classnames('pure-u-1 pure-u-md-1-2 pure-u-lg-3-5 pagination text-right', {'d-none': current === 0 || pageRange.length < 2})}>
                <button
                    key="pageprev"
                    className={classnames('page-link prev text-uppercase', {'d-none': current === first})}
                    onClick={() => changePage(current - 1)}>Prev
                </button>
                {pageRange.map(num => {
                    if (num === PaginationDots) {
                        dot++

                        return (
                            <button key={`pagedot${dot}`} className="page-link disabled">&#8230;</button>
                        )
                    }

                    return (
                        <button
                            type="button"
                            key={`pagenum${num}`}
                            className={classnames('page-link', {'active': num === current})}
                            {...(num !== current ? { onClick: () => {changePage(num)} } : false)}>{num}
                        </button>
                    )
                })}

                <button
                    key="pagenext"
                    className={classnames('page-link next text-uppercase', {'d-none': current === last})}
                    onClick={() => changePage(current + 1)}>Next
                </button>
            </div>
        </div>
    )
}

export default Pagination
