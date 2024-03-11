import Link from "next/link";

export default function Home() {
  return (
    <main className="m-8">
      <div className="mb-3.5">안녕하세요! 넥스트 페이지를 생성하고 있어요.</div>
      <Link
        className="font-sans hover:font-serif hover:text-sky-400"
        href="/rendering"
      >
        여기는 랜더링 페이지로 가는 링크에요
      </Link>
    </main>
  );
}
