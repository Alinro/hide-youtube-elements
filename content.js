const selectors = [
  // Collapsed Meny - Shorts
  () =>
    document.querySelector(
      "ytd-mini-guide-entry-renderer[aria-label='Shorts']"
    ),
  // Expanded Menu - Shorts
  () =>
    document
      .querySelector("[title='Shorts']")
      ?.closest("ytd-guide-entry-renderer"),
  // Expanded Menu - YouTube Music
  () =>
    document
      .querySelector("[title='YouTube Music']")
      ?.closest("ytd-guide-entry-renderer"),
  // Header with small chips containing category names
  () =>
    document
      .querySelector("ytd-feed-filter-chip-bar-renderer")
      ?.closest("#header"),
  // Shorts section (shelf)
  () =>
    document
      .querySelector("ytd-rich-shelf-renderer[is-shorts]")
      ?.closest("ytd-rich-section-renderer"),
];

const observer = new MutationObserver((mutations) => {
  // const addedNotesCount = mutations.reduce(
  //   (acc, mutation) => acc + mutation.addedNodes.length,
  //   0
  // );

  // console.time("MutationObserver" + addedNotesCount);

  const doCheck = mutations.some((mutation) => mutation.addedNodes.length);

  if (!doCheck) {
    console.log("#####", "No added nodes");
    return;
  }

  selectors.forEach((selector) => {
    const element = selector();

    if (element) {
      console.log("#####", "Removing element", element);
      element.remove();
    }
  });

  // console.timeEnd("MutationObserver" + addedNotesCount);
});

observer.observe(document.body, {
  attributes: false,
  childList: true,
  subtree: true,
});
