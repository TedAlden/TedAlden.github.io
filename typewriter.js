/**
 * Recursive typewriter effect for writing text to an HTML element.
 * @param {Element} element - The HTML element.
 * @param {String} text - The text to typewrite.
 * @param {Number} interval - The typing interval in milliseconds.
 */
function typeWriter(element, text, interval) {
  if (text.length > 0) {
    element.append(text.charAt(0));
    text = text.substring(1, text.length);
    setTimeout(typeWriter, interval, element, text, interval);
  }
}

$(document).ready(function() {
  // Find each typewriter element and apply the typewriter effect
  $(".typewriter").each(function() {
    let text = $(this).data("typewriter-text");
    let duration = parseInt($(this).data("typewriter-duration")) || 150;
    typeWriter($(this), text, duration);
  });
});