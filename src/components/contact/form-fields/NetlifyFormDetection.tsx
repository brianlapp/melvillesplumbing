import React from 'react';

export const NetlifyFormDetection = () => (
  <form name="Contact-form" netlify data-netlify-honeypot="bot-field" hidden>
    <input type="text" name="name" />
    <input type="email" name="email" />
    <input type="tel" name="phone" />
    <input type="text" name="address" />
    <textarea name="message"></textarea>
  </form>
);