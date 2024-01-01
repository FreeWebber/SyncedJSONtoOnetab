# SyncedJSONtoOnetab
Firefox Synced JSON of tabs to Onetab format

# Preamble

I found this gist https://gist.github.com/dpschen/f13399a880f1e0bf5a968a5aab6d8692 and didn't undetstand how to do the third point, but I found how to get tabs in JSON, and wrote HTML-page to convert it to Onetab format.

# How to use

1. Clone or download this repo.
2. Open `index.html` in browser (better in Chrome-based, if too many tabs - Firefox may freeze on sometime).
3. Сopy `synced JSON` of tabs to textarea on page in section `Synced tabs JSON`.
4. Click `Convert` button! In `Export` section, in textarea must appears links in `Onetab` format for copy. In Links section must appears links in HTML.

## How to get synced JSON of tabs

1. Install "About Sync" Firefox extension
https://addons.mozilla.org/en-US/firefox/addon/about-sync/
This extension is made for debugging the Firefox Sync.

2. Navigate in Firefox to `about:sync` *(Since this is not a valid URL, a markdown link is not possible)*

3. Go to the bottom, find `tabs` row and choose `Records (table)` tab

4. Choose what row you need (see clientName), select and copy all string

# TODO

Group by days