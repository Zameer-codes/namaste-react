
const Shimmer = () => {
    return (
        <div className="shimmer">
                {[...Array(6)].map((_, index)=>(
                    <div key={index} className="shimmer-element"></div>
                ))}
        </div>
    )
}

export default Shimmer;