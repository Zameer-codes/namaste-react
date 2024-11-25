
const Shimmer = () => {
    return (
        <div className="shimmer">
                {[...Array(6)].map((_, index)=>(
                    <div className="shimmer-element"></div>
                ))}
        </div>
    )
}

export default Shimmer;