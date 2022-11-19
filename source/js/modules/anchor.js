const anchor = document.querySelector('a[data-anchor]');

function onLinkMove() {
  if (!anchor) {
    return;
  }

  anchor.addEventListener('click', function (evt) {
    evt.preventDefault();

    const blockID = anchor.getAttribute('href').substring(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

export {onLinkMove};
