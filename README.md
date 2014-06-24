d-textarea
==========

Expanding textarea for Derby.js

http://alistapart.com/article/expanding-text-areas-made-elegant/

## How to use

Javascript:

```javascript
app.component(require('d-textarea'));
```

Templates:

```html
<view name="d-textarea" text="{{#root._page.text}}"></view>
```

Or 

```html
<view name="d-textarea" id="my-textarea" name_="myform[text]" placeholder="Enter text..." class="my-class" on-keydown="textareaKeyhandler()" text="{{#root._page.text}}"></view>
```

```javascript
app.proto.textareaKeyhandler = function(event, element) { /* do something */}
```


