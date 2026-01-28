const BASE_URL = 'https://api.github.com';
const USERNAME = 'HariharanG26';

// CRA / Webpack environment variable
const TOKEN = process.env.REACT_APP_GITHUB_TOKEN || '';

const headers = TOKEN
  ? { Authorization: `token ${TOKEN}` }
  : {};

export const fetchUserProfile = async () => {
  const res = await fetch(`${BASE_URL}/users/${USERNAME}`, { headers });
  if (!res.ok) throw new Error('Failed to fetch GitHub profile');
  return res.json();
};

export const fetchUserRepos = async () => {
  const res = await fetch(
    `${BASE_URL}/users/${USERNAME}/repos?per_page=100&sort=updated`,
    { headers }
  );
  if (!res.ok) throw new Error('Failed to fetch GitHub repos');
  return res.json();
};

export const fetchUserEvents = async () => {
  const res = await fetch(
    `${BASE_URL}/users/${USERNAME}/events/public?per_page=30`,
    { headers }
  );
  if (!res.ok) throw new Error('Failed to fetch GitHub events');
  return res.json();
};
