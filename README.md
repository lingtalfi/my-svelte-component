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





Tutorial: install a new component in 1 step with unitool
-----------

If you are using the [universe framework](https://github.com/karayabin/universe-snapshot)
you can do all the steps described above with 1 line of code.
This requires a setup (todo only once for all) described in the [SvelteTemplateBuilder planet](https://github.com/lingtalfi/SvelteTemplateBuilder).

With that builder tool installed (and assuming the alias created), just type the following:

```bash 
sveltecompo MyTestComponent my-test-component
```




