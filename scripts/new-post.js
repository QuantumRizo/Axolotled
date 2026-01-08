const fs = require('fs');
const path = require('path');

const title = process.argv[2];

if (!title) {
    console.error('Please provide a post title.');
    console.error('Usage: bun run new-post "My New Post"');
    process.exit(1);
}

const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

const date = new Date().toISOString().split('T')[0];
const filename = `${date}-${slug}.md`;
const dir = path.join(__dirname, '..', 'src', 'content', 'blog');

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

const fullPath = path.join(dir, filename);

const content = `---
title: "${title}"
date: "${date}"
description: "Brief description of the post..."
cover: "/blog/placeholder.jpg"
tags: ["general"]
author: "" # Optional
keywords: [] # Max 3
---

Write your content here...
`;

if (fs.existsSync(fullPath)) {
    console.error(`File ${filename} already exists.`);
    process.exit(1);
}

fs.writeFileSync(fullPath, content);
console.log(`Created new post: ${fullPath}`);
