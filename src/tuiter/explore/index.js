import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
    return (
        <>
            <div className={"d-flex align-items-center mb-2"}>
                <span className={"input-group me-4"}>
                    <label className={"input-group-text rounded-end rounded-pill bg-white border-start border-top border-bottom"} for={"search"}>
                        <i class="bi bi-search"></i>
                    </label>
                    <input id={"search"} className={"form-control border-0 border-top border-bottom border-end rounded-start rounded-pill"} type={"text"} placeholder={"Search Tuiter"} />
                </span>
                <i className={"fas fa-cog fa-2x text-primary"}></i>
            </div>
            <ul class="nav nav-tabs mb-2">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
            </ul>
            <div className={"position-relative"}>
                <img className={"d-block w-100"} src={`/images/starship.jpg`} alt={"spaceX starship"} />
                <span className={"ms-3 fs-1 fw-bold text-light position-absolute bottom-0 left-0"}>
                    SpaceX's Starship
                </span>
            </div>
            <PostSummaryList />
        </>
    );
};

export default ExploreComponent;