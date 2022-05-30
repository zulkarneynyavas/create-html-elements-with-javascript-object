# Create Html Elements With Javascript Object
Create HTML elements with Javascript Object easily.


#


## EXAMPLE

### Html
```html
<div id="append-here"></div>
```

### Javascript
```javascript
document.getElementById('append-here').cewo([
    {
        'tag': 'div',
        'atts': {
            'class': 'test',
            'id': 'example'
        },
        'child': [
            {
                'tag': 'button',
                'atts': {
                    'type': 'button'
                },
                'html': 'Click me!',
                'script': {
                    'load': function(event) {
                        console.log('Button element created');
                    },
                    // You can use all Event Listeners
                    'click': function(event) {
                        document.getElementById('response').cewo([
                            {
                                'tag': 'div',
                                'html': 'test'
                            }
                        ]);
                    }
                }
            }
        ]
    },
    {
        'tag': 'div',
        'atts': {
            'id': 'response'
        },
        'script': {
            'load': function(event) {
                console.log('Response element created');
            }
        }
    },
    {
        'tag': 'div',
        'child': [
            {
                'tag': 'span',
                'child': [
                    {
                        'tag': 'ul',
                        'child': [
                            {
                                'tag': 'li',
                                'html': 'q'
                            }
                        ]
                    }
                ]
            }
        ]
    }
]);
```

### Result
```html
<div id="append-here">
    <div class="test" id="example">
        <button type="button">Click me!</button>
    </div>
    <div id="response"></div>
    <div>
        <span>
            <ul>
                <li>q</li>
            </ul>
        </span>
    </div>
</div>
```

### How do I use this without webpack, browserify?
```html
<script src="https://unpkg.com/create-html-elements-with-javascript-object"></script>
```