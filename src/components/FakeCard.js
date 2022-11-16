import Skeleton from "react-loading-skeleton";

const FakeCard = () => {
    return (
        <div className="card pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            <div className="card-body loading">
                <Skeleton count={1} />
            </div>
        </div>
    )
}

export default FakeCard
