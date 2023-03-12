export const initialState = {
    todo : [],
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