export const DIGESTIVE_DATA = [
  // ==========================================
  //  口腔・咽頭 (Oral Cavity & Pharynx)
  //  Category: [upper_gi, oral]
  // ==========================================
  {
    id: "o_oral_cavity",
    name_jp: "口腔",
    name_en: "Oral cavity",
    categories: ["head_neck", "face", "digestive", "upper_gi", "oral", "organ"],
    image_source: null, // assets/internal/digestive/oral_cavity.png
  },
  {
    id: "o_tongue",
    name_jp: "舌",
    name_en: "Tongue",
    categories: ["head_neck", "face", "digestive", "upper_gi", "oral", "sensory", "muscular", "organ"],
    image_source: null,
  },
  {
    id: "o_hard_palate",
    name_jp: "硬口蓋",
    name_en: "Hard palate",
    categories: ["head_neck", "face", "digestive", "upper_gi", "oral", "organ"],
    image_source: null,
  },
  {
    id: "o_soft_palate",
    name_jp: "軟口蓋",
    name_en: "Soft palate",
    categories: ["head_neck", "face", "digestive", "upper_gi", "oral", "organ"],
    image_source: null,
  },
  {
    id: "o_uvula",
    name_jp: "口蓋垂",
    name_en: "Uvula",
    categories: ["head_neck", "face", "digestive", "upper_gi", "oral", "organ"],
    image_source: null,
  },
  // --- 唾液腺 (Salivary Glands) ---
  {
    id: "o_parotid_gland",
    name_jp: "耳下腺",
    name_en: "Parotid gland",
    categories: ["head_neck", "face", "digestive", "upper_gi", "accessory_organ", "organ"],
    image_source: null,
  },
  {
    id: "o_submandibular_gland",
    name_jp: "顎下腺",
    name_en: "Submandibular gland",
    categories: ["head_neck", "neck", "digestive", "upper_gi", "accessory_organ", "organ"],
    image_source: null,
  },
  {
    id: "o_sublingual_gland",
    name_jp: "舌下腺",
    name_en: "Sublingual gland",
    categories: ["head_neck", "face", "digestive", "upper_gi", "accessory_organ", "organ"],
    image_source: null,
  },
  {
    id: "o_pharynx",
    name_jp: "咽頭",
    name_en: "Pharynx",
    categories: ["head_neck", "neck", "digestive", "respiratory", "upper_gi", "organ"],
    image_source: null,
  },

  // ==========================================
  //  食道・胃 (Esophagus & Stomach)
  //  Category: [upper_gi]
  // ==========================================
  {
    id: "o_esophagus",
    name_jp: "食道",
    name_en: "Esophagus",
    categories: ["trunk", "chest", "neck", "digestive", "upper_gi", "organ"],
    image_source: null,
  },
  {
    id: "o_stomach",
    name_jp: "胃",
    name_en: "Stomach",
    categories: ["trunk", "abdomen", "digestive", "upper_gi", "organ"],
    image_source: null, // assets/internal/digestive/stomach.png
  },
  {
    id: "o_cardia",
    name_jp: "噴門",
    name_en: "Cardia",
    categories: ["trunk", "abdomen", "digestive", "upper_gi", "organ"],
    image_source: null,
  },
  {
    id: "o_fundus",
    name_jp: "胃底",
    name_en: "Fundus",
    categories: ["trunk", "abdomen", "digestive", "upper_gi", "organ"],
    image_source: null,
  },
  {
    id: "o_pylorus",
    name_jp: "幽門",
    name_en: "Pylorus",
    categories: ["trunk", "abdomen", "digestive", "upper_gi", "organ"],
    image_source: null,
  },
  {
    id: "o_lesser_curvature",
    name_jp: "小弯",
    name_en: "Lesser curvature",
    categories: ["trunk", "abdomen", "digestive", "upper_gi", "organ"],
    image_source: null,
  },
  {
    id: "o_greater_curvature",
    name_jp: "大弯",
    name_en: "Greater curvature",
    categories: ["trunk", "abdomen", "digestive", "upper_gi", "organ"],
    image_source: null,
  },

  // ==========================================
  //  小腸 (Small Intestine)
  //  Category: [upper_gi, lower_gi]
  // ==========================================
  {
    id: "o_small_intestine",
    name_jp: "小腸",
    name_en: "Small intestine",
    categories: ["trunk", "abdomen", "digestive", "lower_gi", "organ"],
    image_source: null,
  },
  {
    id: "o_duodenum",
    name_jp: "十二指腸",
    name_en: "Duodenum",
    categories: ["trunk", "abdomen", "digestive", "upper_gi", "organ"], // 解剖学的にはUpper GIに入る
    image_source: null,
  },
  {
    id: "o_major_duodenal_papilla",
    name_jp: "大十二指腸乳頭",
    name_en: "Major duodenal papilla",
    aliases_jp: ["ファーター乳頭"],
    categories: ["trunk", "abdomen", "digestive", "upper_gi", "organ"],
    image_source: null,
  },
  {
    id: "o_jejunum",
    name_jp: "空腸",
    name_en: "Jejunum",
    categories: ["trunk", "abdomen", "digestive", "lower_gi", "organ"],
    image_source: null,
  },
  {
    id: "o_ileum",
    name_jp: "回腸",
    name_en: "Ileum",
    categories: ["trunk", "abdomen", "digestive", "lower_gi", "organ"],
    image_source: null,
  },

  // ==========================================
  //  大腸・直腸・肛門 (Large Intestine, Rectum, Anus)
  //  Category: [lower_gi]
  // ==========================================
  {
    id: "o_large_intestine",
    name_jp: "大腸",
    name_en: "Large intestine",
    categories: ["trunk", "abdomen", "digestive", "lower_gi", "organ"],
    image_source: null,
  },
  {
    id: "o_cecum",
    name_jp: "盲腸",
    name_en: "Cecum",
    categories: ["trunk", "abdomen", "digestive", "lower_gi", "organ"],
    image_source: null,
  },
  {
    id: "o_appendix",
    name_jp: "虫垂",
    name_en: "Vermiform appendix",
    categories: ["trunk", "abdomen", "digestive", "lower_gi", "organ"],
    image_source: null,
  },
  {
    id: "o_ascending_colon",
    name_jp: "上行結腸",
    name_en: "Ascending colon",
    categories: ["trunk", "abdomen", "digestive", "lower_gi", "organ"],
    image_source: null,
  },
  {
    id: "o_transverse_colon",
    name_jp: "横行結腸",
    name_en: "Transverse colon",
    categories: ["trunk", "abdomen", "digestive", "lower_gi", "organ"],
    image_source: null,
  },
  {
    id: "o_descending_colon",
    name_jp: "下行結腸",
    name_en: "Descending colon",
    categories: ["trunk", "abdomen", "digestive", "lower_gi", "organ"],
    image_source: null,
  },
  {
    id: "o_sigmoid_colon",
    name_jp: "S状結腸",
    name_en: "Sigmoid colon",
    categories: ["trunk", "abdomen", "pelvis", "digestive", "lower_gi", "organ"],
    image_source: null,
  },
  {
    id: "o_rectum",
    name_jp: "直腸",
    name_en: "Rectum",
    categories: ["trunk", "pelvis", "digestive", "lower_gi", "organ"],
    image_source: null,
  },
  {
    id: "o_anal_canal",
    name_jp: "肛門管",
    name_en: "Anal canal",
    categories: ["trunk", "pelvis", "digestive", "lower_gi", "organ"],
    image_source: null,
  },
  {
    id: "o_anus",
    name_jp: "肛門",
    name_en: "Anus",
    categories: ["trunk", "pelvis", "digestive", "lower_gi", "organ"],
    image_source: null,
  },

  // ==========================================
  //  肝臓・胆道系 (Liver & Biliary System)
  //  Category: [accessory_organ]
  // ==========================================
  {
    id: "o_liver",
    name_jp: "肝臓",
    name_en: "Liver",
    categories: ["trunk", "abdomen", "digestive", "accessory_organ", "organ"],
    image_source: null, // assets/internal/digestive/liver.png
  },
  {
    id: "o_gallbladder",
    name_jp: "胆嚢",
    name_en: "Gallbladder",
    categories: ["trunk", "abdomen", "digestive", "accessory_organ", "organ"],
    image_source: null,
  },
  {
    id: "o_common_bile_duct",
    name_jp: "総胆管",
    name_en: "Common bile duct",
    categories: ["trunk", "abdomen", "digestive", "accessory_organ", "organ"],
    image_source: null,
  },
  {
    id: "o_porta_hepatis",
    name_jp: "肝門",
    name_en: "Porta hepatis",
    categories: ["trunk", "abdomen", "digestive", "accessory_organ", "organ"],
    image_source: null,
  },
  // ==========================================
  //  膵臓 (Pancreas)
  //  Category: [accessory_organ, endocrine]
  // ==========================================
  {
    id: "o_pancreas",
    name_jp: "膵臓",
    name_en: "Pancreas",
    categories: ["trunk", "abdomen", "digestive", "accessory_organ", "endocrine", "organ"],
    image_source: null, // assets/internal/digestive/pancreas.png
  },
  {
    id: "o_main_pancreatic_duct",
    name_jp: "主膵管",
    name_en: "Main pancreatic duct",
    categories: ["trunk", "abdomen", "digestive", "accessory_organ", "organ"],
    image_source: null,
  },

  // ==========================================
  //  腹膜・支持構造 (Peritoneum & Support)
  // ==========================================
  {
    id: "o_peritoneum",
    name_jp: "腹膜",
    name_en: "Peritoneum",
    categories: ["trunk", "abdomen", "digestive", "organ"],
    image_source: null,
  },
  {
    id: "o_greater_omentum",
    name_jp: "大網",
    name_en: "Greater omentum",
    categories: ["trunk", "abdomen", "digestive", "organ"],
    image_source: null,
  },
  {
    id: "o_mesentery",
    name_jp: "腸間膜",
    name_en: "Mesentery",
    categories: ["trunk", "abdomen", "digestive", "organ"],
    image_source: null,
  },
];
