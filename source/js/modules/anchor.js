const anchor = document.querySelector('a[data-anchor]');

function onLinkMove() {
  if (!anchor) {
    return;
  }

  anchor.addEventListener('click', function (evt) {
    evt.preventDefault();

    const blockID = anchor.getAttribute('href').substring(1);
    const block = document.getElementById(blockID);

    if (block) {
      block.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
}

export {onLinkMove};
