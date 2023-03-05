import React from "react";
const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <>
            <div className={"list-group"}>
                <a className={"list-group-item"}>
                    <i className={"bi bi-twitter"}></i>
                </a>
                <a className={"list-group-item"}>
                    <i className={"bi bi-house"}></i>
                    <span className={"d-none d-xl-inline"}>Home</span>
                </a>
                <a className={"list-group-item active"}>
                    <i className={"bi bi-hash"}></i>
                    <span className={"d-none d-xl-inline"}>Explore</span>
                </a>
                <a className={"list-group-item"}>
                    <i className={"bi bi-bell"}></i>
                    <span className={"d-none d-xl-inline"}>Notifications</span>
                </a>
                <a className={"list-group-item"}>
                    <i className={"bi bi-envelope"}></i>
                    <span className={"d-none d-xl-inline"}>Messages</span>
                </a>
                <a className={"list-group-item"}>
                    <i className={"bi bi-bookmark"}></i>
                    <span className={"d-none d-xl-inline"}>Bookmarks</span>
                </a>
                <a className={"list-group-item"}>
                    <i className={"bi bi-list"}></i>
                    <span className={"d-none d-xl-inline"}>Lists</span>
                </a>
                <a className={"list-group-item"}>
                    <i className={"bi bi-person"}></i>
                    <span className={"d-none d-xl-inline"}>Profile</span>
                </a>
                <a className={"list-group-item"}>
                    <i className={"bi bi-three-dots"}></i>
                    <span className={"d-none d-xl-inline"}>More</span>
                </a>
            </div>
            <div className={"d-grid mt-2"}>
                <a className={"btn btn-primary btn-block rounded-pill"}>
                    Tuit</a>
            </div>
        </>
    );
};
export default NavigationSidebar;