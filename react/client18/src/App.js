import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import PropsDataType from './R018_PropsDataType';
import PropsBoolean from './R019_PropsBoolean';
import PropsObjVal from './R020_PropsObjVal';
import PropsRequired from './R021_PropsRequired';
import PropsDefault from './R022_PropsDefault';
import PropsNode from './R023_PropsNode';
import ReactState from './R024_ReactState';
import SetState from './R025_SetState';
import ForceUpdate from './R026_ForceUpdate';
import ComponentClass from './R027_ComponentClass';
import PureComponentClass from './R028_PureComponentClass';
import ShallowEqual from './R029_ShallowEqual';
import FunctionComponent from './R030_FunctionComponent';
import ReactHook from './R031_ReactHook';
import Fragments from './R032_Fragments';
import ReturnMap from './R033_ReturnMap';
import ReactstrapAlerts from './R034_ReactstrapAlerts';
import ReactstrapBadges from './R035_ReactstrapBadges';
import ReactstrapBreadcrumbs from './R036_ReactstrapBreadcrumbs';
import ReactstrapDropdown from './R037_ReactstrapDropdown';
import ReactstrapButtonGroup from './R038_ReactstrapButtonGroup';
import ReactstrapBottons from './R039_ReactstrapBottons';
import ReactstrapCard from './R040_ReactstrapCard';
import R041 from './R041_ReactstrapCarousel';
import R042 from './R042_ReactstrapCollapse';
import R043 from './R043_ReactstrapFade';
import R044 from './R044_ReactstrapForm';
import R047 from './R047_ReactstrapListGroup';
import R048 from './R048_ReactstrapModal';
import R049 from './R049_ReactstrapNavbar';
import R050 from './R050_ReactstrapPagination';
import R051 from './R051_ReactstrapPopover';
import R052 from './R052_ReactstrapProgress';
import R053 from './R053_ReactstrapSpinner';
import R054 from './R054_ReactstrapTable';
import R055 from './R055_ReactstrapTab';

function App() {
  //  DB 에서 데이터 읽어오기
    let bno = 35;
    let title = "글제목입니다.";
    let ojb1 ={
      String:{title},
      n1:{bno},
      Boolean:false,
      Array:[0,1,8],
      o1:{react:"리엑트", twohundred:"200"},
      f1:console.log("FunctionProps: function!"),
      BooleanTrueFalse:true
    };
  return (
    <div className="App">
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <div style={{display:"none"}}>

      <PropsDataType 
        String="react"
        n1={200}
        Boolean={1==1}
        Array={[0,1,8]}
        o1={{react:"리엑트", twohundred:"200"}}
        f1={console.log("FunctionProps: function!")}
        BooleanTrueFalse = {1!=1}
      />
      <PropsDataType
        String={title}
        n1={bno}
        Boolean={1==1}
        Array={[0,1,8]}
        o1={{react:"리엑트", twohundred:"200"}}
        f1={console.log("FunctionProps: function!")}
        BooleanTrueFalse={true}
      />
      {/* <PropsDataType
        Object Json = {obj1}
      /> */}
      </div><hr/>
      <div style={{display:"none"}}>
        <PropsBoolean BooleanTrueFalse={false}></PropsBoolean>
        <PropsBoolean BooleanTrueFalse></PropsBoolean>
      </div><hr/>
      <div style={{display:"none"}}>
        <PropsObjVal Json={{react:"리액트", twohundred:200}}/>
      </div><hr/>
      <div style={{display:"none"}}>
        <PropsRequired ReactNumber={200} />
      </div><hr/>
      <div style={{display:"none"}}>
        <PropsDefault ReactNumber={200}/>
      </div><hr/>
      <div style={{display:"none"}}>
        <PropsNode>
          <span>node from App.js</span>
        </PropsNode>
      </div><hr/>
      <div style={{display:"none"}}>
        <ReactState reactString={"react"}/>
      </div><hr/>
      <div style={{display:"none"}}>
        <SetState/>
      </div><hr/>
      <div style={{display:"none"}}>
        <ForceUpdate/>
      </div><hr/>
      <div style={{display:"none"}}>
        <ComponentClass/>
      </div><hr/>
      <div style={{display:"none"}}>
        <PureComponentClass/>
      </div><hr/>
      <div style={{display:"none"}}>
        <ShallowEqual/>
      </div><hr/>
      <div style={{display:"none"}}>
        <FunctionComponent contents="[This is FunctionComponent]"/>
      </div><hr/>
      <div style={{display:"none"}}>
        <ReactHook/>
      </div><hr/>
      <div style={{display:"none"}}>
        <Fragments/>
      </div>
      <div style={{display:"none"}}>
        <ReturnMap/>
      </div>
      <div style={{display:"none"}}>
        <ReactstrapAlerts/>
      </div>
      <div style={{display:"none"}}>
        <ReactstrapBadges/>
      </div>
      <div style={{display:"none"}}>
        <ReactstrapBreadcrumbs/>
      </div>
      <div style={{display:"none"}}>
        <ReactstrapDropdown/>
      </div>
      <div style={{display:"none"}}>
        <ReactstrapButtonGroup/>
      </div>
      <div style={{display:"none"}}>
        <ReactstrapBottons/>
      </div>
      <div style={{display:"none"}}>
        <ReactstrapCard/>
      </div>
      <div style={{display:"none"}}>
        <R041/>
      </div>
      <div style={{display:"none"}}>
        <R042/>
      </div>
      <div style={{display:"none"}}>
        <R043/>
      </div>
      <div style={{display:"none"}}>
        <R044/>
      </div>
      <div style={{display:"none"}}>
        <R047/>
      </div>
      <div style={{display:"none"}}>
        <R048/>
      </div>
      <div style={{display:"none"}}>
        <R049/>
      </div>
      <div style={{display:"none"}}>
        <R050/>
      </div>
      <div style={{display:"none"}}>
        <R051/>
      </div>
      <div style={{display:"none"}}>
        <R052/>
      </div>
      <div style={{display:"none"}}>
        <R053></R053>
      </div>
      <div style={{display:"none"}}>
        <R054/>
      </div>
      <div>
        <R055></R055>
      </div>
    </div>
    
  );
}

export default App;
