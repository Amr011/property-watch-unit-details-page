import PhotoSwipe from '/photoswipe/photoswipe.esm.js'

const options = {
  dataSource: [
    // simple image
    {
      src: 'https://source.unsplash.com/Volo9FYUAzU/1620x1080',
      width: 1620,
      height: 1080,
      alt: 'test image 1',
    },

    {
      src: 'https://source.unsplash.com/RJzHlbKf6eY/1950x1300',
      width: 1950,
      height: 1300,
      alt: 'test image 2',
    },

    // responsive image
    {
      srcset:
        'https://dummyimage.com/1500x1000/555/fff/?text=1500x1000 1500w, https://dummyimage.com/1200x800/555/fff/?text=1200x800 1200w, https://dummyimage.com/600x400/555/fff/?text=600x400 600w',
      src: 'https://dummyimage.com/1500x1000/555/fff/?text=1500x1000',
      width: 1500,
      height: 1000,
      alt: 'test image 3',
    },

    // HTML slide
    {
      html: '<div class="custom-html-slide">This is custom HTML slide. <a href="http://example.com" target="_blank" rel="nofollow">Test Link</a>.</div>',
    },
  ],
  showHideAnimationType: 'none',
}

document.querySelector('#btn-open-pswp-from-arr').onclick = () => {
  options.index = 0 // defines start slide index
  const pswp = new PhotoSwipe(options)
  pswp.init() // initializing PhotoSwipe core adds it to DOM
}
