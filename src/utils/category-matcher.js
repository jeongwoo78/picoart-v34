/**
 * Category Matcher
 * 사진 분석 결과를 8개 카테고리로 변환
 * 
 * 우선순위 규칙:
 * 1. 얼굴 최우선 (30% 이상)
 * 2. 행위 다음 (얼굴 없어도 사람 행위가 중심)
 * 3. 비율 마지막 (가장 큰 비율 60%+, 애매하면 복합)
 */

/**
 * Claude API 분석 결과를 카테고리로 변환
 * 
 * @param {Object} analysis - Claude API 분석 결과
 * @returns {Object} { primary, subcategory }
 */
export function determineCategory(analysis) {
  const { 
    face,           // "yes" | "no"
    faceSize,       // "large" | "medium" | "small"
    food,           // "yes" | "no"
    foodSize,       // "large" | "medium" | "small"
    landscape,      // "yes" | "no"
    landscapeType,  // "mountain" | "sea" | "forest" | "field" | "sky" | "water"
    animal,         // "yes" | "no"
    animalType,     // "pet" | "wild" | "bird" | "insect" | "aquatic"
    building,       // "yes" | "no"
    buildingType,   // "architecture" | "street" | "interior" | "night"
    action,         // "yes" | "no"
    actionType,     // "work" | "exercise" | "cooking" | "rest" | "eating" | "hobby"
    event,          // "yes" | "no"
    eventType,      // "wedding" | "party" | "festival" | "graduation" | "travel"
    peopleCount,    // 1 | "2-3" | "4-6" | "7+"
    pose,           // "closeup" | "upper-body" | "full-body" | "dynamic" | "silhouette"
    objects         // "flowers" | "books" | "drink" | "product"
  } = analysis;
  
  // ==========================================
  // 규칙 1: 얼굴이 보이면 (30% 이상)
  // ==========================================
  if (face === "yes" && (faceSize === "large" || faceSize === "medium")) {
    
    // 복합 카테고리 체크
    const hasFood = food === "yes" && foodSize !== "small";
    const hasLandscape = landscape === "yes";
    const hasAnimal = animal === "yes";
    const hasBuilding = building === "yes";
    
    // 복합 요소가 2개 이상이거나 1개가 강하게 나타나면 복합
    if (hasFood) {
      return {
        primary: "mixed",
        subcategory: "mixed-portrait-food",
        description: "인물과 음식이 함께 있는 장면"
      };
    }
    
    if (hasAnimal) {
      return {
        primary: "mixed",
        subcategory: "mixed-portrait-animal",
        description: "인물과 동물이 함께 있는 장면"
      };
    }
    
    if (hasLandscape) {
      return {
        primary: "mixed",
        subcategory: "mixed-portrait-landscape",
        description: "인물과 풍경이 함께 있는 장면"
      };
    }
    
    if (hasBuilding) {
      return {
        primary: "mixed",
        subcategory: "mixed-portrait-architecture",
        description: "인물과 건축물이 함께 있는 장면"
      };
    }
    
    // 순수 인물 - 인원수와 포즈로 세분화
    if (peopleCount === 1) {
      if (pose === "closeup") {
        return {
          primary: "portrait",
          subcategory: "portrait-closeup",
          description: "얼굴 중심의 클로즈업 인물 사진"
        };
      }
      if (pose === "upper-body") {
        return {
          primary: "portrait",
          subcategory: "portrait-upper-body",
          description: "상반신 인물 사진"
        };
      }
      if (pose === "full-body") {
        return {
          primary: "portrait",
          subcategory: "portrait-full-body",
          description: "전신 인물 사진"
        };
      }
      if (pose === "dynamic") {
        return {
          primary: "portrait",
          subcategory: "portrait-dynamic",
          description: "역동적인 포즈의 인물 사진"
        };
      }
      if (pose === "silhouette") {
        return {
          primary: "portrait",
          subcategory: "portrait-silhouette",
          description: "실루엣 인물 사진"
        };
      }
      // 기본 단독 인물
      return {
        primary: "portrait",
        subcategory: "portrait-upper-body",
        description: "단독 인물 사진"
      };
    }
    
    if (peopleCount === "2-3") {
      return {
        primary: "portrait",
        subcategory: "portrait-small-group",
        description: "2-3명의 소규모 그룹 사진"
      };
    }
    
    if (peopleCount === "4-6") {
      return {
        primary: "portrait",
        subcategory: "portrait-group-4-6",
        description: "4-6명의 중규모 그룹 사진"
      };
    }
    
    if (peopleCount === "7+") {
      return {
        primary: "portrait",
        subcategory: "portrait-group-7plus",
        description: "7명 이상의 대규모 그룹 사진"
      };
    }
    
    // 기본 인물
    return {
      primary: "portrait",
      subcategory: null,
      description: "인물 사진"
    };
  }
  
  // ==========================================
  // 규칙 2: 행위가 중심 (얼굴 없어도)
  // ==========================================
  if (action === "yes" && actionType) {
    return {
      primary: "daily-life",
      subcategory: `daily-life-${actionType}`,
      description: `${actionType} 활동 중인 일상 사진`
    };
  }
  
  // ==========================================
  // 규칙 3: 이벤트 체크
  // ==========================================
  if (event === "yes" && eventType) {
    return {
      primary: "event",
      subcategory: `event-${eventType}`,
      description: `${eventType} 이벤트 사진`
    };
  }
  
  // ==========================================
  // 규칙 4: 비율로 판단 (60%+)
  // ==========================================
  
  // 음식/정물
  if (food === "yes") {
    if (foodSize === "large") {
      if (objects === "drink") {
        return {
          primary: "still-life",
          subcategory: "still-life-drink",
          description: "음료 중심의 정물 사진"
        };
      }
      return {
        primary: "still-life",
        subcategory: "still-life-food",
        description: "음식 중심의 정물 사진"
      };
    }
  }
  
  // 정물 오브제
  if (objects) {
    if (objects === "flowers") {
      return {
        primary: "still-life",
        subcategory: "still-life-flowers",
        description: "꽃/식물 정물 사진"
      };
    }
    if (objects === "books") {
      return {
        primary: "still-life",
        subcategory: "still-life-books",
        description: "책/문구 정물 사진"
      };
    }
    if (objects === "product") {
      return {
        primary: "still-life",
        subcategory: "still-life-product",
        description: "제품 정물 사진"
      };
    }
    return {
      primary: "still-life",
      subcategory: "still-life-objects",
      description: "소품/오브제 정물 사진"
    };
  }
  
  // 자연 풍경
  if (landscape === "yes") {
    if (landscapeType) {
      return {
        primary: "nature",
        subcategory: `nature-${landscapeType}`,
        description: `${landscapeType} 풍경 사진`
      };
    }
    return {
      primary: "nature",
      subcategory: null,
      description: "자연 풍경 사진"
    };
  }
  
  // 동물
  if (animal === "yes") {
    if (animalType) {
      return {
        primary: "animal",
        subcategory: `animal-${animalType}`,
        description: `${animalType} 동물 사진`
      };
    }
    return {
      primary: "animal",
      subcategory: null,
      description: "동물 사진"
    };
  }
  
  // 건축/도시
  if (building === "yes") {
    if (buildingType) {
      return {
        primary: "urban",
        subcategory: `urban-${buildingType}`,
        description: `${buildingType} 도시/건축 사진`
      };
    }
    return {
      primary: "urban",
      subcategory: null,
      description: "도시/건축 사진"
    };
  }
  
  // ==========================================
  // 기본값: 애매하면 인물로
  // ==========================================
  return {
    primary: "portrait",
    subcategory: null,
    description: "일반 사진 (인물 추정)"
  };
}

