
import { MaxHeap } from "./Heap";


describe('MaxHeap module', () => {

  let h : MaxHeap;

  beforeEach(() => {
    h = new MaxHeap([5,7,1,4,9,10,3]);
  });

  test("construct", ()=> {
    if (h != undefined) {
      console.log("done");
    }
  });

  test("insert", ()=> {
    h.insert(22);
    h.insert(3);
    expect(h.getMax() == 22);

  });

  test("remove", ()=> {
    const hr = h.remove();
    expect(h.getMax() === 9);
    expect(h.size() === 6)

  });

});
