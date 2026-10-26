# AI Ready DSFL

This repository is used to capture the activities for the AI Ready DSFL project. It contains a document (starting as an empty ReSpec template). 

Preview of the work-in-progress document: https://geonovum-labs.github.io/ai-ready-dsfl 

[More info on the project can be added here]

## ReSpec template instructions

ReSpec is a tool for generating HTML and PDF documents from markdown content. This template helps you create and publish documents according to the Geonovum standard.

The dynamic example page of the template is [available here](https://geonovum.github.io/NL-ReSpec-template/).

---

## Getting started

Use the [*Use this template*](https://github.com/Geonovum/NL-ReSpec-template/generate?description=Geonovum+documenttemplate) button to create a new repository:

* **Owner:** choose `Geonovum` (if you have permission there).
* **Visibility:** choose **Public**.
* **Permissions?** which permissions do you need for this? If this does not work, ask an [admin](#add-new-repository-to-github-team)

> ℹ️ After creating it, you must **manually activate GitHub Pages** in the settings of your new repository:
>
> * Go to `Settings` → `Pages`
> * Under “Source”, select the `main` branch and the `/ (root)` folder
> * _optional_: you can enable “Use your GitHub Pages website” via the cogwheel so it is shown in the top-right corner.

### Add new repository to GitHub team

Ask a GitHub administrator (see [**tooling guide**](https://geonovum.github.io/handleiding-tooling/) -> *who manages what?*) to add the new repository to a team in GitHub.

---

## User instructions

To edit the document, we recommend using an IDE such as [Visual Studio Code](https://code.visualstudio.com/). It provides a preview of your markdown and helps manage your files.

### Modifying content

* Adjust settings in the configuration files (`config.js`)
* Add markdown files or modify existing ones

### Configuration files

* [`js/config.js`](js/config.js): contains document-specific settings such as title, status and authors
* [`organisation-config.js`](https://tools.geostandaarden.nl/respec/config/geonovum-config.js): contains general information about the organization

Both files are linked in [`index.html`](index.html)

### Writing content

* Use markdown or HTML
* Split content ideally by chapter into separate files
* Add new sections to `index.html` via `data-include`:

```html
<section data-include-format="markdown" data-include="ch01.md" class="informative"></section>
<section data-include-format="markdown" data-include="ch02.md"></section>
```

CSS classes can also be used in markdown via HTML:

```html
<div class="example">example</div>
```

More information:
* [Geonovum ReSpec guide](https://geonovum.github.io/handleiding-tooling/ReSpec/)
* [ReSpec documentation](https://respec.org/docs/#css-classes)

---

## Automatic checks and build

The GitHub Actions workflow runs automatically on every commit or on a GitHub Release. The following steps are performed:

1. HTML is generated with [ReSpec](https://respec.org/)
2. (optional) PDF is generated — if `alternateFormats` is set in `config.js`:

```js
alternateFormats: [
  {
    label: "pdf",
    uri: "template.pdf",
  },
]
```

3. Automatic checks are executed:

    * HTML validation
    * WCAG check (accessibility)
    * Link check (checking references)

The results are visible on the **Actions** tab of your repository.

---

## Publishing documents

When your document is ready, publish it via **GitHub Releases**:

### Check before publishing

Before creating a pre-release or release in **Actions**, check the
`Main Workflow` of the commit you want to publish. The `Snapshot + Checks`
job must be green and the summary must show
**“Publication ready: yes”**. Proof HTML and the Lychee link check are
blocking; if the status is **“Publication ready: no”**, you must first resolve the reported errors.

### Pre-release (test environment)

* Go to the **Releases** tab in your own repo
* Click **“Create a new release”**
* Specify a tag, choose a tag (e.g. `v0.1.0`) and click **“Create new tag”**
* **Check:** “This is a pre-release” at the bottom of the page
* Click **“Publish release”**

💡 This automatically publishes your document to:
https://test.docs.geostandaarden.nl/

(The exact URL is determined by values in `config.js`)

### Release (production environment)

* Go back to **Releases**
* Click **“Create a new release”**
* Specify a tag, choose a tag (e.g. `v0.1.0`) and click **“Create new tag”**
* Leave “pre-release” unchecked
* Click **“Publish release”**

💡 This automatically creates a **Pull Request** to:
[`Geonovum/docs.geostandaarden.nl`](https://github.com/Geonovum/docs.geostandaarden.nl/pulls)

After approval of the PR, the document is published at:
https://docs.geostandaarden.nl/

---

## Workflows

The workflows in `.github/workflows/` (`main.yml` and `visual-regression.yml`)
call the central workflows from
[NL-ReSpec-workflows](https://github.com/Geonovum/NL-ReSpec-workflows). Do not
modify these files: they are centrally managed and updated. Questions or
changes regarding the build, checks or publication should be directed to that repository.
