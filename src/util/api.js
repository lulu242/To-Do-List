export const fetchCreate = (url, data) => {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        // 데이터 추가 상태변경
    })
    .catch((error) => {
        console.error('Error', error);
    })
}

export const fetchDelete = (url, id) => {
    fetch(`${url}${id}`, {
        method: "DELETE",
    })
    .then(() => {
        // 데이터 삭제 상태 변경
    })
    .catch((error) => {
        console.error('Error', error);
    })
}

export const fetchPatch = (url, id, data) => {
    fetch(`${url}${id}`, {
        method : "PATCH",
        headers: {
            "Content-Type" : "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        // 데이터 수정 상태 변경
    })
    .catch((error) => {
        console.error('Error', error);
    })
}


