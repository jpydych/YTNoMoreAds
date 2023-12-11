# YouTube&trade; Ad Blocker
## Overview

This browser extension blocks advertisements on YouTube&trade; website 
by manipulating the playback rate of the video player. 
It sets the playback rate to a high value when an advertisement
is detected and returns it to the normal rate when there are no ads.


## How It Works

The ```main.js``` script continuously checks for the presence of the ```.ytp-ad-player-overlay``` 
element. When it is detected, the script increases the playback rate to speed up the ad.
It also mutes the player. Additionally, if a "Skip Ad" button is available 
(```.ytp-ad-skip-button-modern```), it clicks the button to skip the ad. 
Once the ad is over, or if no ad is detected, the playback rate is reset to 
the normal value.


## Usage

### In Firefox

Open the ```about:debugging``` page, click the This Firefox option, 
click the Load Temporary Add-on button, then select ```manifest.json``` file
of this extension (you need to download all files on your hard disk first).

__NOTE: Unfortunately, in the case of developer extensions, Firefox only allows you to load them temporarily. This means that you will need to reload the extension after restarting your browser.__

### In Chrome

Go to the Extensions page by entering ```chrome://extensions``` in a new tab. 
Enable Developer Mode by clicking the toggle switch.
Click the Load unpacked button and select this extension directory.

### In Microsoft Edge

Go to the Extensions page by entering ```edge://extensions``` in a new tab.
Enable Developer Mode by clicking the toggle switch.
Click the Load unpacked button and select this extension directory.

___TIP: To download all files at once, click the green "Code" button and then select "Download ZIP". Then unpack them.___

## Notice

Be aware that using this extension may violate YouTube's terms of service, 
and it could potentially impact content creators who rely on ad revenue. 
Use it only for learning purposes and consider supporting your favorite creators
by watching ads or using other methods. Please be aware also that the effectiveness
of this tool may vary, and it is not guaranteed to work flawlessly in all situations.


<sub>Youtube is registered trademark of Google Inc.</sub>
