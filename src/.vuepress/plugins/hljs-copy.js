/**
 *  @file highlight-copy.js
 *  @author Arron Hunt <arronjhunt@gmail.com>
 *  @copyright Copyright 2021. All rights reserved.
 */

/**
 * Adds a copy button to highlightjs code blocks
 */
export default class CopyButtonPlugin {
  /**
   * Create a new CopyButtonPlugin class instance
   * @param {Object} [options] - Functions that will be called when a copy event fires
   */
  "after:highlightElement"({ el, text }) {
    // Create the copy button and append it to the codeblock.
    let button = Object.assign(window.document.createElement("button"), {
      innerHTML: "Copy",
      className: "hljs-copy-button",
    });
    button.dataset.copied = false;
    if(el.parentElement.getElementsByClassName('hljs-copy-button').length < 1) {
      el.parentElement.classList.add("hljs-copy-wrapper");
      el.parentElement.appendChild(button);
    }

    // Add a custom proprety to the code block so that the copy button can reference and match its background-color value.
    el.parentElement.style.setProperty(
      "--hljs-theme-background",
      window.getComputedStyle(el).backgroundColor
    );

    button.onclick = function () {
      if (!navigator.clipboard) return;

      let newText = text;

      navigator.clipboard
        .writeText(newText)
        .then(function () {
          button.innerHTML = "Copied!";
          button.dataset.copied = true;

          let alert = Object.assign(window.document.createElement("div"), {
            role: "status",
            className: "hljs-copy-alert",
            innerHTML: "Copied to clipboard",
          });
          el.parentElement.appendChild(alert);

          setTimeout(() => {
            button.innerHTML = "Copy";
            button.dataset.copied = false;
            el.parentElement.removeChild(alert);
            alert = null;
          }, 2000);
        })
    };
  }
}