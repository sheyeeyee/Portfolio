matcher = window.matchMedia('(prefers-color-scheme: dark)');
matcher.addListener(onUpdate);
onUpdate();

lightSchemeIcon = document.querySelector('link#light-mode-icon');
darkSchemeIcon = document.querySelector('link#dark-mode-icon');

function onUpdate() {
  if (matcher.matches) {
    lightSchemeIcon.remove();
    document.head.append(darkSchemeIcon);
  } else {
    document.head.append(lightSchemeIcon);
    darkSchemeIcon.remove();
  }
}