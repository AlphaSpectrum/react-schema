# rschema

rschema is a React component that takes the role of managing and rendering your application's schema.

#Installation

```sh
npm i rschema
```

# Example
```javascript
import {Schema} from 'rschema'

<Schema 
    type="Organization"
    data={{
        '@id': 'https://www.acme.com/#website',
        name: 'Acme, Inc.',
        url: 'https://www.acme.com'
    }}
/>
```
