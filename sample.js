let myPromise = new Promise((resolve, reject)=>{
    setTimeout(function(){
        resolve('success!');
    }, 250);
})

function User(){
    this.name = 'foo';   // this는 window를 부모로 하나의 객채로 window는 브라우저의 최상위 노드
    this.age = 20;       // 함수 블록 내에서 this 사용시 바로 상위의 함수 자체를 가리키게 된다
}



const pr = new Promise((resolve, reject)=>{
    reject('실패');
});

// new 생성자로 객체를 생성 -> 함수를 객체로 변경
// Promise() 는 프로미스 객체를 만들기 위한 함수로 new 생성자와 함께 쓰이며 Promise 객체 생성
// Promise 객체는 callback 함수를 인자로 받는다 해당 콜백함수의 인자는 resolve, reject를 갖는다
// resolve는 실행 성공, reject는 실패를 일으키는 코드, 인자로 성공/실패 시 

// Promise 객체는 then(), catch()를 갖는다
// then()은 resolve 시에, catch()는 reject 시에 실행될 코드를 넣어준다

pr.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})


function 아반떼2(){
    return new Promise((resolve, reject)=>{
        resolve(new Promise((resolve, reject)=>{
            resolve('이걸 꺼내볼까?');
        }))
    })
}

// resolve 는 여러번 콜백으로 들어가 있어도 최종 실행 결과를 return한다

아반떼2()
.then(data=>console.log(data))
.catch(err=>console.log(err));

// async / await -> 성공할 경우에만 처리하겠다
// 함수 내에서만 사용 가능

async function result(){
    let rst = await 아반떼2();
    console.log(rst);
}


function 제발(){
    return new Promise((resolve, reject)=>{
        resolve(꺼내줘());
    })
}

function 꺼내줘(){
    const pr = new Promise((resolve, reject)=>{
        resolve('꺼내줘')
    })

    const obj = {
        text : function(){
            return pr;
        }
    }

    return obj;
}

// 제발()
// .then(data => {return data.text()})
// .then(result => console.log(result))

async function hi(){
    const rst = await 제발();
    const result = await rst.text();
    console.log(result);
}

hi();w