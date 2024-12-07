### インストールと起動

`pnpm i && pnpm run dev`
yamada ui のライブラリバージョンオフ整合解消のため`pnpm`を使用

### フォルダ構成

```
├── README.md
├── mock  //json serverを使用したモックデータ
│ ├── hooks  //モックデータ取得関連のhooks
│ ├── types  //モックデータとその操作関連の型
├── src
│ ├── app
│ │ ├── admin  //管理者画面のルート
│ │ ├── movies  //映画情報
│ │ ├── page.tsx  //home
│ │ ├── profile  //ユーザープロフィールと予約一覧
│ │ └── schedules  //上映スケジュールと予約
│ ├── components
│ │ ├── data-table  //admin用のデータテーブルコンポーネント
│ │ ├── form  //admin操作用のフォーム
│ │ └── profile  //ページ名ごとのコンポーネント
```
