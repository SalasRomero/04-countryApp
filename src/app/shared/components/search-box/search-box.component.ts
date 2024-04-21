import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy{


  private debouncer:Subject<string> = new Subject<string>();
  private debouncerSubscription?:Subscription;

  @Input()
  public placeholder:string = '';

  @Output()
  public onValue : EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('txtInput')
  public txtInput!:ElementRef<HTMLInputElement>;

  @Input()
  public initialValue:string = '';

  ngOnInit(): void {
   this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( value =>
    {
      this.onDebounce.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }
  emitValue(term:string){
    if(!term) return ;
    this.onValue.emit(this.txtInput.nativeElement.value);
    //this.txtInput.nativeElement.value = '';
    //this.txtInput.nativeElement.focus;
  }

  onKeyPress(searchTerm:string){

    this.debouncer.next(searchTerm);
  }
}
