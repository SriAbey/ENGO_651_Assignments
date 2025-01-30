# Project 0 - By Sri Raji Abeywickrama

ENGO 651 - Advanced Geospatial Topics.
The goal of Lab 0 is to become more comfortable with HTML and CSS to design and style webpages. Learn to use SCSS to write more complex stylesheets for my webpages.

## Table of Contents
* [Introduction](#introduction)
* [Pages](#pages)
* [CSS](#css)
* [SCSS](#scss)
* [JavaScript](#javascript)
* [Bootstrap](#bootstrap)
* [Final Checklist](#final-checklist)


## Introduction
Hello, I am Sri Raji Abeywickrama, and this is my personal portfolio website. This project showcases my journey in web development. I used HTML, CSS, SCSS, Bootstrap, and JavaScript to create a responsive, well-structured, and interactive website. The website includes information about myself, my skills, my past projects, and ways to contact me.

## Pages

There are five main pages in this project:

1. **index.html** (Home Page):  
   The homepage introduces me and provides an overview of my work and interests.

2. **about.html** (About Page):  
   This page gives detailed information about my background, education, and experience.

3. **skills.html** (Skills Page):  
   This page showcases my skills and includes a fun "Nostalgia" section hidden as an Easter egg.

4. **projects.html** (Projects Page):  
   This page displays a list of projects I have worked on, with brief descriptions of each.

5. **contact.html** (Contact Page):  
   This page provides ways for visitors to contact me, including a contact form.

If you navigate to the project folder and run `http-server` in the terminal, you can access the website at `http://localhost:8080`.


## CSS

The **style.css** file contains the primary styles for the website. It includes:

- A variety of CSS properties such as `font-family`, `background-color`, `border`, and `padding`.
- Multiple types of CSS selectors, including **ID selectors** (`#id`) and **class selectors** (`.class`).
- A **mobile-responsive @media query** to adjust the layout for smaller screen sizes (e.g., mobile devices).

## SCSS

The **style.scss** file contains advanced CSS features using SCSS:

- **SCSS variables** to store reusable values for colors, fonts, etc.
- **SCSS nesting** to group styles in a hierarchical manner.
- **SCSS inheritance** (using `@extend`) to create reusable styles across multiple elements.

To compile the SCSS into CSS, navigate to the `CSS` folder and run:
```bash
sass style.scss:style.css


✅ Four Different .html Pages with Navigation  
   - My project includes the following pages:
     - index.html (Home_Page)
     - about.html (About_Page)
     - skills.html (Skills_Page)
     - projects.html (Projects_Page)
     - contact.html (Contact_Page)  
   - **Met**: Navigation ensures users can reach any page from any other.

✅ List, Table, and Image  
   - List: Found in **skills.html** (unordered list).
   - Table: Found in **about.html**.
   - Image: Multiple images in **index.html**, **about.html**, and **projects.html**.  
   - **Met**

✅ At Least One Stylesheet File  
   - My project includes **style.css**.  
   - **Met**

✅ CSS Properties & Selectors  
   - CSS Properties (5+): `color`, `font`, `margin`, `padding`, `background`, etc.
   - CSS Selectors (5+): Element (`h1 {}`), Class (`.project-box {}`), ID (`#menu-icon {}`), Pseudo-class (`a:hover {}`), Attribute (`input[type="text"] {}`).  
   - **Met**

✅ Mobile-Responsive @media Query  
   - My **style.scss** includes a @media rule that changes styling for smaller screens.  
   - **Met**

✅ Bootstrap 4 & Grid Layout  
   - Bootstrap Components: Used **Bootstrap navbar** (`<nav>`).
   - Bootstrap Grid: Used **Bootstrap grid system** (e.g., form layout in **contact.html** with `<div class="row"><div class="col-md-6">`).  
   - **Met**

✅ SCSS Features  
   - SCSS Variable: `$primary-color` (for example).
   - SCSS Nesting: `.header { .logo { color: red; } }`
   - SCSS Inheritance: `@extend`.  
   - **Met**
