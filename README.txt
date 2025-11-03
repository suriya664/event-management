==============================================
EVENT MANAGEMENT / CONFERENCE HTML TEMPLATE
EventPro 2025 - Documentation
==============================================

Version: 1.0
Author: EventPro Template
License: Free to use
Last Updated: October 2025

==============================================
TABLE OF CONTENTS
==============================================
1. Introduction
2. Features
3. File Structure
4. Setup Instructions
5. Customization Guide
6. Browser Compatibility
7. Credits & Resources
8. Support

==============================================
1. INTRODUCTION
==============================================
EventPro is a modern, responsive HTML template designed for conferences, 
seminars, tech summits, and event management. Built with Bootstrap 5, 
it features a clean design with Indian localization (₹ currency, +91 
phone format, DD/MM/YYYY dates).

Perfect for:
- Corporate Conferences
- Tech Summits
- Educational Workshops
- Business Seminars
- Cultural Events

==============================================
2. FEATURES
==============================================

✅ RESPONSIVE DESIGN
- Mobile-first approach
- Bootstrap 5 grid system
- Works on all devices

✅ DARK MODE SUPPORT
- Toggle between light/dark themes
- Auto-saves user preference

✅ RTL SUPPORT
- Right-to-left layout for Arabic/Hebrew
- Easy language switching

✅ INDIAN LOCALIZATION
- ₹ (Rupees) currency
- +91 phone number format
- DD/MM/YYYY date format
- Indian location integration

✅ MODERN FEATURES
- Countdown timer
- Schedule filtering
- Gallery with lightbox
- AJAX contact forms
- Smooth scrolling
- Animated elements

✅ 20+ HTML PAGES
- Homepage
- About
- Speakers & Speaker Details
- Schedule
- Tickets & Pricing
- Sponsors
- Gallery
- Blog & Blog Details
- Contact
- Login & Registration
- Dashboard
- 404 Error Page
- Privacy Policy
- And more...

==============================================
3. FILE STRUCTURE
==============================================

event-template/
│
├── /assets/
│   ├── /css/
│   │   ├── style.css              → Core styling
│   │   ├── responsive.css         → Media queries
│   │   ├── dark.css               → Dark theme
│   │   └── rtl.css                → RTL support
│   │
│   ├── /js/
│   │   ├── main.js                → Core JavaScript
│   │   ├── ajax.js                → Form submissions
│   │   └── plugins.js             → Plugin initialization
│   │
│   ├── /img/                      → Images (use your own)
│   ├── /fonts/                    → Custom fonts
│   └── /vendors/                  → Third-party libraries
│
├── /pages/
│   ├── index.html                 → Homepage
│   ├── about.html                 → About page
│   ├── speakers.html              → All speakers
│   ├── speaker-details.html       → Speaker profile
│   ├── schedule.html              → Event schedule
│   ├── tickets.html               → Pricing
│   ├── sponsors.html              → Sponsors & partners
│   ├── gallery.html               → Event gallery
│   ├── blog.html                  → Blog listing
│   ├── blog-details.html          → Single blog post
│   ├── contact.html               → Contact form
│   ├── login.html                 → User login
│   ├── register.html              → Event registration
│   ├── dashboard.html             → Admin dashboard
│   ├── 404.html                   → Error page
│   └── privacy-policy.html        → Privacy policy
│
├── /partials/
│   ├── header.html                → Navbar
│   ├── footer.html                → Footer
│   ├── modals.html                → Modal dialogs
│   └── sidebar.html               → Dashboard sidebar
│
├── /docs/
│   └── documentation.html         → Full documentation
│
└── README.txt                     → This file

==============================================
4. SETUP INSTRUCTIONS
==============================================

STEP 1: EXTRACT FILES
- Extract the downloaded ZIP file to your desired location

STEP 2: OPEN IN BROWSER
- Navigate to /pages/index.html
- Open with your web browser
- No server required for basic functionality

STEP 3: CUSTOMIZE CONTENT
- Edit HTML files to change content
- Update CSS files for styling changes
- Modify JS files for functionality changes

STEP 4: DEPLOY
- Upload to your web hosting
- Configure server for contact forms
- Set up database if needed

==============================================
5. CUSTOMIZATION GUIDE
==============================================

COLORS
Edit /assets/css/style.css:
:root {
    --primary-color: #0056b3;      → Main color
    --accent-color: #ff6600;       → Accent color
    --secondary-color: #6c757d;    → Secondary color
}

LOGO
Replace navbar brand in header:
<a class="navbar-brand" href="index.html">
    <img src="your-logo.png" alt="Logo">
</a>

IMAGES
Replace image URLs throughout HTML files:
- Use your own photos
- Update speaker portraits
- Change hero backgrounds
- Add venue photos

CONTACT INFORMATION
Update footer and contact page:
- Phone: +91 98765 43210
- Email: info@eventpro.com
- Address: Your venue address

EVENT DATE
Update countdown timer in main.js:
const eventDate = new Date('2025-10-14T10:00:00').getTime();

==============================================
6. BROWSER COMPATIBILITY
==============================================

✅ Chrome (Latest)
✅ Firefox (Latest)
✅ Safari (Latest)
✅ Edge (Latest)
✅ Opera (Latest)
⚠️ IE 11+ (Limited support)

==============================================
7. CREDITS & RESOURCES
==============================================

FRAMEWORKS & LIBRARIES
- Bootstrap 5.3.0 (https://getbootstrap.com/)
- Font Awesome 6.4.0 (https://fontawesome.com/)
- jQuery 3.6.0 (https://jquery.com/)

FONTS
- Google Fonts: Poppins, Open Sans
- https://fonts.google.com/

IMAGES (FREE TO USE)
- Unsplash (https://unsplash.com/)
- Pexels (https://pexels.com/)
- Pixabay (https://pixabay.com/)
- Lorem Picsum (https://picsum.photos/)
- Placehold.co (https://placehold.co/)

IMPORTANT: Replace placeholder images with your own 
licensed images before going live.

==============================================
8. SUPPORT & DOCUMENTATION
==============================================

DOCUMENTATION
- Full HTML documentation: /docs/documentation.html
- Video tutorials: Coming soon
- FAQ: Check our website

CONTACT SUPPORT
- Email: support@eventpro.com
- Website: www.eventpro.com

UPDATES
- Check for updates regularly
- Follow us on social media
- Subscribe to newsletter

==============================================
THANK YOU FOR CHOOSING EVENTPRO TEMPLATE!
==============================================

If you find this template helpful, please:
- Rate and review
- Share with colleagues
- Provide feedback for improvements

Happy Event Planning! 🎉

==============================================
© 2025 EventPro Template. All Rights Reserved.
Made with ❤️ in India
==============================================

