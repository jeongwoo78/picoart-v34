// PicoArt v33 - Category Matcher
// AI 분석 결과 → 8개 카테고리 변환

/**
 * AI 분석 텍스트를 카테고리로 변환
 * @param {string} aiAnalysis - AI가 분석한 사진 설명
 * @returns {Object} { primary, sub }
 */
export function determineCategory(aiAnalysis) {
  const analysis = (aiAnalysis || '').toLowerCase();
  
  console.log('📸 Photo Analysis:', aiAnalysis);
  
  // ==========================================
  // 1. 인물 그룹 체크
  // ==========================================
  if (analysis.includes('group') || analysis.includes('multiple people') || 
      analysis.includes('several people') || analysis.includes('people')) {
    
    // 대규모 그룹 (7명+)
    if (analysis.includes('many') || analysis.includes('crowd') || 
        analysis.includes('large group') || /\d+\s*people/.test(analysis)) {
      return { primary: 'portrait', sub: 'portrait-group-7plus' };
    }
    
    // 중규모 그룹 (4-6명)
    if (analysis.includes('several') || analysis.includes('medium group')) {
      return { primary: 'portrait', sub: 'portrait-group-4-6' };
    }
    
    // 소규모 그룹 (2-3명)
    return { primary: 'portrait', sub: 'portrait-small-group' };
  }
  
  // ==========================================
  // 2. 단일 인물 체크
  // ==========================================
  if (analysis.includes('portrait') || analysis.includes('face') || 
      analysis.includes('person') || analysis.includes('man') || 
      analysis.includes('woman') || analysis.includes('child')) {
    
    // 복합 카테고리 우선 체크
    if (analysis.includes('animal') || analysis.includes('pet') || 
        analysis.includes('dog') || analysis.includes('cat')) {
      return { primary: 'mixed', sub: 'mixed-portrait-animal' };
    }
    
    if (analysis.includes('food') || analysis.includes('eating') || 
        analysis.includes('meal') || analysis.includes('dining')) {
      return { primary: 'mixed', sub: 'mixed-portrait-food' };
    }
    
    if (analysis.includes('landscape') || analysis.includes('outdoor') || 
        analysis.includes('nature') || analysis.includes('scenery')) {
      return { primary: 'mixed', sub: 'mixed-portrait-landscape' };
    }
    
    if (analysis.includes('building') || analysis.includes('architecture') || 
        analysis.includes('structure')) {
      return { primary: 'mixed', sub: 'mixed-portrait-architecture' };
    }
    
    // 순수 인물 - 포즈/구도로 세분화
    if (analysis.includes('close') || analysis.includes('closeup') || 
        analysis.includes('headshot') || analysis.includes('face')) {
      return { primary: 'portrait', sub: 'portrait-closeup' };
    }
    
    if (analysis.includes('full body') || analysis.includes('standing') || 
        analysis.includes('full-length')) {
      return { primary: 'portrait', sub: 'portrait-full-body' };
    }
    
    if (analysis.includes('dynamic') || analysis.includes('action') || 
        analysis.includes('jumping') || analysis.includes('dancing')) {
      return { primary: 'portrait', sub: 'portrait-dynamic' };
    }
    
    // 기본 상반신
    return { primary: 'portrait', sub: 'portrait-upper-body' };
  }
  
  // ==========================================
  // 3. 이벤트/행사
  // ==========================================
  if (analysis.includes('wedding') || analysis.includes('ceremony')) {
    return { primary: 'event', sub: 'event-wedding' };
  }
  
  if (analysis.includes('party') || analysis.includes('celebration') || 
      analysis.includes('birthday')) {
    return { primary: 'event', sub: 'event-party' };
  }
  
  if (analysis.includes('festival') || analysis.includes('gathering')) {
    return { primary: 'event', sub: 'event-festival' };
  }
  
  if (analysis.includes('religious') || analysis.includes('church') || 
      analysis.includes('temple')) {
    return { primary: 'event', sub: 'event-religious' };
  }
  
  // ==========================================
  // 4. 자연/풍경
  // ==========================================
  if (analysis.includes('landscape') || analysis.includes('nature') || 
      analysis.includes('outdoor') || analysis.includes('scenery')) {
    
    if (analysis.includes('sea') || analysis.includes('ocean') || 
        analysis.includes('beach') || analysis.includes('water')) {
      return { primary: 'nature', sub: 'nature-sea' };
    }
    
    if (analysis.includes('mountain') || analysis.includes('hill')) {
      return { primary: 'nature', sub: 'nature-mountain' };
    }
    
    if (analysis.includes('forest') || analysis.includes('tree') || 
        analysis.includes('woods')) {
      return { primary: 'nature', sub: 'nature-forest' };
    }
    
    if (analysis.includes('field') || analysis.includes('meadow') || 
        analysis.includes('grass')) {
      return { primary: 'nature', sub: 'nature-field' };
    }
    
    if (analysis.includes('sky') || analysis.includes('cloud') || 
        analysis.includes('sunset')) {
      return { primary: 'nature', sub: 'nature-sky' };
    }
    
    return { primary: 'nature', sub: null };
  }
  
  // ==========================================
  // 5. 건축/도시
  // ==========================================
  if (analysis.includes('building') || analysis.includes('architecture') || 
      analysis.includes('structure') || analysis.includes('interior')) {
    
    if (analysis.includes('interior') || analysis.includes('room') || 
        analysis.includes('indoor')) {
      return { primary: 'urban', sub: 'urban-interior' };
    }
    
    if (analysis.includes('night') || analysis.includes('evening')) {
      return { primary: 'urban', sub: 'urban-night' };
    }
    
    if (analysis.includes('street') || analysis.includes('road')) {
      return { primary: 'urban', sub: 'urban-street' };
    }
    
    return { primary: 'urban', sub: 'urban-architecture' };
  }
  
  // ==========================================
  // 6. 정물
  // ==========================================
  if (analysis.includes('food') || analysis.includes('meal') || 
      analysis.includes('dish')) {
    return { primary: 'still-life', sub: 'still-life-food' };
  }
  
  if (analysis.includes('drink') || analysis.includes('beverage') || 
      analysis.includes('coffee') || analysis.includes('wine')) {
    return { primary: 'still-life', sub: 'still-life-drink' };
  }
  
  if (analysis.includes('flower') || analysis.includes('plant') || 
      analysis.includes('bouquet')) {
    return { primary: 'still-life', sub: 'still-life-flowers' };
  }
  
  if (analysis.includes('book') || analysis.includes('reading')) {
    return { primary: 'still-life', sub: 'still-life-books' };
  }
  
  if (analysis.includes('product') || analysis.includes('object')) {
    return { primary: 'still-life', sub: 'still-life-product' };
  }
  
  // ==========================================
  // 7. 동물
  // ==========================================
  if (analysis.includes('animal') || analysis.includes('pet') || 
      analysis.includes('dog') || analysis.includes('cat')) {
    return { primary: 'animal', sub: 'animal-pet' };
  }
  
  if (analysis.includes('bird')) {
    return { primary: 'animal', sub: 'animal-bird' };
  }
  
  if (analysis.includes('wild') || analysis.includes('wildlife')) {
    return { primary: 'animal', sub: 'animal-wild' };
  }
  
  // ==========================================
  // 8. 일상
  // ==========================================
  if (analysis.includes('working') || analysis.includes('studying') || 
      analysis.includes('office')) {
    return { primary: 'daily-life', sub: 'daily-life-work' };
  }
  
  if (analysis.includes('exercise') || analysis.includes('sport') || 
      analysis.includes('running') || analysis.includes('yoga')) {
    return { primary: 'daily-life', sub: 'daily-life-exercise' };
  }
  
  if (analysis.includes('cooking') || analysis.includes('baking')) {
    return { primary: 'daily-life', sub: 'daily-life-cooking' };
  }
  
  if (analysis.includes('resting') || analysis.includes('relaxing') || 
      analysis.includes('sleeping')) {
    return { primary: 'daily-life', sub: 'daily-life-rest' };
  }
  
  // ==========================================
  // 기본값: 인물로 추정
  // ==========================================
  console.log('⚠️ No specific category match, defaulting to portrait');
  return { primary: 'portrait', sub: 'portrait-upper-body' };
}
