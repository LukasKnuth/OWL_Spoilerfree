# OWL Spoilerfree

This is a small extension for the Chrome browser which hides match-results on the [official Overwatch League page](https://overwatchleague.com/).

## Installation

Currently, the extension is only available as a ZIP archive that needs to be extracted and loaded manually.

### Install from Zip

1. Unzip the archive
2. Open Chrome and navigate to `chrome://extensions`
3. Tick the checkmark for "Developer Mode" in the top right corner
4. Click "Load unpacked extension"
5. Choose the `extension`-directory next to this file
6. The extension should show up as "OWL Spoilerfree"

**Note**: When starting chrome (at least under Windows), you'll see a small box in the top-right corner, informing you that you're running some Developer extensions and that that could cause harm to your computer. You can dismiss the box or turn off developer mode again, but that will deactivate the extension!

## Uninstalling

1. Open Chrome and navigate to `chrome://extensions`
2. Click the trashcan icon next to the "OWL Spoilerfree" extension
3. Done

## Reporting Bugs and Issues

In this projects [Bug Tracker](https://github.com/LukasKnuth/OWL_Spoilerfree/issues) you can report issues and request features. Please fill out the template with any information that is applicable!

### Can you implement/add/change X?

In general, I'm happy with the extension, _as it is_. For now, I want to focus on making this core-feature work and work well. Afterwards, suggestions may be considered for further enrichment of the extension.

## How it works

The extension registers some JavaScript code to be executed, every time you open the OWL page. Chrome calls this concept ["Content Scripts"](https://developer.chrome.com/extensions/content_scripts).

The scripts that where written for this extension monitor the DOM of the official page and make changes to it, effectively hiding the information that would spoil match-results. **This approach is very finicky** and breaks very easily, for example if the OWL page is updated with a new layout. It _is_ the easiest solution to the problem though.

When the extension (inevitably) breaks, the code will have to be changed to work again. The hope is, that Blizzard implements a spoiler-free mode as an official feature of the OWL site.

# Hacking

If you want to extend of modify the extension, here are some resources to get you started.

* [How to Bundle the extension for release](https://developer.chrome.com/extensions/packaging)

When sending in pull-requests, just make sure that your code is somewhat cleaned up and documented, as necessary.

# Copyright

This extension is provided under the [GNU GPL3.0 license](LICENSE.txt).

I am in no way associated with Blizzard Entertainment, nor Overwatch League. All rights reserved.