import React from 'react';
import { Link } from 'gatsby';

export default function Footer({ title, heading, avatar1, avatar2 }) {
  return (
    
    <div id="logo">
      <img  src={avatar1} alt="logo-fant-home" />
      <img  src={avatar2} alt="logo-fant-home-text" />
      <Link to="/">
        <h1 class="header" id="title">{heading}</h1>
      </Link>
    </div>
  );
}
