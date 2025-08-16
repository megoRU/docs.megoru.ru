import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function FooterCopyright({copyright}) {
  const parts = copyright.split(' ');
  const copyrightText = parts.slice(2).join(' ');

  return (
    <div
      className="footer__copyright"
    >
      © <BrowserOnly>{() => new Date().getFullYear()}</BrowserOnly> {copyrightText}
    </div>
  );
}
