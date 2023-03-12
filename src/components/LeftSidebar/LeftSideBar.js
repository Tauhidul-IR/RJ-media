
import React from 'react';

const LeftSideBar = () => {
    return (
        <div>
            <ul className="menu bg-base-100 p-2 rounded-box text-blue-600 font-bold">
                <li><a>Groups</a></li>
                <li><a>Friends</a></li>
                <li><a>Saved</a></li>
                <li><a>Most REcent</a></li>
            </ul>
        </div>
    );
};

export default LeftSideBar;