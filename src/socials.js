document.addEventListener('DOMContentLoaded', function() {

    const socials = [
        { name: 'GitHub', url: 'https://github.com/thatfrozenfrog', iconClass: 'fab fa-github' },
        { name: 'Telehack', url: 'https://telehack.com/u/suika', iconClass: 'fa-solid fa-terminal' },
        { name: 'melonaddict', url: '', iconClass: 'fab fa-discord' },
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
            link.appendChild(document.createTextNode(' '));
            link.appendChild(document.createTextNode(social.name));
            
            socialLinksDiv.appendChild(link);
        });
    }
});
