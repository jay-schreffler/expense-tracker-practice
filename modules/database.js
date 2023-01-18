//get

export const getData = 'https://x8ki-letl-twmt.n7.xano.io/api:IowF6OTv/expense'
fetch(getData)
.then((res) => res.json())
.then((data) => console.log(data))


//post

export const sendData = (obj) => {
    
    const postData = 'https://x8ki-letl-twmt.n7.xano.io/api:IowF6OTv/expense'
    fetch(postData, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
})
.then((res) => res.json())
.then((data) => data);
}

