const WhoToFollowListItem = (who) => {
    return (`
        <div class="list-group-item d-flex">
            <img class="rounded-circle" src="${who.avatarIcon}" width="50px" height="50px" />
            <div class="text-nowrap">
                <span class="fw-bold">${who.userName}</span>
                <i class="fas fa-check-circle"></i>
                <div>@${who.handle}</div>
            </div>
            <button class="btn btn-primary rounded-pill mt-2 mb-2 ms-auto">Follow</button>
        </div>
    `);
}

export default WhoToFollowListItem;