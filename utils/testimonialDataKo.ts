export interface Testimonial {
    name: string;
    role: string;
    avatar: string;
    rating: number;
    text: string;
}

// Pool of reliable Unsplash photos (same as other languages)
const avatarPool = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces", // Man 1
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces", // Man 2
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=faces", // Man 3
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces", // Man 4
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=faces", // Man 5
    "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop&crop=faces", // Man 6
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=faces", // Man 7
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=150&h=150&fit=crop&crop=faces", // Man 8
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces", // Man 9
    "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=faces", // Man 10
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces", // Woman 1
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=faces", // Woman 2
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=faces", // Woman 3
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces", // Woman 4
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces", // Woman 5
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces", // Woman 6
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces", // Woman 7
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces", // Woman 8
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop&crop=faces", // Woman 9
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=faces"  // Woman 10
];

export const testimonialDataKo = {
    home: [
        {
            name: "지민 김",
            role: "사진작가",
            avatar: avatarPool[0],
            rating: 5,
            text: "이 워터마크 제거 도구는 게임 체인저입니다! 몇 초 만에 클라이언트 사진에서 워터마크를 제거하고 품질은 흠잡을 데가 없습니다. 무료 버전만으로도 놀랍습니다."
        },
        {
            name: "서연 박",
            role: "소셜 미디어 관리자",
            avatar: avatarPool[10],
            rating: 5,
            text: "TikTok 워터마크 제거 기능을 좋아합니다. 항상 클린 비디오가 필요했는데 이게 완벽하게 작동합니다. 빠르고 쉽고 효과적입니다!"
        },
        {
            name: "민준 이",
            role: "그래픽 디자이너",
            avatar: avatarPool[1],
            rating: 5,
            text: "복잡한 배경이 있는 이미지에서 워터마크를 제거해야 했는데 AI가 완벽하게 처리했습니다. 정말 인상적인 워터마크 제거 기술입니다."
        },
        {
            name: "하은 최",
            role: "블로거",
            avatar: avatarPool[11],
            rating: 5,
            text: "내 블로그에 사용할 사진에서 워터마크를 제거하는 데 매일 사용합니다. 사진 워터마크 제거가 이렇게 쉬울 줄 몰랐어요. 강력 추천합니다!"
        },
        {
            name: "도윤 강",
            role: "전자상거래 판매자",
            avatar: avatarPool[2],
            rating: 5,
            text: "제품 이미지가 전문적으로 보여야 합니다. 이 무료 워터마크 제거 도구를 사용하면 모든 로고와 워터마크를 빠르게 제거할 수 있습니다. 정말 시간 절약입니다!"
        },
        {
            name: "수아 윤",
            role: "마케팅 전문가",
            avatar: avatarPool[12],
            rating: 5,
            text: "비디오에서 워터마크를 제거하는 기능이 저를 많이 도와주었습니다. 깨끗하고 전문적이며 매우 빠릅니다. 캠페인에 완벽합니다."
        },
        {
            name: "예준 정",
            role: "콘텐츠 제작자",
            avatar: avatarPool[3],
            rating: 5,
            text: "사진이나 비디오에서 워터마크를 제거하는 데 가장 좋은 도구입니다. 무료이고 품질이 놀랍고 몇 초 안에 작동합니다. 더 이상 무엇을 요구할 수 있겠습니까?"
        },
        {
            name: "지우 임",
            role: "프리랜서 편집자",
            avatar: avatarPool[13],
            rating: 5,
            text: "이미지 워터마크 제거 기능은 놀랍습니다. 투명한 워터마크도 처리하고 배경이 완벽하게 보입니다. 문자 그대로 마법입니다!"
        },
        {
            name: "시우 한",
            role: "부동산 중개인",
            avatar: avatarPool[4],
            rating: 5,
            text: "부동산 사진에서 워터마크를 제거하는 데 사용합니다. 빠르고 쉽고 결과가 항상 깨끗합니다. 이 워터마크 지우개 없이는 일할 수 없습니다!"
        }
    ],
    'remove-watermark-video': [
        {
            name: "제임스 쿠퍼",
            role: "비디오 편집자",
            avatar: avatarPool[0],
            rating: 5,
            text: "편집을 위해 TikTok 클립을 많이 사용하므로 좋은 TikTok 워터마크 제거 도구를 찾는 것이 중요했습니다. 이 도구는 TikTok 로고를 깔끔하게 제거하고 제가 시도한 다른 앱보다 훨씬 빠릅니다. 확실히 추천합니다."
        },
        {
            name: "마커스 윌리엄스",
            role: "영화 제작자",
            avatar: avatarPool[1],
            rating: 5,
            text: "오래된 영상에서 비디오 워터마크를 삭제해야 했는데 결과가 놀라웠습니다. 비디오는 손대지 않은 것처럼 보였고 프로세스는 매우 빨랐습니다. 콘텐츠 제작자에게 훌륭합니다."
        },
        {
            name: "다니엘 천",
            role: "소셜 미디어 관리자",
            avatar: avatarPool[2],
            rating: 5,
            text: "매일 비디오를 편집하는 사람으로서 신뢰할 수 있는 워터마크 제거 비디오 도구는 필수입니다. 이것은 로고를 깔끔하게 제거하고 품질을 높게 유지했습니다. 일반적으로 찾기 어려운 것입니다."
        },
        {
            name: "프리야 샤르마",
            role: "YouTube 크리에이터",
            avatar: avatarPool[13],
            rating: 5,
            text: "많은 것을 기대하지 않았지만 이 도구는 일부 유료 소프트웨어보다 비디오에서 워터마크를 제거하는 데 정말 뛰어납니다. 인터페이스는 간단하고 결과는 전문적으로 보입니다."
        },
        {
            name: "로버트 테일러",
            role: "프리랜스 편집자",
            avatar: avatarPool[3],
            rating: 5,
            text: "온라인에서 이 도구에 대해 언급된 것을 보고 시도하기로 결정했습니다. 워터마크 제거 도구는 사진과 비디오 모두에서 훌륭한 작업을 했습니다. 모든 것을 쉽게 처리했습니다."
        },
        {
            name: "아나 실바",
            role: "콘텐츠 프로듀서",
            avatar: avatarPool[14],
            rating: 5,
            text: "비디오에서 워터마크를 제거하는 놀라운 도구입니다! AI가 자동으로 감지하고 제거하여 수동 작업 시간을 절약합니다. 결과는 매번 완벽합니다."
        },
        {
            name: "카를로스 산토스",
            role: "디지털 인플루언서",
            avatar: avatarPool[6],
            rating: 5,
            text: "TikTok 비디오를 정리하기 위해 이 도구를 정기적으로 사용합니다. TikTok 워터마크를 완벽하게 제거하며 비디오 품질에 영향을 주지 않습니다. 강력 추천합니다!"
        },
        {
            name: "줄리아나 코스타",
            role: "비디오 디자이너",
            avatar: avatarPool[15],
            rating: 5,
            text: "제가 사용한 최고의 비디오 워터마크 제거 도구입니다. 빠르고 효율적이며 결과는 항상 흠잡을 데가 없습니다. 프로 플랜의 모든 비용 가치가 있습니다."
        },
        {
            name: "페드로 올리베이라",
            role: "콘텐츠 크리에이터",
            avatar: avatarPool[7],
            rating: 5,
            text: "인상적입니다! AI가 각 프레임을 분석하고 워터마크를 완벽하게 제거합니다. 이제 모든 비디오 프로젝트에 사용합니다."
        }
    ],
    'remove-text': [
        {
            name: "소피 터너",
            role: "콘텐츠 크리에이터",
            avatar: avatarPool[11],
            rating: 5,
            text: "이미지에서 텍스트를 제거하는 놀라운 도구입니다! 스크린샷과 밈을 정리하는 데 정기적으로 사용합니다. AI가 텍스트를 완벽하게 감지하고 제거하며 배경에 영향을 주지 않습니다."
        },
        {
            name: "제시카 리우",
            role: "디지털 마케팅 전문가",
            avatar: avatarPool[12],
            rating: 5,
            text: "AI 텍스트 제거 도구는 인상적입니다. 텍스트를 즉시 감지하고 배경을 완벽하게 재구성합니다. 이미지에서 텍스트를 제거하는 데 수십 번 사용했습니다."
        },
        {
            name: "루카스 페레이라",
            role: "그래픽 디자이너",
            avatar: avatarPool[8],
            rating: 5,
            text: "제가 사용한 사진에서 텍스트를 제거하는 최고의 도구입니다. 빠르고 정확하며 결과는 항상 흠잡을 데가 없습니다. 프로젝트에서 많은 시간을 절약합니다."
        },
        {
            name: "마리아 산토스",
            role: "사진작가",
            avatar: avatarPool[16],
            rating: 5,
            text: "사진에서 캡션과 텍스트 오버레이를 제거하는 데 이 도구를 사용합니다. 완벽하게 작동하고 이미지 품질을 유지합니다. 강력 추천합니다!"
        },
        {
            name: "앙드레 실바",
            role: "비디오 편집자",
            avatar: avatarPool[9],
            rating: 5,
            text: "스크린샷에서 텍스트를 정기적으로 제거해야 합니다. 이 AI는 몇 초 만에 전문적인 결과를 제공합니다. 모든 비용 가치가 있습니다!"
        },
        {
            name: "카밀라 코스타",
            role: "소셜 미디어 관리자",
            avatar: avatarPool[17],
            rating: 5,
            text: "소셜 미디어용 이미지에서 텍스트를 제거하는 필수 도구입니다. AI는 스마트하고 결과는 자연스럽게 보입니다. 매우 인상적입니다!"
        },
        {
            name: "라파엘 올리베이라",
            role: "웹 개발자",
            avatar: avatarPool[4],
            rating: 5,
            text: "문서 이미지를 정리하는 데 사용합니다. 사진에서 텍스트를 완벽하게 제거하고 배경을 그대로 둡니다. 매우 빠른 프로세스입니다!"
        },
        {
            name: "베아트리즈 리마",
            role: "학생",
            avatar: avatarPool[18],
            rating: 5,
            text: "학습 이미지에서 주석과 텍스트를 제거하는 데 훌륭합니다. 무료 AI 텍스트 제거 도구가 예상보다 훨씬 잘 작동합니다!"
        },
        {
            name: "페르난도 소우자",
            role: "블로거",
            avatar: avatarPool[6],
            rating: 5,
            text: "인상적입니다! AI가 각 픽셀을 분석하고 흔적 없이 텍스트를 제거합니다. 이제 모든 블로그 프로젝트에 사용합니다."
        }
    ],
    'remove-object': [
        {
            name: "로버트 테일러",
            role: "프리랜스 편집자",
            avatar: avatarPool[3],
            rating: 5,
            text: "원치 않는 객체를 제거하는 놀라운 도구입니다! 클라이언트 사진을 정기적으로 정리하는 데 사용합니다. AI가 배경을 완벽하게 재구성합니다."
        },
        {
            name: "이사벨라 마르티네즈",
            role: "그래픽 디자이너",
            avatar: avatarPool[14],
            rating: 5,
            text: "AI 객체 제거 도구는 인상적입니다. 사진에서 여러 요소를 제거했는데 결과는 항상 흠잡을 데가 없었습니다. 많은 시간을 절약합니다!"
        },
        {
            name: "카를로스 멘데스",
            role: "사진작가",
            avatar: avatarPool[8],
            rating: 5,
            text: "제가 사용한 이미지에서 객체를 제거하는 최고의 도구입니다. 빠르고 정확하며 결과는 자연스럽게 보입니다. 강력 추천합니다!"
        },
        {
            name: "아나 파울라",
            role: "부동산 중개인",
            avatar: avatarPool[16],
            rating: 5,
            text: "부동산 사진에서 원치 않는 객체를 제거하는 데 사용합니다. 완벽하게 작동하고 사진을 훨씬 더 전문적으로 만듭니다. 훌륭한 도구입니다!"
        },
        {
            name: "주앙 실바",
            role: "제품 디자이너",
            avatar: avatarPool[9],
            rating: 5,
            text: "제품 사진에서 객체를 정기적으로 제거해야 합니다. 이 AI는 몇 초 만에 전문적인 결과를 제공합니다. 정말 가치가 있습니다!"
        },
        {
            name: "마리아나 코스타",
            role: "여행 블로거",
            avatar: avatarPool[17],
            rating: 5,
            text: "여행 사진에서 포토밤과 원치 않는 객체를 제거하는 필수 도구입니다. AI는 스마트하고 결과는 완벽합니다!"
        },
        {
            name: "파울로 산토스",
            role: "사진 편집자",
            avatar: avatarPool[4],
            rating: 5,
            text: "클라이언트 이미지를 정리하는 데 사용합니다. 객체를 완벽하게 제거하고 배경을 그대로 둡니다. 매우 빠르고 효율적인 프로세스입니다!"
        },
        {
            name: "줄리아나 리마",
            role: "마케팅 관리자",
            avatar: avatarPool[18],
            rating: 5,
            text: "마케팅 사진에서 원치 않는 요소를 제거하는 데 훌륭합니다. AI 객체 제거 도구가 예상보다 훨씬 잘 작동합니다!"
        },
        {
            name: "리카르도 올리베이라",
            role: "콘텐츠 크리에이터",
            avatar: avatarPool[6],
            rating: 5,
            text: "인상적입니다! AI가 각 픽셀을 분석하고 흔적 없이 객체를 제거합니다. 이제 모든 프로젝트에 사용합니다."
        }
    ],
    'replace-background': [
        {
            name: "엠마 윌슨",
            role: "제품 사진작가",
            avatar: avatarPool[10],
            rating: 5,
            text: "배경을 교체하는 놀라운 도구입니다! 제품 사진에 정기적으로 사용합니다. AI가 주제를 완벽하게 분리하고 새 배경이 전문적으로 보입니다."
        },
        {
            name: "올리비아 브라운",
            role: "전자상거래 관리자",
            avatar: avatarPool[11],
            rating: 5,
            text: "AI 배경 교체 도구는 인상적입니다. 수백 개의 제품 이미지를 처리했는데 결과는 항상 흠잡을 데가 없었습니다. 많은 시간을 절약합니다!"
        },
        {
            name: "윌리엄 데이비스",
            role: "그래픽 디자이너",
            avatar: avatarPool[5],
            rating: 5,
            text: "제가 사용한 배경을 교체하는 최고의 도구입니다. 빠르고 정확하며 가장자리 감지가 놀랍습니다. 강력 추천합니다!"
        },
        {
            name: "소피아 존슨",
            role: "소셜 미디어 크리에이터",
            avatar: avatarPool[12],
            rating: 5,
            text: "소셜 미디어 게시물의 배경을 변경하는 데 사용합니다. 완벽하게 작동하고 콘텐츠를 훨씬 더 전문적으로 만듭니다. 훌륭한 도구입니다!"
        },
        {
            name: "제임스 밀러",
            role: "마케팅 전문가",
            avatar: avatarPool[7],
            rating: 5,
            text: "마케팅 이미지의 배경을 정기적으로 교체해야 합니다. 이 AI는 몇 초 만에 전문적인 결과를 제공합니다. 정말 가치가 있습니다!"
        },
        {
            name: "아바 윌리엄스",
            role: "블로거",
            avatar: avatarPool[13],
            rating: 5,
            text: "블로그 사진의 배경을 교체하는 필수 도구입니다. AI는 스마트하고 결과는 자연스럽게 보입니다. 매우 인상적입니다!"
        },
        {
            name: "벤자민 마르티네즈",
            role: "사진 편집자",
            avatar: avatarPool[8],
            rating: 5,
            text: "클라이언트 이미지의 배경을 변경하는 데 사용합니다. 주제를 완벽하게 분리하고 새 배경을 원활하게 추가합니다. 매우 빠르고 효율적인 프로세스입니다!"
        },
        {
            name: "미아 가르시아",
            role: "온라인 판매자",
            avatar: avatarPool[14],
            rating: 5,
            text: "제품 목록의 배경을 교체하는 데 훌륭합니다. 무료 AI 배경 교체 도구가 예상보다 훨씬 잘 작동합니다!"
        },
        {
            name: "루카스 로드리게스",
            role: "콘텐츠 크리에이터",
            avatar: avatarPool[9],
            rating: 5,
            text: "인상적입니다! AI가 모든 픽셀을 분석하고 배경을 완벽하게 교체합니다. 이제 모든 프로젝트에 사용합니다."
        }
    ],
    'remove-background': [
        {
            name: "샬럿 존슨",
            role: "제품 사진작가",
            avatar: avatarPool[15],
            rating: 5,
            text: "배경을 제거하는 놀라운 도구입니다! 제품 사진의 투명 PNG를 만드는 데 정기적으로 사용합니다. AI가 주제를 완벽하게 분리합니다."
        },
        {
            name: "헨리 스미스",
            role: "그래픽 디자이너",
            avatar: avatarPool[5],
            rating: 5,
            text: "AI 배경 제거 도구는 인상적입니다. 수백 개의 이미지를 처리했는데 가장자리 감지가 항상 완벽했습니다. 많은 시간을 절약합니다!"
        },
        {
            name: "아멜리아 브라운",
            role: "전자상거래 관리자",
            avatar: avatarPool[16],
            rating: 5,
            text: "제가 사용한 배경을 제거하는 최고의 도구입니다. 빠르고 정확하며 결과는 자연스럽게 보입니다. 강력 추천합니다!"
        },
        {
            name: "알렉산더 데이비스",
            role: "마케팅 디렉터",
            avatar: avatarPool[6],
            rating: 5,
            text: "캠페인 이미지의 배경을 제거하는 데 사용합니다. 완벽하게 작동하고 비주얼을 훨씬 더 전문적으로 만듭니다. 훌륭한 도구입니다!"
        },
        {
            name: "이사벨라 윌슨",
            role: "온라인 판매자",
            avatar: avatarPool[17],
            rating: 5,
            text: "제품 목록의 배경을 정기적으로 제거해야 합니다. 이 AI는 몇 초 만에 전문적인 투명 PNG를 제공합니다. 정말 가치가 있습니다!"
        },
        {
            name: "윌리엄 밀러",
            role: "사진 편집자",
            avatar: avatarPool[8],
            rating: 5,
            text: "배경을 제거하는 필수 도구입니다. AI는 스마트하고 머리카락 및 가장자리를 완벽하게 처리합니다. 매우 인상적입니다!"
        },
        {
            name: "소피아 가르시아",
            role: "블로거",
            avatar: avatarPool[18],
            rating: 5,
            text: "블로그 이미지의 배경을 변경하는 데 사용합니다. 주제를 완벽하게 분리하고 투명 PNG를 만듭니다. 매우 빠르고 효율적인 프로세스입니다!"
        },
        {
            name: "제임스 마르티네즈",
            role: "소셜 미디어 관리자",
            avatar: avatarPool[9],
            rating: 5,
            text: "소셜 미디어 그래픽의 배경을 제거하는 데 훌륭합니다. 무료 AI 배경 제거 도구가 예상보다 훨씬 잘 작동합니다!"
        },
        {
            name: "에밀리 로드리게스",
            role: "콘텐츠 크리에이터",
            avatar: avatarPool[19],
            rating: 5,
            text: "인상적입니다! AI가 각 픽셀을 분석하고 배경을 완벽하게 제거합니다. 이제 모든 프로젝트에 투명 PNG를 사용합니다."
        }
    ],
    'auto-remove-people': [
        {
            name: "올리버 존슨",
            role: "여행 사진작가",
            avatar: avatarPool[7],
            rating: 5,
            text: "사람을 제거하는 놀라운 도구입니다! 여행 사진에서 관광객을 정리하는 데 정기적으로 사용합니다. AI가 배경을 완벽하게 재구성합니다."
        },
        {
            name: "소피아 스미스",
            role: "부동산 사진작가",
            avatar: avatarPool[15],
            rating: 5,
            text: "AI 사람 제거 도구는 인상적입니다. 부동산 사진에서 사람을 제거했는데 결과는 항상 흠잡을 데가 없었습니다. 많은 시간을 절약합니다!"
        },
        {
            name: "노아 브라운",
            role: "건축 사진작가",
            avatar: avatarPool[6],
            rating: 5,
            text: "제가 사용한 이미지에서 사람을 제거하는 최고의 도구입니다. 빠르고 정확하며 결과는 자연스럽게 보입니다. 강력 추천합니다!"
        },
        {
            name: "이사벨라 데이비스",
            role: "여행 블로거",
            avatar: avatarPool[16],
            rating: 5,
            text: "랜드마크 사진에서 군중을 제거하는 데 사용합니다. 완벽하게 작동하고 사진을 훨씬 더 깨끗하게 만듭니다. 훌륭한 도구입니다!"
        },
        {
            name: "엘리야 밀러",
            role: "사진 편집자",
            avatar: avatarPool[8],
            rating: 5,
            text: "클라이언트 이미지에서 사람을 정기적으로 제거해야 합니다. 이 AI는 몇 초 만에 전문적인 결과를 제공합니다. 정말 가치가 있습니다!"
        },
        {
            name: "미아 윌슨",
            role: "콘텐츠 크리에이터",
            avatar: avatarPool[17],
            rating: 5,
            text: "콘텐츠 사진에서 원치 않는 사람을 제거하는 필수 도구입니다. AI는 스마트하고 결과는 완벽합니다!"
        },
        {
            name: "제임스 가르시아",
            role: "디지털 아티스트",
            avatar: avatarPool[9],
            rating: 5,
            text: "디지털 아트워크의 사람을 정리하는 데 사용합니다. 사람을 완벽하게 제거하고 배경을 그대로 둡니다. 매우 빠르고 효율적인 프로세스입니다!"
        },
        {
            name: "샬럿 로드리게스",
            role: "소셜 미디어 관리자",
            avatar: avatarPool[18],
            rating: 5,
            text: "소셜 미디어 사진에서 사람을 제거하는 데 훌륭합니다. AI 사람 제거 도구가 예상보다 훨씬 잘 작동합니다!"
        },
        {
            name: "벤자민 마르티네즈",
            role: "풍경 사진작가",
            avatar: avatarPool[4],
            rating: 5,
            text: "인상적입니다! AI가 각 픽셀을 분석하고 사람을 완벽하게 제거합니다. 이제 모든 풍경 프로젝트에 사용합니다."
        }
    ],
    'image-upscaler': [
        {
            name: "에밀리 존슨",
            role: "사진작가",
            avatar: avatarPool[19],
            rating: 5,
            text: "이미지를 확대하는 놀라운 도구입니다! 오래된 사진을 정기적으로 확대하는 데 사용합니다. AI가 품질을 완벽하게 향상시키고 세부 사항을 보존합니다."
        },
        {
            name: "마이클 스미스",
            role: "그래픽 디자이너",
            avatar: avatarPool[3],
            rating: 5,
            text: "AI 이미지 업스케일러는 인상적입니다. 수백 개의 저해상도 이미지를 확대했는데 결과는 항상 선명했습니다. 많은 시간을 절약합니다!"
        },
        {
            name: "사라 브라운",
            role: "인쇄 디자이너",
            avatar: avatarPool[15],
            rating: 5,
            text: "제가 사용한 이미지를 확대하는 최고의 도구입니다. 빠르고 정확하며 결과는 인쇄 품질입니다. 강력 추천합니다!"
        },
        {
            name: "데이비드 윌슨",
            role: "디지털 아티스트",
            avatar: avatarPool[7],
            rating: 5,
            text: "아트워크 이미지를 확대하는 데 사용합니다. 완벽하게 작동하고 세부 사항을 훨씬 더 선명하게 만듭니다. 훌륭한 도구입니다!"
        },
        {
            name: "제시카 데이비스",
            role: "전자상거래 소유자",
            avatar: avatarPool[16],
            rating: 5,
            text: "제품 이미지를 정기적으로 확대해야 합니다. 이 AI는 몇 초 만에 전문적인 고해상도 결과를 제공합니다. 정말 가치가 있습니다!"
        },
        {
            name: "제임스 밀러",
            role: "마케팅 관리자",
            avatar: avatarPool[8],
            rating: 5,
            text: "마케팅 자료용 이미지를 확대하는 필수 도구입니다. AI는 스마트하고 결과는 고품질입니다. 매우 인상적입니다!"
        },
        {
            name: "올리비아 가르시아",
            role: "웹 디자이너",
            avatar: avatarPool[17],
            rating: 5,
            text: "웹 프로젝트용 이미지를 향상시키는 데 사용합니다. 이미지를 완벽하게 확대하고 선명도를 향상시킵니다. 매우 빠르고 효율적인 프로세스입니다!"
        },
        {
            name: "윌리엄 로드리게스",
            role: "콘텐츠 크리에이터",
            avatar: avatarPool[9],
            rating: 5,
            text: "콘텐츠 이미지를 확대하는 데 훌륭합니다. 무료 AI 이미지 업스케일러가 예상보다 훨씬 잘 작동합니다!"
        },
        {
            name: "소피아 마르티네즈",
            role: "사진 복원 전문가",
            avatar: avatarPool[18],
            rating: 5,
            text: "인상적입니다! AI가 각 픽셀을 분석하고 이미지를 완벽하게 확대합니다. 이제 모든 복원 프로젝트에 사용합니다."
        }
    ],
    'free-sora-remover': [
        {
            name: "루카스 마르틴",
            role: "AI 비디오 크리에이터",
            avatar: avatarPool[0],
            rating: 5,
            text: "이 Sora 워터마크 제거 도구는 게임 체인저입니다! OpenAI Sora로 많은 비디오를 만드는데 항상 브랜딩 문제가 있었습니다. 이제 몇 초 만에 Sora 워터마크를 제거할 수 있고 제 콘텐츠가 완전히 전문적으로 보입니다. AI가 놀라운 일을 합니다 - 워터마크가 있었다는 것조차 알 수 없습니다!"
        },
        {
            name: "소피아 두부아",
            role: "콘텐츠 마케팅 관리자",
            avatar: avatarPool[10],
            rating: 5,
            text: "마침내 Sora AI 비디오에 정말 작동하는 도구입니다! 클라이언트 프로젝트를 위해 OpenAI Sora 브랜딩을 제거해야 했는데 이 도구가 완벽하게 제공했습니다. 매우 빠르고 놀라운 품질이며 워터마크 제거가 완벽합니다. Sora로 생성된 콘텐츠로 작업하는 모든 사람에게 강력히 추천합니다!"
        },
        {
            name: "알렉상드르 쁘띠",
            role: "YouTuber 및 영화 제작자",
            avatar: avatarPool[1],
            rating: 5,
            text: "YouTube 채널의 비디오 콘텐츠를 생성하기 위해 Sora AI를 사용해 왔지만 워터마크는 항상 문제였습니다. 이 Sora 제거 도구가 모든 것을 해결했습니다 - 매번 깨끗하고 전문적인 결과입니다. 이제 제 비디오 워크플로우의 필수 부분입니다. 모든 비용의 가치가 있습니다!"
        },
        {
            name: "마리아 로랑",
            role: "소셜 미디어 전문가",
            avatar: avatarPool[11],
            rating: 5,
            text: "제가 찾은 최고의 Sora 워터마크 제거 도구입니다! 제 모든 AI 생성 비디오에서 완벽하게 작동합니다. 자동화된 프로세스는 매우 간단하고 결과는 방송 품질입니다. 더 이상 워터마크를 수동으로 편집하려고 시간을 낭비할 필요가 없습니다. 이 도구는 콘텐츠 크리에이터에게 필수입니다!"
        },
        {
            name: "제니퍼 박",
            role: "소셜 미디어 관리자",
            avatar: avatarPool[11],
            rating: 5,
            text: "Sora는 놀라운 비주얼을 만들지만 워터마크는 우리 브랜드와 맞지 않습니다. 이 도구는 깔끔하게 제거하여 AI 콘텐츠를 즉시 소셜 미디어에 사용할 수 있게 만듭니다!"
        },
        {
            name: "레이첼 김",
            role: "콘텐츠 전략가",
            avatar: avatarPool[12],
            rating: 5,
            text: "AI 비디오 생성은 미래이지만 워터마크는 사용성을 제한합니다. 이 제거 도구는 그 문제를 완벽하게 해결합니다. 이제 Sora 비디오를 원활하게 통합할 수 있습니다!"
        },
        {
            name: "트레버 존슨",
            role: "영화 제작자",
            avatar: avatarPool[3],
            rating: 5,
            text: "Sora는 컨셉 비디오에 놀랍지만 클라이언트에게 워터마크를 보여줄 수 없습니다. 이 도구는 품질을 유지하면서 즉시 제거합니다. 절대적으로 필수입니다!"
        },
        {
            name: "니나 로드리게스",
            role: "브랜드 디자이너",
            avatar: avatarPool[13],
            rating: 5,
            text: "브랜딩을 위해 AI 생성 비디오를 사용하려면 워터마크가 없는 깨끗한 콘텐츠가 필요합니다. 이 도구는 Sora 워터마크를 완벽하게 처리합니다. 몇 초 만에 전문적인 결과!"
        },
        {
            name: "사만다 리",
            role: "YouTube 크리에이터",
            avatar: avatarPool[14],
            rating: 5,
            text: "Sora 비디오를 내 콘텐츠 워크플로우에 통합하는 것이 이제 쉽습니다. 워터마크 제거 도구는 빠르고 정확하며 내 비디오를 세련되고 전문적으로 유지합니다!"
        }
    ]
};
