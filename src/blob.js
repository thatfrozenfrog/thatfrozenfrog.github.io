const wrapperbubble = document.getElementById("bubble-wrapper");

let index = 0;

/* -- Step 1️⃣: Create an "enum" of colors -- */

const Red = {
  One: "rgb(84, 87, 206)",
  Two: "5d56cc",
  Three: "6056cc",
  Four: "6856cc",
  Five: "6d56cb"
}


const Color = Red;

/* -- Step 2️⃣: Pick the order of colors -- */

const colors = [
  Color.One, 
  Color.Two, 
  Color.Three, 
  Color.Four, 
  Color.Five, 
  Color.Four, 
  Color.Three, 
  Color.Two
];

const animateBubble = x => {  
  const bubble = document.createElement("div");
  
  bubble.className = "bubble";
  bubble.style.left = `${x}px`;
    
  /* -- Step 3️⃣: Cycle through the colors using an index variable and the modulus (%) operator -- */
  
  bubble.style.backgroundColor = colors[index++ % (colors.length - 1)];
  
  wrapperbubble.appendChild(bubble);
  
  setTimeout(() => wrapperbubble.removeChild(bubble), 2000);
}

window.onmousemove = e => {
  if (e.clientY > window.innerHeight / 3 * 2) {
    animateBubble(e.clientX);
  }
};