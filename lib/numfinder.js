class NumFinder {
  find(arr) {
      this.validate(arr);
      this.resetVariables();

      for (const num of arr) {
          if (num < this.smallest)
              this.smallest = num;

          if (num > this.largest)
              this.largest = num;
      }
  }

  resetVariables() {
      this.smallest = Number.POSITIVE_INFINITY;
      this.largest = Number.NEGATIVE_INFINITY;
  }
}

module.exports = NumFinder;