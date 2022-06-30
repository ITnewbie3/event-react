import React, {useState, useRef} from 'react'; // rsc 함수 , rcc 클래스

const EventInput = (promps) => {
    const input = useRef();
    const [form, setFrom] = useState({
        username : '',
        message: '',
    })
    const { username, message } = form;
         const onChange = (e) => {
        const {name, value} = e.target;
        setFrom({
        ...form,
        [name] : value // 각각의 값을 복사해줌

    } ) }
    //버튼 클릭시 실행
    const onClick = () => {
        console.log(`메세지는 ${message}이고 유저 네임은 ${username} 입니다.`);
        setFrom({
            username: '',
            message: '',
        })
        input.current.focus();
    }
    const onKeyPress = (e) => {
        if(e.key === "Enter"){
            onClick();
        }
    }
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type='text' name='username' ref={input} value={username} onChange={onChange} onKeyPress={onKeyPress} />
            <input type='text' name='message' value={message} onChange={onChange} onKeyPress={onKeyPress} />
            <button onClick={onClick}>확인</button>
        </div>
    );
}; 

export default EventInput;