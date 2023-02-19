import whos from "./whos.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    let items = ``;
    for (const who of whos) {
        items += WhoToFollowListItem(who);
    }
    return (`
        <ul class="list-group">
            <div class="list-group-item">
                <span class="fw-bold">Who to follow</span>
            </div>
            ${items}
        </ul>
    `);
};

export default WhoToFollowList;