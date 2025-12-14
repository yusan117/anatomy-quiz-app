// data/index.js

// ===========================================
// I. 内臓・系統データ (internal)
// ===========================================
// NOTE: internal/index.js が、digestive, respiratory, endocrine, nervous, circulatoryなどをまとめています
import { INTERNAL_DATA } from './internal/index'; 

// ===========================================
// II. 筋系データ (muscular)
// ===========================================
import { MUSCULAR_HEAD_NECK } from './muscular/head_neck';
import { MUSCULAR_LOWER_LIMB } from './muscular/lower_limb';
import { MUSCULAR_TRUNK } from './muscular/trunk';
import { MUSCULAR_UPPER_LIMB } from './muscular/upper_limb';

// ===========================================
// III. 骨格系データ (skeletal)
// ===========================================
import { SKELETAL_HEAD_NECK } from './skeletal/head_neck';
import { SKELETAL_TRUNK } from './skeletal/trunk';
import { SKELETAL_UPPER_LIMB } from './skeletal/upper_limb';
import { SKELETAL_LOWER_LIMB } from './skeletal/lower_limb';

// ===========================================
// IV. 脈管系データ (vessels_lymph)
// ===========================================
// NOTE: 脈管系は構造整理のため、ここでは単一のデータファイルとして扱います
import { VESSELS_LYMPH_DATA } from './vessels_lymph'; // data/vessels_lymph.jsとして統合を想定

// ===========================================
// V. 感覚器データ (sensory)
// ===========================================
import { SENSORY_DATA } from './sensory';


// -------------------------------------------
// 全データを結合し、RAW_DATA配列を生成
// -------------------------------------------
const RAW_DATA = [
  // 1. 内臓・系統
  ...(INTERNAL_DATA || []),
  
  // 2. 筋系
  ...(MUSCULAR_HEAD_NECK || []),
  ...(MUSCULAR_LOWER_LIMB || []),
  ...(MUSCULAR_TRUNK || []),
  ...(MUSCULAR_UPPER_LIMB || []),
  
  // 3. 骨格系
  ...(SKELETAL_HEAD_NECK || []),
  ...(SKELETAL_TRUNK || []),
  ...(SKELETAL_UPPER_LIMB || []),
  ...(SKELETAL_LOWER_LIMB || []),
  
  // 4. 脈管系
  ...(VESSELS_LYMPH_DATA || []),

  // 5. 感覚器系
  ...(SENSORY_DATA || []),
];

// -------------------------------------------
// データを整形してエクスポート
// -------------------------------------------
export const ANATOMY_DATA = RAW_DATA
  .filter(item => item && item.id) // 無効な/空のアイテムを除外
  .map(item => {
    return {
      ...item,
      // クイズロジックのために、エイリアスやカテゴリが未定義の場合に空配列を保証
      aliases_jp: item.aliases_jp || [],
      aliases_en: item.aliases_en || [],
      categories: item.categories || [],
      
      // 画像パスの整形 (App.jsのエラー処理と連携)
      // require()が成功すればnumber型、失敗すればundefined/文字列が残りApp.jsで処理されます
      image_source: item.image_source,
    };
  });

console.log(`[DATA] Total anatomy items loaded: ${ANATOMY_DATA.length}`);


