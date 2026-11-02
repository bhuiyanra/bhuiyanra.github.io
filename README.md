# Personal website: bhuiyanra.github.io

All the text on the website comes from a few simple files in the `_data` folder.
To change the website, edit one of these files on GitHub and save. The site
updates by itself in about 1–2 minutes.

## Which file changes what

| What you want to change | File to edit |
|---|---|
| Name, short intro, links, job market box, About text, the small fact boxes | `_data/profile.yml` |
| News | `_data/news.yml` |
| Research project cards | `_data/research.yml` |
| Publications | `_data/publications.yml` |
| Experience and education | `_data/experience.yml` |
| Teaching | `_data/teaching.yml` |
| Honors, talks, service | `_data/honors.yml` |
| Photo | replace `assets/img/profile.jpg` |
| Resume and CV PDFs | replace the files in `files/` |
| Colors and fonts | top of `assets/css/style.css` |

You never need to edit `index.html`.

## How to edit a file on GitHub

1. Open the repository on github.com and click the file (for example `_data/news.yml`).
2. Click the pencil icon (Edit).
3. Make your change, then click **Commit changes**.
4. Wait 1–2 minutes and refresh your website.

## Examples

**Add a news item** (put it at the top of `_data/news.yml`):

```yaml
- date: Dec 2026
  text: Our paper was accepted to **WACV 2027**!
```

**Add a publication** (put it at the top of `_data/publications.yml`):

```yaml
- title: "Your Paper Title"
  authors: Rasel Ahmed Bhuiyan, Adam Czajka
  venue: IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)
  venue_short: WACV 2027
  year: 2027
  type: conference        # journal, conference, workshop, or review
  first_author: true
  links:
    - label: Paper
      url: https://...
    - label: Code
      url: https://github.com/...
```

You can also add `award:`, `abstract:`, or `bibtex:` to any publication.
For a multi-line BibTeX entry, write `bibtex: |` and indent the lines under it.

**Update your resume or CV:** upload the new PDF to the `files` folder with the
same file name (`Rasel_Ahmed_Bhuiyan_Resume.pdf` or `Rasel_Ahmed_Bhuiyan_CV.pdf`).
GitHub will ask to replace the old file. The buttons on the site keep working.

**Change your photo:** upload a square photo named `profile.jpg` into
`assets/img/`. It replaces the placeholder.

## Rules that prevent errors

- Keep the spaces at the start of each line exactly as they are. Use spaces, not tabs.
- If a line contains a colon followed by a space (`: `), or starts with `*`, put the
  whole text in double quotes: `text: "Title: A Study"`.
- Each list item starts with `- ` (dash and space).
- If the site stops updating, open the **Actions** tab on GitHub. A red X means
  there is a typo in the file you just edited. The error message names the file
  and line.

## First-time setup

1. Download your current repository as a backup (Code → Download ZIP).
2. In the repository `bhuiyanra.github.io`, delete the old files.
3. Click **Add file → Upload files**, and drag in everything from this folder
   (including the `_data` and `assets` folders). Commit.
4. Go to **Settings → Pages**. Under "Build and deployment", choose
   **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
5. After 1–2 minutes, open https://bhuiyanra.github.io
