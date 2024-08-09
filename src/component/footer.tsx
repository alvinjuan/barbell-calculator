import React, { useState, useEffect } from 'react';

// Footer component which fetches repo stats from GitHub.
const Footer: React.FC = () => {
  const [repoInfo, setRepoInfo] = useState([0, 0]);

  // Fetches repo information from GitHub.
  useEffect(() => {
    const fetchRepoInfo = async (): Promise<number[]> => {
      const url = 'https://api.github.com/repos/jbberinger/visual-barbell-calculator';
      const headers = new Headers({
        'Authorization': `${process.env.REACT_APP_GITHUB_AUTHORIZATION_TOKEN}`,
      });
      const result = await fetch(url, { headers: headers });
      const json = await result.json();
      return [json.stargazers_count, json.forks_count];
    };

    fetchRepoInfo().then(res => setRepoInfo(res));
  }, []);

  return null;
}

export default Footer;