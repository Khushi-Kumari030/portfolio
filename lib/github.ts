export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
}

/**
 * STRICTLY READ-ONLY GitHub helper.
 * Only makes unauthenticated GET requests to public repository endpoints.
 * Never modifies GitHub in any way.
 */
export async function getPublicRepositories(): Promise<GitHubRepo[]> {
  const username = "Khushi-Kumari030";
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "KhushiKumari-Portfolio-Viewer",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.warn(`GitHub API returned status ${res.status}. Using fallback data.`);
      return [];
    }

    const data: GitHubRepo[] = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.warn("Failed to fetch public GitHub repositories:", err);
    return [];
  }
}

export async function getPublicRepoCount(): Promise<number> {
  const username = "Khushi-Kumari030";
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "KhushiKumari-Portfolio-Viewer",
      },
      next: { revalidate: 3600 },
    });

    if (res.ok) {
      const userData = await res.json();
      if (typeof userData.public_repos === "number" && userData.public_repos > 0) {
        return userData.public_repos;
      }
    }

    // Fallback if user profile count is unavailable: fetch repos array directly
    const repos = await getPublicRepositories();
    return repos.length;
  } catch (err) {
    console.warn("Failed to fetch GitHub public repo count:", err);
    return 0;
  }
}

