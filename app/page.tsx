import { menuItems, shop } from "@/data/menu";

// メニュー表のページ（練習用）。
// わざと「バラバラ」なところを残しています。講義のお題で、AIに頼んで直していきます。

export default function Home() {
  const foods = menuItems.filter((item) => item.category === "フード");
  const drinks = menuItems.filter((item) => item.category === "ドリンク");

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-orange-600">{shop.name}</h1>
        <p className="mt-2 text-gray-600">{shop.catchphrase}</p>
      </header>

      {/* フード */}
      <section className="mb-10">
        <h2 className="mb-4 border-b-4 border-orange-500 pb-2 text-2xl font-bold">
          フード
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {foods.map((item) => (
            <li key={item.id} className="rounded-xl border border-gray-200 p-4 shadow-sm">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-lg font-bold">{item.name}</span>
                <span className="font-bold">{item.price.toLocaleString("ja-JP")}円</span>
              </div>
              {item.soldOut && (
                <span className="mt-2 inline-block rounded bg-gray-200 px-2 py-0.5 text-sm text-gray-700">
                  売り切れ
                </span>
              )}
              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  className="rounded-full bg-orange-500 px-5 py-2 font-bold text-white"
                >
                  注文する
                </button>
                <button type="button" className="rounded bg-red-600 px-3 py-2 text-sm text-white">
                  削除
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ドリンク */}
      <section>
        <h3 className="mb-2 text-base text-gray-500">ドリンク</h3>
        <ul className="grid gap-4 sm:grid-cols-2">
          {drinks.map((item) => (
            <li key={item.id} className="border border-gray-300 p-3">
              <div className="flex items-baseline justify-between gap-2">
                <span>{item.name}</span>
                <span>¥{item.price}</span>
              </div>
              <div className="mt-3 flex gap-2">
                <button type="button" className="bg-blue-600 px-3 py-1 text-white">
                  注文
                </button>
                <button type="button" className="rounded bg-red-600 px-3 py-2 text-sm text-white">
                  削除
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-12 text-sm text-gray-400">
        バイブコーディング入門の練習用のアプリです。店名とメニューは架空のものです。
      </footer>
    </main>
  );
}
