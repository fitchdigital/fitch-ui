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

Run the following steps:
1) manually bump version on package.json
2) `npm run build` // builds the UMD build to the dist folder
3) `npm run storybook:build` // builds the storybook docs
4) commit and push all code to GitHub.
5) Tag commit with build number added on step 1
6) `git push --tags` to push the tag to github.
7) publish using `npm publish --access public`


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

* create pull down menu
```jsx
<Pulldown options={[]}/>
```
