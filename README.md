# What is it?

It's a small experiment with trying to get list of user's open tabs. It requires the pages to have a small tracker script, so probably you are not able to use it in practice – unless you're a Facebook engineer working on "Like it!" widget.

That page has a tracker built-in. To see it in action, just open the console and open this page a few times in new tabs – the result should be updated in real time. It is of course cross-domain, just [check a tracked page on **bzdety.comandeer.pl**](http://bzdety.comandeer.pl/tabs-tracker.html).

If you're curious how I did it – the tracker uses two techniques: [cross-tab communication via `storage` event](https://ponyfoo.com/articles/cross-tab-communication) and [communication between `iframe` and parent's window via `postMessage` API](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).

**Tested in latest Chrome and Firefox.**
