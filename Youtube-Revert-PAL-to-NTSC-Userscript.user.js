// ==UserScript==
// @name           Youtube Revert PAL to NTSC Button
// @description    Amplifies any youtube video with loudness lower than 0dB
// @include        https://www.youtube.com/*
// @icon           https://www.youtube.com/favicon.ico
// @version        1.0.0
// @grant          none
// @run-at         document-end
// ==/UserScript==

function createButton()
{
    // Get the target element
    var targetElement = document.querySelector("#bottom-row")

    const newElementHTML = '<yt-button-view-model class="style-scope ytd-menu-renderer"></yt-button-view-model>'

    // Insert the new HTML as a sibling of the target element
    targetElement.insertAdjacentHTML('afterend', newElementHTML);

    // Select the newly inserted element
    const insertedElement = targetElement.nextElementSibling;

    // Edit the inner HTML of the inserted element
    insertedElement.innerHTML = '<button-view-model class="yt-spec-button-view-model"><button class="yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-leading" aria-label="Share" title="Share" style=""><div class="yt-spec-button-shape-next__button-text-content">Revert PAL to NTSC</div><yt-touch-feedback-shape style="border-radius: inherit;"><div class="yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response" aria-hidden="true"><div class="yt-spec-touch-feedback-shape__stroke" style=""></div><div class="yt-spec-touch-feedback-shape__fill" style=""></div></div></yt-touch-feedback-shape></button></button-view-model>'


    var buttonInsideInsertedElement = insertedElement.querySelector('button');
    buttonInsideInsertedElement.onclick = main
}


function main() {
    document.querySelector('video').playbackRate = 0.95904095904;
    document.querySelector('video').preservesPitch = false;
}

function runCreateButton() {
    try {
        createButton()
    }
    catch (err){
        console.log("Element not loaded, trying again.");
        setTimeout(runCreateButton, 1000);
    }
}

// Run the createButton function when the page loads
window.addEventListener('load', runCreateButton);
