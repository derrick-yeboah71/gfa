# Grassroots Future Alliance — Website

A refactored, multi-page website for **Grassroots Future Alliance LBG**, built with HTML, Tailwind CSS (CDN), and vanilla JavaScript. This README explains the project structure and — most importantly — **exactly which image file to replace with which real photo**, plus how to plug in real videos on the Gallery page.

---

## 1. Project Structure

```
/
├── index.html          Home
├── about.html           About Us
├── programs.html        Programs
├── projects.html        Projects
├── stories.html         Success Stories
├── gallery.html         Photo & Video Gallery (NEW)
├── donate.html          Donate
├── README.md            This file
└── assets/
    ├── css/
    │   └── style.css    All custom CSS (Tailwind CDN handles utility classes)
    ├── js/
    │   └── main.js      All JavaScript, organized into commented functions
    └── images/
        ├── home/
        ├── about/
        ├── team/
        ├── programs/
        ├── projects/
        ├── stories/
        ├── donate/
        └── gallery/
```

Every page shares the same header/nav, footer, Tailwind config, stylesheet, and script — so styling or behavior changes only need to happen in one place (`assets/css/style.css` / `assets/js/main.js`).

## 2. Organization Details Used

Pulled from the company profile you provided:

- **Legal name:** Grassroots Future Alliance LBG
- **Address:** Abiaadjei Glossmana Street, Accra, Ghana
- **Email:** grassrootsfuturealliance@gmail.com
- **Phone:** +233 50 145 8237
- **Board of Directors:** Janice John-Mitchell, Ryan Mitchel, Joyce Tweneboah Koduah, Bernard Boampong
- **Treasurer:** Charity Opoku
- **Named partners:** Touch Asamang Tamfoe NGO, Church of Christ (Sakumono, Ghana)

These now appear in the footer (every page), the About page team section, and the Home page partners section. The Mission and Vision text on the About page was also updated to match your official statements.

> **Note:** The site still shows placeholder statistics (5,000+ beneficiaries, 15+ communities, etc.) carried over from the original design. Swap these for verified numbers whenever you have them — search each page for the relevant `<h2>`/`<p>` pair to edit.

## 3. Placeholder Images — What to Replace

All images are currently AI-generated color placeholders labeled with their subject, so the layout renders correctly. **Every one should be swapped for a real photo before launch.** File names, dimensions, and locations below:

### `assets/images/home/`
| File | Used for | Suggested size |
|---|---|---|
| `hero.jpg` | Homepage hero background | 1600×900 |
| `community.jpg` | "15+ Communities" impact card | 800×600 |
| `beneficiaries.jpg` | "5000+ Beneficiaries" impact card | 800×600 |
| `transparency.jpg` | "100% Transparent" impact card | 800×600 |
| `education.jpg` | Education program preview card | 800×600 |
| `health.jpg` | Health program preview card | 800×600 |
| `livelihood.jpg` | Livelihood program preview card | 800×600 |
| `water-project.jpg` | Water Access project preview | 900×600 |
| `youth-training.jpg` | Youth Skills project preview | 900×600 |
| `community-banner.jpg` | Final CTA background | 1600×700 |

### `assets/images/about/`
`hero.jpg`, `our-story.jpg`, `mission.jpg`, `vision.jpg`, `value-community.jpg`, `value-leadership.jpg`, `value-empowerment.jpg`, `value-transparency.jpg`, `timeline-1.jpg`…`timeline-4.jpg` (2018/2020/2023/2026), `gallery-1.jpg`…`gallery-6.jpg`, `cta.jpg`

### `assets/images/team/`
`member1.jpg` – Janice John-Mitchell · `member2.jpg` – Ryan Mitchel · `member3.jpg` – Joyce Tweneboah Koduah · `member4.jpg` – Bernard Boampong · `member5.jpg` – Charity Opoku (Treasurer). Recommended: 600×800 portrait crop, consistent lighting/background.

### `assets/images/programs/`
`hero.jpg`, `education.jpg`, `health.jpg`, `livelihood.jpg` (900×500 banner per card)

