window.addEventListener("load", function () {

    const what = Math.round(Math.random());

    const liList = document.querySelectorAll(".check>ul>li");

    liList[what].style.display = "none";


    const adTr = [
        "루피",
        "조로",
        "우솝",
        "쵸파",
        "로빈",
        "도플",
        "사보",
        "후지토라",
        "호킨스",
        "징베",
        "야마토",
        "로쿠규",
    ];

    const apTr = [
        "나미",
        "상디",
        "프랑키",
        "브룩",
        "샹크스",
        "검은수염",
        "시라호시",
        "아오키지",
        "아카이누",
        "키자루",
        "로우",
        "타시기",
        "루치",
        "스네이크맨",
        "키드",
    ];

    const adIm = [
        "로져",
        "레일리",
        "가반",
        "흰수염",
        "거프",
        "카이도",
    ];
    const apIm = [
        "센고쿠",
        "시키",
        "드래곤",
        "제트",
        "빅맘",];

    const adEt = [
        "핸콕",
        "카번",
        "버기",
        "니카",
    ];
    const apEt = [
        "에이스",
        "핸콕",
        "비비",
        "미호크",
        "오뎅",
        "우타",
    ];

    const adLimit = [
        "크로커",
        "레베카",
        "카타쿠리",
        "킹",
        "마르코",
    ]
    const apLimit = [
        "마르코",
        "에넬",
        "아인",
        "시노부",
        "레드필드",
    ]

    const adRan = [
        "죠타로",
        "료우기시키",
        "타츠마키",
    ]

    const apRan = [
        "키쿄우",
        "부릉냐",
        "미나토",
        "바쿠야",
        "히그마",
        "유카리"]


    const all = [];

    const adCheck = document.querySelector(".ad");
    const apCheck = document.querySelector(".ap");
    const trCheck = document.querySelector(".tr");
    const imCheck = document.querySelector(".im");
    const etCheck = document.querySelector(".et");
    const limitCheck = document.querySelector(".limit");
    const ranCheck = document.querySelector(".ran");
    const num = document.querySelector(".num");



    const btn = document.querySelector(".btn");
    const result = document.querySelector(".result");



    trCheck.addEventListener("change", () => {
        if (trCheck.checked) {
            if (adCheck.checked) {
                all.push(...adTr);
            }

            if (apCheck.checked) {
                all.push(...apTr);
            }
        }
        if (!adCheck.checked && !apCheck.checked) {
            all.push(adTr.concat(apTr));
        }
    });


    imCheck.addEventListener("change", () => {
        if (imCheck.checked) {
            if (adCheck.checked) {
                all.push(...adIm);
            }

            if (apCheck.checked) {
                all.push(...apIm);
            }
        }
        if (!adCheck.checked && !apCheck.checked) {
            all.push(adTr.concat(apIm));
        }
    });

    etCheck.addEventListener("change", () => {
        if (etCheck.checked) {
            if (adCheck.checked) {
                all.push(...adEt);
            }

            if (apCheck.checked) {
                all.push(...apEt);
            }
        }
        if (!adCheck.checked && !apCheck.checked) {
            all.push(adTr.concat(apEt));
        }
    });

    limitCheck.addEventListener("change", () => {
        if (limitCheck.checked) {
            if (adCheck.checked) {
                all.push(...adLimit);
            }

            if (apCheck.checked) {
                all.push(...apLimit);
            }
        }
        if (!adCheck.checked && !apCheck.checked) {
            all.push(adTr.concat(apLimit));
        }
    });

    ranCheck.addEventListener("change", () => {
        if (ranCheck.checked) {
            if (adCheck.checked) {
                all.push(...adRan);
            }

            if (apCheck.checked) {
                all.push(...apRan);
            }
        }
        if (!adCheck.checked && !apCheck.checked) {
            all.push(adTr.concat(apRan));
        }
    });


    const lastResult = (arr, el) => {
        const choosenOne = [];

        for (let i = 0; i < el; i++) {
            const randomIndex = Math.floor(Math.random() * arr.length);
            const choosen = arr[randomIndex];

            choosenOne.push(choosen);

            arr.splice(randomIndex, 1);
        }

        return choosenOne;
    }

    btn.addEventListener("click", () => {
        const numValue = parseInt(num.value); // 입력값을 정수로 파싱
        const randomSelection = lastResult(all, numValue);

        result.innerHTML = randomSelection.join(' '); // 선택한 요소를 화면에 출력
    })

})




