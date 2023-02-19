const PostSummaryListItem = (post) => {
        return (`
        <div class="list-group-item d-flex">
            <div class="me-3">
                <div class="text-secondary">${post.topic}</div>
                <div>
                    <span class="fw-bold">${post.userName}</span>
                    <i class="fas fa-check-circle"></i>
                    <span class="text-secondary"> - ${post.time}</span>
                </div>
                <span class="fw-bold text-wrap">${post.title}</span>
                ${post.tuits !== undefined ?
                    `<div class="text-secondary">${post.tuits} Tuits</div>`
                    : ``}
            </div>
            <img class="rounded-3 d-block ms-auto" width="100px" height="100px" src="${post.image}" />
        </div>
    `);
};

export default PostSummaryListItem;