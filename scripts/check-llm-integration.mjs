import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const requiredText = [
  ['config.yml', '- name: LLM 可视化'],
  ['config.yml', 'url: llm/'],
  ['layouts/partials/index_profile.html', '$img.RelPermalink'],
  ['layouts/partials/index_profile.html', 'button-featured-line'],
  ['layouts/partials/index_profile.html', 'button-line-break'],
  ['layouts/partials/header.html', '$img.RelPermalink'],
  ['layouts/partials/header.html', 'site.Params.label.icon | relURL'],
  ['layouts/partials/head.html', 'default "favicon.ico" | relURL'],
  ['layouts/partials/head.html', 'default "favicon-16x16.png" | relURL'],
  ['layouts/partials/head.html', 'default "favicon-32x32.png" | relURL'],
  ['assets/css/common/profile-mode.css', '.button-featured-line'],
  ['assets/css/common/profile-mode.css', '.button-line-break'],
  ['static/llm/index.html', '大语言模型可视化'],
  ['static/llm/index.html', '/_next/static/'],
];

const requiredPaths = [
  'static/_next/static',
  'static/native.wasm',
  'static/gpt-nano-sort-model.json',
  'static/fonts/font-atlas.png',
];

const failures = [];

for (const [file, needle] of requiredText) {
  const abs = path.join(root, file);
  if (!fs.existsSync(abs)) {
    failures.push(`${file}: missing file`);
    continue;
  }

  const text = fs.readFileSync(abs, 'utf8');
  if (!text.includes(needle)) {
    failures.push(`${file}: missing "${needle}"`);
  }
}

const configText = fs.readFileSync(path.join(root, 'config.yml'), 'utf8');
const profileButtons = configText.match(/profileMode:[\s\S]*?socialIcons:/)?.[0] ?? '';
const githubButtonIdx = profileButtons.indexOf('- name: GitHub');
const llmButtonIdx = profileButtons.indexOf('- name: LLM 可视化');
if (githubButtonIdx === -1 || llmButtonIdx === -1 || llmButtonIdx < githubButtonIdx) {
  failures.push('config.yml: profile button "LLM 可视化" should appear after "GitHub" so it renders on the next row');
}

for (const rel of requiredPaths) {
  if (!fs.existsSync(path.join(root, rel))) {
    failures.push(`${rel}: missing path`);
  }
}

if (failures.length) {
  console.error('LLM integration check failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('LLM integration check passed.');
