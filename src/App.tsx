import { useState } from 'react';
import { CreateProduct } from './components/CreateProduct';
import { Error } from './components/Error';
import { Loading } from './components/Loading';
import { Modal } from './components/Modal';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';
import { IProduct } from './models';


function App() {

  const { loading, error, products, addProduct } = useProducts()
  const [modal, setModal] = useState(true)



  function createHandler(product: IProduct): void {
    setModal(false)
    addProduct(product)
  }

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loading/>}
      {error && <Error error={error}/>}
      {/* <Product product={products[0]}/>
      <Product product={products[1]}/> 
      */}  
      {/* map() используется для преобразования массива объектов в react компоненты */}
      {products.map(product => <Product product={product} key={product.id}/>)}

      {modal && <Modal title="Create new product">
        <CreateProduct onCreate={createHandler}/>
      </Modal>}
      
      
    </div>
  );
}

export default App;
