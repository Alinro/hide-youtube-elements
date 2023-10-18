const getElement = (selector, closest) => {
  let element = document.querySelector(selector);

  if (closest) {
    element = element?.closest(closest);
  }

  return element;
};

const removeElement = (selector, closest) => {
  const element = getElement(selector, closest);

  if (element) {
    element.remove();
    return;
  }

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        const element = getElement(selector, closest);

        if (element) {
          element.remove();
          observer.disconnect();
        }
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
};

// #####
// Collapsed Menu
// #####

// Shorts
removeElement("ytd-mini-guide-entry-renderer[aria-label='Shorts']");

// #####
// Expanded Menu
// #####

// Shorts
removeElement("[title='Shorts']", "ytd-guide-entry-renderer");
// YouTube Music
removeElement("[title='YouTube Music']", "ytd-guide-entry-renderer");
