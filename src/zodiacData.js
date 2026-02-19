export const zodiacData = {
    // 쥐띠 (Index: 0)
    0: {
        name: "쥐띠",
        color: "#4a90e2",
        // 공통 정보 (연도가 일치하지 않을 때 보여줄 기본값)
        desc: "2026년 쥐띠는 전반적으로 안정적인 흐름 속에 내실을 다지는 시기입니다.",
        detail: "붉은 말의 해(병오년)를 맞아 쥐띠는 변화보다는 수성을 택하는 것이 유리합니다. 주변의 도움을 감사히 여기고 차근차근 나아가세요.",
        secret: "동쪽에서 들려오는 소식에 귀를 기울이면 뜻밖의 행운이 찾아옵니다.",
        affiliate: {
            name: "백수정 염주",
            reason: "마음의 평온을 찾고 기운을 정화해주는 수호템입니다.",
            link: "https://link.coupang.com/a/dOKg22",
            img: "/images/affiliate_0.jpg"
        },

        // [핵심] 연도별 맞춤 데이터
        yearly: {
            1936: {
                luck: { wealth: 3, love: 4, health: 3 },
                desc: "평온 속 안정이 중심이 되는 해입니다. 재물운은 무난하며 가족의 도움이 따릅니다.",
                detail: "금전 이동은 삼가고 가족 간의 정을 나누는 데 집중하세요. 손주와의 교류가 큰 기쁨을 줍니다.",
                secret: "규칙적인 산책과 식습관 조절이 장수의 비결입니다.",
                affiliate: { name: "온열 안마기", 
                    reason: "관절과 혈압 관리가 중요한 시기, 혈액순환을 돕습니다.", 
                    link: "https://link.coupang.com/a/dOKIna", 
                    img: "/images/affiliate_01.jpg" }
            },
            1948: {
                luck: { wealth: 3, love: 4, health: 3 },
                desc: "지출 관리가 핵심인 해입니다. 투자보다는 안정적 자산 유지가 유리합니다.",
                detail: "배우자와의 관계가 돈독해지며 오해는 대화로 풀립니다. 정기 검진을 꼭 챙기세요.",
                secret: "따뜻한 차 한 잔이 건강과 여유를 가져다줍니다.",
                affiliate: { name: "프리미엄 종합비타민", 
                    reason: "심혈관 및 소화기 계통 관리에 도움을 줍니다.", 
                    link: "https://link.coupang.com/a/dOKQ8D", 
                    img: "/images/affiliate_02" }
            },
            1960: {
                luck: { wealth: 3, love: 3, health: 3 },
                desc: "서서히 상승세를 타는 해입니다. 그간의 노력이 결실로 이어집니다.",
                detail: "가족 중심의 안정적 흐름이며 자녀 문제도 원만히 해결됩니다. 꾸준한 운동이 필요합니다.",
                secret: "무리한 모험보다는 익숙한 길을 택하는 것이 길합니다.",
                affiliate: { name: "라텍스 무릎 보호대", 
                    reason: "허리와 무릎 관리가 중요한 해, 관절을 보호하세요.", 
                    link: "https://link.coupang.com/a/dOKZqF", 
                    img: "/images/affiliate_03.jpg" }
            },
            1972: {
                luck: { wealth: 4, love: 3, health: 3 },
                desc: "새로운 수입원이나 부업의 기회가 보이는 해입니다. 신중한 판단이 필요합니다.",
                detail: "부부 간 갈등은 솔직한 대화로 풀어야 합니다. 과로와 스트레스 관리가 최우선입니다.",
                secret: "잠시 숨을 고르는 명상의 시간을 가져보세요.",
                affiliate: { name: "아로마 디퓨저", 
                    reason: "스트레스 완화와 깊은 휴식을 도와줍니다.", 
                    link: "https://link.coupang.com/a/dOK4Lw", 
                    img: "/images/affiliate_04.jpg" }
            },
            1984: {
                luck: { wealth: 4, love: 4, health: 3 },
                desc: "승진이나 성과급 운이 따르는 노력의 결실을 보는 해입니다.",
                detail: "미혼자는 천생연분을, 기혼자는 배우자와의 탄탄한 미래를 설계하기 좋습니다. 지출은 절제하세요.",
                secret: "운동 루틴을 만들어 체력을 비축하는 것이 핵심입니다.",
                affiliate: { name: "가죽노트 만년필 세트", 
                    reason: "비즈니스 운이 상승하는 해, 품격을 높여줍니다.", 
                    link: "https://link.coupang.com/a/dOLa6R", 
                    img: "/images/affiliate_05.jpg" }
            },
            1996: {
                luck: { wealth: 3, love: 4, health: 4 },
                desc: "도전과 변화의 해입니다. 이직이나 창업 등 준비된 선택은 길합니다.",
                detail: "연애운이 상승세이나 감정 기복을 다스리는 것이 중요합니다. 면역력 관리에 힘쓰세요.",
                secret: "충분한 숙면이 모든 운의 원동력입니다.",
                affiliate: { name: "고속 무선충전기", 
                    reason: "활동량이 많아지는 해, 에너지를 즉시 보충하세요.", 
                    link: "https://link.coupang.com/a/dOLgl1", 
                    img: "/images/affiliate_06.jpg" }
            },
            2008: {
                luck: { wealth: 3, love: 4, health: 4 },
                desc: "계획적인 소비 습관을 들이고 친구 관계가 확장되는 해입니다.",
                detail: "풋풋한 인연이 생길 수 있으며 활동량이 늘어 활기찹니다. 사고수에만 유의하세요.",
                secret: "규칙적인 생활 패턴이 학업운과 컨디션을 돕습니다.",
                affiliate: { name: "세련된 백팩", 
                    reason: "새로운 만남과 활동을 지원하는 실용적인 아이템입니다.", 
                    link: "https://link.coupang.com/a/dOLlol", 
                    img: "/images/affiliate_07.jpg" }
            }
        }
    },
    // 1: { ...소띠 데이터 예정... }
    // 소띠 (Index: 1)
    1: {
        name: "소띠",
        color: "#5a7d6e",
        // 공통 정보 (기본값)
        desc: "2026년 소띠는 묵묵히 걸어온 길에서 결실을 맺는 안정적인 해입니다.",
        detail: "병오년의 뜨거운 기운이 소띠의 성실함과 만나 명예운이 상승합니다. 서두르지 말고 본연의 페이스를 유지하는 것이 성공의 열쇠입니다.",
        secret: "북쪽에서 귀인이 나타나 어려운 문제를 해결해 줄 징조가 보입니다.",
        affiliate: {
            name: "침향 환",
            reason: "지친 기력을 보충하고 원기를 회복하는 데 탁월한 선택입니다.",
            link: "https://link.coupang.com/a/dOLz31",
            img: "/images/affiliate_1.jpg"
        },

        // [핵심] 연도별 맞춤 데이터
        yearly: {
            1937: {
                luck: { wealth: 3, love: 5, health: 4 },
                desc: "안정 속에서 작은 변화가 따르는 해입니다. 가족의 도움으로 여유가 유지됩니다.",
                detail: "보증이나 큰 금전 거래는 절대 삼가세요. 자손과의 왕래가 잦아지며 정서적으로 매우 충만한 시기입니다.",
                secret: "가벼운 맨손 체조가 관절 건강과 운을 활발히 합니다.",
                affiliate: { name: "고급 보행 보조기", 
                    reason: "관절 관리가 중요한 시기, 안전한 거동을 돕습니다.", 
                    link: "https://link.coupang.com/a/dOLGZd", 
                    img: "/images/affiliate_11.jpg" }
            },
            1949: { // 소띠(기축생)로 교정 적용
                luck: { wealth: 4, love: 3, health: 3 },
                desc: "지출 관리가 관건인 해입니다. 예상치 못한 가족 관련 지출에 대비하세요.",
                detail: "배우자 및 형제자매와의 정이 깊어지는 시기입니다. 서운한 감정은 대화로 즉시 푸는 것이 좋습니다.",
                secret: "매일 아침 마시는 물 한 잔이 혈압과 당뇨 관리에 길합니다.",
                affiliate: { name: "디지털 혈당 측정기", 
                    reason: "정기적인 체크가 평안을 가져다주는 해입니다.", 
                    link: "https://www.coupang.com/vp/products/8375950876?itemId=23438918505&vendorItemId=90397119733&q=%EB%94%94%EC%A7%80%ED%84%B8+%ED%98%88%EB%8B%B9+%EC%B8%A1%EC%A0%95%EA%B8%B0&searchId=7beaaf031862975&sourceType=search&itemsCount=36&searchRank=1&rank=1&traceId=mlsu3cce", 
                    img: "/images/affiliate_12.jpg" }
            },
            1961: {
                luck: { wealth: 4, love: 4, health: 4 },
                desc: "그동안 쌓은 기반 덕에 안정적인 흐름을 보입니다. 투자보다 유지가 유리합니다.",
                detail: "자녀 문제로 경사스러운 소식이 들릴 수 있습니다. 집안의 화목이 재물운을 불러옵니다.",
                secret: "허리와 무릎에 무리가 가는 활동은 피하고 휴식을 즐기세요.",
                affiliate: { name: "메모리폼 허리 쿠션", 
                    reason: "척추 건강을 지키며 편안한 휴식을 도와줍니다.", 
                    link: "https://link.coupang.com/a/dOL2Pw", 
                    img: "/images/affiliate_13.jpg" }
            },
            1973: {
                luck: { wealth: 5, love: 3, health: 4 },
                desc: "새로운 기회가 열리는 해입니다. 사업이나 직장에서 긍정적인 변화가 예상됩니다.",
                detail: "확장이나 변화 시 신중함은 필수입니다. 배우자의 조언이 의외의 해결책이 될 수 있습니다.",
                secret: "스트레스성 위장 질환을 주의하세요. 규칙적인 식사가 보약입니다.",
                affiliate: { name: "양배추 진액 세트", 
                    reason: "소화기 건강을 도와 일의 효율을 높여줍니다.", 
                    link: "https://link.coupang.com/a/dOMaGa", 
                    img: "/images/affiliate_14.jpg" }
            },
            1985: {
                luck: { wealth: 4, love: 4, health: 4 },
                desc: "상승 기운이 강한 해입니다. 노력한 만큼 확실한 보상과 부수입이 따릅니다.",
                detail: "미혼자는 좋은 인연을, 기혼자는 가정이 화목해지는 운입니다. 다만 충동적인 투자는 금물입니다.",
                secret: "꾸준한 운동 루틴이 재물운을 지탱하는 체력이 됩니다.",
                affiliate: { name: "고급 요가 매트", 
                    reason: "규칙적인 운동으로 탄탄한 기운을 다질 수 있습니다.", 
                    link: "https://link.coupang.com/a/dOMghy", 
                    img: "/images/affiliate_15.jpg" }
            },
            1997: {
                luck: { wealth: 4, love: 4, health: 5 },
                desc: "도전과 선택의 해입니다. 준비된 자에게 이직이나 창업의 기회는 길하게 작용합니다.",
                detail: "연애운이 상승하며 활발한 만남이 이어집니다. 다만 피로가 누적되지 않도록 관리하세요.",
                secret: "충분한 수면이 아이디어와 집중력을 높여줍니다.",
                affiliate: { name: "기능성 경추 베개", 
                    reason: "깊은 수면을 통해 최상의 컨디션을 유지하게 돕습니다.", 
                    link: "https://link.coupang.com/a/dOMlKg", 
                    img: "/images/affiliate_16.jpg" }
            },
            2009: {
                luck: { wealth: 3, love: 4, health: 4 },
                desc: "학업과 활동의 균형이 중요한 해입니다. 설레는 새로운 인연이 생길 수 있습니다.",
                detail: "계획적인 소비 습관을 기르면 재물운의 기초가 쌓입니다. 활력이 넘치지만 부상에 유의하세요.",
                secret: "일기나 기록을 남기는 습관이 정서적 안정에 큰 도움이 됩니다.",
                affiliate: { name: "다이어트&플래너 세트", 
                    reason: "계획적인 생활과 기록을 돕는 필수 아이템입니다.", 
                    link: "https://link.coupang.com/a/dOMrXY", 
                    img: "/images/affiliate_17.jpg" }
            }
        }
    },
    // 범띠 (Index: 2)
    2: {
        name: "범띠",
        color: "#d4af37", // 황금색/호랑이 상징색
        // 공통 정보 (기본값)
        desc: "2026년 범띠는 말의 해를 만나 기운이 솟구치고 매사 활력이 넘치는 해입니다.",
        detail: "삼합(三合)의 기운이 작용하여 추진하는 일에 속도가 붙고 조력자를 만나기 쉽습니다. 다만, 기운이 너무 강해 독단적으로 결정할 수 있으니 주변과 화합하는 지혜가 필요합니다.",
        secret: "남쪽 방향으로의 이동이 운을 틔워주며, 붉은색 소품이 행운을 불러옵니다.",
        affiliate: {
            name: "참숯 음이온 매트",
            reason: "넘치는 에너지를 숙면으로 다스려 컨디션을 최상으로 유지해줍니다.",
            link: "https://link.coupang.com/a/dOMFBw",
            img: "/images/affiliate_2.jpg"
        },

        // [핵심] 연도별 맞춤 데이터
        yearly: {
            1938: {
                luck: { wealth: 4, love: 5, health: 5 },
                desc: "무리하지 않는 것이 곧 복이 되는 해입니다. 생활이 평온하게 유지됩니다.",
                detail: "타인의 부탁이나 충동적인 지출은 마음의 짐이 될 수 있으니 적절히 거절하세요. 자녀와 손주들의 방문으로 집안에 웃음꽃이 핍니다.",
                secret: "규칙적인 생활 리듬을 유지하는 것이 최고의 보약입니다.",
                affiliate: { name: "프리미엄 견과류 세트", 
                    reason: "가벼운 간식으로 두뇌 건강과 혈관 관리를 돕습니다.", 
                    link: "https://link.coupang.com/a/dOMNfL", 
                    img: "/images/affiliate_21.jpg" }
            },
            1950: {
                luck: { wealth: 5, love: 5, health: 4 },
                desc: "지출은 늘 수 있으나 계획적이라면 큰 걱정 없습니다. 배우자와의 정이 깊어집니다.",
                detail: "오랜 인연이 큰 위로가 되는 해입니다. 식습관 조절과 정기 검진을 통해 심혈관 건강을 체크하는 것이 평안의 지름길입니다.",
                secret: "옛 친구에게 먼저 연락을 해보세요. 예상치 못한 즐거움이 따릅니다.",
                affiliate: { name: "오메가3 영양제", 
                    reason: "혈행 개선과 심혈관 건강 관리에 필수적인 아이템입니다.", 
                    link: "https://link.coupang.com/a/dOMS1s", 
                    img: "/images/affiliate_22.jpg" }
            },
            1962: {
                luck: { wealth: 5, love: 4, health: 4 },
                desc: "그간의 노력이 결실을 맺어 안정으로 이어지는 해입니다. 현상 유지가 유리합니다.",
                detail: "가족 화목의 기운이 강하며 자녀의 경사가 기대됩니다. 허리와 무릎에 무리가 가지 않도록 스트레칭을 생활화하세요.",
                secret: "무리한 투자 제안은 웃으며 넘기는 여유가 필요합니다.",
                affiliate: { name: "온열 스트레칭 매트", 
                    reason: "굳기 쉬운 관절을 따뜻하게 풀어주어 유연성을 돕습니다.", 
                    link: "https://link.coupang.com/a/dOM1Cz", 
                    img: "/images/affiliate_23.jpg" }
            },
            1974: {
                luck: { wealth: 5, love: 5, health: 5 },
                desc: "변화의 기운이 들어오는 시기입니다. 직장이나 사업의 제안을 신중히 검토하세요.",
                detail: "부부 간의 따뜻한 말 한마디가 모든 운의 시작입니다. 과로를 피하고 충분한 휴식을 통해 스트레스를 다스려야 합니다.",
                secret: "중요한 결정은 금요일에 내리는 것이 유리하게 작용합니다.",
                affiliate: { name: "고급 보이차 세트", 
                    reason: "심신의 안정을 돕고 스트레스성 열을 내려줍니다.", 
                    link: "https://link.coupang.com/a/dOM90Q", 
                    img: "/images/affiliate_24.jpg" }
            },
            1986: {
                luck: { wealth: 5, love: 5, health: 4 },
                desc: "점진적으로 상승하는 운세입니다. 성과에 따른 확실한 보상이 따를 것입니다.",
                detail: "미혼자에게는 진지한 만남의 기회가, 기혼자에게는 가정의 평화가 찾아옵니다. 과도한 욕심은 손재수를 부르니 조심하세요.",
                secret: "운동 루틴을 새로 잡기에 아주 좋은 해입니다.",
                affiliate: { name: "스마트 워치", 
                    reason: "활동량을 기록하며 체계적인 건강 관리를 시작해보세요.", 
                    link: "https://link.coupang.com/a/dONfV0", 
                    img: "/images/affiliate_25.jpg" }
            },
            1998: {
                luck: { wealth: 5, love: 5, health: 5 },
                desc: "도전의 기운이 강합니다. 준비된 이직이나 새로운 분야로의 진출은 길합니다.",
                detail: "연애운은 뜨겁지만 속도 조절이 필요합니다. 수면 부족과 피로가 업무 효율을 떨어뜨릴 수 있으니 주의하세요.",
                secret: "자신의 재능을 아끼지 말고 뽐내세요. 인정받는 해입니다.",
                affiliate: { name: "노이즈 캔슬링 헤드폰", 
                    reason: "업무와 학업에 집중도를 높여 성과를 극대화해줍니다.", 
                    link: "https://link.coupang.com/a/dONl3k", 
                    img: "/images/affiliate_26.jpg" }
            },
            2010: {
                luck: { wealth: 4, love: 5, health: 5 },
                desc: "활동량이 늘어나 에너지가 넘치는 해입니다. 또래 사이에서 인기가 상승합니다.",
                detail: "계획적인 용돈 관리 습관을 들이면 재물운의 기초가 튼튼해집니다. 부주의한 사고를 예방하기 위해 늘 조심성이 필요합니다.",
                secret: "독서나 새로운 취미가 의외의 소질을 발견하게 해줍니다.",
                affiliate: { name: "기능성 운동화", 
                    reason: "넘치는 에너지를 마음껏 발산할 수 있도록 발을 보호합니다.", 
                    link: "https://link.coupang.com/a/dONrLr", 
                    img: "/images/affiliate_27.jpg" }
            }
        }
    },
    // 토끼띠 (Index: 3)
    3: {
        name: "토끼띠",
        color: "#a64037", // 토끼띠의 열정과 조화를 상징하는 색상
        // 공통 정보 (기본값)
        desc: "2026년 토끼띠는 주변과의 조화를 통해 안정적인 성장을 이루는 해입니다.",
        detail: "병오년의 기운은 토끼띠에게 세심한 자기관리를 요구합니다. 급격한 변화보다는 기존의 것을 보완하고 다듬을 때 더 큰 성취감을 맛보게 될 것입니다.",
        secret: "녹색 계열의 소품이 마음의 안정을 돕고 행운의 에너지를 끌어당깁니다.",
        affiliate: {
            name: "천연 옥 원석 팔찌",
            reason: "부정적인 기운을 막아주고 정서적 평온을 유지하는 데 도움을 줍니다.",
            link: "https://link.coupang.com/a/dONDDa",
            img: "/images/affiliate_3.jpg"
        },

        // [핵심] 연도별 맞춤 데이터
        yearly: {
            1939: {
                luck: { wealth: 3, love: 5, health: 5 },
                desc: "평온함 속에 소소한 기쁨이 따르는 해입니다. 생활이 원만하게 이어집니다.",
                detail: "무리한 금전 거래는 실수가 따를 수 있으니 피하세요. 자녀와 손주들과의 교류에서 오는 정서적 만족감이 매우 큽니다.",
                secret: "집안에 생기 있는 화초를 두면 건강운과 기분이 동시에 좋아집니다.",
                affiliate: { name: "가습 공기청정기", 
                    reason: "호흡기 관리가 중요한 해, 실내 공기를 쾌적하게 유지하세요.", 
                    link: "https://link.coupang.com/a/dONT8u", 
                    img: "/images/affiliate_31.jpg" }
            },
            1951: {
                luck: { wealth: 4, love: 4, health: 4 },
                desc: "지출 관리가 곧 재물운의 핵심입니다. 배우자와의 정이 돈독해지는 시기입니다.",
                detail: "의료비나 생활비 지출에 미리 대비하면 안정이 유지됩니다. 주변의 배려를 당연하게 여기기보다 감사함을 표현할 때 운이 더 열립니다.",
                secret: "하루 20분 정도의 가벼운 햇볕 쬐기가 혈당 관리에 큰 도움이 됩니다.",
                affiliate: { name: "혈압 스마트 측정기", 
                    reason: "만성질환 관리를 수시로 체크하여 평안을 유지하세요.", 
                    link: "https://www.coupang.com/vp/products/5750801397?itemId=9709828126&vendorItemId=76993682539&sourceType=srp_product_ads&clickEventId=255dcbf0-0d43-11f1-ac54-aaed5ac84b0d&korePlacement=15&koreSubPlacement=6&clickEventId=255dcbf0-0d43-11f1-ac54-aaed5ac84b0d&korePlacement=15&koreSubPlacement=6&traceId=mlswlo55", 
                    img: "/images/affiliate_32.jpg" }
            },
            1963: {
                luck: { wealth: 4, love: 5, health: 3 },
                desc: "그간의 노력이 소폭 상승하는 결실의 시기입니다. 가족 화합이 강조됩니다.",
                detail: "자녀의 경사나 기쁜 소식이 들려올 운세입니다. 큰 투자보다는 현재의 자산을 잘 지키고 내실을 다지는 전략이 유리합니다.",
                secret: "허리와 소화기 계통을 위해 자극적인 음식은 피하는 것이 길합니다.",
                affiliate: { name: "양배추 사과즙", 
                    reason: "소화기 건강을 돕고 속을 편안하게 해주는 천연 건강식입니다.", 
                    link: "https://link.coupang.com/a/dON8AY", 
                    img: "/images/affiliate_33.jpg" }
            },
            1975: {
                luck: { wealth: 4, love: 4, health: 4 },
                desc: "직장이나 사업에서 새로운 기회가 보이는 변화의 기운이 강한 해입니다.",
                detail: "기회는 오지만 신중한 판단이 필수입니다. 부부 간의 솔직한 대화와 배려가 갈등을 줄이고 가정의 평화를 지키는 핵심입니다.",
                secret: "잠들기 전 스트레칭이 스트레스성 질환 예방에 특효입니다.",
                affiliate: { name: "편백나무 베개", 
                    reason: "충분한 휴식과 숙면이 운을 살려주는 해, 목과 머리를 편안하게 합니다.", 
                    link: "https://link.coupang.com/a/dOR3pn", 
                    img: "/images/affiliate_34.jpg" }
            },
            1987: {
                luck: { wealth: 5, love: 5, health: 4 },
                desc: "노력 대비 성과가 뚜렷한 해입니다. 승진이나 부수입의 기회가 찾아옵니다.",
                detail: "미혼자는 좋은 인연과의 만남이, 기혼자는 가정이 화목해지는 흐름입니다. 체력 관리와 운동 루틴을 생활화하는 것이 성공의 밑거름입니다.",
                secret: "성공적인 결과를 위해 화요일에 중요한 업무를 배치해보세요.",
                affiliate: { name: "고급 비즈니스 백팩", 
                    reason: "승진과 성과급 운이 따르는 해, 전문성을 돋보이게 합니다.", 
                    link: "https://link.coupang.com/a/dOR85r", 
                    img: "/images/affiliate_35.jpg" }
            },
            1999: {
                luck: { wealth: 4, love: 5, health: 4 },
                desc: "도전의 기회가 열리는 시기입니다. 이직이나 창업 아이디어가 빛을 발합니다.",
                detail: "준비된 선택은 길한 결과를 가져오지만, 감정의 기복을 잘 다스려야 합니다. 수면 부족이 면역력을 떨어뜨리지 않도록 유의하세요.",
                secret: "중요한 미팅에는 푸른색 넥타이나 스카프가 신뢰감을 높여줍니다.",
                affiliate: { name: "멀티비타민 미네랄", 
                    reason: "활동량이 많고 면역력 저하가 우려되는 해, 영양 균형을 잡아줍니다.", 
                    link: "https://link.coupang.com/a/dOSdpj", 
                    img: "/images/affiliate_36.jpg" }
            },
            2011: {
                luck: { wealth: 3, love: 5, health: 5 },
                desc: "학업 관련 지출이 균형을 이루며 친구 사이에서 인기가 높아지는 해입니다.",
                detail: "계획적인 소비 습관을 기르면 훗날 큰 자산이 됩니다. 활동력이 넘치지만 예기치 못한 작은 부상에는 주의가 필요합니다.",
                secret: "집중력이 필요할 때 민트 향의 향초나 오일이 도움이 됩니다.",
                affiliate: { name: "독서실용 LED 스탠드", 
                    reason: "학업운을 돕고 눈의 피로를 덜어주는 필수 학업 아이템입니다.", 
                    link: "https://link.coupang.com/a/dOSkwZ", 
                    img: "/images/affiliate_37.jpg" }
            }
        }
    },
    // 용띠 (Index: 4)
    4: {
        name: "용띠",
        color: "#5a7d6e", // 구름과 산을 상징하는 깊은 녹색 계열
        // 공통 정보 (기본값)
        desc: "2026년 용띠는 드넓은 하늘을 만난 용처럼 에너지가 넘치고 추진력이 강해지는 해입니다.",
        detail: "병오년의 뜨거운 기운은 용띠의 열정을 더욱 자극합니다. 목표를 향해 나아가되, 속도 조절과 주변의 조언을 수용하는 유연함이 성패를 좌우할 것입니다.",
        secret: "황금색이나 은색 장신구가 금전운의 흐름을 좋게 하고 신뢰감을 높여줍니다.",
        affiliate: {
            name: "고급 자수정 수석",
            reason: "강한 기운을 정화하고 집안의 안정과 재물 복을 불러오는 상징적 아이템입니다.",
            link: "https://link.coupang.com/a/dOSpzE",
            img: "/images/affiliate_4.jpg"
        },

        // [핵심] 연도별 맞춤 데이터
        yearly: {
            1940: {
                luck: { wealth: 3, love: 5, health: 5 },
                desc: "무난한 안정 운이 흐르는 해입니다. 가족의 지원으로 평온함이 유지됩니다.",
                detail: "무리한 금전 약속은 심리적 부담이 될 수 있으니 삼가세요. 자녀와 주변 사람들에게 존중받는 시기로 정서적인 풍요로움을 누리게 됩니다.",
                secret: "집안의 남서쪽을 깨끗이 정리하면 건강운이 상승합니다.",
                affiliate: { name: "프리미엄 무릎 찜질기", 
                    reason: "관절 마디마디를 따뜻하게 관리하여 활동력을 높여줍니다.", 
                    link: "https://link.coupang.com/a/dOSv0p", 
                    img: "/images/affiliate_41.jpg" }
            },
            1952: {
                luck: { wealth: 4, love: 4, health: 3 },
                desc: "지출이 다소 늘 수 있으나 계획적이라면 안정적입니다. 배우자와의 정이 깊어집니다.",
                detail: "의료비나 주거 관련 비용을 미리 점검하여 예산을 세우는 것이 현명합니다. 오랜 친구나 인연을 통해 마음의 위로와 소중한 정보를 얻게 됩니다.",
                secret: "정기 검진 날짜를 상반기 내로 잡는 것이 평안을 가져다줍니다.",
                affiliate: { name: "스마트 약통 케이스", 
                    reason: "정기적인 건강 관리를 도와주며 생활의 편리함을 더합니다.", 
                    link: "https://link.coupang.com/a/dOSBX9", 
                    img: "/images/affiliate_42.jpg" }
            },
            1964: {
                luck: { wealth: 5, love: 4, health: 4 },
                desc: "점진적으로 상승하는 흐름입니다. 그간의 노력이 확실한 성과로 이어집니다.",
                detail: "자녀 문제로 기쁜 소식이 들릴 수 있는 경사스러운 해입니다. 큰 투자보다는 현재의 기반을 다지는 안정 전략이 최종적인 승리를 가져옵니다.",
                secret: "허리와 무릎 스트레칭을 아침저녁으로 습관화하세요.",
                affiliate: { name: "인체공학적 등받이 쿠션", 
                    reason: "척추를 지지하여 오래 앉아 있어도 허리 부담을 덜어줍니다.", 
                    link: "https://link.coupang.com/a/dOSHw4", 
                    img: "/images/affiliate_43.jpg" }
            },
            1976: {
                luck: { wealth: 5, love: 4, health: 4 },
                desc: "변화와 기회의 해입니다. 직장이나 사업에서 새로운 제안이 들어올 수 있습니다.",
                detail: "제안이 올 때 신중히 판단하는 혜안이 필요합니다. 부부 간의 사소한 대화가 큰 신뢰를 쌓는 계기가 되니 먼저 배려하는 마음을 가지세요.",
                secret: "만성 피로를 풀기 위해 주말에는 디지털 기기와 멀어지는 시간을 가지세요.",
                affiliate: { name: "고농축 홍삼 스틱", 
                    reason: "중요한 결정을 앞둔 시기, 지친 체력을 즉각적으로 보충해줍니다.", 
                    link: "https://link.coupang.com/a/dOSOQs", 
                    img: "/images/affiliate_44.jpg" }
            },
            1988: {
                luck: { wealth: 5, love: 5, health: 3 },
                desc: "상승세의 기운이 뚜렷합니다. 승진이나 수입 증가 등 실질적인 이득이 따릅니다.",
                detail: "무리한 확장은 독이 될 수 있으니 내실을 기하세요. 미혼자에게는 결혼까지 생각할 진지한 인연이 찾아오고, 기혼자는 가정의 화목이 두드러집니다.",
                secret: "금요일 오후의 미팅이 유리한 계약이나 결과를 이끌어냅니다.",
                affiliate: { name: "명품 가죽 지갑", 
                    reason: "재물운이 상승하는 해, 지갑을 교체하여 기운을 새롭게 하세요.", 
                    link: "https://link.coupang.com/a/dOSVob", 
                    img: "/images/affiliate_45.jpg" }
            },
            2000: {
                luck: { wealth: 4, love: 5, health: 4 },
                desc: "도전과 기회의 흐름이 강합니다. 이직이나 새 프로젝트 제안은 길한 징조입니다.",
                detail: "준비된 선택은 성공의 밑거름이 됩니다. 연애운이 상승하여 만남은 잦아지나 감정 조절에 힘써야 관계가 오래 지속됩니다.",
                secret: "충분한 수면과 비타민 섭취가 창의적인 아이디어를 만들어냅니다.",
                affiliate: { name: "블루라이트 차단 안경", 
                    reason: "업무와 모니터 사용이 늘어나는 해, 시력을 보호하여 집중력을 높입니다.", 
                    link: "https://link.coupang.com/a/dOS75G", 
                    img: "/images/affiliate_46.jpg" }
            },
            2012: {
                luck: { wealth: 4, love: 5, health: 5 },
                desc: "활동량이 많아 활력이 좋은 해입니다. 또래 사이에서 인기가 높아집니다.",
                detail: "계획적인 소비 습관을 들이면 경제관념이 올바르게 정립됩니다. 활발하게 움직이는 만큼 부주의로 인한 작은 사고에 유의해야 합니다.",
                secret: "친구와의 약속보다 본인의 스케줄을 우선시할 때 학업운이 따릅니다.",
                affiliate: { name: "기능성 무릎 보호대", 
                    reason: "야외 활동 중 발생할 수 있는 작은 부상을 예방해줍니다.", 
                    link: "https://link.coupang.com/a/dOTb7F", 
                    img: "/images/affiliate_47.jpg" }
            }
        }
    },
    // 뱀띠 (Index: 5)
    5: {
        name: "뱀띠",
        color: "#a64037", // 뱀띠의 지혜와 열정을 상징하는 붉은 빛이 도는 갈색 계열
        // 공통 정보 (기본값)
        desc: "2026년 뱀띠는 지혜로운 판단으로 내실을 다지고 실익을 챙기는 실속 있는 해입니다.",
        detail: "병오년의 기운은 뱀띠에게 뜨거운 추진력을 부여합니다. 생각에만 머물던 일을 행동으로 옮기기에 적기이나, 주변 사람들과의 소통을 통해 독단을 피하는 것이 성공의 포인트입니다.",
        secret: "보라색이나 자주색 소품이 명예운을 높여주고 대인관계의 마찰을 줄여줍니다.",
        affiliate: {
            name: "수정 원석 디퓨저",
            reason: "차분한 향과 원석의 기운이 뱀띠의 집중력을 높이고 심신을 안정시켜줍니다.",
            link: "https://link.coupang.com/a/dOTwRK",
            img: "/images/affiliate_5.jpg"
        },

        // [핵심] 연도별 맞춤 데이터
        yearly: {
            1941: {
                luck: { wealth: 4, love: 5, health: 4 },
                desc: "평온 속에 소소한 기쁨이 따르는 해입니다. 가족의 도움으로 생활이 무난히 이어집니다.",
                detail: "보증이나 무리한 금전 약속은 절대 금물입니다. 자녀와 손주들을 통해 마음의 위안을 얻으며 정서적으로 평온한 한 해를 보내게 됩니다.",
                secret: "집안의 북동쪽 방향을 밝게 유지하면 가택운이 좋아집니다.",
                affiliate: { name: "전신 저주파 마사지기", 
                    reason: "관절과 근육을 부드럽게 관리하여 일상의 활력을 돕습니다.", 
                    link: "https://link.coupang.com/a/dOTHKM", 
                    img: "/images/affiliate_51.jpg" }
            },
            1953: {
                luck: { wealth: 4, love: 4, health: 4 },
                desc: "지출은 다소 늘 수 있으나 계획적이라면 무난합니다. 배우자와의 관계가 안정적입니다.",
                detail: "의료비나 주거 관련 비용을 미리 점검하여 예산을 관리하세요. 오랜 친구와의 교류가 삶의 활력소가 되며 뜻밖의 즐거움을 줍니다.",
                secret: "따뜻한 성질의 음식이 소화기와 심혈관 건강에 도움을 줍니다.",
                affiliate: { name: "프리미엄 견과류&건과일 세트", 
                    reason: "부담 없는 영양 섭취로 심혈관 건강 관리에 도움을 줍니다.", 
                    link: "https://link.coupang.com/a/dOTRa9", 
                    img: "/images/affiliate_52.jpg" }
            },
            1965: {
                luck: { wealth: 4, love: 4, health: 4 },
                desc: "점진적으로 상승하는 흐름입니다. 그간의 노력이 풍성한 결실을 맺을 것입니다.",
                detail: "가족 간의 화합이 무엇보다 중요하며, 자녀를 통해 기쁜 소식이 들려올 수 있습니다. 큰 투자는 주변 전문가와 상의 후 신중히 결정하세요.",
                secret: "피로가 쌓이지 않도록 반신욕이나 족욕을 생활화하면 길합니다.",
                affiliate: { name: "기능성 무릎 압박 밴드", 
                    reason: "활동량이 늘어나는 해, 관절의 피로도를 낮추고 지지해줍니다.", 
                    link: "https://link.coupang.com/a/dOTVFx", 
                    img: "/images/affiliate_53.jpg" }
            },
            1977: {
                luck: { wealth: 5, love: 4, health: 5 },
                desc: "변화의 기운이 강한 해입니다. 직장이나 사업의 기회를 신중히 살피세요.",
                detail: "기회는 오지만 판단을 서두르면 실수가 따릅니다. 부부 간의 소통이 모든 일의 근본임을 잊지 말고, 먼저 이해하고 배려하는 자세가 필요합니다.",
                secret: "수요일에 진행하는 계약이나 미팅이 유리한 결과를 가져옵니다.",
                affiliate: { name: "스트레스 완화 아로마 오일", 
                    reason: "과로와 스트레스성 질환을 예방하고 깊은 휴식을 돕습니다.", 
                    link: "https://link.coupang.com/a/dOT24p", 
                    img: "/images/affiliate_54.jpg" }
            },
            1989: {
                luck: { wealth: 5, love: 5, health: 4 },
                desc: "상승세의 기운으로 성과에 따른 보상이 기대됩니다. 부수입의 기회도 따릅니다.",
                detail: "미혼자에게는 좋은 인연이 닿는 운이며, 기혼자는 가정이 화목해집니다. 다만, 검증되지 않은 곳으로의 충동적인 투자는 삼가야 합니다.",
                secret: "꾸준한 근력 운동이 재물운을 담는 그릇을 키워줍니다.",
                affiliate: { name: "홈트레이닝 덤벨 세트", 
                    reason: "체력 관리가 성과로 이어지는 해, 효율적인 운동을 지원합니다.", 
                    link: "https://link.coupang.com/a/dOUaXI", 
                    img: "/images/affiliate_55.jpg" }
            },
            2001: {
                luck: { wealth: 4, love: 5, health: 4 },
                desc: "도전과 선택의 해입니다. 이직이나 새 프로젝트는 준비된 만큼 성공합니다.",
                detail: "만남이 잦아지고 연애운이 상승하는 시기이나 감정의 기복을 다스려야 합니다. 수면 부족이 면역력 저하로 이어지지 않도록 주의하세요.",
                secret: "책상을 정리하고 주변 환경을 깔끔히 하면 집중력이 배가됩니다.",
                affiliate: { name: "기능성 수면 안대", 
                    reason: "수면의 질을 높여 최상의 컨디션과 면역력을 유지하게 돕습니다.", 
                    link: "https://link.coupang.com/a/dOUja2", 
                    img: "/images/affiliate_56.jpg" }
            },
            2013: {
                luck: { wealth: 4, love: 5, health: 5 },
                desc: "활동량이 많아 활력이 넘치며 친구 관계가 넓어지는 해입니다.",
                detail: "계획적인 소비 습관을 들이기에 아주 좋은 시기입니다. 밖으로 활발히 움직이되, 작은 부상이나 환절기 감기 등 건강 관리에 유의하세요.",
                secret: "노란색 문구류가 집중력과 학업 성취도를 높여줍니다.",
                affiliate: { name: "대용량 스포츠 텀블러", 
                    reason: "충분한 수분 섭취로 활동적인 생활의 에너지를 보충해줍니다.", 
                    link: "https://www.coupang.com/vp/products/6247347085?itemId=12643913843&vendorItemId=79911406127&pickType=COU_PICK&q=%EB%8C%80%EC%9A%A9%EB%9F%89+%EC%8A%A4%ED%8F%AC%EC%B8%A0+%ED%85%80%EB%B8%94%EB%9F%AC&searchId=a10c5ad72043015&sourceType=search&itemsCount=36&searchRank=2&rank=2&traceId=mlt3jsrh", 
                    img: "/images/affiliate_57.jpg" }
            }
        }
    },
    // 말띠 (Index: 6)
    6: {
        name: "말띠",
        color: "#a64037", // 주인공의 해, 정열적인 붉은색 계열
        // 공통 정보 (기본값)
        desc: "2026년은 말띠의 해! 뜨거운 열정과 에너지가 최고조에 달하는 화려한 한 해입니다.",
        detail: "자신의 해를 맞이하여 주도권이 본인에게 넘어옵니다. 강력한 추진력으로 뜻하는 바를 이룰 수 있으나, 불의 기운이 과해질 수 있으니 차분한 이성을 유지하는 것이 무엇보다 중요합니다.",
        secret: "검은색이나 남색 계열의 소품이 과한 화기(火氣)를 다스려 안정적인 복을 불러옵니다.",
        affiliate: {
            name: "흑요석 팔찌",
            reason: "넘치는 에너지를 차분하게 가라앉히고 냉철한 판단력을 유지하게 돕습니다.",
            link: "https://www.coupang.com/vp/products/7459675985?itemId=19440808564&vendorItemId=86566191645&q=%ED%9D%91%EC%9A%94%EC%84%9D+%ED%8C%94%EC%B0%8C&searchId=46e526236994679&sourceType=search&itemsCount=36&searchRank=1&rank=1&traceId=mlt3xf3e",
            img: "/images/affiliate_6.jpg"
        },

        // [핵심] 연도별 맞춤 데이터
        yearly: {
            1942: {
                luck: { wealth: 4, love: 4, health: 3 },
                desc: "평온한 흐름 속에 내실을 다지는 해입니다. 여유 자금을 점검하는 것이 좋습니다.",
                detail: "재물운은 안정적이나 예기치 못한 지출에 대비하세요. 자녀와 손주들이 찾아와 집안에 생기가 돌고 정서적으로 매우 만족스러운 한 해가 됩니다.",
                secret: "집안의 서쪽 방향에 푸른 식물을 두면 건강운과 재물운이 함께 상승합니다.",
                affiliate: { name: "프리미엄 족욕기", 
                    reason: "심혈관 건강을 돕고 하루의 피로를 풀어 평온한 숙면을 유도합니다.", 
                    link: "https://link.coupang.com/a/dOWgZQ", 
                    img: "/images/affiliate_61.jpg" }
            },
            1954: {
                luck: { wealth: 3, love: 4, health: 3 },
                desc: "지출 관리가 곧 재테크인 해입니다. 자산을 지키는 전략이 훨씬 유리합니다.",
                detail: "새로운 투자보다는 현재의 것을 정돈하세요. 배우자와의 대화가 만사형통의 열쇠입니다. 사소한 오해는 그날그날 바로 풀어 가정을 화목하게 유지하세요.",
                secret: "정기적인 가벼운 산책이 혈압과 당뇨 관리의 최고의 비방입니다.",
                affiliate: { name: "스마트 혈압 측정기", 
                    reason: "매일의 건강 수치를 기록하여 평안한 노후를 설계하게 돕습니다.", 
                    link: "https://www.coupang.com/vp/products/6543916099?itemId=14581427341&vendorItemId=81823502649&pickType=COU_PICK&q=%EC%8A%A4%EB%A7%88%ED%8A%B8+%ED%98%88%EC%95%95+%EC%B8%A1%EC%A0%95%EA%B8%B0&searchId=51e8ce2f6927707&sourceType=search&itemsCount=36&searchRank=3&rank=3&traceId=mlt5m0h3", 
                    img: "/images/afiliate_62.jpg" }
            },
            1966: {
                luck: { wealth: 5, love: 4, health: 3 },
                desc: "점진적 상승 흐름을 타는 해입니다. 그간의 노력이 실질적인 보상으로 돌아옵니다.",
                detail: "사업적 성과가 기대되나 확장은 신중하세요. 자녀의 취업이나 결혼 등 집안에 경사스러운 소식이 들려올 운세입니다. 허리 건강에 유의하세요.",
                secret: "중요한 계약이나 약속은 오후 1시에서 3시 사이에 진행하는 것이 길합니다.",
                affiliate: { name: "인체공학적 의자", 
                    reason: "허리 건강을 지켜주어 업무의 효율과 컨디션을 동시에 잡아줍니다.", 
                    link: "https://link.coupang.com/a/dOWsCr", 
                    img: "/images/affiliate_63.jpg" }
            },
            1978: {
                luck: { wealth: 4, love: 4, health: 4 },
                desc: "변화의 바람이 불어오는 기회의 해입니다. 신중한 판단이 성패를 가릅니다.",
                detail: "직장 내 이동이나 사업적 제안이 들어올 수 있습니다. 부부 간의 소통과 배려가 외부의 풍파를 막아주는 든든한 방패가 되어줄 것입니다. 휴식이 필수입니다.",
                secret: "주말에는 산이나 숲을 찾아 나무의 기운을 받으면 스트레스 해소에 특효입니다.",
                affiliate: { name: "고급 보이차 선물세트", 
                    reason: "마음을 차분하게 가라앉히고 만성 피로 회복을 돕는 건강차입니다.", 
                    link: "https://link.coupang.com/a/dOWApc", 
                    img: "/images/affiliate_64.jpg" }
            },
            1990: {
                luck: { wealth: 5, love: 5, health: 4 },
                desc: "강력한 상승 기운이 따르는 해입니다. 승진이나 성과급 등 명예와 재물이 함께 옵니다.",
                detail: "실력이 인정받는 시기이나 충동적인 투자는 재물을 빠져나가게 합니다. 미혼자는 평생을 함께할 인연이 나타날 운이며, 기혼자는 가정 내 신뢰가 두터워집니다.",
                secret: "남쪽 방향으로의 여행이 새로운 영감과 재충전의 기회를 줍니다.",
                affiliate: { name: "브랜드 가죽 서류가방", 
                    reason: "승진 운과 전문성을 돋보이게 하여 업무의 격을 높여줍니다.", 
                    link: "https://link.coupang.com/a/dOWGCG", 
                    img: "/images/affiliate_65.jpg" }
            },
            2002: {
                luck: { wealth: 4, love: 5, health: 3 },
                desc: "도전과 기회가 공존하는 활기찬 해입니다. 이직이나 새 프로젝트에 운이 따릅니다.",
                detail: "준비된 자에게는 더할 나위 없는 도약의 해입니다. 연애운은 뜨거우나 감정이 앞서면 그르칠 수 있으니 속도 조절이 필요합니다. 수면 부족을 경계하세요.",
                secret: "자기계발을 위한 자격증 취득이나 공부가 큰 미래 자산이 됩니다.",
                affiliate: { name: "블루라이트 차단 스탠드", 
                    reason: "학업과 업무 집중력을 높여 성취감을 극대화해줍니다.", 
                    link: "https://link.coupang.com/a/dOWLRE", 
                    img: "/images/affiliate_66.jpg" }
            },
            2014: {
                luck: { wealth: 3, love: 5, health: 4 },
                desc: "친구 관계가 확장되고 인기가 상승하는 해입니다. 활동량이 많아 활력이 넘칩니다.",
                detail: "용돈을 스스로 계획하고 소비하는 습관을 들이기 좋습니다. 밖으로 활발히 움직이되, 환절기 건강이나 예기치 못한 작은 사고에 유의하며 지내야 합니다.",
                secret: "파란색 문구류나 옷이 집중력을 높이고 차분함을 더해줍니다.",
                affiliate: { name: "기능성 아동 백팩", 
                    reason: "활동적인 생활을 지원하며 바른 자세를 유지하게 돕습니다.", 
                    link: "https://link.coupang.com/a/dOWSUb", 
                    img: "/images/affiliate_67.jpg" }
            }
        }
    },
    // 양띠 (Index: 7)
    7: {
        name: "양띠",
        color: "#5a7d6e", // 양띠의 온화함과 안정을 상징하는 부드러운 초록 계열
        // 공통 정보 (기본값)
        desc: "2026년 양띠는 말의 해를 만나 '육합(六合)'을 이루니, 만사가 형통하고 귀인의 도움이 따르는 길한 해입니다.",
        detail: "주변 사람들과의 협력이 빛을 발하는 시기입니다. 혼자 고민하기보다 주변과 나누면 해결책이 절로 나오며, 붉은 말의 에너지가 양띠의 온화함에 추진력을 더해줄 것입니다.",
        secret: "동쪽 방향에서 오는 제안이 행운을 가져다주며, 나무 재질의 소품이 기운을 돋웁니다.",
        affiliate: {
            name: "천연 대추나무 인장",
            reason: "계약운과 재물운이 상승하는 해, 신뢰를 상징하는 인장으로 기운을 확고히 하세요.",
            link: "https://link.coupang.com/a/dOW1tC",
            img: "/images/affiliate_7.jpg"
        },

        // [핵심] 연도별 맞춤 데이터
        yearly: {
            1943: {
                luck: { wealth: 4, love: 5, health: 4 },
                desc: "안정 속에서 마음의 평화를 찾는 해입니다. 가족의 도움으로 평온함이 이어집니다.",
                detail: "금전 보증이나 무리한 지출은 마음의 짐이 될 수 있으니 삼가세요. 자녀와 손주들이 기쁨을 주니 정서적으로 매우 풍요로운 시기입니다.",
                secret: "아침저녁으로 가벼운 산책을 하면 전신 기운이 맑아집니다.",
                affiliate: { name: "온열 무릎 마사지기", 
                    reason: "관절 건강이 곧 활동력의 근원, 따뜻한 찜질로 유연성을 유지하세요.", 
                    link: "https://link.coupang.com/a/dOXbe4", 
                    img: "/images/affiliate_71.jpg" }
            },
            1955: {
                luck: { wealth: 4, love: 4, health: 4 },
                desc: "지출 관리가 곧 안정을 지키는 핵심입니다. 배우자와의 관계가 돈독해지는 해입니다.",
                detail: "의료비나 생활비 등 계획된 지출을 미리 점검하세요. 오랜 친구와의 교류가 삶에 새로운 활력을 불어넣어 줄 것입니다.",
                secret: "정기 검진을 상반기에 완료하면 마음이 편안해지고 운이 안정됩니다.",
                affiliate: { name: "프리미엄 루테인 세트", 
                    reason: "눈의 피로를 덜고 맑은 시야를 유지하여 삶의 질을 높여줍니다.", 
                    link: "https://link.coupang.com/a/dOXkCy", 
                    img: "/images/affiliate_72.jpg" }
            },
            1967: {
                luck: { wealth: 5, love: 4, health: 4 },
                desc: "점진적으로 상승하는 흐름입니다. 그간의 성실함이 실질적인 성과로 나타납니다.",
                detail: "자녀 문제로 경사스러운 소식을 들을 운세입니다. 무리한 투자보다는 현재의 것을 지키고 가꾸는 전략이 최종적으로 큰 수익을 가져다줍니다.",
                secret: "허리와 무릎 통증에 유의하고, 무거운 것을 드는 일은 피하세요.",
                affiliate: { name: "기능성 메모리폼 베개", 
                    reason: "깊은 숙면을 통해 허리와 목의 긴장을 풀어주고 내일의 에너지를 채워줍니다.", 
                    link: "https://link.coupang.com/a/dOXtrD", 
                    img: "/images/affiliate_73.jpg" }
            },
            1979: {
                luck: { wealth: 4, love: 4, health: 5 },
                desc: "변화의 기운이 감도는 해입니다. 새로운 제안이나 기회가 찾아올 수 있습니다.",
                detail: "중요한 결정 앞에서는 신중함이 필요합니다. 부부 간의 원활한 소통이 가정의 안정을 지키는 핵심이며, 배려하는 말 한마디가 갈등을 녹여줍니다.",
                secret: "스트레스를 받을 때는 물을 가까이 하세요. 가벼운 반신욕이 좋습니다.",
                affiliate: { name: "아로마 스트레스 릴리프 오일", 
                    reason: "과로와 긴장을 완화하여 맑은 정신으로 최선의 판단을 돕습니다.", 
                    link: "https://link.coupang.com/a/dOXBm9", 
                    img: "/images/affiliate_74.jpg" }
            },
            1991: {
                luck: { wealth: 5, love: 5, health: 4 },
                desc: "상승 기운이 매우 강합니다. 성과에 따른 보상과 부수입의 기회가 기대됩니다.",
                detail: "미혼자에게는 소중한 인연이 찾아오는 운이며, 기혼자는 가정의 화목이 더욱 깊어집니다. 체계적인 운동 습관이 재물운을 지탱해 줍니다.",
                secret: "자신의 능력을 과감히 보여주세요. 인정받을 기회가 곧 옵니다.",
                affiliate: { name: "헬스 피트니스 밴드", 
                    reason: "체력 관리가 성과로 직결되는 해, 건강 목표를 시각화하세요.", 
                    link: "https://link.coupang.com/a/dOXJT5", 
                    img: "/images/affiliate_75.jpg" }
            },
            2003: {
                luck: { wealth: 4, love: 5, health: 4 },
                desc: "도전과 기회의 문이 열리는 해입니다. 준비된 도전은 좋은 결과로 이어집니다.",
                detail: "이직이나 새로운 분야 진출은 철저한 준비 후에 실행하세요. 연애운은 뜨거우나 감정의 기복을 잘 다스려야 관계가 오래 지속될 수 있습니다.",
                secret: "충분한 숙면과 규칙적인 식사가 면역력을 높이는 최고의 비방입니다.",
                affiliate: { name: "고속 멀티 충전 스테이션", 
                    reason: "활동량이 많고 바쁜 일상 속에서 에너지를 즉시 보충해 줍니다.", 
                    link: "https://link.coupang.com/a/dOXQMj", 
                    img: "/images/affiliate_76.jpg" }
            },
            2015: {
                luck: { wealth: 4, love: 5, health: 4 },
                desc: "친구 관계가 원만하고 에너지가 넘치는 해입니다. 계획적인 생활이 운을 돕습니다.",
                detail: "용돈을 스스로 관리해보는 습관을 기르기 좋은 해입니다. 또래 사이에서 인기가 많아지나 야외 활동 시 작은 부상에 주의가 필요합니다.",
                secret: "노란색 문구류나 소품이 집중력을 높이고 학업 성취를 돕습니다.",
                affiliate: { name: "기능성 아동 운동화", 
                    reason: "활발한 활동을 안전하게 지원하고 발의 피로를 최소화합니다.", 
                    link: "https://link.coupang.com/a/dOXX9L", 
                    img: "/images/affiliate_77.jpg" }
            }
        }
    },
    // 원숭이띠 (Index: 8)
    8: {
        name: "원숭이띠",
        color: "#d4af37", // 원숭이띠의 재치와 금전운을 상징하는 황금색 계열
        // 공통 정보 (기본값)
        desc: "2026년 원숭이띠는 지혜로운 대처로 변화를 기회로 바꾸는 역동적인 해입니다.",
        detail: "병오년의 뜨거운 기운이 원숭이띠의 활동성을 자극합니다. 예상치 못한 상황이 발생하더라도 특유의 순발력으로 위기를 넘기고, 오히려 새로운 수익원이나 인연을 얻게 될 것입니다.",
        secret: "은색이나 흰색 계열의 장신구가 복잡한 생각을 정리하고 금전의 흐름을 돕습니다.",
        affiliate: {
            name: "은제 거북이 노리개",
            reason: "재물의 손실을 막고 장수와 안녕을 기원하는 원숭이띠의 수호 아이템입니다.",
            link: "https://link.coupang.com/a/dOX7lA",
            img: "/images/affiliate_8.jpg"
        },

        // [핵심] 연도별 맞춤 데이터
        yearly: {
            1944: {
                luck: { wealth: 4, love: 4, health: 4 },
                desc: "평온함 속에 작은 변화가 따르는 해입니다. 가족의 도움으로 생활이 안정됩니다.",
                detail: "갑작스러운 지출이 생길 수 있으니 비상 자금을 미리 점검하세요. 자녀와 손주들이 기쁨의 원천이 되니 정서적으로 매우 풍요로운 시기입니다.",
                secret: "집안의 서쪽을 환하게 밝히면 자손들의 운이 함께 좋아집니다.",
                affiliate: { name: "프리미엄 견과류 선물세트", 
                    reason: "두뇌 활력과 혈관 관리가 필요한 시기, 건강한 간식을 챙겨보세요.", 
                    link: "https://link.coupang.com/a/dOYrre", 
                    img: "/images/affiliate_81.jpg" }
            },
            1956: {
                luck: { wealth: 3, love: 4, health: 3 },
                desc: "지출 관리가 곧 재물을 지키는 핵심입니다. 배우자와의 안정이 중요합니다.",
                detail: "무리한 투자나 확장은 실수가 따를 수 있습니다. 대화를 통해 가족 간의 오해를 풀고, 만성질환 관리를 위한 규칙적인 생활을 최우선으로 하세요.",
                secret: "따뜻한 성질의 차를 자주 마시면 소화기와 혈액순환에 길합니다.",
                affiliate: { name: "스마트 혈당 측정기", 
                    reason: "건강 상태를 수시로 체크하여 평안한 일상을 유지하도록 돕습니다.", 
                    link: "https://www.coupang.com/vp/products/8121451138?itemId=23037587367&vendorItemId=90650280338&q=%EC%8A%A4%EB%A7%88%ED%8A%B8+%ED%98%88%EB%8B%B9+%EC%B8%A1%EC%A0%95%EA%B8%B0&searchId=3d3dbf7b6373852&sourceType=search&itemsCount=36&searchRank=1&rank=1&traceId=mlt7qitw", 
                    img: "/images/affiliate_82.jpg" }
            },
            1968: {
                luck: { wealth: 4, love: 4, health: 4 },
                desc: "점진적으로 상승하는 흐름입니다. 그간의 노력이 결실을 맺기 시작합니다.",
                detail: "자녀 문제로 경사스러운 소식이 들려올 운세입니다. 무리한 사업 확장보다는 현재의 내실을 기할 때 명예와 실익을 동시에 얻게 됩니다.",
                secret: "허리와 어깨의 피로를 그날그날 풀어주는 스트레칭이 필수입니다.",
                affiliate: { name: "전신 저주파 마사지기", 
                    reason: "피로 누적을 막고 근육의 긴장을 완화하여 업무 효율을 높여줍니다.", 
                    link: "https://link.coupang.com/a/dOYHhB", 
                    img: "/images/affiliate_83.jpg" }
            },
            1980: {
                luck: { wealth: 4, love: 4, health: 4 },
                desc: "기회의 문이 열리는 해입니다. 새로운 제안이 들어오면 신중히 검토하세요.",
                detail: "직장이나 사업에서 긍정적인 변화가 예상되나 서두르지 않는 혜안이 필요합니다. 부부 간의 작은 배려가 외부의 스트레스를 막아주는 힘이 됩니다.",
                secret: "중요한 협상은 금요일 오전에 진행하는 것이 훨씬 유리합니다.",
                affiliate: { name: "아로마 힐링 디퓨저", 
                    reason: "과로와 스트레스로 지친 심신을 안정시키고 맑은 정신을 되찾아줍니다.", 
                    link: "https://link.coupang.com/a/dOYOqL", 
                    img: "/images/affiliate_84.jpg" }
            },
            1992: {
                luck: { wealth: 5, love: 5, health: 5 },
                desc: "상승 기운이 강한 해입니다. 성과급이나 보너스 등 재물운이 따릅니다.",
                detail: "미혼자는 천생연분을 만날 가능성이 크고, 기혼자는 가정의 안정이 돋보입니다. 체계적인 운동 루틴을 잡아 체력을 비축하는 것이 성공의 열쇠입니다.",
                secret: "흰색 셔츠나 소품이 대인관계에서 신뢰와 매력을 동시에 높여줍니다.",
                affiliate: { name: "스마트 피트니스 워치", 
                    reason: "체력 관리를 시각화하여 더 큰 성취감을 느끼게 도와주는 아이템입니다.", 
                    link: "https://link.coupang.com/a/dOYT2r", 
                    img: "/images/affiliate_85.jpg" }
            },
            2004: {
                luck: { wealth: 4, love: 4, health: 4 },
                desc: "도전과 선택의 해입니다. 준비된 자에게 새로운 분야 도전은 길합니다.",
                detail: "이직이나 진로 변경에 있어 좋은 운이 따르지만 철저한 준비는 필수입니다. 연애운은 활발하나 감정 기복이 생길 수 있으니 평정심을 유지하세요.",
                secret: "충분한 숙면과 비타민 섭취가 면역력을 지키는 최고의 비방입니다.",
                affiliate: { name: "고농축 비타민C 영양제", 
                    reason: "바쁜 일상 속에서 면역력 저하를 막고 활력을 불어넣어 줍니다.", 
                    link: "https://link.coupang.com/a/dOYZsV", 
                    img: "/images/affiliate_86.jpg" }
            },
            2016: {
                luck: { wealth: 3, love: 5, health: 4 },
                desc: "친구 관계가 확장되고 인기가 상승하는 해입니다. 활동량이 많아 활기찹니다.",
                detail: "계획적인 용돈 관리 습관을 들이기 아주 좋은 시기입니다. 밖으로 활발히 움직이되, 작은 부상이나 계절 질환에 유의하며 건강을 챙겨야 합니다.",
                secret: "파란색 가방이나 옷이 집중력을 높이고 학업의 즐거움을 더해줍니다.",
                affiliate: { name: "기능성 아동 백팩", 
                    reason: "활동적인 학교 생활을 지원하며 바른 자세 형성에 도움을 줍니다.", 
                    link: "https://link.coupang.com/a/dOY6kX", 
                    img: "/images/affiliate_87.jpg" }
            }
        }
    },
    // 닭띠 (Index: 9)
    9: {
        name: "닭띠",
        color: "#a64037", // 닭띠의 강단과 병오년의 불을 상징하는 진한 붉은색 계열
        // 공통 정보 (기본값)
        desc: "2026년 닭띠는 세심한 자기관리와 결단력으로 실속을 챙기는 실천의 해입니다.",
        detail: "주변 환경이 어수선할 때 닭띠 특유의 예리함이 빛을 발합니다. 정돈되지 않은 일을 깔끔하게 마무리하며 자신의 가치를 증명하는 시기가 될 것입니다. 서두르기보다 원칙을 지키는 것이 이롭습니다.",
        secret: "황금색 소품이나 반짝이는 장신구가 재물운을 고정시키고 행운을 불러옵니다.",
        affiliate: {
            name: "황금 닭 풍수 장식",
            reason: "재물을 불러모으고 나쁜 기운을 막아주는 닭띠 맞춤형 풍수 아이템입니다.",
            link: "https://link.coupang.com/a/dOZeyC",
            img: "/images/affiliate_9.jpg"
        },

        // [핵심] 연도별 맞춤 데이터
        yearly: {
            1945: {
                luck: { wealth: 4, love: 4, health: 4 },
                desc: "무난한 안정 운이 흐르는 해입니다. 가족의 도움으로 생활이 평온합니다.",
                detail: "갑작스러운 지출에 대비해 비상금을 점검하세요. 자녀와 손주들이 자주 찾아오니 마음이 따뜻하고 웃음이 끊이지 않는 시기를 보내게 됩니다.",
                secret: "따뜻한 성질의 생강차나 대추차가 혈압 관리에 도움을 줍니다.",
                affiliate: { name: "전신 저주파 마사지기", 
                    reason: "관절과 마디마디를 부드럽게 관리하여 매일의 활력을 돕습니다.", 
                    link: "https://link.coupang.com/a/dOZJYg", 
                    img: "/images/affiliate_91.jpg" }
            },
            1957: {
                luck: { wealth: 3, love: 4, health: 4 },
                desc: "지출 관리가 곧 재물을 지키는 길입니다. 자산을 수비하는 전략이 유리합니다.",
                detail: "배우자와 소소한 갈등이 생길 수 있으나 대화로 풀면 오히려 정이 깊어집니다. 정기 검진을 통해 심혈관 건강을 챙기는 것이 가장 큰 재테크입니다.",
                secret: "집안의 남쪽을 항상 깨끗하고 밝게 유지하면 가정이 평안해집니다.",
                affiliate: { name: "심혈관 영양제 세트", 
                    reason: "건강이 곧 운을 부르는 법, 혈행 개선과 혈압 관리를 돕는 필수템입니다.", 
                    link: "https://link.coupang.com/a/dOZQPm", 
                    img: "/images/affiliate_92.jpg" }
            },
            1969: {
                luck: { wealth: 5, love: 4, health: 4 },
                desc: "점진적으로 상승하는 흐름입니다. 그간의 성실함이 명예와 실익으로 돌아옵니다.",
                detail: "자녀 문제로 기쁜 소식이 들릴 수 있습니다. 사업적 확장은 신중함이 필요하며, 현재의 내실을 기할 때 더 큰 안정감이 찾아옵니다.",
                secret: "허리와 무릎의 피로를 풀어주는 온열 찜질이 운을 활발히 합니다.",
                affiliate: { name: "온열 스트레칭 매트", 
                    reason: "굳기 쉬운 관절을 부드럽게 이완시켜 일상의 피로를 말끔히 씻어줍니다.", 
                    link: "https://link.coupang.com/a/dOZVBk", 
                    img: "/images/affiliate_93.jpg" }
            },
            1981: {
                luck: { wealth: 4, love: 4, health: 4 },
                desc: "변화와 기회의 해입니다. 새로운 제안을 예리하게 분석하여 기회로 잡으세요.",
                detail: "직장 내 이동이나 사업적 제안이 따를 수 있습니다. 부부 간의 따뜻한 배려가 외부의 풍파를 막아주는 큰 버팀목이 됩니다. 과로를 조심하세요.",
                secret: "중요한 계약이나 상담은 목요일에 진행하는 것이 성사 확률을 높입니다.",
                affiliate: { name: "고급 건강차 선물세트", 
                    reason: "스트레스를 낮추고 맑은 정신으로 최적의 판단을 내릴 수 있게 돕습니다.", 
                    link: "https://link.coupang.com/a/dOZ3Lj", 
                    img: "/images/affiliate_94.jpg" }
            },
            1993: {
                luck: { wealth: 5, love: 5, health: 5 },
                desc: "강력한 상승 기운이 따릅니다. 승진이나 수입 증가 등 실질적 이득이 큽니다.",
                detail: "미혼자에게는 진지한 인연의 운이, 기혼자에게는 가정의 화목함이 찾아옵니다. 체계적인 운동을 통해 체력을 비축해두면 큰 기회를 잡기 용이합니다.",
                secret: "하얀색 셔츠나 소품이 대인관계에서 신뢰도를 극대화해줍니다.",
                affiliate: { name: "가죽 브리프케이스", 
                    reason: "승진 운과 전문성을 돋보이게 하여 업무의 격을 한층 높여줍니다.", 
                    link: "https://link.coupang.com/a/dO0agi", 
                    img: "/images/affiliate_95.jpg" }
            },
            2005: {
                luck: { wealth: 5, love: 4, health: 4 },
                desc: "도전과 성취의 해입니다. 학업과 취업 관련 기회가 늘어나니 정진하세요.",
                detail: "노력한 만큼 반드시 보상이 따르는 해입니다. 연애운도 활발해지나 감정이 앞서 실수를 하지 않도록 속도 조절과 자기관리가 병행되어야 합니다.",
                secret: "충분한 숙면이 뇌의 회전을 돕고 집중력을 높여주는 최고의 비방입니다.",
                affiliate: { name: "노이즈 캔슬링 이어폰", 
                    reason: "학업과 업무에 몰입할 수 있는 환경을 만들어 성취도를 높여줍니다.", 
                    link: "https://link.coupang.com/a/dO0faU", 
                    img: "/images/affiliate_96.jpg" }
            },
            2017: {
                luck: { wealth: 4, love: 5, health: 4 },
                desc: "친구 관계가 넓어지고 친구들 사이에서 존재감이 커지는 활기찬 해입니다.",
                detail: "계획적인 용돈 관리 습관을 들이면 경제관념이 쑥쑥 자랍니다. 야외 활동이 많은 해인 만큼 예기치 못한 작은 사고나 감기 조심은 필수입니다.",
                secret: "붉은색 가방이나 학용품이 아이의 활력을 돋우고 집중을 돕습니다.",
                affiliate: { name: "어린이 기능성 백팩", 
                    reason: "활동적인 일상을 지원하고 성장을 방해하지 않는 인체공학적 아이템입니다.", 
                    link: "https://link.coupang.com/a/dO0mkg", 
                    img: "/images/affiliate_97.jpg" }
            }
        }
    },
    // 개띠 (Index: 10)
    10: {
        name: "개띠",
        color: "#d4af37", // 개띠의 신뢰와 금색 기운을 상징하는 황토색/금색 계열
        // 공통 정보 (기본값)
        desc: "2026년 개띠는 말의 해와 삼합(三合)을 이루어, 명예가 드높아지고 귀인의 도움으로 뜻을 이루는 대길한 해입니다.",
        detail: "그동안의 성실함이 빛을 발하는 시기입니다. 붉은 말의 에너지가 개띠의 추진력을 돕고, 주변 사람들의 지지를 얻어 어려운 문제도 수월하게 풀어나가게 됩니다. 자신감을 가지고 행동하세요.",
        secret: "노란색이나 갈색 계열의 소품이 재물운을 단단하게 고정해주는 역할을 합니다.",
        affiliate: {
            name: "천연 황토 온열 찜질기",
            reason: "삼합의 기운을 보강하고 몸의 온기를 유지하여 최상의 컨디션을 만들어줍니다.",
            link: "https://link.coupang.com/a/dO0rOi",
            img: "/images/affiliate_10.jpg"
        },

        // [핵심] 연도별 맞춤 데이터
        yearly: {
            1946: {
                luck: { wealth: 4, love: 5, health: 5 },
                desc: "비교적 평온한 흐름의 해입니다. 여유 자금을 점검하여 안정을 유지하세요.",
                detail: "재물운은 변동 없이 평탄하나 뜻밖의 지출에 대비하는 지혜가 필요합니다. 자녀와 손주들이 기쁨을 주니 정서적으로 매우 만족스러운 시간을 보내게 됩니다.",
                secret: "집안의 중앙을 항상 깨끗하게 정돈하면 가택의 기운이 살아납니다.",
                affiliate: { name: "프리미엄 견과류 세트", 
                    reason: "두뇌 활력을 돕고 혈관 건강을 지키는 소소하지만 확실한 건강 비결입니다.", 
                    link: "https://link.coupang.com/a/dO0zFF", 
                    img: "/images/affiliate_101.jpg" }
            },
            1958: {
                luck: { wealth: 4, love: 5, health: 4 },
                desc: "지출 관리가 곧 재테크인 해입니다. 새로운 투자보다 자산을 지키는 것이 이득입니다.",
                detail: "배우자와의 대화가 깊어지며 서로에 대한 신뢰가 더욱 견고해지는 시기입니다. 심혈관 건강을 위해 과로를 피하고 충분한 휴식을 취하는 것이 평안을 가져옵니다.",
                secret: "정기적인 가벼운 산책이 스트레스 해소와 혈압 관리에 큰 도움이 됩니다.",
                affiliate: { name: "스마트 손목 혈압계", 
                    reason: "언제 어디서든 건강 수치를 체크하여 평온한 일상을 유지하게 돕습니다.", 
                    link: "https://www.coupang.com/vp/products/5449239300?itemId=8310772350&vendorItemId=75598656133&pickType=COU_PICK&q=%EC%8A%A4%EB%A7%88%ED%8A%B8+%EC%86%90%EB%AA%A9+%ED%98%88%EC%95%95%EA%B3%84&searchId=1987808011481606&sourceType=search&itemsCount=36&searchRank=1&rank=1&traceId=mlt9rtzn", 
                    img: "/images/affiliate_102.jpg" }
            },
            1970: {
                luck: { wealth: 5, love: 4, health: 5 },
                desc: "점진적으로 상승하는 흐름입니다. 성실한 노력의 결과물이 보이기 시작합니다.",
                detail: "무리한 사업 확장은 주의해야 하나, 기존의 일에서는 확실한 성과가 따릅니다. 자녀의 취업이나 경사 등 집안에 기쁜 소식이 들려올 운세입니다.",
                secret: "허리와 무릎의 피로를 풀어주는 온열 찜질이 건강운을 돕습니다.",
                affiliate: { name: "인체공학적 허리 지지대", 
                    reason: "오랜 시간 앉아 있거나 활동할 때 척추를 보호하여 피로를 덜어줍니다.", 
                    link: "https://link.coupang.com/a/dO0MWM", 
                    img: "/images/affiliate_103.jpg" }
            },
            1982: {
                luck: { wealth: 5, love: 5, health: 4 },
                desc: "기회의 문이 활짝 열리는 해입니다. 변화의 바람을 신중하게 타면 길합니다.",
                detail: "직장이나 사업에서 긍정적인 제안이 따를 수 있습니다. 부부 간의 원활한 소통과 배려가 외부의 스트레스를 막아주는 가장 든든한 방패가 되어줄 것입니다.",
                secret: "중요한 미팅이나 계약은 화요일에 진행하는 것이 성사율을 높여줍니다.",
                affiliate: { name: "아로마 오일 디퓨저", 
                    reason: "스트레스와 만성 피로를 해소하고 최상의 정신적 컨디션을 유지시켜줍니다.", 
                    link: "https://link.coupang.com/a/dO0RVB", 
                    img: "/images/affiliate_104.jpg" }
            },
            1994: {
                luck: { wealth: 5, love: 5, health: 5 },
                desc: "강력한 상승 기운이 따릅니다. 승진이나 수입 증가 등 실질적 보상이 기대됩니다.",
                detail: "능력을 인정받아 부수입의 기회까지 생기는 운세입니다. 미혼자에게는 좋은 인연이 닿고 기혼자는 가정의 안정이 돋보이니 체력 관리에 힘쓰며 이 운을 즐기세요.",
                secret: "황금색 액세서리나 지갑이 재물운의 흐름을 더욱 좋게 합니다.",
                affiliate: { name: "명품 가죽 지갑", 
                    reason: "재물운이 상승하는 해, 지갑을 교체하여 새로운 금전 기운을 담으세요.", 
                    link: "https://link.coupang.com/a/dO0Xqa", 
                    img: "/images/affiliate_105.jpg" }
            },
            2006: {
                luck: { wealth: 5, love: 4, health: 5 },
                desc: "도전과 성취의 해입니다. 학업과 취업에서 노력한 만큼의 결실을 봅니다.",
                detail: "새로운 환경에 적응하고 기회를 잡기에 아주 좋은 해입니다. 만남이 잦아지나 감정에 휩쓸리기보다는 냉철한 판단을 병행하는 것이 성공의 열쇠입니다.",
                secret: "충분한 숙면과 면역력 관리가 집중력을 유지하는 최고의 보약입니다.",
                affiliate: { name: "블루라이트 차단 안경", 
                    reason: "모니터와 책을 보는 시간이 많은 해, 눈의 피로를 덜어 성취도를 높입니다.", 
                    link: "https://link.coupang.com/a/dO03vI", 
                    img: "/images/affiliate_106.jpg" }
            },
            2018: {
                luck: { wealth: 4, love: 5, health: 5 },
                desc: "친구 관계가 원만하고 인기가 따르는 해입니다. 계획적인 생활이 복을 부릅니다.",
                detail: "용돈 관리 습관을 기르기에 최적의 시기입니다. 밖으로 활발히 움직이며 에너지를 발산하되, 환절기 건강과 작은 사고 예방에 신경을 써주면 좋습니다.",
                secret: "노란색 학용품이나 옷이 아이의 정서적 안정과 집중력을 높여줍니다.",
                affiliate: { name: "어린이 기능성 운동화", 
                    reason: "활발한 야외 활동을 지원하고 발의 피로를 최소화해줍니다.", 
                    link: "https://link.coupang.com/a/dO1aLv", 
                    img: "/images/affiliate_107.jpg" }
            }
        }
    },
    // 돼지띠 (Index: 11)
    11: {
        name: "돼지띠",
        color: "#4a90e2", // 돼지띠의 유연함과 지혜를 상징하는 깊은 바다색 계열
        // 공통 정보 (기본값)
        desc: "2026년 돼지띠는 겉으로 드러나지 않는 실속을 챙기고, 내실을 기해 풍요를 누리는 해입니다.",
        detail: "병오년의 뜨거운 기운이 돼지띠의 수(水) 기운과 만나 적절한 조화를 이룹니다. 서두르지 않아도 기회가 찾아오며, 주변 사람들과의 보이지 않는 협력이 큰 성과로 이어질 것입니다. 겸손함이 운을 더욱 키워줍니다.",
        secret: "검은색이나 남색 소품이 감정의 평온을 유지하고 금전적 기회를 포착하게 돕습니다.",
        affiliate: {
            name: "고급 자수정 핸드스톤",
            reason: "부정적인 에너지를 정화하고 돼지띠 특유의 복을 담아두는 수호 아이템입니다.",
            link: "https://link.coupang.com/a/dO1f3O",
            img: "/images/affiliate_011.jpg"
        },

        // [핵심] 연도별 맞춤 데이터
        yearly: {
            1947: {
                luck: { wealth: 4, love: 5, health: 4 },
                desc: "안정된 흐름 속에 작은 기쁨이 따르는 해입니다. 가족의 사랑이 큰 힘이 됩니다.",
                detail: "의료비나 생활비 지출에 대비해 비상 자금을 점검하는 지혜가 필요합니다. 자녀와 손주들이 자주 찾아와 집안에 온기가 돌고 정서적으로 매우 풍요로운 한 해를 보내게 됩니다.",
                secret: "따뜻한 성질의 대추차가 기력 보충과 숙면에 큰 도움이 됩니다.",
                affiliate: { name: "프리미엄 족욕기", 
                    reason: "전신의 혈액순환을 돕고 심혈관 건강을 지키는 데 탁월한 선택입니다.", 
                    link: "https://link.coupang.com/a/dO1mV2", 
                    img: "/images/affiliate_111.jpg" }
            },
            1959: {
                luck: { wealth: 4, love: 4, health: 4 },
                desc: "지출 관리가 곧 재물을 지키는 해입니다. 현재의 자산을 지키는 전략이 유리합니다.",
                detail: "배우자와의 관계가 안정적이며, 서로를 깊이 이해하려는 노력이 노년의 행복을 견고히 합니다. 규칙적인 운동으로 심혈관 및 소화기 계통의 건강을 챙기는 것이 최우선입니다.",
                secret: "집안의 북서쪽을 정돈하면 명예운과 가택운이 동시에 살아납니다.",
                affiliate: { name: "양배추 사과즙", 
                    reason: "속을 편안하게 다스려주고 소화기 건강을 돕는 자연 건강식입니다.", 
                    link: "https://link.coupang.com/a/dO1rFq", 
                    img: "/images/affiliate_112.jpg" }
            },
            1971: {
                luck: { wealth: 5, love: 5, health: 4 },
                desc: "점진적으로 상승하는 흐름입니다. 그동안 쏟은 노력이 실질적인 결실로 맺힙니다.",
                detail: "자녀 문제로 기쁜 소식이 들려올 경사스러운 시기입니다. 무리한 확장은 피하되, 현재 하시는 일에 내실을 기한다면 기대 이상의 성과를 거두게 될 것입니다.",
                secret: "허리와 어깨의 피로를 수시로 풀어주는 스트레칭이 운의 순환을 돕습니다.",
                affiliate: { name: "메모리폼 허리 쿠션", 
                    reason: "허리의 부담을 덜어주어 피로 누적을 막고 바른 자세를 유지하게 돕습니다.", 
                    link: "https://link.coupang.com/a/dO1wup", 
                    img: "/images/affiliate_113.jpg" }
            },
            1983: {
                luck: { wealth: 4, love: 5, health: 4 },
                desc: "기회의 해입니다. 새로운 제안이나 변화의 흐름이 찾아오면 신중히 검토하세요.",
                detail: "직장이나 사업에서 중요한 선택의 시점이 올 수 있습니다. 부부 간의 솔직한 대화와 작은 배려가 큰 신뢰를 만들고, 외부의 스트레스를 이겨내는 원동력이 됩니다.",
                secret: "중요한 비즈니스 미팅은 수요일에 잡는 것이 성사 확률을 높여줍니다.",
                affiliate: { name: "아로마 캔들 세트", 
                    reason: "과로와 스트레스로 지친 마음을 정화하고 맑은 정신을 일깨워줍니다.", 
                    link: "https://link.coupang.com/a/dO1A4Y", 
                    img: "/images/affiliate_114.jpg" }
            },
            1995: {
                luck: { wealth: 5, love: 5, health: 4 },
                desc: "강력한 상승 기운이 감도는 해입니다. 승진이나 수입 증가 등 재물운이 따릅니다.",
                detail: "노력한 만큼 성과급이나 보너스 같은 실질적 보상이 기대됩니다. 미혼자는 좋은 인연과의 만남이 있고, 기혼자는 가정의 화목함이 돋보이니 꾸준한 운동으로 이 활력을 유지하세요.",
                secret: "푸른색 넥타이나 스카프가 대인관계에서 신선하고 신뢰감 있는 인상을 줍니다.",
                affiliate: { name: "고급 가죽 브리프케이스", 
                    reason: "상승하는 업무운과 전문성을 돋보이게 하여 기회를 성공으로 연결합니다.", 
                    link: "https://link.coupang.com/a/dO1GfS", 
                    img: "/images/affiliate_115.jpg" }
            },
            2007: {
                luck: { wealth: 4, love: 4, health: 5 },
                desc: "도전과 성취의 문이 열리는 해입니다. 학업과 취업에서 노력이 보상받습니다.",
                detail: "새로운 분야로의 진출이나 자격 취득에 아주 좋은 해입니다. 만남이 잦아지는 시기인 만큼 감정에 치우치기보다 목표를 향해 매진하는 끈기가 필요합니다. 충분한 숙면은 필수입니다.",
                secret: "비타민과 충분한 수분 섭취가 면역력과 집중력을 동시에 잡아줍니다.",
                affiliate: { name: "멀티비타민 구미", 
                    reason: "바쁜 수험생 및 사회초년생의 영양 균형을 돕고 활력을 유지시켜줍니다.", 
                    link: "https://link.coupang.com/a/dO1Q23", 
                    img: "/images/affiliate_116.jpg" }
            },
            2019: {
                luck: { wealth: 4, love: 5, health: 4 },
                desc: "친구 관계가 확장되고 또래 사이에서 즐거움이 가득한 해입니다.",
                detail: "계획적인 소비 습관을 자연스럽게 익히기에 최적의 해입니다. 에너지가 넘쳐 활기찬 일상을 보내게 되나, 활동 중 부주의로 인한 작은 사고나 감기 예방에 신경 써주세요.",
                secret: "초록색 문구류나 옷이 아이의 정서적 안정과 호기심을 자극합니다.",
                affiliate: { name: "어린이 기능성 안전 운동화", 
                    reason: "활발한 활동을 안전하게 지원하며 성장을 방해하지 않는 인체공학적 신발입니다.", 
                    link: "https://link.coupang.com/a/dO1V2M", 
                    img: "/images/affiliate_117.jpg" }
            }
        }
    }
};