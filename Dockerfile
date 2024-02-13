# ベースイメージを指定
FROM node:20.5.0 as dev

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係ファイルをコピー
COPY package.json package-lock.json* ./

# 依存関係をインストール
RUN npm install
RUN npm install @rollup/rollup-linux-x64-gnu

# アプリケーションのソースコードをコピー

FROM node:18-alpine as prod
WORKDIR /app

COPY --from=dev /app /app
# アプリケーションを起動
CMD ["npm", "start"]
