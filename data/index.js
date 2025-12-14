// data/index.js

// 1. 内臓・神経系データの読み込み
// data/internal/index.js が必要です
import { INTERNAL_DATA } from './internal/index';

// 2. 筋肉データの読み込み
// data/muscular/upper_limb.js が必要です
import { MUSCULAR_UPPER_LIMB } from './muscular/upper_limb';

// 3. 骨格データの読み込み
// まだ作成していない場合や、古いファイルがある場合は調整してください
// とりあえずエラー回避のために空配列にしておきます（データができたら差し替えてください）
const SKELETAL_DATA = []; 
// もし data/skeletal.js があるなら、上の行を消して以下をコメントアウト解除
// import { SKELETAL_DATA } from './skeletal';


// 全データを結合
const RAW_DATA = [
  ...(INTERNAL_DATA || []),       // データがない場合に備えて || [] を追加
  ...(MUSCULAR_UPPER_LIMB || []),
  ...(SKELETAL_DATA || []),
];

// データを整形してエクスポート
export const ANATOMY_DATA = RAW_DATA.map(item => {
  return {
    ...item,
    // エイリアス（別解）がないデータもエラーにならないよう空配列を入れる
    aliases_jp: item.aliases_jp || [],
    aliases_en: item.aliases_en || [],
  };
});

