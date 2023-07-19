/** @type {import('next').NextConfig} */


const nextConfig = {
  //run devの状態だとuseEffectが二重に実行されるっていう変な挙動をするからtrueからfalseにした。20230718
  reactStrictMode: false,
}

module.exports = nextConfig
