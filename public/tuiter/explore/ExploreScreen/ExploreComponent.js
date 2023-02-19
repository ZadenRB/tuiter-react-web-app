import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
        <div class="d-flex align-items-center mb-2">
            <span class="input-group me-4">
                <label class="input-group-text rounded-end rounded-pill bg-white" for="search">
                    <i class="fas fa-search text-secondary"></i>
                </label>
                <input id="search" class="form-control rounded-start rounded-pill" type="text" placeholder="Search Tuiter" />
            </span>
            <i class="fas fa-cog fa-2x text-primary"></i>
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
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
        <div class="position-relative">
            <img class="d-block w-100" src="starship.jpg" />
            <span class="ms-3 fs-1 fw-bold position-absolute bottom-0 left-0">
                SpaceX's Starship
            </span>
        </div>
        ${PostSummaryList()}
    `);
};

export default ExploreComponent;