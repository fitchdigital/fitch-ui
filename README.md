@fitch-digital/fitch-ui
======

## develop
```bash
npm start
```

## build
```bash
npm run build
```

## publish to NPM
```bash
npm run build && npm publish --access public
```

### publish docs to github.io
```bash
npm run build && npm run storybook:build
```


## TODO
* create tabs component
```jsx
<Tabs
    tabs={['some child', 'another child']}
    onChange={(index) => console.log('change to', index)}
>
    <SomeChildComponent />
    <AnotherChild />
</Tabs>
```
* change style of active buttons to inherit the rollover style
