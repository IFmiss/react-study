import Im from 'immutable'

class TestIm {
  testList () {
    const emptyList = Im.List()
    console.log('emptyList', emptyList)

    const plainArray = [1, 2, 3, 4]
    const listFromPlainArray = Im.List(plainArray)
    console.log('listFromPlainArray', listFromPlainArray)
    
    const plainSet = Im.Set([1, 2, 3, 4])
    const listFromPlainSet = Im.List(plainSet)
    console.log('listFromPlainSet', listFromPlainSet)

    console.log(Im.List.isList([1,2,3]))
    console.log(Im.List.isList(Im.List([1,2,3])))
  }
  // 测试初始化
  init () {
    this.testList()
  }
}

export default TestIm