My svelte component
=============
2020-05-08

This is my template for a svelte component.



It follows the guidelines exposed in the [Inject svelte in an existing html page recipe](https://github.com/lingtalfi/TheBar/blob/master/discussions/inject-svelte-in-existing-app.md).



To install and use your new component based on that template, follow the tutorial below.






Tutorial: install a new component in 5 steps
-----------


Goal: have a svelte component working, name=**MyTestComponent**, dir=**my-test-component**.

- clone my-svelte-component
- rename the dir **my-svelte-component** to **my-test-component**
- open **src/main.js** and find the expression: `window.MyComponent`,
	replace it with the expression `window.MyTestComponent`
- open **index.html** and find the expression `new MyComponent`,
	replace it with the expression `new MyTestComponent`

- open a terminal and execute the following commands: 

```bash
cd /path/to/my-test-component
npm install
npm run dev
```

The **run dev** command will build your component in the **/dist** directory and open a web server so that you can test your component with live refresh.