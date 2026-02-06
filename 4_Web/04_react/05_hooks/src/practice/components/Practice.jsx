// Practice.jsx - 부모 컴포넌트
// 전체 상태(data)를 관리하고, 자식 컴포넌트들에게 props로 전달

import { useState } from 'react';
import Input from './Input';
import Result from './Result';
import Select from './Select';

function Practice() {
  // 상태 정의 - 모든 자식이 공유하는 데이터
  // character: 선택된 캐릭터, background: 배경색, color: 글자색, content: 입력 텍스트
  const [data, setData] = useState({character: 'Aemeath', background: 'black', color: 'black', content: 'text'});

  return (
    <>
      {/* Select에 setData 전달 >> 드롭다운 변경 시 부모 상태 업데이트 */}
      <div style = {{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        <Select setData = {setData} />
      </div>

      {/* Input에 setData 전달 >> 텍스트 입력 시 부모 상태 업데이트 */}
      <div style = {{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        <Input setData = {setData} />
      </div>

      {/* Result에 data 전달 >> 상태가 바뀔 때 마다 리렌더링되어 결과 반영 */}
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        <Result data = {data} />
      </div>
    </>
  );
}

export default Practice;