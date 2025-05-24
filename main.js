function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
      const tooltip = element.querySelector('.tooltip');
      tooltip.classList.add('show');
      setTimeout(() => {
        tooltip.classList.remove('show');
      }, 1500);
    });
  }