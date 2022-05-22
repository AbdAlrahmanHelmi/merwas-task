import React from "react";

import "./secondNavbar.css";

export default function SecondNavbar() {
  return (
    <div className="fixed-d-second">
      <nav className="navbar navbar-expand-lg bg-second-nav d-sm-none d-lg-block ">
        <div className="container-fluid">
          <h6 className="dropdown-toggle nav-second-link" type="button">
            Browse Categories
          </h6>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <h6
                  class="nav-link  mx-4 nav-second-link"
                  aria-current="page"
                  href="#"
                >
                  What's New
                </h6>
              </li>
              <li class="nav-item">
                <h6 class="nav-link mx-4 nav-second-link" href="#">
                  Trending
                </h6>
              </li>

              <li class="nav-item">
                <h6 class="nav-link mx-4 nav-second-link">For You</h6>
              </li>
              <li class="nav-item">
                <h6 class="nav-link mx-4 nav-second-link">Shop Products</h6>
              </li>
            </ul>
            <form class="d-flex input-search " role="search">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-search move"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
              <input
                className="search-second-nav"
                type="search"
                placeholder="Search GrabOne"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
