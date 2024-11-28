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
  [Lesson](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44116142#overview)
- `zone = inject(NgZone)` Service. `this.zone.runOutsideAngular(() =>{myFct})`
- The "OnPush" strategy on Component. `@Component {changeDetection: ChangeDetectionStrategy.OnPush}`.
  [Exceptions](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44116146#overview)
