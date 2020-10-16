import { OnDestroy } from "@angular/core";
import { Observable, PartialObserver, Subscription } from "rxjs";

export abstract class WithSubscription implements OnDestroy {
  private subSink = new Subscription();

  ngOnDestroy() {
    this.subSink.unsubscribe();
  }

  protected subscribe<T>(
    observable: Observable<T>,
    observerOrNext?: PartialObserver<T> | ((value: T) => void),
    error?: (error: any) => void,
    complete?: () => void
  ): Subscription {
    if (!observable) return;

    return this.subSink.add(
      observable.subscribe({
        next: observerOrNext as any,
        error,
        complete,
      })
    );
  }

  protected dispatch<T>(observable: Observable<T>): void {
    if (!observable) return;

    this.subSink.add(observable.subscribe());
  }

  protected unsubscribe(innerSub: Subscription) {
    this.subSink.remove(innerSub);
  }
}
