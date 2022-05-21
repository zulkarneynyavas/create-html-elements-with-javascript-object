# Create Elements With Object
Create elements with Javascript object easily.


#


EXAMPLE

HTML:
```html
<div id="append-here"></div>
```

JAVASCRIPT:
```javascript
document.getElementById('append-here').cewo([
    {
        'tag': 'div',
        'att': {
            'class': 'test'
        },
        'child': [
            {
                'tag': 'button',
                'att': {
                    'type': 'button'
                },
                'html': 'Click me!',
                'script': {
                    'load': function(event) {
                        console.log('Button element created');
                    },
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
        'att': {
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

RESULT:
```html
<div id="append-here">
    <div class="test">
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
