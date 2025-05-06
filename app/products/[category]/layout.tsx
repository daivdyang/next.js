import { ReactNode } from "react";
// build time就會產生對應的靜態頁面,除非不在裡面的才會動態產生html
// 'generateStaticParams' 若要傳遞上層segment給子 'generateStaticParams' 只能放layout頁,不能放在父層page頁
// (推測應該避免和原本的父層page衝突,例如父層要顯示'A','B','C'的靜態內容,但子層要顯示'D/123', 'E/456', 'F/789'的靜態數據)
export async function generateStaticParams() {
  const categories = [{ category: 'A' }, { category: 'B' }, { category: 'C' }]
  console.log('[category]gen static params', categories)
  return Promise.resolve(categories)
}

export default async function Layout({ children, params }: { children: ReactNode, params: Promise<{ category: string }> }) {
  const { category } = await params
  console.log('[Layout]exec [category] layout', category)
  return (<div className="layout" data-category={category}>{ children }</div>)
}