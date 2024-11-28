import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit} from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent implements OnInit {
  
  private _messagesService = inject(MessagesService);
  private _changeDetector = inject(ChangeDetectorRef);
  private _destroyRef = inject(DestroyRef);
  allMessages:string[] = [];
  ngOnInit(): void {
    const subscription = this._messagesService.messages$.subscribe((messages)=>{
      this.allMessages = messages;
      this._changeDetector.markForCheck();
    });
    // Clean up on removal.
    this._destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
