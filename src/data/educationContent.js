// PicoArt v33 - 교육 콘텐츠 통합 (세분화된 파일 구조)

// 파일 구조:
// 1. movementsEducation.js - 서양 미술 9개 사조 (v31 기존)
// 2. mastersEducation.js - 서양 거장 6명 (v31 기존)
// 3. orientalEducation.js - 동양화 7개 (v30 기존)
// 4. ancientGrecoRomanEducation.js - 고대 그리스-로마 4개 (v33 신규)
// 5. byzantineIslamicEducation.js - 비잔틴·이슬람 5개 (v33 신규)
// 6. renaissanceEducation.js - 르네상스 4명 (v33 신규)
// 7. baroqueEducation.js - 바로크 4명 (v33 신규)

import { movementsEducation } from './movementsEducation';
import { mastersEducation } from './mastersEducation';
import { orientalOverview, orientalEducation } from './orientalEducation';

// v33 신규 파일들
import { ancientEducation as ancientGrecoRomanEducation } from './ancientGrecoRomanEducation';
import { byzantineIslamicEducation } from './byzantineIslamicEducation';
import { renaissanceEducation } from './renaissanceEducation';
import { baroqueEducation } from './baroqueEducation';

// 기존 구조 유지 (하위 호환성)
export const educationContent = {
  movements: movementsEducation,
  masters: mastersEducation,
  oriental: orientalOverview
};

// 동양화는 별도 export (기존 유지)
export { orientalEducation };

// v33 신규 export
export { 
  ancientGrecoRomanEducation,
  byzantineIslamicEducation,
  renaissanceEducation,
  baroqueEducation
};

// 개별 export (필요시)
export { movementsEducation, mastersEducation, orientalOverview };
