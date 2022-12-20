import React from "react";

const Sidebar = () => {
    return (
        <div className="wrapper">
            <div className="sidebar">
                <ul>
                    <li>
                        <a href="#hello">
                            <span className="icon"><i class="bi bi-speedometer"></i></span>
                            <span className="item">My Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#hello">
                            <span className="icon"><i class="bi bi-megaphone"></i></span>
                            <span className="item">Add Admission</span>
                        </a>
                    </li>
                    <li>
                        <a href="#hello">
                            <span className="icon"><i class="bi bi-card-checklist"></i></span>
                            <span className="item">Total admission</span>
                        </a>
                    </li>
                    <li>
                        <a href="#hello">
                            <span className="icon"><i class="bi bi-newspaper"></i></span>
                            <span className="item">Student Registration</span>
                        </a>
                    </li>
                    <li>
                        <a href="#hello">
                            <span className="icon"><i class="bi bi-journal-check"></i></span>
                            <span className="item">Student Results</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;