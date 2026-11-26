// メニューのデータ（練習用）。
// 本物のアプリでは、このようなデータはデータベース（Supabaseなど）に置きます。
// この練習では、まずファイルに直接書いておきます。

export type MenuItem = {
  id: string;
  name: string;
  price: number; // 税込みの値段（円）
  category: "フード" | "ドリンク";
  soldOut?: boolean; // 売り切れなら true
};

export const shop = {
  name: "ロッキー食堂",
  catchphrase: "お昼も夜も、できたてをどうぞ。",
};

export const menuItems: MenuItem[] = [
  { id: "karaage", name: "からあげ定食", price: 980, category: "フード" },
  { id: "yakizakana", name: "焼き魚定食", price: 1080, category: "フード" },
  { id: "curry", name: "カレーライス", price: 850, category: "フード", soldOut: true },
  { id: "salad", name: "季節の野菜サラダ", price: 580, category: "フード" },
  { id: "beer", name: "生ビール", price: 600, category: "ドリンク" },
  { id: "oolong", name: "ウーロン茶", price: 300, category: "ドリンク" },
  { id: "yuzu", name: "ゆず茶", price: 400, category: "ドリンク" },
];
