# ANGULAR Component deep dive.
### Repository
https://github.com/serotonine/a-10-change-detection

### About
Build [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller) Component Deep Dive: See below links.

***

### ANGULAR 18

##### Summary
https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44116138
https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44116174
- Each Component has a `get debugOutput()` as binding value in the template.
=> By default each component is evaluated on Change Detection (`zone.js`).
  - it's why you ***should not*** set expensive calculations nor functions into template values.
  - When writing Angular code you should consider telling Angular if a certain event does not matter for change detection.
  Example: on `ngOnInt()` 2 `setTimeOut()`. The first change template bindings values the second no.
  But the Change detection run either.
  ***
  [Lesson](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44116142)
- `zone = inject(NgZone)` Service. `this.zone.runOutsideAngular(() =>{myFct})`
- The "OnPush" strategy on Component. `@Component {changeDetection: ChangeDetectionStrategy.OnPush}`.
  [Exceptions](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44116146)
- [Working with OnPush & Services](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44116172). Signal changes also lead to OnPush becoming active.
But if you ***using a Service*** your code might not work as expected if you don't use Signals.
  - The Problem With OnPush, Cross-Component Data & Not Using Signals. 
    The message-list.component is not triggered anymore because Well, because it has `ChangeDetectionStrategy.OnPush`, and therefore change detection runs if an input changes and here there is no input nor Signal.
  - [Triggering Change Detection Manually & Using RxJS Subjects](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44116174)
    `inject(ChangeDetectorRef)` + `rxJS` + `import { BehaviorSubject } from 'rxjs';` + `variable$`
  - [Introducing The async Pipe](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44116184).
- [Get rid of Zone.js](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44116190)
  If you use `Signal` or `RxJS Subjects` you don't need anymore Zone.js.
