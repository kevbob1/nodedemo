export class MaxHeap {
  data: number[];

  constructor(data: number[] = []) {
    this.data = [...data];
    this.buildHeap();
  }

  swap(a: number, b: number): void {
    const temp = this.data[a];
    this.data[a] = this.data[b];
    this.data[b] = temp;
  }

  heapify(i: number): void {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest: number;
    if (left <= this.data.length && this.data[left] > this.data[i]) {
      largest = left;
    } else {
      largest = i;
    }
    if (right <= this.data.length && this.data[right] > this.data[largest]) {
      largest = right;
    }
    if (largest !== i) {
      this.swap(i, largest);
      this.heapify(largest);
    }
  }

  buildHeap(): number[] {
    for (let i = Math.floor(this.data.length / 2) - 1; i >= 0; i--) {
      this.heapify(i);
    }
    console.log("final built heap: ", this.data);
    return this.data;
  }

  getHeap(): number[] {
    return this.data || [];
  }

  getMax(): number | null {
    return this.data[0] || null;
  }

  size(): number {
    return this.getHeap().length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  insert(value: number): number[] {
    this.data.push(value);
    return (this.size()-1 === 0) ? this.getHeap() : this.buildHeap();
  }

  remove(): number[] {
    if (this.size() == 0) {
        throw new Error("Heap is Empty");
    }
    const lastIdx = this.size()-1;
    this.swap(0, lastIdx);
    this.data.pop();
    return this.buildHeap();
  }
}
