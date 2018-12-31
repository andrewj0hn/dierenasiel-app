// @flow
class ImageSlider {
  index: number;

  total: number;

  beginValue: number;

  endValue: number;

  constructor() {
    this.index = 0;
    this.total = 0;
    this.beginValue = 0;
    this.endValue = 0;
  }

  getIndex() {
    return this.index;
  }

  setIndex(index: number) {
    this.index = index;
  }

  getTotal() {
    return this.total;
  }

  setTotal(amount: number) {
    this.total = amount;
  }

  setBeginValue(contentOffset: Object) {
    const { x } = contentOffset;
    this.beginValue = x;
  }

  setEndvalue(contentOffset: Object) {
    const { x } = contentOffset;
    this.endValue = x;
  }

  returnDifference() {
    return this.endValue - this.beginValue;
  }
}

export default ImageSlider;
