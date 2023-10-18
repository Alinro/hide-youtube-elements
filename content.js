const selectors = [
  // Collapsed Menu - Shorts button
  () =>
    document.querySelector(
      "ytd-mini-guide-entry-renderer[aria-label='Shorts']"
    ),
  // Collapsed Menu - YouTube Music button
  () =>
    document.querySelector(
      "ytd-mini-guide-entry-renderer[aria-label='YouTube Music']"
    ),
  // Expanded Menu - Shorts button
  () =>
    document
      .querySelector("[title='Shorts']")
      ?.closest("ytd-guide-entry-renderer"),
  // Expanded Menu - YouTube Music button
  () =>
    document
      .querySelector("[title='YouTube Music']")
      ?.closest("ytd-guide-entry-renderer"),
  // Expanded Menu - Your videos button
  () =>
    document
      .querySelector("[title='Your videos']")
      ?.closest("ytd-guide-entry-renderer"),
  // Expanded Menu - Your clips button
  () =>
    document
      .querySelector("[title='Your clips']")
      ?.closest("ytd-guide-entry-renderer"),
  // Expanded Menu - Explore section
  () =>
    document
      .querySelector("[title='Trending']")
      ?.closest("ytd-guide-section-renderer"),
  // Expanded Menu - More from Youtube section
  () =>
    document
      .querySelector('[title="YouTube Studio"]')
      ?.closest("ytd-guide-section-renderer"),
  // Expanded Menu - More links
  () =>
    document
      .querySelector('[title="Settings"]')
      ?.closest("ytd-guide-section-renderer"),
  // Expanded Menu - Footer
  () => document.querySelector("#footer"),
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
  // Recommended movies section (shelf)
  () =>
    document
      .querySelector("[title='Recommended Primetime movies']")
      ?.closest("ytd-rich-section-renderer"),
];

const observer = new MutationObserver((mutations) => {
  // const addedNotesCount = mutations.reduce(
  //   (acc, mutation) => acc + mutation.addedNodes.length,
  //   0
  // );

  // console.time("MutationObserver" + addedNotesCount);

  const doCheck = mutations.some((mutation) => mutation.addedNodes.length);

  // skip selector search if there are no added nodes
  if (!doCheck) {
    // console.log("#####", "No added nodes");
    return;
  }

  selectors.forEach((selector) => {
    const element = selector();

    if (element) {
      // console.log("#####", "Removing element", element);
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
