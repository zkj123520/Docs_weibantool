// .vitepress/theme/index.ts
import { h } from 'vue'
import type { Theme } from 'vitepress'
import { injectSpeedInsights } from '@vercel/speed-insights'; // 路径修正
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 布局插槽...
    })
  },
  enhanceApp({ app }) {
    injectSpeedInsights(); // 移除 app 参数
  }
} satisfies Theme