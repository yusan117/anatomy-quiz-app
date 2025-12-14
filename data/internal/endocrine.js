export const ENDOCRINE_DATA = [
  // ==========================================
  //  頭頸部の内分泌腺 (Head & Neck Glands)
  //  Category: [head_neck, metabolism]
  // ==========================================
  {
    id: "o_pituitary_gland",
    name_jp: "下垂体",
    name_en: "Pituitary gland",
    aliases_en: ["Hypophysis"],
    categories: ["head_neck", "endocrine", "metabolism", "reproduction", "nervous", "organ"], // 視床下部と連携
    image_source: null, // assets/internal/endocrine/pituitary_gland.png
  },
  {
    id: "o_hypothalamus",
    name_jp: "視床下部",
    name_en: "Hypothalamus",
    categories: ["head_neck", "endocrine", "nervous", "organ"], // 神経系と密接
    image_source: null,
  },
  {
    id: "o_pineal_gland",
    name_jp: "松果体",
    name_en: "Pineal gland",
    categories: ["head_neck", "endocrine", "organ"],
    image_source: null,
  },
  {
    id: "o_thyroid_gland",
    name_jp: "甲状腺",
    name_en: "Thyroid gland",
    categories: ["head_neck", "neck", "endocrine", "metabolism", "organ"],
    image_source: null,
  },
  {
    id: "o_parathyroid_glands",
    name_jp: "上皮小体（副甲状腺）",
    name_en: "Parathyroid glands",
    categories: ["head_neck", "neck", "endocrine", "metabolism", "organ"],
    image_source: null,
  },

  // ==========================================
  //  体幹の内分泌腺 (Trunk Glands)
  //  Category: [trunk, metabolism, reproduction]
  // ==========================================
  {
    id: "o_adrenal_gland",
    name_jp: "副腎",
    name_en: "Adrenal gland",
    aliases_en: ["Suprarenal gland"],
    categories: ["trunk", "abdomen", "endocrine", "metabolism", "reproduction", "organ"],
    image_source: null,
  },
  {
    id: "o_adrenal_cortex",
    name_jp: "副腎皮質",
    name_en: "Adrenal cortex",
    categories: ["trunk", "abdomen", "endocrine", "metabolism", "reproduction", "organ"],
    image_source: null,
  },
  {
    id: "o_adrenal_medulla",
    name_jp: "副腎髄質",
    name_en: "Adrenal medulla",
    categories: ["trunk", "abdomen", "endocrine", "nervous", "organ"], // 交感神経系と密接
    image_source: null,
  },
  {
    id: "o_islets_of_langerhans",
    name_jp: "膵島（ランゲルハンス島）",
    name_en: "Islets of Langerhans",
    categories: ["trunk", "abdomen", "endocrine", "digestive", "metabolism", "organ"],
    image_source: null,
  },
  {
    id: "o_pancreas_endocrine",
    name_jp: "膵臓（内分泌部）",
    name_en: "Pancreas (Endocrine part)",
    categories: ["trunk", "abdomen", "endocrine", "digestive", "metabolism", "organ"],
    image_source: null,
  },
  {
    id: "o_thymus",
    name_jp: "胸腺",
    name_en: "Thymus",
    categories: ["trunk", "chest", "endocrine", "immune", "organ"],
    image_source: null,
  },
  
  // ==========================================
  //  生殖器関連 (Gonads)
  //  Category: [reproduction]
  // ==========================================
  {
    id: "o_ovary_endocrine",
    name_jp: "卵巣（内分泌部）",
    name_en: "Ovary (Endocrine part)",
    categories: ["trunk", "pelvis", "endocrine", "reproductive", "reproduction", "organ"],
    image_source: null,
  },
  {
    id: "o_testis_endocrine",
    name_jp: "精巣（内分泌部）",
    name_en: "Testis (Endocrine part)",
    categories: ["trunk", "pelvis", "endocrine", "reproductive", "reproduction", "organ"],
    image_source: null,
  },
  
  // ==========================================
  //  その他ホルモン産生部位
  // ==========================================
  {
    id: "o_kidney_endocrine",
    name_jp: "腎臓（内分泌機能）",
    name_en: "Kidney (Endocrine function)",
    categories: ["trunk", "abdomen", "endocrine", "urinary", "metabolism", "organ"],
    image_source: null,
  },
  {
    id: "o_stomach_endocrine_cells",
    name_jp: "胃内分泌細胞",
    name_en: "Stomach endocrine cells",
    categories: ["trunk", "abdomen", "endocrine", "digestive", "organ"],
    image_source: null,
  },
  {
    id: "o_small_intestine_endocrine_cells",
    name_jp: "小腸内分泌細胞",
    name_en: "Small intestine endocrine cells",
    categories: ["trunk", "abdomen", "endocrine", "digestive", "organ"],
    image_source: null,
  },
];
