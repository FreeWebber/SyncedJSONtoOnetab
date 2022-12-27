# SyncedJSONtoOnetab
Firefox Synced JSON of tabs to Onetab format

# Preamble

I found this gist https://gist.github.com/dpschen/f13399a880f1e0bf5a968a5aab6d8692 and don't undetstand how to do the third point, but I found how to get tabs in JSON, and wrote HTML-page to convert it to Onetab format.

# How to use

Open SyncedJSONtoOnetab.html in browser and just copy synced JSON of tabs to textarea and you get in output textarea Onetab formatted tabs.

## How to get synced JSON of tabs

1. Download and install "About Sync" Firefox extension
https://addons.mozilla.org/en-US/firefox/addon/about-sync/
This extension is made for debugging the Firefox Sync.

2. Navigate in Firefox to `about:sync` *(Since this is not a valid URL, a markdown link is not possible)*

3. Go to the bottom, find tabs and choose Records (table) tab

4. Choose what row you need (see clientName), select and copy all string, thats it!