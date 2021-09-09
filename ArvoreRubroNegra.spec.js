import { RbTree } from '../src/ArvoreRubroNegra'

describe('Arvore Rubro Negra', () => {
  let arn
  
  beforeEach(() => {
    arn = new RbTree()
  })

  it('Testezao!!!!!!!!', () => {
    arn.insert(15, 15)
    arn.insert(35, 35)
    arn.insert(10, 10)
    arn.insert(50, 50)
    arn.insert(12, 12)
    arn.insert(33, 33)
    arn.insert(5, 5)
    arn.insert(55, 55)

    arn.preOrder()

    arn.remove(50)

    console.log('============= REMOÇÂO =============')
    arn.preOrder()

    expect(true)
  })
})