function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
      const tooltip = element.querySelector('.tooltip');
      tooltip.classList.add('show');
      setTimeout(() => {
        tooltip.classList.remove('show');
      }, 1500);
    });
  }

  var englishlangue = new ProgressBar.Circle('#english-langue', {
    color: '#323b4c',
    strokeWidth: 8,
    trailWidth: 6,
    trailColor: '#ddd',
    duration: 1400,
    easing: 'easeInOut'
  });
  englishlangue.animate(0.90); 

  var japaneselangue = new ProgressBar.Circle('#japanese-langue', {
    color: '#323b4c',
    strokeWidth: 8,
    trailWidth: 6,
    trailColor: '#ddd',
    duration: 1400,
    easing: 'easeInOut'
  });
  japaneselangue.animate(0.35);

  var spanishlangue = new ProgressBar.Circle('#spanish-langue', {
    color: '#323b4c',
    strokeWidth: 8,
    trailWidth: 6,
    trailColor: '#ddd',
    duration: 1400,
    easing: 'easeInOut'
  });
  spanishlangue.animate(0.50);

  var frenchlangue = new ProgressBar.Circle('#french-langue', {
    color: '#323b4c',
    strokeWidth: 8,
    trailWidth: 6,
    trailColor: '#ddd',
    duration: 1400,
    easing: 'easeInOut'
  });
  frenchlangue.animate(1);