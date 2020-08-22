# useState_timing_test
Created with CodeSandbox

I created this repo, in preparation for asking the question.. 
**Why does setState not update immediately?**  

After starting my StackOverflow question... I found this stuff:

https://stackoverflow.com/questions/57092657/understanding-react-state-update-timing

The state update is asynchronous, so code immediately following the setState
call still sees the old state. To wait until it's updated, use the update
callback (the second argument to setState):

https://reactjs.org/docs/react-component.html#setstate

    Think of setState() as a request rather than an immediate command to update the 
    component. For better perceived performance, React may delay it, and then update 
    several components in a single pass. React does not guarantee that the state 
    changes are applied immediately.

    setState() does not always immediately update the component. It may batch or 
    defer the update until later. This makes reading this.state right after calling 
    setState() a potential pitfall. Instead, use componentDidUpdate or a setState 
    callback (setState(updater, callback)), either of which are guaranteed to 
    fire after the update has been applied.

https://github.com/facebook/react/issues/11527#issuecomment-360199710
    
    
