import React from "react";
import PropTypes from "prop-types";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

function RepoItem(repo) {
  return (
    <div className="mb-2 rounded-md card bg-blue-100 hover:bg-blue-200">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href="www.google.com">
            <FaLink className="inline mr-1" />
            {repo.repo.name}
          </a>
        </h3>
        <p className="mb-3">{repo.repo.description}</p>
        <div className="">
          <div className="mr-2 badge badge-info badge-lg">
            <FaEye className="mr=2" /> {repo.repo.watchers_count}
          </div>
          <div className="mr-2 badge badge-success badge-lg">
            <FaStar className="mr=2" /> {repo.repo.stargazers_count}
          </div>
          <div className="mr-2 badge badge-error badge-lg">
            <FaInfo className="mr=2" /> {repo.repo.open_issues}
          </div>
          <div className="mr-2 badge badge-warning badge-lg">
            <FaUtensils className="mr=2" /> {repo.repo.forks}
          </div>
        </div>
      </div>
    </div>
  );
}
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
