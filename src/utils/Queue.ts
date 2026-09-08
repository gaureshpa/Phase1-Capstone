
/**
 * A generic first-in-first-out (FIFO) queue.
 *
 * `T` represents the type of value stored in the queue. Using a generic
 * allows the same queue implementation to safely store strings, numbers,
 * objects, or other types without using `any`.
 */

export class Queue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    get size(): number {
        return this.items.length;
    }
}
