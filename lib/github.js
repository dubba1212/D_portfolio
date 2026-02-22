export async function getGithubRepos() {
  const resumeProjects = [
    {
      id: 'ai-scheduler',
      title: 'Personal Appointment Scheduler',
      description: 'AI-powered chatbot using ChatGPT API, integrated with Google Calendar/Docs via GCP APIs.',
      path: '/projects/thumbnails/ai-scheduler.png',
      tech: ['ChatGPT API', 'GCP', 'Node.js', 'Google APIs'],
      live: '#',
      github: 'https://github.com/dubba1212',
      skills: ['AI Integration', 'Node.js', 'GCP'],
      pinned: true
    },
    {
      id: 'cloudmart',
      title: 'CloudMart AI E-Commerce',
      description: 'Multi-cloud platform with AI recommendation engine using OpenAI and AWS Bedrock.',
      path: '/projects/thumbnails/CloudMart-A-Multi-Cloud-DevOps-Journey-with-AI-Enhancement.png',
      tech: ['AWS', 'GCP', 'OpenAI', 'Bedrock', 'CI/CD'],
      live: '#',
      github: 'https://github.com/dubba1212/CloudMart-A-Multi-Cloud-DevOps-Journey-with-AI-Enhancement',
      skills: ['AWS', 'GCP', 'AI Integration', 'CI/CD'],
      pinned: true
    }
  ];

  try {
    const response = await fetch('https://api.github.com/users/dubba1212/repos?per_page=100&sort=updated');
    if (!response.ok) throw new Error('GitHub API request failed');
    const repos = await response.json();
    
    const githubRepos = repos
      .filter(repo => !repo.fork && !repo.name.startsWith('forage-') && !['CloudMart-A-Multi-Cloud-DevOps-Journey-with-AI-Enhancement'].includes(repo.name))
      .map(repo => ({
        id: repo.id,
        title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
        description: repo.description || 'GitHub repository showcasing software engineering work.',
        path: `/projects/thumbnails/${repo.name}.png`,
        remotePath: `https://opengraph.githubassets.com/1/dubba1212/${repo.name}`,
        tech: [repo.language, ...(repo.topics || [])].filter(Boolean),
        live: repo.homepage || '#',
        github: repo.html_url,
        skills: [repo.language, ...(repo.topics || [])].filter(Boolean),
        updatedAt: repo.updated_at
      }));

    return [...resumeProjects, ...githubRepos.slice(0, 10)];
  } catch (error) {
    console.error('Error fetching repos:', error);
    return resumeProjects;
  }
}
