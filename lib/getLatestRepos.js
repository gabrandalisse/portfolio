import axios from "axios";

const getLatestRepos = async (data, token) => {
  try {
    const username = data.githubUsername;

    const config = token
      ? {
          headers: {
            Authorization: `token ${token}`,
          },
          timeout: 4500,
        }
      : { timeout: 4500 };

    const res = await axios.get(
      `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
      config
    );

    const repos = res?.data?.items || [];
    return repos.slice(0, 6);
  } catch (err) {
    return [];
  }
};

export default getLatestRepos;
