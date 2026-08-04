# LSBU ZeroDay Link Hub

The official link hub for **LSBU ZeroDay**, the student-led cybersecurity society at London South Bank University.

[View the live site](https://lsbu-zeroday.netlify.app/)

## Features

- Responsive cyber-themed interface
- Terminal-style loading screen and visual effects
- Society links, event notices, and community resources
- About page with core team profiles
- No framework or build step required

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript

## Run locally

Clone the repository and serve the project root with any static file server:

```bash
git clone https://github.com/naziulsiam/zeroday-linktree.git
cd zeroday-linktree
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000).

## Updating content

- Edit links and notices in `index.html`.
- Update society information and team profiles in `about.html`.
- Keep images and downloadable resources in the existing asset folders.
- Update styles in `style.css` and interactive behaviour in `script.js`.

## Deployment

This is a static site and can be deployed with GitHub Pages, Netlify, Vercel, or any static web host. No build command is required.

## Contributing

Suggestions from LSBU ZeroDay members are welcome through issues and pull requests.

## License

MIT
