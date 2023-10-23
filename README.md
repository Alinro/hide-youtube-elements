# Remove YouTube Elements

Google Chrome extension to remove unwanted elements in the YouTube page.

Tested on both small and large window sizes.

## Design decisions

- Used very specific CSS selectors to avoid removing elements that are not intended to be removed
- Used mutation observers to detect changes to the DOM and remove elements as soon as they are added
- Even if an element is removed from the DOM, its selector is still checked every time because YouTube sometimes re-adds certain elements to the page

## Known limitations

- Only supports YouTube in English because aria-labels and titles are used to identify elements
- Changes to the YouTube DOM structure may break the extension

## How to install the extension

1. Clone or download the repository
1. Open Google Chrome and go to `chrome://extensions/`
1. Enable "Developer mode" in the top right corner
1. Click "Load unpacked" in the top left corner
1. Select the folder containing the extension files
