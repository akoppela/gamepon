/*
---
 
script: Application.js
 
description: Main script of application
 
license: Public domain (http://unlicense.org).

authors: Andrey Koppel
 
requires:
  - Gamepon
  - Gamepon.Widget.*
  - Native/LSD.Native.Form
  - Native/LSD.Native.Button
  - LSD/LSD.Action.*
  - LSD/LSD.Application
  
provides:
  - Gamepon.Application
 
...
*/

Gamepon.Application = new LSD.Application(document);

// Transformations
Gamepon.Transformations = {
  'a.button': 'button',
  'a.button[type="submit"]': 'input[type="submit"]',
  'div[animation]': 'animated'
};
Gamepon.Widget.Body.prototype.options.mutations = Gamepon.Transformations;
Gamepon.Widget.Body.prototype.options.layout.options.context = 'element';

LSD.Mixin.Request.prototype.options.request.evalScripts = true;