// Assuming the task is to dynamically add social links to the portfolio card
// This script will find the .social-links div and append new social links to it

document.addEventListener('DOMContentLoaded', function() {
    // Define an array of social links with icon classes
    const socials = [
        { name: 'Twitter', url: 'https://twitter.com/whydidyouclickonthislink', iconClass: 'fab fa-twitter' },
        { name: 'GitHub', url: 'https://github.com/whydidyouclickonthislink', iconClass: 'fab fa-github' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/whydidyouclickonthislink', iconClass: 'fab fa-linkedin' },
        // Add more social links here as needed
    ];

    // Find the .social-links div in the document
    const socialLinksDiv = document.querySelector('.social-links');

    // Check if the socialLinksDiv exists
    if (socialLinksDiv) {
        // Iterate over each social link and create an anchor element with icon and text
        socials.forEach(social => {
            const link = document.createElement('a');
            link.href = social.url;
            link.target = '_blank';
            
            const icon = document.createElement('i');
            icon.className = social.iconClass;
            link.appendChild(icon);
            
            link.appendChild(document.createTextNode(social.name));
            
            socialLinksDiv.appendChild(link);
        });
    }
});
