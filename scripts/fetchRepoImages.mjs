import fs from 'fs';
import path from 'path';
import https from 'https';

const REPOS = ['D_portfolio', 'CloudMart-A-Multi-Cloud-DevOps-Journey-with-AI-Enhancement', '2048-game', 'Microservices-based-Campus-Visit-Survey-Application', 'GPT-Next-Web'];
const USER = 'dubba1212';
const OUTPUT_DIR = path.join(process.cwd(), 'public/projects/thumbnails');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

REPOS.forEach(repo => {
  const url = `https://opengraph.githubassets.com/1/dubba1212/${repo}`;
  const filePath = path.join(OUTPUT_DIR, `${repo}.png`);
  
  https.get(url, (res) => {
    const file = fs.createWriteStream(filePath);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded thumbnail for ${repo}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${repo}: ${err.message}`);
  });
});
