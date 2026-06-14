import { unstable_noStore } from 'next/cache'
import Messages from '@/components/messages';

// export const revalidate = 5;

// 이 페이지(또는 레이아웃/API)를 빌드할 때 미리 정적(Static) 파일로 구워둘지, 아니면 유저가 요청할 때마다 서버에서 실시간(Dynamic)으로 그릴지" Next.js에게 직접 명령을 내리는 스위치입니다.
// export const dynamic = 'force-dynamic';

export default async function MessagesPage() {
  //unstable_noStore();
  console.log("=== MessagesPage 서버에서 실행됨! ===");
  const response = await fetch('http://localhost:8080/messages', {
    // 강제로 캐시를 초기화하기
    // cache: 'force-cache',
    // 여러 요청을 보게되는 것 Next 15의 기본값
    // cache: 'no-store'
    /* next: {
      // 5초동안 캐시하고 그 뒤로 방문하는건 새 데이터 가져옴
      revalidate: 5,
    } */
    next: { tags: ['msg'] }
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