### `assets/images/projects/`
`hero.jpg`, `water-access.jpg`, `youth-digital-skills.jpg`, `community-health-centers.jpg`, `sustainable-agriculture.jpg`, `gallery-1.jpg`…`gallery-3.jpg`

### `assets/images/stories/`
`hero.jpg`, `person1.jpg`…`person6.jpg` (Akosua, Joseph, Ema, Kwesi, Abena, Kofi — 500×500 square portraits), `gallery-1.jpg`…`gallery-4.jpg`

### `assets/images/donate/`
`hero.jpg`, `impact-volunteer.jpg`, `impact-partner.jpg`, `impact-fundraise.jpg`, `community-banner.jpg`

### `assets/images/gallery/`
`hero.jpg`, `photo-1.jpg`…`photo-8.jpg` (health screening, tailoring training, sewing machine handover, school supplies drive, water/sanitation workshop, environmental awareness day, CHIPS Compound support, leadership training), `video-thumb-1.jpg`…`video-thumb-3.jpg`, plus `news-1.jpg`…`news-3.jpg` used in the Home page news section.

**To replace an image:** just drop a new file into the same folder with the exact same filename (same extension), keeping close to the suggested aspect ratio so the crop looks intentional. No HTML changes needed.

## 4. Gallery Page — Videos Setup

`gallery.html` features **two sections:**

### Photos Section
8 placeholder images organized by category (community health screenings, training programs, equipment handovers, workshops). Replace each `assets/images/gallery/photo-X.jpg` with real photos. No layout or code changes needed.

### Videos Section
Three YouTube embed iframes are already in place. Each iframe currently shows a placeholder YouTube video ID:
- Video 1: `dQw4w9WgXcQ` (Health Screening Recap)
- Video 2: `VTJFcFk8BGw` (Tailoring Program Story)  
- Video 3: `9bZkp7q19f0` (Environmental Workshop)

**To plug in your own videos:**

1. Open `gallery.html` in a text editor
2. Find the line with `src="https://www.youtube.com/embed/VIDEO_ID?rel=0"`
3. Replace `VIDEO_ID` with your real YouTube video ID (found in the URL: `youtube.com/watch?v=**VIDEO_ID**`)
4. Save and refresh

Example: if your video is `youtube.com/watch?v=abc123xyz`, change the iframe src to:
```
src="https://www.youtube.com/embed/abc123xyz?rel=0"
```

To add more videos, duplicate the entire `<article>` block and update the video ID, title, and description.

If you prefer self-hosted video files (.mp4), replace the iframe with a native `<video>` tag pointing to `assets/images/gallery/video-name.mp4`.

## 5. What Was Done in This Refactor

- Split all inline `<style>` and `<script>` blocks out into `assets/css/style.css` and `assets/js/main.js`.
- Rewrote markup with semantic tags (`header`, `nav`, `main`, `section`, `article`, `footer`), heading hierarchy, and ARIA labels.
- Added `loading="lazy"` to every image except each page's hero (which uses `fetchpriority="high"` instead, since it's the first thing visitors see).
- Added meta description, Open Graph, Twitter Card, and canonical tags to every page for SEO/link-preview quality.
- Added `rel="preconnect"` for Google Fonts and Tailwind CDN, and reserved image background color to reduce layout shift.
- Added a skip-to-content link and `aria-current="page"` on active nav items for accessibility.
- Added a new **Gallery** page and nav link (desktop, mobile, and footer) across the whole site.
- Updated contact details, mission/vision copy, board member names, and named partners to match the official company profile.
- No layout, color palette, typography, or Tailwind classes were changed — the site should look identical to before, just cleaner under the hood and with real images once you drop them in.

## 6. Known Placeholders Still Worth a Look

- Donation processing (`processDonation()` in `main.js`) shows an `alert()` — wire this up to a real payment provider (Stripe, PayPal, Mobile Money, etc.) before going live.
- Social/contact icons in the footer link to `index.html` or `mailto:` — update the "Privacy Policy" and "Terms of Service" links once those pages exist.
- Homepage/Programs stats (5,000+ students, 2,000+ lives, etc.) are carried over from the original design — replace with verified figures from your own records/annual report.
#   g f a  
 