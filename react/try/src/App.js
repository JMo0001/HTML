import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {useState} from 'react';

function App() {

  const [frList, setFrList] = useState(
    [
      {
        name:'싼과일',
        price:'1000원',
        count:'100g'
      },
      {
        name:'더 싼 과일',
        price:'500원',
        count:'200g'
      }
    ]
  )
  const List=()=>{
    return(
      <>
        <h1>리스트</h1>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={'/'}>홈으로</Link>
              </li>
              <li>
                <Link to={'/insert'}>추가</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <table border={1}>
            <thead>
              <tr>
                <th>이름</th>
                <th>가격</th>
                <th>단위</th>
              </tr>
            </thead>
            <tbody>
              {
                frList.map(
                  (fruit)=>{
                    return(
                      <tr>
                      <td>{fruit.name}</td>
                      <td>{fruit.price}</td>
                      <td>{fruit.count}</td>
                    </tr>
                    )
                  }
                )
              }
            </tbody>
          </table>
        </div>
      </>
    )
  }

  const [insertFruit, setInsertFruit] = useState(
    [
      {
        name:'',
        price:'',
        count:''
      }
    ]
  )

  const Insert=()=>{
    return(
      <>
        <h1>인서트</h1>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={'/'}>홈으로</Link>
              </li>
              <li>
                <Link to={'/list'}>목록</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <form>
            <div>
              <span>이름 : </span>
              <input type='text' name='name' onChange={onChange} value={insertFruit.name}></input>
            </div>
            <div>
              <span>가격 : </span>
              <input type='text' name='price' onChange={onChange} value={insertFruit.price}></input>
            </div>
            <div>
              <span>단위 : </span>
              <input type='text' name='count' onChange={onChange} value={insertFruit.count}></input>
            </div>
          </form>
          <button onClick={insertHandler}>추가하기</button>
        </div>
      </>
    )
  }
  const onChange=(e)=>{
    console.log(e.target);
    const {name, value} = e.target
    console.log(name);
    console.log(value);
    setInsertFruit(
      {...insertFruit, [name]:value}
    );

  }

  const insertHandler=()=>{
    console.log('insertHander() 실행')
    console.log(insertFruit)
    setFrList(
      [...frList, insertFruit]
    );
  }

  

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/list' element={<List/>}></Route>
          <Route path='/insert' element={<Insert/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );



}
const Home = () =>{
  return(
    <>
      <h1>홈</h1>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/list'>목록보기</Link>
              </li>
            <li>
              <Link to={'/insert'}>추가</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}







export default App;