/**
 * 간단한 테스트 예제
 */
export const testCases = [
  {
    name: "셀카",
    analysis: {
      face: "yes",
      faceSize: "large",
      peopleCount: 1,
      pose: "closeup"
    },
    expected: { primary: "portrait", subcategory: "portrait-closeup" }
  },
  {
    name: "단체 사진",
    analysis: {
      face: "yes",
      faceSize: "medium",
      peopleCount: "7+"
    },
    expected: { primary: "portrait", subcategory: "portrait-group-7plus" }
  },
  {
    name: "음식 사진",
    analysis: {
      face: "no",
      food: "yes",
      foodSize: "large"
    },
    expected: { primary: "still-life", subcategory: "still-life-food" }
  },
  {
    name: "인물+음식",
    analysis: {
      face: "yes",
      faceSize: "medium",
      food: "yes",
      foodSize: "medium",
      peopleCount: 1
    },
    expected: { primary: "mixed", subcategory: "mixed-portrait-food" }
  },
  {
    name: "산 풍경",
    analysis: {
      face: "no",
      landscape: "yes",
      landscapeType: "mountain"
    },
    expected: { primary: "nature", subcategory: "nature-mountain" }
  },
  {
    name: "반려동물",
    analysis: {
      face: "no",
      animal: "yes",
      animalType: "pet"
    },
    expected: { primary: "animal", subcategory: "animal-pet" }
  },
  {
    name: "운동 중",
    analysis: {
      face: "no",
      action: "yes",
      actionType: "exercise"
    },
    expected: { primary: "daily-life", subcategory: "daily-life-exercise" }
  }
];

/**
 * 테스트 실행
 */
export function runTests() {
  console.log("=== Category Matcher Tests ===\n");
  
  testCases.forEach(test => {
    const result = determineCategory(test.analysis);
    const pass = 
      result.primary === test.expected.primary && 
      result.subcategory === test.expected.subcategory;
    
    console.log(`${pass ? "✅" : "❌"} ${test.name}`);
    console.log(`   Expected: ${test.expected.primary} / ${test.expected.subcategory}`);
    console.log(`   Got:      ${result.primary} / ${result.subcategory}`);
    console.log(`   Desc:     ${result.description}\n`);
  });
}
