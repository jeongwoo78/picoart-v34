/**
 * Renaissance Category Matching Test
 * 카테고리 시스템 → 르네상스 작품 매칭 테스트
 */

import { determineCategory, testCases, runTests } from '../utils/category-matcher.js';
import { 
  renaissanceArtworks, 
  findBestRenaissanceArtwork,
  getRenaissanceCoverage 
} from '../data/artworks-renaissance.js';

console.log("╔════════════════════════════════════════════════════════╗");
console.log("║  PicoArt v33 - Renaissance Category Test              ║");
console.log("╚════════════════════════════════════════════════════════╝\n");

// ==========================================
// 1. 카테고리 매처 테스트
// ==========================================
console.log("📋 Part 1: Category Matcher Tests\n");
runTests();

// ==========================================
// 2. 르네상스 작품 커버리지
// ==========================================
console.log("\n📊 Part 2: Renaissance Coverage\n");
const coverage = getRenaissanceCoverage();

console.log("카테고리별 작품 수:");
Object.entries(coverage).forEach(([category, count]) => {
  const emoji = count >= 5 ? "✅✅" : count >= 3 ? "✅" : count >= 1 ? "⚠️" : "❌";
  console.log(`  ${emoji} ${category.padEnd(15)} : ${count}개`);
});

console.log(`\n총 작품 수: ${Object.keys(renaissanceArtworks).length}개\n`);

// ==========================================
// 3. 실제 매칭 시뮬레이션
// ==========================================
console.log("🎨 Part 3: Artwork Matching Simulation\n");

const simulations = [
  {
    name: "셀카 (얼굴 클로즈업)",
    analysis: {
      face: "yes",
      faceSize: "large",
      peopleCount: 1,
      pose: "closeup"
    }
  },
  {
    name: "가족 사진 (2-3명)",
    analysis: {
      face: "yes",
      faceSize: "medium",
      peopleCount: "2-3"
    }
  },
  {
    name: "단체 사진 (7명+)",
    analysis: {
      face: "yes",
      faceSize: "medium",
      peopleCount: "7+"
    }
  },
  {
    name: "전신 포트레이트",
    analysis: {
      face: "yes",
      faceSize: "medium",
      peopleCount: 1,
      pose: "full-body"
    }
  },
  {
    name: "인물+풍경 (바다)",
    analysis: {
      face: "yes",
      faceSize: "medium",
      landscape: "yes",
      landscapeType: "sea",
      peopleCount: 1
    }
  },
  {
    name: "인물+동물 (반려동물)",
    analysis: {
      face: "yes",
      faceSize: "medium",
      animal: "yes",
      animalType: "pet",
      peopleCount: 1
    }
  },
  {
    name: "건축물",
    analysis: {
      face: "no",
      building: "yes",
      buildingType: "architecture"
    }
  },
  {
    name: "음식 사진",
    analysis: {
      face: "no",
      food: "yes",
      foodSize: "large"
    }
  },
  {
    name: "자연 풍경 (숲)",
    analysis: {
      face: "no",
      landscape: "yes",
      landscapeType: "forest"
    }
  },
  {
    name: "결혼식",
    analysis: {
      face: "yes",
      faceSize: "medium",
      event: "yes",
      eventType: "wedding",
      peopleCount: "2-3"
    }
  }
];

simulations.forEach((sim, index) => {
  console.log(`\n${index + 1}. ${sim.name}`);
  console.log("─".repeat(60));
  
  // 카테고리 판단
  const category = determineCategory(sim.analysis);
  console.log(`📍 카테고리: ${category.primary} / ${category.subcategory || 'N/A'}`);
  console.log(`   설명: ${category.description}`);
  
  // 작품 매칭
  const artwork = findBestRenaissanceArtwork(category.primary, category.subcategory);
  
  if (artwork) {
    console.log(`\n🎨 매칭된 작품:`);
    console.log(`   ${artwork.artistKo} - ${artwork.workKo}`);
    console.log(`   (${artwork.artist} - ${artwork.work}, ${artwork.year})`);
    console.log(`\n💡 FLUX 키워드: ${artwork.keywords.join(', ')}`);
  } else {
    console.log(`\n⚠️  매칭된 작품 없음 (AI 스타일 적용 필요)`);
  }
});

// ==========================================
// 4. 커버리지 분석
// ==========================================
console.log("\n\n📈 Part 4: Coverage Analysis\n");

const categoryTests = [
  "portrait",
  "nature", 
  "urban",
  "still-life",
  "animal",
  "daily-life",
  "event",
  "mixed"
];

console.log("카테고리별 매칭 가능 여부:");
categoryTests.forEach(cat => {
  const artwork = findBestRenaissanceArtwork(cat);
  const status = artwork ? "✅ 가능" : "❌ 불가능 (AI 보완)";
  const title = artwork ? `→ ${artwork.workKo}` : "";
  console.log(`  ${status.padEnd(20)} ${cat.padEnd(15)} ${title}`);
});

// ==========================================
// 5. 세부 카테고리 테스트
// ==========================================
console.log("\n\n🔍 Part 5: Subcategory Detailed Test\n");

const subcategoryTests = [
  { sub: "portrait-closeup", desc: "클로즈업" },
  { sub: "portrait-group-7plus", desc: "대규모 그룹" },
  { sub: "portrait-full-body", desc: "전신" },
  { sub: "nature-sea", desc: "바다" },
  { sub: "urban-architecture", desc: "건축" },
  { sub: "mixed-portrait-animal", desc: "인물+동물" },
  { sub: "mixed-portrait-landscape", desc: "인물+풍경" }
];

subcategoryTests.forEach(test => {
  const artwork = findBestRenaissanceArtwork(null, test.sub);
  if (artwork) {
    console.log(`✅ ${test.desc.padEnd(15)} → ${artwork.artistKo} - ${artwork.workKo}`);
  } else {
    console.log(`❌ ${test.desc.padEnd(15)} → 매칭 불가`);
  }
});

// ==========================================
// 6. 요약
// ==========================================
console.log("\n\n" + "═".repeat(60));
console.log("📊 테스트 요약");
console.log("═".repeat(60));

const totalArtworks = Object.keys(renaissanceArtworks).length;
const coverageCount = Object.values(coverage).filter(c => c > 0).length;
const totalCategories = 8;

console.log(`\n✅ 총 르네상스 작품: ${totalArtworks}개`);
console.log(`✅ 커버된 카테고리: ${coverageCount}/${totalCategories}개`);
console.log(`✅ 커버율: ${Math.round(coverageCount / totalCategories * 100)}%`);

const weakCategories = Object.entries(coverage)
  .filter(([cat, count]) => count < 3)
  .map(([cat]) => cat);

if (weakCategories.length > 0) {
  console.log(`\n⚠️  약한 카테고리 (AI 보완 필요):`);
  weakCategories.forEach(cat => {
    const count = coverage[cat];
    console.log(`   - ${cat}: ${count}개`);
  });
}

console.log("\n" + "═".repeat(60));
console.log("✨ 테스트 완료!");
console.log("═".repeat(60) + "\n");
