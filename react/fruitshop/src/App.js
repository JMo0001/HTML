import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState} from 'react';

/*
url mapping 페이지 구성
나타낼 속성들을 모아서 entity 별로 묶기
(이름, 가격, 단위) > 과일 entity  >> useState에 담기
TODO delete - 목록화면에 버튼 만들어서 1개 삭제
TODO info -> id 활용해서 보기
*/

function App() {
  // const [a1, setA1] = useState([10, 20, 30]); //저장 공간 생성
  //useState 기본모양 >> const [a,b] = useState();

  const [fruitList, setfruitList ] = useState(
    [
      {
        id:'1',
        name:'기본이름1',
        price:'기본값1',
        count:'기본단위1'
      },
      {
        id:'2',
        name:'기본이름2',
        price:'기본값2',
        count:'기본단위2'
      },
    ]
  )
    
  
  //newfurit 이름의 저장공간 생성 선언
  const[newfruit, setNewfruit]= useState(
    {
      id:'',
      name:'',
      price:'',
      count:''
    }
  );
  const insertHandler = () => {
    console.log("insertHander 함수 실행");
    console.log(newfruit);

    /*
      TODO id 중복 없게, 빈칸 없게(유효성검사)
    */ 

    // 기존 fruitList에 동일한 것이 없다면 추가
    setfruitList([...fruitList, newfruit]);
    console.log(fruitList);
  }
  const onChangeInput=(event)=>{
    console.log(event.target);
    const{name, value} = event.target
    console.log(name);
    console.log(value);
    setNewfruit({...newfruit, [name]:value});
  }

  const List = (props) => {
    // log(props.n1) 으로 찍을 필요 없게 n1으로 줄이는 법
    // const n1 =props.n1;
    // const {n1} = props;
    // const {n2} = props;
    const { n1, n2 } = props;
    console.log(n1);
    console.log(n2);

    // 리스트, 과일추가, 홈으로 가기
    return (
      <>
        <h1>리스트</h1>
        <nav>
          <ul>
            <li><Link to="/insert">과일 추가</Link></li>
            <li><Link to="/">홈으로 가기</Link></li>
          </ul>
        </nav>
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
              fruitList.map((fruit)=>{
                console.log(fruit);
                return(
                <tr>
                  <td>{fruit.name}</td>
                  <td>{fruit.price}</td>
                  <td>{fruit.count}</td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
      </>
    )
  }

  const InsertFruit = () => {
    // 과일 추가, 과일 목록 보기, 홈으로
    return (
      <>
        <h1>과일 추가</h1>
        <ul>
          <li><Link to="/list">과일 목록 보기</Link></li>
          <li><Link to="/">홈으로</Link></li>
        </ul>
        <div>
          <form>
            <div><span>이름 : </span><input type='text' onChange={onChangeInput} name='name' value={newfruit.name}></input></div>
            <div><span>가격 : </span><input type='text' onChange={onChangeInput} name='price' value={newfruit.price}></input></div>
            <div><span>단위 : </span><input type='text' onChange={onChangeInput} name='count' value={newfruit.count}></input></div>
          </form>
          <button onClick={insertHandler}>추가</button>
        </div>
      </>
    );
  }
  

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<List n1="v1" n2={1000}></List>} />
          <Route path='/insert' element={<InsertFruit />} />
          <Route path='/info' element="" />
          <Route path='/delete' element="" />
          <Route path='/update' element="" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
// 에로우 함수
const Home = () => {
  // 과일 목록 보기, 과일 추가
  return (
    <>
      <h1>홈</h1>
      <nav>
        <ul>
          <li><Link to="/list">과일목록보기</Link></li>
          <li><Link to="/insert">과일추가</Link></li>
        </ul>
      </nav>
    </>
  );
}





export default App;
