/*
---
 
script: Widget.js
 
description: Basic widget
 
license: Public domain (http://unlicense.org).

authors: Andrey Koppel
 
requires:
  - Gamepon
  - LSD/LSD.Type

provides:
  - Gamepon.Widget
 
...
*/

new LSD.Type('Widget', 'Gamepon');

// Inject native widgets into default widget pool as a fallback
LSD.Element.pool.unshift(Gamepon.Widget);