
document.addEventListener('DOMContentLoaded', function() {

    const socials = [
        { name: 'Twitter', url: 'https://twitter.com/whydidyouclickonthislink', iconClass: 'fab fa-twitter' },
        { name: 'GitHub', url: 'https://github.com/whydidyouclickonthislink', iconClass: 'fab fa-github' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/whydidyouclickonthislink', iconClass: 'fab fa-linkedin' },
        // Add more social links here as needed
    ];


    const socialLinksDiv = document.querySelector('.social-links');

    if (socialLinksDiv) {
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
