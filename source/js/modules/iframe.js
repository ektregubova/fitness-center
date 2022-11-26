const video = document.querySelector('[data-video]');
const videoButton = video ? video.querySelector('[data-video-button]') : null;
const videoPoster = video ? video.querySelector('[data-video-poster]') : null;

const generateURL = () => {
  if (!video) {
    return '';
  }

  let url = video.getAttribute('data-url');
  let query = '?rel=0&showinfo=0&autoplay=1&mute=1';
  return 'https://www.youtube.com/embed/' + url + query;
};

const createIframe = () => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL());
  iframe.setAttribute('frameborder', '0');
  iframe.classList.add('gym__iframe');

  return iframe;
};

const addIframe = () => {
  if (!videoButton) {
    return;
  }

  videoButton.addEventListener('click', () => {
    let iframe = createIframe();

    videoButton.remove();
    videoPoster.remove();
    video.appendChild(iframe);
  });
};

export {addIframe};
