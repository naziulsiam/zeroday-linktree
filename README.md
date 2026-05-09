# 🔐 LSBU-ZeroDay Linktree

> **Official link hub for LSBU-ZeroDay** — the student-led cybersecurity society at London South Bank University.

([https://app.netlify.com/sites/lsbu-zeroday](https://lsbu-zeroday.netlify.app/))

A sleek, responsive, and cyber-themed Linktree-style page built with **vanilla HTML, CSS, and JavaScript** — designed to centralize all our socials, resources, and community links in one place.

---

## 🌐 Live Demo
👉 [https://lsbu-zeroday.netlify.app/](https://lsbu-zeroday.netlify.app/)


---

## 🚀 Features

- ✅ **HTB-inspired cyber aesthetic** with green terminal accents  
- ✅ Terminal-style loading screen  
- ✅ Responsive design (mobile & desktop)  
- ✅ Dedicated **About Us** page with core team profiles  
- ✅ Live status badge & event banner  
- ✅ Core team recruitment CTA  
- ✅ WhatsApp group integration  
- ✅ Rules & Regulations PDF support  
- ✅ Zero dependencies — fast and lightweight  

---

## 📁 Project Structure

# 🔐 LSBU-ZeroDay Linktree

> **Official link hub for LSBU-ZeroDay** — the student-led cybersecurity society at London South Bank University.

A sleek, responsive, and cyber-themed Linktree-style page built with **vanilla HTML, CSS, and JavaScript** — designed to centralize all our socials, resources, and community links in one place.

---

## 🌐 Live Demo
👉 [https://lsbu-zeroday.netlify.app/](https://lsbu-zeroday.netlify.app/)  


## 🚀 Features

- ✅ **HTB-inspired cyber aesthetic** with green terminal accents  
- ✅ Terminal-style loading screen  
- ✅ Responsive design (mobile & desktop)  
- ✅ Dedicated **About Us** page with core team profiles  
- ✅ Live status badge & event banner  
- ✅ Vulnerability reporting link  
- ✅ Core team recruitment CTA  
- ✅ WhatsApp group integration  
- ✅ Rules & Regulations PDF support  
- ✅ Zero dependencies — fast and lightweight  

## 📁 Project Structure

 
 

lsbu-zeroday-linktree/
├── public/                 # Static assets (deployed to root)
│   ├── images/             # Society & team photos
│   │   └── team/           # Core team profile pictures
│   ├── rules.pdf           # Society rules (optional)
│   └── logo.png            # LSBU-ZeroDay logo
├── index.html              # Main Linktree page
├── about.html              # Full "About Us" page
├── style.css               # Unified cyber-themed styles
└── script.js               # Loader + Easter egg 

---

## 🛠️ How to Deploy


### Option 1: Netlify
1. Push this repo to GitHub
2. Go to [Netlify](https://app.netlify.com/) → **New site from Git**
3. Choose your repo
4. **Build command**: *leave empty*  
   **Publish directory**: `public` (or root if files are at top level)
5. Deploy!

> 💡 **Note**: If you don’t use a `public/` folder, place all files (`index.html`, `images/`, etc.) at the **root** of your repo and leave the publish directory blank.

---

## 🖼️ Customization Guide

### Add Your Logo
1. Replace `public/logo.png` with your **green/white society logo** (PNG with transparency recommended).
2. Ensure it’s named `logo.png` or update the `src` in `index.html`.

### Add Team Photos
1. Place member photos in `public/images/team/` (e.g., `alex.jpg`)
2. Update `about.html` with real names, roles, and image paths.

### Update Links
Edit the `.links` section in `index.html` to point to your:
- Instagram
- LinkedIn
- Discord
- WhatsApp
- Recruitment forms
- PDF rules

### Add Rules PDF
1. Upload `rules.pdf` to `public/`
2. Link to it: `<a href="/rules.pdf">📜 Society Rules</a>`

---

## 🤝 Contributing
This project is maintained by the **LSBU-ZeroDay Core Team**.  
If you’re a member and want to suggest improvements, open an issue or PR!

---

## 📜 License
MIT License — feel free to fork and adapt for your own student society!  
*(Just credit LSBU-ZeroDay if you do!)*

---

> **Defending the future, one zero-day at a time.** 💚  
> © 2025 [LSBU-ZeroDay](https://lsbu-zeroday.netlify.app/) • London South Bank University
