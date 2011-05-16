/*
---
 
script: Javascript.js
 
description: Javascript widget
 
license: Public domain (http://unlicense.org).

authors: Andrey Koppel
 
requires:
  - Gamepon.Widget
  - LSD/LSD.Native

provides:
  - Gamepon.Widget.Javascript
 
...
*/

Gamepon.Widget.Javascript = new Class({
  Extends: LSD.Native,
  
  options: {
    actions: {
      script: {
        enable: function(){
          var script = new Element('script', {src: this.attributes.href, type: 'text/javascript'});
          script.inject(this.element, 'after');
        },
        disable: function(){
        }
      }
    }
  }
});