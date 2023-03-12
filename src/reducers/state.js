export const initialState = {
    todo : [
        {id: '0', todo: 'to do list 기획하기1', done: true},
        {id: '1', todo: 'to do list 기획하기2', done: false},
        {id: '2', todo: 'to do list 기획하기3', done: true},
        {id: '3', todo: 'to do list 기획하기4', done: false}
    ],
    goal : [
        {di: '0', goal: '부트캠프 수료하기', 목표일: '23.07.06'}
    ]
}

// 모달이 거짓이면 인풋 트루면 수정/삭제
// input이 거짓이면 + 사실이면 입력창
// correct가 사실이면 수정 아니면 목록추가
export const modalState = {
    modal: false,
    input: false,
    correct: false
}