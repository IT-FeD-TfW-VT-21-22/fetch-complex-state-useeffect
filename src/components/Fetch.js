import { useState, useEffect } from "react";

const initProfile = {
  publicRepos: null,
  website: null,
};

const Fetch = () => {
  // initalize our state variables
  const [profile, setProfile] = useState(initProfile);

  // GET method is for fetching some data
  // POST method send data to an endpoint (creating something)
  // PUT method which is used for updating something
  // DELETE method to remove something

  // function to get data from our GitHub API
  const getProfile = async () => {
    const response = await fetch("https://api.github.com/users/pickadolly");
    const json = await response.json();

    // update state with the response from GitHub API
    setProfile({
      publicRepos: json.public_repos,
      website: json.blog,
    });
  };

  // Load GitHub profile data from API when component mounts
  useEffect(() => {
    getProfile();
    // only gonna load one time when the page first mounts
  }, []);

  return (
    <div>
      <h1>Fetch data with useEffect</h1>
      <h3>{`Public repositories: ${profile.publicRepos}`}</h3>
      <h3>{`Website: ${profile.website}`}</h3>
    </div>
  );
};

export default Fetch;
