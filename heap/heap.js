class Heap {
  constructor(data) {
    this.data = data;
    this.compartor = (a, b) => a - b;
    this.heapify();
  }
  heapify() {
    if (this.size < 2) return;
  }
  size() {
    return this.data.length;
  }
}