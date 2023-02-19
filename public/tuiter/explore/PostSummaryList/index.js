import posts from './posts.js';
import PostSummaryListItem from './PostSummaryListItem.js';

const PostSummaryList = () => {
    let items = ``;
    for (const post of posts) {
        items += PostSummaryListItem(post);
    }
    return (`
        <ul class="list-group">
            ${items}
        </ul>
    `);
};

export default PostSummaryList;