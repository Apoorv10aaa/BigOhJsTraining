class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.cap = capacity;
    this.cache = new Map();

    this.oldest = new Node(0, 0);
    this.latest = new Node(0, 0);
    this.oldest.next = this.latest;
    this.latest.prev = this.oldest;
  }

  get(key) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      this._remove(node);
      this._insert(node);
      return node.val;
    }
    return -1;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this._remove(this.cache.get(key));
    }

    const newNode = new Node(key, value);
    this.cache.set(key, newNode);
    this._insert(newNode);

    if (this.cache.size > this.cap) {
      const lru = this.oldest.next;
      this._remove(lru);
      this.cache.delete(lru.key);
    }
  }

  _remove(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  _insert(node) {
    const prev = this.latest.prev;
    prev.next = node;
    node.prev = prev;
    node.next = this.latest;
    this.latest.prev = node;
  }
}

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 1
cache.put(3, 3);
console.log(cache.get(2)); // -1
