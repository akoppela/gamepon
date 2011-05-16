/*
---
 
script: Facebook.js
 
description: Body widget
 
license: Public domain (http://unlicense.org).

authors: Andrey Koppel
 
requires:
  - Gamepon.Widget
  - LSD/LSD.Native

provides:
  - Gamepon.Widget.Facebook
 
...
*/

Gamepon.Widget.Facebook = new Class({
  Extends: LSD.Native,
  
  options: {
    actions: {
      facebook: {
        enable: function(){
          var script = new Element('script', {src: 'http://connect.facebook.net/en_US/all.js#xfbml=1', type: 'text/javascript'});
          script.inject(this.element, 'after');
        },
        disable: function(){
        }
      }
    }
  }
});