document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.createElement('canvas');
  canvas.className = 'background-canvas';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let nodes = [];
  const numNodes = 100;
  const nodeRadius = 2;
  const maxDistance = 100;

  class Node {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 2;
      this.vy = (Math.random() - 0.5) * 2;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, nodeRadius, 0, 2 * Math.PI);
      ctx.fill();
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
  }

  function createNodes() {
    for (let i = 0; i < numNodes; i++) {
      nodes.push(new Node());
    }
  }

  function drawLines() {
    for (let i = 0; i < numNodes; i++) {
      for (let j = i + 1; j < numNodes; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(150, 150, 150, ${1 - distance / maxDistance})`;
          ctx.stroke();
        }
      }
    }
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    nodes.forEach(node => {
      node.update();
      node.draw();
    });
    drawLines();
    requestAnimationFrame(update);
  }

  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    nodes = [];
    createNodes();
  });

  createNodes();
  update();
});
