const container = document.getElementById('container');
const pageFiles = ['index.html', 'index2.html', 'index3.html'];
let currentPage = 0;
let isTransitioning = false;
let accumulatedDeltaY = 0;
const scrollThreshold = 100; // Reduced scroll sensitivity
const transitionDuration = 500; // Increased transition duration

// Load pages (same as before)
function loadPage(pageFile, index) {
  return new Promise((resolve, reject) => {
    fetch(pageFile)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(html => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        let pageContent;
        if (pageFile === 'index.html') {
          pageContent = tempDiv.querySelector('#page-1').innerHTML;
        } else {
          pageContent = tempDiv.querySelector('#content-container').innerHTML;
        }

        const pageDiv = document.createElement('div');
        pageDiv.classList.add('page');
        pageDiv.id = `page-${index + 1}`;
        pageDiv.innerHTML = pageContent;

        container.appendChild(pageDiv);
        resolve();
      })
      .catch(error => {
        console.error('Fetch error:', error);
        reject(error);
      });
  });
}

function loadPages(pageFiles) {
  const promises = pageFiles.map((file, index) => loadPage(file, index));
  return Promise.all(promises);
}

document.addEventListener('DOMContentLoaded', function () {
  loadPages(pageFiles)
    .then(() => {
      container.style.width = `${pageFiles.length * 100}vw`;
    })
    .catch(error => {
      console.error('Error loading pages:', error);
    });
});

// Scroll event handling (improved)
window.addEventListener('wheel', function (event) {
  if (isTransitioning) {
    event.preventDefault();
    return;
  }

  accumulatedDeltaY += event.deltaY;

  if (Math.abs(accumulatedDeltaY) >= scrollThreshold) {
    isTransitioning = true;
    const direction = accumulatedDeltaY > 0 ? 1 : -1; // Get scroll direction
    accumulatedDeltaY = 0; // Reset accumulated scroll

    if (direction === 1 && currentPage < pageFiles.length - 1) {
      currentPage++;
    } else if (direction === -1 && currentPage > 0) {
      currentPage--;
    } else {
      isTransitioning = false;
      return; // Do nothing if at the first or last page and trying to scroll further
    }

    scrollToPage(currentPage);
  }
});

// Smooth scrolling function (improved)
function scrollToPage(pageIndex) {
  const offset = pageIndex * window.innerWidth;

  container.style.transform = `translateX(-${offset}px)`;

  // Reset after transition (timeout adjusted)
  setTimeout(() => {
    isTransitioning = false;
  }, transitionDuration); // Use transitionDuration variable
}