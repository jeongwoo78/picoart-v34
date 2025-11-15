// PicoArt v33 - Renaissance Artworks Database
// 르네상스 11개 작품 (5명 화가)

export const renaissanceArtworks = {
  "leonardo-mona": {
    artist: "Leonardo da Vinci",
    work: "Mona Lisa",
    categories: ["portrait", "mixed"],
    subcategories: ["portrait-closeup", "mixed-portrait-landscape"],
    prompt: `painting by Leonardo da Vinci, extreme sfumato technique with soft blurred edges and NO sharp outlines anywhere, smoky atmospheric haze with gentle gradual transitions between light and shadow, mysterious enigmatic expression, muted earth tones with subtle modeling, Leonardo da Vinci's scientific precision in anatomy, atmospheric distant landscape in background, portraying the SAME PERSON from the photo while capturing their distinctive facial features`
  },
  
  "leonardo-supper": {
    artist: "Leonardo da Vinci",
    work: "The Last Supper",
    categories: ["portrait", "event", "still-life"],
    subcategories: ["portrait-group-7plus", "event-religious", "mixed-portrait-food", "still-life-food"],
    prompt: `painting by Leonardo da Vinci, perfect linear perspective with vanishing point, dramatic moment captured in Renaissance style, symmetrical balanced composition, group portrait with expressive gestures, architectural interior setting, table with food and vessels, Leonardo da Vinci's scientific precision, portraying the SAME PERSON from the photo while capturing their distinctive facial features`
  },
  
  "leonardo-ermine": {
    artist: "Leonardo da Vinci",
    work: "Lady with an Ermine",
    categories: ["portrait", "animal", "mixed"],
    subcategories: ["portrait-upper-body", "animal-pet", "mixed-portrait-animal"],
    prompt: `painting by Leonardo da Vinci, elegant turning pose with graceful movement, detailed animal companion held tenderly, sfumato soft edges, Renaissance portrait with psychological depth, intimate bond between subject and animal, portraying the SAME PERSON from the photo while capturing their distinctive facial features`
  },
  
  "michelangelo-adam": {
    artist: "Michelangelo",
    work: "The Creation of Adam",
    categories: ["portrait", "event"],
    subcategories: ["portrait-small-group", "event-religious", "daily-life-exercise"],
    prompt: `painting by Michelangelo, sculptural muscular forms with anatomical perfection, heroic proportions and monumental scale, dynamic reaching pose full of energy, Renaissance fresco masterpiece, powerful divine moment, athletic physique rendered with Renaissance mastery, portraying the SAME PERSON from the photo while capturing their distinctive facial features`
  },
  
  "michelangelo-judgment": {
    artist: "Michelangelo",
    work: "The Last Judgment",
    categories: ["portrait", "event"],
    subcategories: ["portrait-group-7plus", "event-religious"],
    prompt: `painting by Michelangelo, dramatic turbulent composition with numerous figures, muscular athletic bodies in violent motion, intense emotional expressions of fear and awe, Renaissance fresco of epic scale, powerful divine judgment scene, swirling dynamic arrangement, portraying the SAME PERSON from the photo while capturing their distinctive facial features`
  },
  
  "raphael-athens": {
    artist: "Raphael",
    work: "The School of Athens",
    categories: ["portrait", "urban", "event"],
    subcategories: ["portrait-group-7plus", "urban-architecture", "event", "mixed-portrait-architecture", "daily-life-work"],
    prompt: `painting by Raphael, perfectly harmonious balanced composition, classical architecture with grand arches and columns, serene philosophical atmosphere, Renaissance fresco masterpiece, group of scholars in thoughtful discussion, ideal proportions and symmetry, portraying the SAME PERSON from the photo while capturing their distinctive facial features`
  },
  
  "raphael-madonna": {
    artist: "Raphael",
    work: "Madonna della Seggiola",
    categories: ["portrait"],
    subcategories: ["portrait-small-group"],
    prompt: `painting by Raphael, circular tondo composition, intimate maternal warmth and tenderness, gentle loving expressions, Renaissance portrait masterpiece, soft harmonious colors, perfect balance of mother and children, portraying the SAME PERSON from the photo while capturing their distinctive facial features`
  },
  
  "botticelli-venus": {
    artist: "Sandro Botticelli",
    work: "The Birth of Venus",
    categories: ["portrait", "nature", "mixed"],
    subcategories: ["portrait-full-body", "nature-sea", "mixed-portrait-landscape"],
    prompt: `painting by Sandro Botticelli, flowing graceful lines and elegant contours, poetic dreamlike atmosphere, Renaissance tempera masterpiece, gentle rhythmic movement, delicate beauty emerging from sea, soft pastel colors and golden highlights, portraying the SAME PERSON from the photo while capturing their distinctive facial features`
  },
  
  "botticelli-primavera": {
    artist: "Sandro Botticelli",
    work: "Primavera",
    categories: ["portrait", "nature", "event"],
    subcategories: ["portrait-group-4-6", "nature-forest", "event-festival", "still-life-flowers"],
    prompt: `painting by Sandro Botticelli, enchanted spring garden with abundant flowers, dancing graceful figures in rhythmic composition, Renaissance tempera masterpiece, over 500 species of botanical details, poetic allegorical scene, flowing delicate brushwork, portraying the SAME PERSON from the photo while capturing their distinctive facial features`
  },
  
  "titian-venus": {
    artist: "Titian",
    work: "Venus of Urbino",
    categories: ["portrait", "urban"],
    subcategories: ["portrait-full-body", "urban-interior", "daily-life-rest"],
    prompt: `painting by Titian, rich Venetian colors with warm golden tones, luxurious opulent interior setting, Renaissance oil painting masterpiece, sensual beauty in repose, sumptuous fabrics and textures, masterful use of light and shadow, portraying the SAME PERSON from the photo while capturing their distinctive facial features`
  },
  
  "titian-glove": {
    artist: "Titian",
    work: "Man with a Glove",
    categories: ["portrait"],
    subcategories: ["portrait-closeup"],
    prompt: `painting by Titian, psychological depth and inner contemplation, Venetian color palette with rich tones, aristocratic dignified presence, Renaissance portrait masterpiece, subtle modeling of facial features, elegant refined atmosphere, portraying the SAME PERSON from the photo while capturing their distinctive facial features`
  }
};

/**
 * 카테고리로 작품 찾기
 */
export function findRenaissanceArtwork(category) {
  const artworks = Object.values(renaissanceArtworks);
  
  // 소카테고리 매칭 우선
  if (category.sub) {
    const subMatch = artworks.find(art => 
      art.subcategories.includes(category.sub)
    );
    if (subMatch) {
      console.log(`✅ v33 Renaissance: ${category.sub} → ${subMatch.artist} - ${subMatch.work}`);
      return subMatch;
    }
  }
  
  // 주 카테고리 매칭
  const primaryMatches = artworks.filter(art =>
    art.categories.includes(category.primary)
  );
  
  if (primaryMatches.length > 0) {
    // 랜덤 선택
    const selected = primaryMatches[Math.floor(Math.random() * primaryMatches.length)];
    console.log(`✅ v33 Renaissance: ${category.primary} → ${selected.artist} - ${selected.work}`);
    return selected;
  }
  
  console.log('⚠️ v33 Renaissance: No match found');
  return null;
}
