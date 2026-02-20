export async function getGithubRepos() {
  try {
    const response = await fetch('https://api.github.com/users/dubba1212/repos?per_page=100&sort=updated');
    if (!response.ok) throw new Error('GitHub API request failed');
    const repos = await response.json();
    
    // Filtering and processing
    return repos
      .filter(repo => !repo.fork && !repo.name.startsWith('forage-'))
      .map(repo => ({
        id: repo.id,
        title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
        description: repo.description || 'Professional software project developed with modern technologies.',
        path: '/thumb1.jpg', // Placeholder, will be handled by UI
        tech: [repo.language, ...(repo.topics || [])].filter(Boolean),
        live: repo.homepage || '#',
        github: repo.html_url,
        skills: [repo.language, ...(repo.topics || [])].filter(Boolean),
        updatedAt: repo.updated_at
      }))
      .slice(0, 12);
  } catch (error) {
    console.error('Error fetching repos:', error);
    return [];
  }
}
