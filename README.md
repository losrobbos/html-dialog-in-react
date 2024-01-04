# Modal dialog in React using HTML dialog element

## Features

- Close Dialog on Button click
- Close Dialog on ESC key
- Close Dialog when clicking OUTSIDE Dialog area

## Approach

This Demo uses functional components to show
how to handle a modal in a very simple way.

To access the dialog element in React we place a "ref" on it.

Now, when clicking buttons inside the dialog element,
inside the click handler function we can access the dialog. Using the ref! And can close it.

When the user hits the ESC key, the HTML dialog element
closes the dialog too. That feature is already built-in!

That's it already!

But how to handle the close of the dialog with a click
OUTSIDE the dialog area?

Here we need to use a simple, yet effective trick.

We simply put a div around the whole content of the dialog:

```
<dialog ref={refDialog} onClick={onClose}>
  <!-- This DIV wrapps ALL content inside dialog! -->
  <div>
    <h2>Bist du für den Frieden?</h2>
    ... other content ...
  </div>
</dialog>
```

Make sure, that the div covers the full area of the dialog using CSS:

```
dialog > div {
  width: 100%;
  height: 100%;
  padding: 20px; // your padding for the content here...
}
```

Let's check now the code below: 
When clicking the dialog element, we call the onClick handler of the dialog (=> onClose).

That handler will close the dialog. On ANY click, anywhere
(because the dialog spans the ENTIRE viewport!!)

```
<dialog ref={refDialog} onClick={onClose}>
  ... content ...
</dialog>
```

The onClose handler:
```
  // grab the dialog ny the ref. And close that thing...
  const onClose = () => {
    refDialog.current.close();
  };

```

Now the trick is to put an onClick handler on the div which covers the INSIDE area of the dialog. 

And PREVENT that clicks on that div are forwarded (= "propagated" as we say...) to the dialog!

```
<dialog ref={refDialog} onClick={onClose}>
  <!-- This DIV wrapps ALL content inside dialog! -->
  <!-- when clicking the INSIDE area => prevent "lifting the click up" (=propagation). So the wrapping dialog will never receive it. And we do not close the dialog -->
  <div onClick={(e) => e.stopPropagation()}>
    <h2>Bist du für den Frieden?</h2>
    ... other content ...
  </div>
</dialog>
```

Enjoy modalling around, little grasshopper...
