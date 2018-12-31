// @flow
class ImageSlider {
  constructor() {
    this.index = 0;
    this.total = 0;
    this.beginValue = 0;
    this.endValue = 0;
  }

  getIndex() {
    return this.index;
  }

  setIndex(index) {
    this.index = index;
  }

  getTotal() {
    return this.total;
  }

  setTotal(amount) {
    this.total = amount;
  }

  setBeginValue(contentOffset) {
    const { x } = contentOffset;
    this.beginValue = x;
  }

  setEndvalue(contentOffset) {
    const { x } = contentOffset;
    this.endValue = x;
  }

  returnDifference() {
    return this.endValue - this.beginValue;
  }
}

export default ImageSlider;
